import NewCarousel from "@/components/carousel";
import Heading from "@/components/hierarchy/heading";

export default function Home() {
  return (
    <main className="">
      <section className="w-full h-screen overflow-y- bg-transparent">
        <NewCarousel />
      </section>
      <section className="min-h-screen flex flex-col py-12  w-full gradient1">
        <div className="w-full flex flex-col gap-8 items-center justify-center container">
          <Heading color="white" title="Book" />
          <div className="w-full grid lg:grid-cols-2 gap-8 h-full">
            <div className="flex items-center justify-end">
              <div className="aspect-[9/16] w-[200px] h-[400px] bg-">

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
