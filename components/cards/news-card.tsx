import { NewsPost } from "@/types"
import Image from "next/image"
import { FaLink } from "react-icons/fa";

export default function NewsCard({ data }: { data: NewsPost }) {
    const { _id, img, link, title } = data
    return (
        <article className="flex flex-col gap-4 ">

            <div className="portfolio_card">
                <div className="portfolio_img">
                    <img src={img} alt='' className='w-100 aspect-square object-cover' />
                </div>

                <div className="portfolio_content flex flex-col items-center justify-center gap-">
                    <div className="bg-white flex items-center justify-center mb-4 h-10 w-10 rounded-full">

                    <FaLink className="text-neutral-800 " />
                    </div>
                    <h5 className="text-center text-lg text-white">{title}</h5>
                    <p className="text-center text-neutral-200">News</p>

                </div>
            </div>
            <p className="text-center">
                {title}
            </p>
        </article>

    )
}