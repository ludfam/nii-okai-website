import NewCarousel from "@/components/carousel";
import NewsletterForm from "@/components/forms/newsletter-form";
import Heading from "@/components/hierarchy/heading";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="">
      <section className="w-full h-screen overflow-y- bg-transparent">
        <NewCarousel />
      </section>
      <section className="min-h-screen flex flex-col py-12  w-full gradient1">
        <div className="w-full flex flex-col gap-16 items-center justify-center container">
          <Heading color="white" title="Book" />
          <div className="w-full grid lg:grid-cols-2 gap-8 h-full">
            <div className="flex items-center lg:justify-end max-lg:justify-center ">
              <div className="aspect-[9/16] w-full md:w-[400px] h-[600px] drop-shadow-lg bg-white/60">

              </div>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <p className="uppercase text-white text-4xl md:text-5xl font-extrabold">
                Believe For It
              </p>
              <p className="text-white text-base md:text-lg font-bold italic">
                Passing on Faith to the Next Generation
              </p>
              <p className="text-white">
                From the best-selling female gospel artist of all time CeCe Winans comes a heartfelt guide full of spirit, music, and faith. CeCe&apos;s first book in over 10 years, Believe for It explores what it means to pass along wisdom and faith to generations to come.
                <br />
                Believe for It: Passing on Faith to the Next Generation beautifully recounts the pivotal experiences in CeCe&apos;s life that have shaped her faith. From her childhood in Detroit and the miracle of motherhood to her award-winning music career, CeCe brings readers along for a story full of heart, passion, and wisdom acquired from her walk with God.
              </p>
              <div className="flex flex-col gap-4 mt-4">
                <Button variant="transparent-white" className="uppercase md:w-max" size="lg">
                  Buy Now
                </Button>

                <Button variant="purple" className="uppercase md:w-max" size="lg">
                  Download the free book guide
                </Button>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen flex flex-col py-12  w-full ">
        <div className="w-full flex flex-col gap-16 items-center justify-center container">
          <p className="allexis text-8xl   mx-auto">
            Music
          </p>
          <div className="w-full  grid lg:grid-cols-2 gap-8 h-full">
            <div className="flex items-center lg:translate-y-10 z-10 lg:justify-end max-lg:justify-center ">
              <div className="aspect-square w-full p-4  h-[600px] drop-shadow-lg bg-[#7B019E]">
                <div className="w-full h-full bg-black/50">

                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <p className="uppercase  text-4xl md:text-5xl font-extrabold">
                Believe For It
              </p>
              <p className=" text-base md:text-lg font-bold italic">
                Passing on Faith to the Next Generation
              </p>
              <p className="font-light tracking-wide md:text-lg">
                From the best-selling female gospel artist of all time CeCe Winans comes a heartfelt guide full of spirit, music, and faith. CeCe&apos;s first book in over 10 years, Believe for It explores what it means to pass along wisdom and faith to generations to come.

              </p>
              <div className="flex flex-col gap-4 mt-4">
                <Button variant="transparent-black" className="uppercase md:w-max" size="lg">
                  Buy/Stream
                </Button>

                <Button variant="purple" className="uppercase md:w-max" size="lg">
                  BFI Challenge
                </Button>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-[70vh] bg-contain  " style={{
        backgroundImage: `url("/images/hero.png")`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundColor: "#222321",
        backgroundPosition: "right -200px bottom -200px"
      }} >
        <div className="w-full min-h-[70vh] h-full  bg-gradient-to-r from-[#222321]/70">
          <div className="container w-full h-full gap-8 flex flex-col text-white  py-8 lg:py-16">

            <Heading title="Speaker" color="white" />
            <p className="max-w-4xl md:text-lg mt-8">
              Since 2012 CeCe has co-pastored Nashville Life Church in Nashville, TN with her husband Alvin. Though CeCe is most known and decorated for her music accolades, CeCe&apos;s passion for sharing The Gospel carries over in the form of written and spoken word. CeCe has spoken at conferences and events around the world.  In addition to her many live performances and guest hosting on national television (The Today Show, Good Morning America, Oprah), she has also made appearances on four different programs as an actress.
            </p>
            <Button variant="transparent-white" className="uppercase md:w-max" size="lg">
              Buy Now
            </Button>
          </div>
        </div>
      </section>
      <section className="min-h-[50vh] py-8 flex flex-col gap-8 items-center bg-black text-white justify-center">
        <Heading title="Subscribe" opacity={30} color="white" />
        <p className="text-lg">
          Sign up to receive the latest news from Nii Okai
        </p>

        <NewsletterForm />

      </section>
    </main>
  )
}
