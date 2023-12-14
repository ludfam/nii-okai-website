import UnderDevelopment from "@/components/core/under-development";
import YoutubeEmbed from "@/components/core/youtube-embed";
import NewsletterForm from "@/components/forms/newsletter-form";
import Heading from "@/components/hierarchy/heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function MusicPage() {
    return (
        <main className="">
            {/* <UnderDevelopment /> */}
            <div className="min-h-[70vh] bg-white relative  bg-top bg-cover bg-no-repeat  "
                style={{
                    backgroundImage: `url('/images/home-hero.jpg')`
                }}
            >
                <div className="absolute h-full text-center text-white w-full flex items-center flex-col justify-center top-0 bg-black/60">
                    <h1 className="uppercase font-bold text-4xl md:text-6xl 2xl:text-7xl">
                        Nii Okai is back
                    </h1>
                    <p className="uppercase  md:text-xl">
                        Working on new music!
                    </p>
                </div>
            </div>
            <section className="min-h-[80vh] flex flex-col py-12  w-full ">
                <div className="w-full flex flex-col gap-16 items-center justify-center container">
                    <Heading opacity={20} title="Music" />

                    <div className="w-full  grid lg:grid-cols-2 gap-8">
                        <div className="flex flex-col justify-center gap-4">
                            <p className="uppercase  text-3xl md:text-5xl font-extrabold">
                                Revealing Jesus
                            </p>
                            <p className=" text-base md:text-lg font-bold italic">
                                Passing on Faith to the Next Generation
                            </p>
                            <p className="font-light tracking-wide md:text-lg">
                                Nii Okai is the co-founder of &apos;Harbour City Mass Choir&apos; an inter-denominational music ministry based in Tema, Ghana with a clear purpose of impacting the youth through contemporary gospel music, school outreach programs, music ministry workshops as well as peer and social counseling.
                                <br />
                                Nii Okai has 5 albums to his credit. &apos;Moko Be&apos;, &apos;Hymnz Unlimited&apos;, &apos;Worshipful&apos;, &apos;Saving Hearts&apos; and &apos;Holy writings&apos; which he received an award with the &apos;Saving Hearts&apos; album at the 16th edition of Vodafone Ghana Music Awards for Music for Development Award.
                            </p>
                            <div className="flex flex-col gap-4 mt-4">


                                <Button className="uppercase md:w-max bg-o-lightblue hover:bg-o-darkblue" size="lg">
                                    Buy / Stream
                                </Button>

                            </div>
                        </div>
                        <div className="flex items-center  z-10 justify-center ">
                            <div className="aspect-square w-full p-4 flex relative  justify-center  lg:h-[600px] drop-shadow-lg bg-[#305AA9]">

                                <div className=" relative w-full h-full bg-black/50">
                                    <Image src='/images/home-music-2.jpg' alt="music" fill className="object-cover object-[.55_.75] " />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="min-h-screen flex flex-col items-center justify-center gap-8 py-8 gradient1">
                <Heading title="Videos" color="white" />
                <div className="pb-8" />
                <YoutubeEmbed embedLink="https://www.youtube.com/embed/DDFZ0WnnV7Q?si=hN0YIjkrdbTdGUSY" />
                <Link href="https://www.youtube.com/@NiiOkaiTV">
                    <Button variant="secondary" className="px-8">
                        See More
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