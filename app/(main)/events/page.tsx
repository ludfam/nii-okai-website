import UnderDevelopment from "@/components/core/under-development";
import Heading from "@/components/hierarchy/heading";
import Soon from "@/components/temp/heph";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function EventsPage() {
    return (
        <main className="min-h-screen">
            <section className="min-h-[90vh] flex flex-col py-12  w-full gradient2">
                <div className="w-full flex flex-col gap-16  items-center justify-center container">
                    <Heading color="white" title="Events" />
                    <div className="w-full grid lg:grid-cols-2 gap-8 ">
                        <div className="flex items-center lg:justify-end max-lg:justify-center ">
                            <div className=" relative  aspect-square   w-[95%] md:w-[500px] drop-shadow-lg bg-transparent">
                                <Image src="/images/heph-banner.jpeg" className="object-contain" alt="book cover" fill />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center gap-4">
                            <p className="uppercase text-white text-2xl max-md:text-center md:text-4xl font-extrabold">
                                Hephzibah Worship Conference
                            </p>
                            <p className="text-white text-base max-md:text-center max-md:justify-center flex items-center gap-2 md:text-lg md:font-semibold italic">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                </svg>

                                <span>
                                        January 4th to January 6th
                                </span>

                            </p>
                            <p className="text-white">
                                
                            </p>
                            <div className="flex flex-col gap-4 mt-4">
                                <Link href="https://www.ludfamultimedia.com/hephzibah">
                                    <Button variant="transparent-white" className="uppercase w-full md:w-max" size="lg">
                                        Register Now
                                    </Button>
                                </Link>



                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="min-h- flex flex-col py-12  w-full ">
                <div className="w-full flex flex-col gap-16  items-center justify-center container">
                    <div className="w-full grid lg:grid-cols-2 gap-8 ">
                        <div className="flex items-center lg:justify-end max-lg:justify-center ">
                            <div className=" relative  aspect-video   w-[95%] md:w-[500px] drop-shadow-lg bg-transparent">
                                <Image src="/images/christmas.avif" className="object-cover" alt="book cover" fill />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center gap-4">
                            <p className="uppercase  text-2xl max-md:text-center md:text-4xl font-extrabold">
                                Christmas With Nii Okai
                            </p>
                            <p className=" text-base max-md:text-center max-md:justify-center flex items-center gap-2 md:text-lg md:font-semibold italic">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                </svg>

                                <span>
                                        December 24th to December 31st
                                </span>

                            </p>
                            <p className="">
                                
                            </p>
                            <div className="flex flex-col gap-4 mt-4">
                                {/* <Link href="https://www.ludfamultimedia.com/hephzibah"> */}
                                    <Button variant="transparent-black" className="uppercase w-full md:w-max" size="lg">
                                        Coming Soon
                                    </Button>
                                {/* </Link> */}



                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Soon /> */}
        </main>
    )
}