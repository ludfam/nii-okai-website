import { cn } from "@/lib/utils"

interface HeadingProps {
    title: string
    color?: "white" | "black"
    opacity?: number
    top?: boolean
}

export default function Heading({ title, color, opacity, top }: HeadingProps) {
    const textOpacity = ``
    return (
        <div className="relative w-max flex items-center justify-center">
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
                "allexis absolute text-5xl lg:text-8xl translate-y-[40%] top-0 mx-auto",
                color === "white" ? "text-white" : "text-black",
                top && "-translate-y-[0%]"
            )}>
                {title}
            </p>
        </div>
    )
}