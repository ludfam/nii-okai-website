import { cn } from "@/lib/utils"

interface HeadingProps {
    title: string
    color?: "white" | "black"
}

export default function Heading({ title, color }: HeadingProps) {
    return (
        <div className="relative w-max flex items-center justify-center">
            <p className={cn(
                "montserrat text-9xl font-extrabold text-black/40 w-max",
                color === "white" ? "text-white/40" : "text-black/40"
            )}>
                {title}
            </p>
            <p className={cn(
                "allexis absolute text-8xl translate-y-[50%] top-0 mx-auto",
                color === "white" ? "text-white" : "text-black"
            )}>
                {title}
            </p>
        </div>
    )
}