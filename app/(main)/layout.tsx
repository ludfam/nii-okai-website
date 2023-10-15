import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import SocialHeader from "@/components/navigation/social-header";
import { Children } from "@/types";

export default function MainLayout({ children }: Children) {
    return (
        <>
            <SocialHeader />
            <Navbar />
            {children}
            <Footer />
        </>
    )
}