import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground  aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive  flex field-sizing-content min-h-16 w-full  border-b bg-transparent px-3 py-2  transition-[color,box-shadow] outline-none text-xl disabled:cursor-not-allowed disabled:opacity-50 instrument-font",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
