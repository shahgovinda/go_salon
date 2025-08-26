"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./ThemeToggle"
import { Button } from "./ui/button"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

export function Navbar() {
    return (
        <header className="sticky top-0 z-40 w-full  bg-transparent backdrop-blur-3xl ">
            <div className=" flex justify-between container mx-auto p-4">

                <div>
                    <p className="text-5xl carattere-font font-bold ">priya</p>
                </div>
                <NavigationMenu viewport={true} className="">
                    <NavigationMenuList className="instrument-font text-lg ">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="" >Services</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-2 w-[500px] md:grid-cols-3">
                                    {/* {[
                                        { name: "HairCut", img: "/hair.jpeg" },
                                        { name: "Facial", img: "https://facesspa.com/wp-content/uploads/2020/07/AdobeStock_143330491.jpeg" },
                                        { name: "Threading", img: "https://beautyandmelody.co.uk/wp-content/uploads/2020/12/Eyebrow-threading-Woman.jpg" },
                                        { name: "Pedicure", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFRee40qqF3fX92jyt8MIlGCWbuBJ2-ZeBA&s" },
                                        { name: "Waxing", img: "https://sumansalon.in/wp-content/uploads/2024/02/adobestock-230088894-scaled.jpeg.webp" },
                                        { name: "View All", img: "https://cdn.vectorstock.com/i/preview-1x/88/75/woman-face-beauty-icon-silhouette-vector-43428875.jpg" },
                                    ].map((service) => ( */}
                                        <li className="group flex justify-center items-end ">
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="#"
                                                    style={{ backgroundImage: `url('/hair.jpeg')` }}
                                                    className={`
                                                       bg-cover bg-center
                                                        h-40 w-40
                                                        rounded-2xl flex flex-col items-start justify-end
                                                        px-2 py-2 
                                                        group-hover:scale-105
                                                        transition-all duration-300
                                                        shadow-lg
                                                        cursor-pointer
                                                        relative
                                                        overflow-hidden
                                                    `}
                                                >
                                                    
                                                    <p className="group-hover:underline text-[30px] carattere-font font-bold text-white">HairCut</p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <li className="group flex justify-center items-end ">
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="#"
                                                    style={{ backgroundImage: `url('https://facesspa.com/wp-content/uploads/2020/07/AdobeStock_143330491.jpeg')` }}
                                                    className={`
                                                       bg-cover bg-center
                                                        h-40 w-40
                                                        rounded-2xl flex flex-col items-start justify-end
                                                        px-2 py-2 
                                                        group-hover:scale-105
                                                        transition-all duration-300
                                                        shadow-lg
                                                        cursor-pointer
                                                        relative
                                                        overflow-hidden
                                                    `}
                                                >
                                                    
                                                    <p className="group-hover:underline text-[30px] carattere-font font-bold text-white">Facial</p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <li className="group flex justify-center items-end ">
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="#"
                                                    style={{ backgroundImage: `url('https://beautyandmelody.co.uk/wp-content/uploads/2020/12/Eyebrow-threading-Woman.jpg')` }}
                                                    className={`
                                                       bg-cover bg-center
                                                        h-40 w-40
                                                        rounded-2xl flex flex-col items-start justify-end
                                                        px-2 py-2 
                                                        group-hover:scale-105
                                                        transition-all duration-300
                                                        shadow-lg
                                                        cursor-pointer
                                                        relative
                                                        overflow-hidden
                                                    `}
                                                >
                                                    
                                                    <p className="group-hover:underline text-[30px] carattere-font font-bold text-white">Threading</p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <li className="group flex justify-center items-end ">
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="#"
                                                    style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFRee40qqF3fX92jyt8MIlGCWbuBJ2-ZeBA&s')` }}
                                                    className={`
                                                       bg-cover bg-center
                                                        h-40 w-40
                                                        rounded-2xl flex flex-col items-start justify-end
                                                        px-2 py-2 
                                                        group-hover:scale-105
                                                        transition-all duration-300
                                                        shadow-lg
                                                        cursor-pointer
                                                        relative
                                                        overflow-hidden
                                                    `}
                                                >
                                                    
                                                    <p className="group-hover:underline text-[30px] carattere-font font-bold text-white">Pedicure</p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <li className="group flex justify-center items-end ">
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="#"
                                                    style={{ backgroundImage: `url('https://sumansalon.in/wp-content/uploads/2024/02/adobestock-230088894-scaled.jpeg.webp')` }}
                                                    className={`
                                                       bg-cover bg-center
                                                        h-40 w-40
                                                        rounded-2xl flex flex-col items-start justify-end
                                                        px-2 py-2 
                                                        group-hover:scale-105
                                                        transition-all duration-300
                                                        shadow-lg
                                                        cursor-pointer
                                                        relative
                                                        overflow-hidden
                                                    `}
                                                >
                                                    
                                                    <p className="group-hover:underline text-[30px] carattere-font font-bold text-white">Waxing</p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <li className="group flex justify-center items-end ">
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/services"
                                                    
                                                    className={`
                                                        bg-neutral-400
                                                       bg-cover bg-center
                                                        h-40 w-40
                                                        rounded-2xl flex flex-col items-start justify-end
                                                        px-2 py-2 
                                                        group-hover:scale-105
                                                        transition-all duration-300
                                                        shadow-lg
                                                        cursor-pointer
                                                        relative
                                                        overflow-hidden
                                                    `}
                                                >
                                                    
                                                    <p className="group-hover:underline text-[30px] carattere-font font-bold text-white">Browse All</p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    {/* ))} */}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/docs">Beauticians</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/docs">Bridal MakeUp</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/docs">Locations</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                       
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/docs">About</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                    </NavigationMenuList>

                </NavigationMenu>
                <div className="flex items-center gap-2">
                    <ModeToggle />
                    <Button>Book Now</Button>
                </div>
            </div>
        </header>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
