import { Event } from "@/types";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { Button } from "../ui/button";
import SanityImage from "@/components/core/sanity-image";
import dayjs from "dayjs";
import { cn } from "@/lib/utils";

type Props = {
    event: SanityDocument<Event>;
    featured?: boolean;
};

export default function EventCard({ event, featured }: Props) {
    const { description, end, image, label, link, start, title, } = event;
    const dateFormat = "MMMM D, YYYY";
    function getDateString() {
        if (!start && !end) {
            return "Coming Soon";
        }
        if (!start) {
            return dayjs(end).format(dateFormat);
        }
        if (!end) {
            return dayjs(start).format(dateFormat);
        }
        if (dayjs(start).isSame(end, "day")) {
            return dayjs(end).format(dateFormat);
        }

        return `${dayjs(start).format(dateFormat)} to ${dayjs(end).format(dateFormat)}`;
    }

    const dateString = getDateString();

    return (
        <article className="w-full grid lg:grid-cols-2 gap-8">
            <div className="flex items-center lg:justify-end max-lg:justify-center ">
                <div className=" relative  aspect-square   w-[95%] md:w-[500px] drop-shadow-lg bg-transparent">
                    <SanityImage image={image} className="object-contain" alt="book cover" />
                </div>
            </div>
            <div className="flex flex-col justify-center gap-4">
                <p className={cn(
                    "uppercase text-white text-2xl max-md:text-center md:text-4xl font-extrabold",
                    featured ? "text-white" : "text-black"
                )}>
                    {title}
                </p>
                <p className={cn(
                    "text-white text-base max-md:text-center max-md:justify-center flex items-center gap-2 md:text-lg md:font-semibold italic",
                    featured ? "text-white" : "text-black"
                )}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                    </svg>

                    <span>
                        {dateString}
                    </span>

                </p>
                <p className={cn(featured ? "text-white" : "text-black")}>
                    {description || ""}
                </p>
                {
                    label &&
                    <div className="flex flex-col gap-4 mt-4">
                        <Link href={link || ""}>
                            <Button variant={featured ? "transparent-white": "transparent-black"} className="uppercase w-full md:w-max" size="lg">
                                {label}
                            </Button>
                        </Link>
                    </div>
                }
            </div>
        </article>
    );
}