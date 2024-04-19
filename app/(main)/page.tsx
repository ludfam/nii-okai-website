import NewCarousel from "@/components/carousel";
import InstagramExcerpt from "@/components/excerpts/instagram-excerpt";
import NewsExcerpt from "@/components/excerpts/news-excerpt";
import NewsletterForm from "@/components/forms/newsletter-form";
import Heading from "@/components/hierarchy/heading";
import Soon from "@/components/temp/heph";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { groq, SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { HOMEPAGE_QUERY } from "@/sanity/lib/queries";
import SanityImage from "@/components/core/sanity-image";
import { HomepageValues } from "@/types";
import DataFetchingLoader from "@/components/loaders/data-fetching-loader";

// const HOMEPAGE_QUERY = groq`*[_type == "homePage"][0]`

export default async function Home() {
  const data = await client.fetch<SanityDocument<HomepageValues>>(HOMEPAGE_QUERY);
  const { book, homeSliderImages, music, speaker, } = data;
  console.log(data);
  
  return (
    <DataFetchingLoader data={data}>
      <main className="">
        <section className="w-full h-max overflow-hidden bg-transparent">
          <NewCarousel images={homeSliderImages} />
        </section>
        <section className="min-h-screen flex flex-col py-12  w-full gradient1">
          <div className="w-full flex flex-col gap-16  items-center justify-center container">
            <Heading color="white" title="Book" />
            <div className="w-full grid lg:grid-cols-2 gap-8 ">
              <div className="flex items-center lg:justify-end max-lg:justify-center ">
                <SanityImage image={book?.bookImage} className="relative h-[400px]   w-[90%] md:w-[400px] md:h-[600px] drop-shadow-lg bg-transparent" />
                {/* <div className=" relative h-[400px]   w-[90%] md:w-[400px] md:h-[600px] drop-shadow-lg bg-transparent">
                <Image src="/images/book_cover.jpeg" className="object-contain" alt="book cover" fill />
              </div> */}
              </div>
              <div className="flex flex-col justify-center gap-4">
                <p className="uppercase text-white text-4xl md:text-5xl font-extrabold">
                  {book?.bookTitle}
                </p>
                <p className="text-white text-base md:text-lg font-bold italic">
                  {book?.bookSubtitle}
                </p>
                <p className="text-white">
                  {book?.bookDescription}

                </p>
                <div className="flex flex-col gap-4 mt-4">
                  <Button variant="transparent-white" className="uppercase md:w-max" size="lg">
                    Buy Now
                  </Button>

                  <Button className="uppercase md:w-max bg-o-yellow" size="lg">
                    Download the free book guide
                  </Button>

                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-[80vh] flex flex-col py-12  w-full ">
          <div className="w-full flex flex-col gap-16 items-center justify-center container">
            <Heading opacity={20} title="Music" />

            <div className="w-full  grid lg:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center gap-4">
                <p className="uppercase  text-3xl md:text-5xl font-extrabold">
                  {music?.musicTitle}
                </p>
                <p className=" text-base md:text-lg font-bold italic">
                  {music?.musicSubtitle}

                </p>
                <p className="font-light tracking-wide md:text-lg">
                  {music?.musicDescription}

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
                    <SanityImage image={music?.musicImage} alt="music" className="object-cover object-[.55_.75] " />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        <section className="min-h-[70vh] 2xl:min-h-[60vh] overflow-hidden bg-cover " style={{
          backgroundImage: `url("/images/speaker.svg")`,
          backgroundRepeat: "no-repeat",
          // backgroundAttachment: "fixed",
          backgroundColor: "#1C1A18",
          // backgroundPosition: "right -200px bottom -200px"
        }} >
          <div className="w-full min-h-[70vh] 2xl:min-h-[50vh]  h-full relative  ">
            {/* <div className="absolute bottom-0 z-0 right-8 hidden lg:block 2xl:w-[650px] aspect-square w-[500px]">
            <Image
              src="/images/nii.png"
              alt="wobg"
              fill
              className="object-contain  scale-150 2xl:scale-[1.5]"
            />
          </div> */}
            <div className="container w-full h-full gap-8 flex flex-col text-white  py-8 lg:py-16">

              <Heading title="Speaker" color="white" />
              <p className="max-w-3xl md:text-lg mt-8 z-10">
                {speaker}
              </p>
              <Button variant="transparent-white" className="uppercase md:w-max" size="lg">
                Buy Now
              </Button>
            </div>
          </div>
        </section>
        <section className="min-h-[50vh] px-8 py-8 flex flex-col gap-8 items-center bg-black text-white justify-center">
          <Heading title="Subscribe" opacity={30} color="white" />
          <p className="mt-2 md:text-lg text-center">
            Sign up to receive the latest news from Nii Okai
          </p>

          <NewsletterForm />

        </section>
        <NewsExcerpt />
        <InstagramExcerpt />

      </main>
    </DataFetchingLoader>
  );
}
