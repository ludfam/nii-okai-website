import UnderDevelopment from "@/components/core/under-development";
import NewsletterForm from "@/components/forms/newsletter-form";
import Heading from "@/components/hierarchy/heading";

export default function SubscribePage() {
    return (
        <main className=" ">
            <section className="min-h-[90vh] px-8 py-8 flex flex-col gap-8 items-center bg-black text-white justify-center">
                <Heading title="Subscribe" opacity={30} color="white" />
                <p className="mt-2 md:text-lg text-center">
                    Sign up to receive the latest news from Nii Okai
                </p>

                <NewsletterForm />

            </section>
            {/* <UnderDevelopment /> */}
        </main>
    )
}