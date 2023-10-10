import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { BiHomeAlt2, BiInfoCircle, BiChurch } from "react-icons/bi"
import { BsMusicNoteBeamed, BsMic, BsCalendar3Event, BsNewspaper, BsCart } from "react-icons/bs"
import { AiOutlineProject } from "react-icons/ai"
import { MdOutlineVolunteerActivism, MdMailOutline } from "react-icons/md"
import { APP_NAME } from "@/lib/constants"

export const links = [
    {
        label: "Home",
        icon: BiHomeAlt2,
        path: "/"
    },
    {
        label: "About",
        icon: BiInfoCircle,
        path: "/about"
    },
    {
        label: "Music",
        icon: BsMusicNoteBeamed,
        path: "/music"
    },
    {
        label: "Speaking",
        icon: BsMic,
        path: "/speaking"
    },
    {
        label: "Events",
        icon: BsCalendar3Event,
        path: "/events"
    },
    {
        label: "iChurch",
        icon: BiChurch,
        path: "/church"
    },
    {
        label: "News",
        icon: BsNewspaper,
        path: "/news"
    },
    {
        label: "Contact",
        icon: MdMailOutline,
        path: "/contact"
    },
    {
        label: "Store",
        icon: BsCart,
        path: "/store"
    },
    {
        label: "Subscribe",
        icon: MdOutlineVolunteerActivism,
        path: "/subscribe"
    },


]

export default function MobileNav() {
    return (
        <div className="md:hidden py-3">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="ghost">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-full">
                    <SheetHeader className="pt-4">
                        <SheetClose
                            className=""
                        >
                            <Link href="/" className="allexis text-3xl  " >
                                {APP_NAME}
                            </Link>
                        </SheetClose>
                    </SheetHeader>
                    <div className="flex flex-col items-start gap-4 mt-8 text-left py-4">
                        {
                            links.map(({ path, icon: Icon, label }) => (
                                <SheetClose asChild key={path}>
                                    <Link href={path}>
                                        <div className="flex items-center text-neutral-700 gap-2 py-2">
                                            <Icon className="text-2xl" />
                                            <p className="text-lg">  {label}</p>
                                        </div>
                                    </Link>
                                </SheetClose>
                            ))
                        }


                    </div>
                    <SheetFooter>

                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}