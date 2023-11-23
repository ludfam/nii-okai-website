"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"

import { links } from "./mobile-nav"
import { usePathname } from "next/navigation"





export default function MainNav() {
    const pathname = usePathname()
    const isActive = (href: string): boolean => {

        return pathname === href 
    }
    return (
        <NavigationMenu className="hidden md:flex ">
            <NavigationMenuList>
                {
                    links.map((link) => (
                        <NavigationMenuItem key={link.path} className={`relative  text-sm h-full ${isActive(link.path) && "text-black/70"}`}>
                            <div className={cn(
                                "w-full h-[6px] bg-transparent absolute z-0 -top-3",
                                isActive(link.path) && "bg-black/50"
                            )} />
                            <Link href={link.path} legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    {link.label}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))
                }


            </NavigationMenuList>
        </NavigationMenu>

    )
}

interface ListItemProps extends React.ComponentPropsWithoutRef<'a'> {
    className?: string;
    title: string;
    icon?: React.ReactNode; // Icon prop of type React.ReactNode
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(({ className, title, icon, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm flex items-center font-medium leading-none">
                        {icon && <div className="mr-1">{icon}</div>}
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
