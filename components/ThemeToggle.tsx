"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useRef } from "react"
import { flushSync } from "react-dom"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const changeTheme = async () => {
    if (!buttonRef.current) return

    // Check if View Transitions API is available
    if ("startViewTransition" in document) {
      await document.startViewTransition(() => {
        flushSync(() => {
          setTheme(theme === "dark" ? "light" : "dark")
        })
      }).ready

      const { top, left, width, height } = buttonRef.current.getBoundingClientRect()
      const y = top + height / 2
      const x = left + width / 2

      const right = window.innerWidth - left
      const bottom = window.innerHeight - top
      const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom))

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRad}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 700,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      )
    } else {
      // Fallback for browsers without View Transitions API
      setTheme(theme === "dark" ? "light" : "dark")
    }
  }

  return (
    <Button
      ref={buttonRef}
      variant="ghost"
      size="icon"
      onClick={changeTheme}
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}