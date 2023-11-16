import Link from "next/link"
import ActionTooltip from "../action-tooltip"
import { SOCIAL_ICON_MAP } from "@/lib/constants"

interface SocialIcon {
    label: string
    link: string
}

export default function SocialIcon({ label, link }: SocialIcon) {
    const Icon: any = SOCIAL_ICON_MAP[label]
    
    return (
        <>
            <ActionTooltip key={label} label={label}>
                <Link target="_blank" href={link}>
                    <Icon />
                </Link>
            </ActionTooltip>
        </>
    )
}