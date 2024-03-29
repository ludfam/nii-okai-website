import UnderDevelopment from "@/components/core/under-development";
import ContactForm from "@/components/forms/contact-form";
import Heading from "@/components/hierarchy/heading";
import SocialHeader from "@/components/navigation/social-header";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { headerSocials } from "@/lib/data";
import SocialIcon from "@/components/navigation/social-icon";
import { CONTACT_DETAILS } from "@/lib/constants";
import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <section className="container flex items-center justify-center flex-col gap-12 py-8 md:gap-16 w-full">
                <Heading title="Contact Us" opacity={30} />
                <div className="grid md:grid-cols-3 gap-8 w-full">
                    <div className="md:col-span-2 p-6 md:p-8 lg:p-12 bg-neutral-200 rounded-xl">
                        <ContactForm />
                    </div>
                    <Card className="col-span-1 bg-o-darkblue text-white items-center justify-center flex flex-col w-full text-center">
                        <CardHeader>
                            <CardTitle>Talk to us </CardTitle>
                            <CardDescription className="text-neutral-300">Reach out to us via social media</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-4 w-full">
                            <div className="flex items-center gap-4 justify-between max-w-[70%] w-full mx-auto  ">
                                {
                                    headerSocials.map((social) => (
                                        <SocialIcon key={social.label} size="text-2xl" {...social} />
                                    ))
                                }
                            </div>
                            <p className="">
                                or
                            </p>
                            <div className="">
                                <p className="text-sm font-medium">Email</p>
                                <Link className="underline" href={`mailto:${CONTACT_DETAILS.email}`} >
                                    {CONTACT_DETAILS.email}
                                </Link>
                            </div>
                            <div className="">
                                <p className="text-sm font-medium">Phone</p>
                                <Link className="underline" href={`tel:${CONTACT_DETAILS.phone.main}`} >
                                    {CONTACT_DETAILS.phone.main}
                                </Link>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </section>


        </main>
    )
}