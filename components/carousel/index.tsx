"use client"
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
/* eslint-disable */
import Carousel from "nuka-carousel"
import { GrNext, GrPrevious } from "react-icons/gr"
import SanityImage from "../core/sanity-image";

type Props = {
    images: string[] | SanityImageSource[]
}

export default function NewCarousel({images }: Props) {
    const nextButton = (
        <div className="bg-white/40 p-2 rounded-full">
            <GrNext />
        </div>
    )

    const prevButton = (
        <div className="bg-white/40 p-2 rounded-full">
            <GrPrevious />
        </div>
    )

    return (
        <>
            <Carousel
                dragging
                withoutControls
                autoplay
                autoplayInterval={4000}
                className="w-full h-full"
                wrapAround
                // defaultControlsConfig={{
                //     prevButtonText: prevButton,
                //     nextButtonText: nextButton
                // }}
            >

                {
                    !!images && images.map((image, index) => (
                        <SanityImage key={index} image={image} className="w-full h-[80vh] object-cover object-top" usesImg />
                    ))
                }
                
                {/* <img alt="" src="/images/home-hero.jpg" className="w-full h-[80vh] object-cover object-top" />
                <img alt="" src="/images/home-hero-2.jpg" className="w-full h-[80vh] object-cover object-top" />
                <img alt="" src="/images/home-hero-3.jpg" className="w-full h-[80vh] object-cover" /> */}
                {/* <img src="/images/concert.avif" className="w-full h-[85vh] object-cover" /> */}

            </Carousel>
        </>
    )
}