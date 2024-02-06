import Link from "next/link"
import ActionTooltip from "../action-tooltip"
import { SOCIAL_ICON_MAP } from "@/lib/constants"
import { cn } from "@/lib/utils"

interface SocialIcon {
    label: string
    link: string
    size?: string
}

export default function SocialIcon({ label, link, size }: SocialIcon) {
    const Icon: any = SOCIAL_ICON_MAP[label]
    
    return (
        <>
            <ActionTooltip key={label} label={label}>
                <Link target="_blank" href={link}>
                    <Icon className={cn("text-xl", size ?? size)} />
                </Link>
            </ActionTooltip>
        </>
    )
}