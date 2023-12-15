import { headerSocials } from "@/lib/data";
import SocialIcon from "./social-icon";

export default function Footer() {
    return (
        <footer className="bg-neutral-900 w-full z-10 text-white py-4">
            <div className="flex flex-col   w-full lg:flex-row items-center lg:justify-between gap-4 container">
                <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4 text-sm text-neutral-500">
                    <p>
                        Copyright @ 2023
                    </p>
                    <p>
                        Nii Okai
                    </p>
                    <p>
                        All Rights Reserved
                    </p>
                    <p>
                        Powered by <span className="text-white font-bold"> Ludfamultimedia</span> 
                    </p>
                </div>
                <div className="flex items-center gap-4 ">
                    {
                        headerSocials.map((social) => (
                            <SocialIcon key={social.label} {...social} />
                        ))
                    }
                </div>
            </div>
        </footer>
    )
}