import NewCarousel from "@/components/carousel";
import InstagramExcerpt from "@/components/excerpts/instagram-excerpt";
import NewsExcerpt from "@/components/excerpts/news-excerpt";
import NewsletterForm from "@/components/forms/newsletter-form";
import Heading from "@/components/hierarchy/heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section className="w-full h-screen overflow-y- bg-transparent">
        <NewCarousel />
      </section>
      <section className="min-h-screen flex flex-col py-12  w-full gradient1">
        <div className="w-full flex flex-col gap-16  items-center justify-center container">
          <Heading color="white" title="Book" />
          <div className="w-full grid lg:grid-cols-2 gap-8 ">
            <div className="flex items-center lg:justify-end max-lg:justify-center ">
              <div className=" relative h-[400px]   w-[90%] md:w-[400px] md:h-[600px] drop-shadow-lg bg-transparent">
                <Image src="/images/book_cover.jpeg" className="object-contain" alt="book cover" fill />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <p className="uppercase text-white text-4xl md:text-5xl font-extrabold">
                Yesu Hi
              </p>
              <p className="text-white text-base md:text-lg font-bold italic">
                Jesus is Good, Losing My Isaac
              </p>
              <p className="text-white">
                In this very insightful and thought provoking piece, Nii Okai grants the reader unusual access to aspects of his personal life that reveals more of the man than the Minister that many have come to know.
                <br /> <br />
                The authenticity of a man&apos;s walk with God and how it reflects in the quality of his decisions goes a long way to determine his effectiveness and longevity in ministry. It therefore goes without saying that this book is a MUST read for anyone who desires to move from being an average miniter to one who is sold out for God.
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
                Moko be
              </p>
              <p className=" text-base md:text-lg font-bold italic">
                Passing on Faith to the Next Generation
              </p>
              <p className="font-light tracking-wide md:text-lg">
                From the best-selling female gospel artist of all time CeCe Winans comes a heartfelt guide full of spirit, music, and faith. CeCe&apos;s first book in over 10 years, Believe for It explores what it means to pass along wisdom and faith to generations to come.
                From the best-selling female gospel artist of all time CeCe Winans comes a heartfelt guide full of spirit, music, and faith. CeCe&apos;s first book in over 10 years, Believe for It explores what it means to pass along wisdom and faith to generations to come.
                From the best-selling female gospel artist of all time CeCe Winans comes a heartfelt guide full of spirit, music, and faith. CeCe&apos;s first book in over 10 years, Believe for It explores what it means to pass along wisdom and faith to generations to come.

              </p>
              <div className="flex flex-col gap-4 mt-4">
                <Button variant="transparent-black" className="uppercase md:w-max" size="lg">
                  Buy/Stream
                </Button>

                <Button className="uppercase md:w-max bg-o-lightblue hover:bg-o-darkblue" size="lg">
                  BFI Challenge
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
      <section className="min-h-[70vh] 2xl:min-h-[60vh] overflow-hidden bg-cover " style={{
        backgroundImage: `url("/images/speaker.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        // backgroundColor: "#1C1A18",
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
              Since 2012 CeCe has co-pastored Nashville Life Church in Nashville, TN with her husband Alvin. Though CeCe is most known and decorated for her music accolades, CeCe&apos;s passion for sharing The Gospel carries over in the form of written and spoken word. CeCe has spoken at conferences and events around the world.  In addition to her many live performances and guest hosting on national television (The Today Show, Good Morning America, Oprah), she has also made appearances on four different programs as an actress.
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
  )
}
