import NewsletterForm from "@/components/forms/newsletter-form";
import Heading from "@/components/hierarchy/heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { generatePageQuery } from "@/sanity/lib/queries";
import DataFetchingLoader from "@/components/loaders/data-fetching-loader";
import SanityImage, { urlFor } from "@/components/core/sanity-image";
import { SpeakingPageValues } from "@/types";
import { SanityDocument } from "next-sanity";
import SanityBlock from "@/components/core/sanity-block";


export default async function SpeakingPage() {
    const data = await client.fetch<SanityDocument<SpeakingPageValues>>(generatePageQuery("speakingPage"));
    const { booking, hero, speaker, _id,  pastor } = data
    const speakingImage = urlFor(hero?.image);
    const pastorImage = urlFor(pastor?.image)


    return (
        
        <main className="">
            <div className="min-h-[70vh] bg-white relative   bg-top bg-cover bg-no-repeat  "
                style={{
                    backgroundImage: `url('${speakingImage}')`
                }}
            >
                <div className="absolute h-full p-8  text-white w-full flex items-cente flex-col justify-center top-0 bg-black/60">
                    <h1 className="uppercase font-bold text-4xl md:text-6xl 2xl:text-7xl">
                        {hero?.title || ""}
                    </h1>
                    <p className="uppercase  md:text-xl">
                        {hero?.subtitle || ""}

                    </p>
                </div>
            </div>

            <section className=" container flex flex-col items-center justify-center text-center py-8 md:py-12 ">
                <Heading title="Speaker" opacity={30} top />
                <p className="font-semibold text-xl mt-2">
                    {speaker?.subtitle}
                </p>

                <div className="max-w-5xl font-light mt-6">
                    <SanityBlock value={speaker?.description} />
                </div>


            </section>
            <section style={{
                backgroundImage: `url("${pastorImage}")`,
                backgroundRepeat: "no-repeat",
            }} className=" w-full bg-center text-white bg-cover justify-center bg-black ">
                <div className="bg-black/60 w-full min-h-[50vh] py-10 flex flex-col gap-6  items-center ">
                    <section className="container w-full grid lg:grid-cols-3 gap-y-8">
                        <div className="flex flex-col gap-4 justify-center col-span-2 md:pt-12 mb-2">
                            <Heading color="white" title="Pastor" opacity={20} top />
                            <div className="md:text-lg">
                                <SanityBlock value={pastor?.description} />
                            </div>
                        </div>


                    </section>
                </div>
            </section>
            <section className=" container min-h-[40vh] flex flex-col items-center justify-center text-center py-8 md:py-12 gap-4 ">
                <Heading title="Booking" opacity={30} top />


                <div className="max-w-5xl font-light mt-6">
                    <SanityBlock value={booking?.description} />
                </div>

                <Link target='_blank' href={booking?.link || ""}>
                    <Button>
                        Booking
                    </Button>
                </Link>


            </section>
            <section className="min-h-[50vh] px-8 py-8 flex flex-col gap-8 items-center bg-black text-white justify-center">
                <Heading title="Subscribe" opacity={30} color="white" />
                <p className="mt-2 md:text-lg text-center">
                    Sign up to receive the latest news from Nii Okai
                </p>

                <NewsletterForm />

            </section>
        </main>
    )
}