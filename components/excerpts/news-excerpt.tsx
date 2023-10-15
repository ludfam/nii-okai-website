import Link from "next/link";
import { Button } from "../ui/button";
import { dummyNews } from "@/lib/data";
import NewsCard from "../cards/news-card";

export default function NewsExcerpt() {
    return (
        <section className="py-8 md:py-16 flex flex-col gap-8">
             <p className="allexis text-5xl  md:text-8xl   mx-auto">
            News
            </p>
            <div className="container gap-4 mt-4 grid grid-cols-1 md:grid-cols-3">
                {
                    dummyNews.slice(0,3).map((news) => (
                        <NewsCard key={news._id} data={news} />
                    ))
                }
            </div>
            <div className="container flex items-center justify-center">
                <Button variant="transparent-black" asChild className="uppercase ">
                    <Link href="/news">
                    All News
                    </Link>
                </Button>
            </div>
        </section>
    )
}