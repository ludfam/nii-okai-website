import { Embed } from "@/types"
import { Youtube } from "lucide-react"

export default function YoutubeEmbed({ embedLink, title, size, aspect }: Embed) {
    if (!embedLink) {
        return (
            <article className="aspect-video  w-full max-w-4xl flex flex-col items-center justify-center rounded-lg bg-white/50 ">
                    
                <Youtube className="w-12 h-12 text-neutral-500 " />
                <p className="text-center ">
                    This video is not available at the moment
                </p>
            </article>
        )
    }
    return (
        <div className="aspect-video   w-full max-w-4xl flex flex-col items-center justify-center">
            <iframe
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                title={title || "Youtube video player"}
                src={embedLink}
            />
        </div>
    )
}

