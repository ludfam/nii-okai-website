import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { generatePageQuery } from "@/sanity/lib/queries";
import { News } from "@/types";
import NewsCard from "@/components/cards/news-card";

export default async function NewsPage() {
    const data = await client.fetch<SanityDocument<News>[]>(generatePageQuery("news", "_createdAt", "asc", "none"));
    return (
        <main className="min-h-screen flex flex-col gap-8">
            <section className="w-full min-h-[40vh] border-b flex flex-col gap-4 items-center justify-center h-full ">
                <p className="text-base font-semibold text-o-lightblue uppercase">get information</p>
                <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl allexis ">From The Blog </h1>
            </section>
            <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    (data || [])?.map((news) => (
                        <NewsCard key={news._id} data={news} />
                    ))
                }
            </section>

        </main>
    )
}