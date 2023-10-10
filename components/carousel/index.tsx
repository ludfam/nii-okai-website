"use client"
/* eslint-disable */
import Carousel from "nuka-carousel"
import { GrNext, GrPrevious } from "react-icons/gr"

export default function NewCarousel() {
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
                defaultControlsConfig={{
                    prevButtonText: prevButton,
                    nextButtonText: nextButton
                }}
            >
                
                <img src="/images/concert.avif" className="w-full h-screen object-cover" />
                <img src="/images/concert.avif" className="w-full h-screen object-cover" />
                <img src="/images/concert.avif" className="w-full h-screen object-cover" />

            </Carousel>
        </>
    )
}