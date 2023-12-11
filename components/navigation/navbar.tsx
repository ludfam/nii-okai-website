import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import MobileNav from "./mobile-nav";
import MainNav from "./main-nav";

export default function Navbar() {
    return (
        <section className="flex items-center justify-between py-2 sm:py-0 container max-md:px-3">
            <Link href="/" className="allexis text-3xl py-3" >
                {APP_NAME}
            </Link>
            <MainNav />
            <MobileNav />
        </section>
    )
}