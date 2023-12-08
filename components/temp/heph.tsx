"use client"
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineYoutube } from 'react-icons/ai'
import { FiTwitter, FiX } from 'react-icons/fi'

import { BiLogoFacebook } from 'react-icons/bi'
import React from 'react'
import Link from 'next/link'

const Soon = () => {
    const [time, setTime] = React.useState({
        days: "0",
        hours: "0",
        minutes: "0",
        seconds: "0"
    })


    const formatTimeValue = (value: number) => {
        return value < 10 ? `0${value}` : `${value}`;
    };

    React.useEffect(() => {
        const countDownDate = new Date("Jan 4, 2024 16:30:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            if (distance <= 0) {
                clearInterval(interval);
                // You can take some action when the countdown is over, like showing a message.
                // For example: setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = formatTimeValue(Math.floor(distance / (1000 * 60 * 60 * 24)));
                const hours = formatTimeValue(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
                const minutes = formatTimeValue(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
                const seconds = formatTimeValue(Math.floor((distance % (1000 * 60)) / 1000));
                setTime({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const openWhatsapp = () => {
        window.open("https://wa.me/233246156915?text=Hello, I want to make enquiries about the Hephzibah! 2024. My name is ", "_blank")
    }

    const openWhatsappBot = () => {
        window.open("https://wa.me/233248343370?text=Hi", "_blank")
    }

    return (
        <div className="relative h-[70vh] md:h-[90vh] w-screen overflow-hidden flex items-center justify-center bg-contain md:bg-cover bg-no-repeat bg-top  md:bg-bottom text-center px-5 bg-[url(/images/heph.png)]">
            <div className="absolute top-0 right-0 bottom-0 left-0 opacity-50"></div>

            <div className="z-50 flex mb-20 md:mb-10 flex-col gap-y-5 justify-end text-black w-screen h-[70vh] md:h-[90vh] px-5">
                

                <div className="px-5">
                    {/* countdown */}
                    <div className="flex justify-center items-center gap-x-4 text:lg md:text-4xl text-">
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-3xl md:text-6xl font-bold">{time.days}</span>
                            <span className="text-sm">Days</span>
                        </div>
                        <span className="text-3xl md:text-6xl font-bold">:</span>
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-3xl md:text-6xl font-bold">{time.hours}</span>
                            <span className="text-sm">Hours</span>
                        </div>
                        <span className="text-3xl md:text-6xl font-bold">:</span>
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-3xl md:text-6xl font-bold">{time.minutes}</span>
                            <span className="text-sm">Minutes</span>
                        </div>
                        <span className="text-3xl md:text-6xl font-bold">:</span>
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-3xl md:text-6xl font-bold">{time.seconds}</span>
                            <span className="text-sm">Seconds</span>
                        </div>
                    </div>

                </div>

                <div className="mt-6 flex ttext-2xl text-black items-center justify-center gap-x-6">
                    {/* put the ions above in anchor tags wth links */}
                    <a target='_blank' href="https://wa.me/233246156915?text=Hello, I want to make enquiries about the Hephzibah! 2024. My name is "><AiOutlineWhatsApp className="cursor-pointer hover:text-green-600" /></a>
                    <a target='_blank' href="https://www.facebook.com/people/NII-OKAI/100050588345055"><BiLogoFacebook className="cursor-pointer hover:text-blue-600" /></a>
                    <a target='_blank' href="https://www.instagram.com/"><AiOutlineInstagram className="cursor-pointer hover:text-yellow-600" /></a>
                    <a target='_blank' href="https://twitter.com/AtaaNiiOkai"><FiTwitter className="cursor-pointer hover:text-blue-300" /></a>
                    <a target='_blank' href="https://www.youtube.com/NiiOkaiTV"><AiOutlineYoutube className="cursor-pointer hover:text-red-600" /></a>
                </div>

                {/* Reserve spot buttons */}
                <div className="flex flex-row gap-x-5 justify-center items-center">
                    <Link href="https://www.ludfamultimedia.com/hephzibah?modal=true">
                        <button className="bg-o-lightblue text-white  px-4 py-2 rounded-md ">
                            Register Now
                        </button>
                    </Link>
                </div>


            </div>


        </div>

    )
}


export default Soon