import { cn } from "@/lib/utils"

interface HeadingProps {
    title: string
    color?: "white" | "black"
    opacity?: number
}

export default function HeadingAlt({ title, color, opacity }: HeadingProps) {
    return (
        <div className="relative w-max flex items-cente justify-cente ">
            <p
                style={{
                    opacity: opacity && (opacity / 100)
                }}
                className={cn(
                "montserrat text-5xl lg:text-9xl font-extrabold text-black/40 w-max",
                color === "white" ? "text-white/40" : "text-black/40",
                opacity && ""
            )}>
                {title}
            </p>
            <p className={cn(
                " absolute text-5xl lg:text-8xl -translate-y-[10%] top-0 mx-auto",
                color === "white" ? "text-white" : "text-black"
            )}>
                {title}
            </p>
        </div>
    )
}