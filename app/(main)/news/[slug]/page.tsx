import { generateNewsQuery } from "@/sanity/lib/queries";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import SanityImage from "@/components/core/sanity-image";
import { News } from "@/types";
import DataFetchingLoader from "@/components/loaders/data-fetching-loader";
import SanityBlock from "@/components/core/sanity-block";

export default async function SingleNewsPage({ params }: { params: { slug: string; }; }) {
    const { slug } = params;
    const data = await client.fetch<SanityDocument<News>>(generateNewsQuery(slug));
    console.log(data)

    return (
        <DataFetchingLoader data={data}>
            <section className="container w-full flex flex-col gap-4">
                <SanityImage usesImg alt="thumbnail" className=" w-full aspect-[5/2]" fit="cover" image={data?.thumbnail} />
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center ">{data?.title || ""}</h1>
                <div>

                </div>
                <SanityBlock value={data?.content || null}  />
            </section>
        </DataFetchingLoader>
    );
}