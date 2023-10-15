import { NewsPost } from "@/types"
import Image from "next/image"

export default function NewsCard({ data }: { data: NewsPost }) {
    const { _id, img, link, title } = data
    return (
        <article className="flex flex-col gap-4">

            <div className="aspect-square w-full relative">
                <Image fill src={img} alt="" className="object-cover" />
            </div>
            <p className="text-center">
                {title}
            </p>
        </article>
    )
}