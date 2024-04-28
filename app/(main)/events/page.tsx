import UnderDevelopment from "@/components/core/under-development";
import Heading from "@/components/hierarchy/heading";
import Soon from "@/components/temp/heph";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { generatePageQuery } from "@/sanity/lib/queries";
import DataFetchingLoader from "@/components/loaders/data-fetching-loader";
import { SanityDocument } from "next-sanity";
import { Event } from "@/types";
import { client } from "@/sanity/lib/client";
import EventCard from "@/components/cards/event-card";

export default async function EventsPage() {
    const data = await client.fetch<SanityDocument<Event>[]>(generatePageQuery("events", "start", "desc", "none"));
    const featuredEvent = data?.[0];
    const otherEvents = data?.filter(({ _id }) => _id !== featuredEvent?._id);
    return (
        <DataFetchingLoader data={data}>
            <main className="min-h-screen">
                <section className="min-h-[90vh] flex flex-col py-12  w-full gradient2">
                    <div className="w-full flex flex-col gap-16  items-center justify-center container">
                        <Heading color="white" title="Events" />
                        {
                            data?.length > 0 ?
                                <EventCard event={featuredEvent} featured /> :
                                <p className="text-white text-lg">
                                    There are no events! Come check later
                                </p>
                        }
                    </div>
                </section>
                {
                    data?.length > 0 &&
                    <section className="min-h- flex flex-col py-12  w-full ">
                        <div className="w-full flex flex-col gap-16  items-center justify-center container">
                            {
                                otherEvents?.map((event) => (
                                    <EventCard key={event?._id} event={event} />
                                ))
                            }
                        </div>
                    </section>
                }
            </main>
        </DataFetchingLoader>
    );
}