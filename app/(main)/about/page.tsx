import HeadingAlt from "@/components/hierarchy/heading-alt";
import { aboutStates } from "@/lib/data";
import Image from "next/image";
import CareerMore from "./career-more";
import Heading from "@/components/hierarchy/heading";
import NewsletterForm from "@/components/forms/newsletter-form";
import { generatePageQuery } from "@/sanity/lib/queries";
import {  SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { AboutPageValues } from "@/types";
import SanityImage, { urlFor } from "@/components/core/sanity-image";


export default async function AboutPage() {
    const data = await client.fetch<SanityDocument<AboutPageValues>>(generatePageQuery("aboutPage"));
    const lifeBgImageBuilder = urlFor(data?.life?.bgImage)

    return (
        <main className="min-h-screen border-t">
            <section className="flex flex-col gap-6  items-center justify-center py-10 container">
                <h3 className=" text-3xl uppercase sm:text-4xl text-center font-extralight">
                    {
                        data?.title
                    }
                </h3>
                <div className="flex items-center flex-wrap justify-between  gap-4 mx-auto max-w-[85%]  w-full text-center">
                    {
                        aboutStates.map((stat, i) => (
                            <article className=" max-sm:text-xs font-extralight uppercase" key={i}>
                                {/* {stat} */}
                            </article>
                        ))
                    }
                </div>
            </section>
            <section className="container w-full grid lg:grid-cols-2 gap-y-8">
                <div className="relative aspect-video lg:aspect-[9/12] mx-auto w-full lg:w-[85%]">
                    <SanityImage className="object-cover object-center" image={data?.about?.image} />
                </div>
                <div className="flex flex-col gap-4 justify- md:pt-12 mb-2">
                    <HeadingAlt title="About" opacity={20} />
                    <p className="md:text-lg">
                        {
                            data?.about?.description
                    }

                    </p>
                    <CareerMore data={data?.about?.more} />
                </div>
            </section>

            <section style={{
                backgroundImage: `url("${lifeBgImageBuilder?.url()}")`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "local",
                backgroundColor: "#1C1A18",
            }} className=" w-full bg-top text-white bg-cover justify-center ">
                <div className="bg-black/40 w-full min-h-[50vh] py-10 flex flex-col gap-6  items-center ">
                    <section className="container w-full grid lg:grid-cols-2 gap-y-8">
                        <div className="flex flex-col gap-4 justify-center md:pt-12 mb-2">
                            <HeadingAlt color="white" title="Life" opacity={20} />
                            <p className="md:text-lg">
                               {data?.life?.description}
                            </p>
                        </div>
                        <div className="relative aspect-[16/12] my-auto  mx-auto w-full lg:w-[85%]">
                            <SanityImage image={data?.life?.foreImage} className="object-cover object-center" />
                        </div>

                    </section>
                </div>
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