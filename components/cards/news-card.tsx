import { News, NewsPost } from "@/types"
import { SanityDocument } from "next-sanity";
import Image from "next/image"
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import { urlFor } from "../core/sanity-image";

export default function NewsCard({ data }: { data: SanityDocument<News> }) {
    const { title, _createdAt, _id, slug, thumbnail, summary } = data
    const thumbnailUrl = urlFor(thumbnail)?.url() || ""
    return (
        <Link href={`/news/${slug?.current}`}>
            <article className="flex flex-col gap-4 ">

                <div className="portfolio_card">
                    <div className="portfolio_img">
                        <img src={thumbnailUrl} alt='' className='w-100 aspect-square object-cover' />
                    </div>

                    <div className="portfolio_content flex flex-col items-center justify-center gap-">
                        <div className="bg-white flex items-center justify-center mb-4 h-10 w-10 rounded-full">

                            <FaLink className="text-neutral-800 " />
                        </div>
                        <h5 className="text-center uppercase text-lg text-white">{title}</h5>
                        <p className="text-center text-neutral-200 line-clamp-2">
                            {summary}
                        </p>
                    </div>
                </div>
                <p className="text-center uppercase">
                    {title}
                </p>
            </article>
        </Link>
    )
}