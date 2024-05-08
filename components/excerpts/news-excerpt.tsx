import Link from "next/link";
import { Button } from "../ui/button";
import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { generatePageQuery } from "@/sanity/lib/queries";
import SanityImage from "@/components/core/sanity-image";
import { News } from "@/types";
import NewsCard from "../cards/news-card";

export default async function NewsExcerpt() {
    const data = await client.fetch<SanityDocument<News>[]>(generatePageQuery("news", "_createdAt", "asc", "none"));

    console.log({data})
    return (
        <section className="py-8 md:py-16 flex flex-col gap-8">
             <p className="allexis text-5xl  md:text-8xl   mx-auto">
            News
            </p>
            <div className="container gap-8 mt-4 grid grid-cols-1 md:grid-cols-3">
                {
                    (data || [])?.slice(0, 3).map((news) => (
                        <NewsCard key={news._id} data={news} />
                    ))
                }
            </div>
            <div className="container flex items-center justify-center">
                <Button variant="transparent-black" asChild className="uppercase ">
                    <Link href="/news">
                    All News
                    </Link>
                </Button>
            </div>
        </section>
    )
}