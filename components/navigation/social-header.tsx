import { headerSocials } from "@/lib/data";
import ActionTooltip from "../action-tooltip";
import Link from "next/link";
import { SOCIAL_ICON_MAP } from "@/lib/constants";
import SocialIcon from "./social-icon";

export default function SocialHeader() {
    return (
        <header className="bg-neutral-900 z-10 text-white py-4">
            <div className="flex items-center gap-4 container">
                {
                    headerSocials.map((social) => (
                        <SocialIcon key={social.label} {...social}  />
                    ))
                }
            </div>
        </header>
    )
}