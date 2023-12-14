import UnderDevelopment from "@/components/core/under-development";
import NewsletterForm from "@/components/forms/newsletter-form";
import Heading from "@/components/hierarchy/heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SpeakingPage() {
    return (
        <main className="">
            {/* <UnderDevelopment /> */}
            <div className="min-h-[70vh] bg-white relative   bg-top bg-cover bg-no-repeat  "
                style={{
                    backgroundImage: `url('/images/speaking.jpg')`
                }}
            >
                <div className="absolute h-full p-8  text-white w-full flex items-cente flex-col justify-center top-0 bg-black/60">
                    <h1 className="uppercase font-bold text-4xl md:text-6xl 2xl:text-7xl">
                        Pastor &middot; Speaker
                    </h1>
                    <p className="uppercase  md:text-xl">
                        A heart for His Kingdom
                    </p>
                </div>
            </div>

            <section className=" container flex flex-col items-center justify-center text-center py-8 md:py-12 ">
                <Heading title="Speaker" opacity={30} top />
                <p className="font-semibold text-xl mt-2">
                    SPREADING THE GOSPEL OF JESUS
                </p>

                <p className="max-w-5xl font-light mt-6">
                    Nii Okai&apos;s passion for sharing The Gospel carries over in the form of written and spoken word. He is an accomplished author of a number of including Yesu Hi a very insightful and thought provoking piece  where  Nii Okai grants the reader unusual access to aspects of his personal life that reveals more of the man than the Minister that many have come to know. He has also spoken at many events.

                </p>


            </section>
            <section style={{
                backgroundImage: `url("/images/skyline.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "local",
                backgroundColor: "#1C1A18",
            }} className=" w-full bg-top text-white bg-cover justify-center ">
                <div className="bg-black/40 w-full min-h-[50vh] py-10 flex flex-col gap-6  items-center ">
                    <section className="container w-full grid lg:grid-cols-3 gap-y-8">
                        <div className="flex flex-col gap-4 justify-center col-span-2 md:pt-12 mb-2">
                            <Heading color="white" title="Pastor" opacity={20} top />
                            <p className="md:text-lg">
                                Ps Nii is an apostle by function, has his roots in the Methodist church and pastors the International House of Virtue (iChurch) based in Tema. He is into school evangelism, Christian charity, church planting, teaching, music directing, worship leading, creative directing, counseling, event management, media and worship arts development both locally and globally.

                            </p>
                        </div>


                    </section>
                </div>
            </section>
            <section className=" container min-h-[40vh] flex flex-col items-center justify-center text-center py-8 md:py-12 gap-4 ">
                <Heading title="Booking" opacity={30} top />


                <p className="max-w-5xl font-light mt-6">
                    To inquire about booking Ps Nii for your events click the link below.

                </p>

                <Link target='_blank' href="https://wa.me/233246156915?text=Hello, I want to make enquiries about the booking Pastor Nii Okai. My name is ">
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