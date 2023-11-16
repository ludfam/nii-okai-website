import { HeaderSocial, NewsPost } from "@/types";
import { SOCIALS } from "./constants";

export const headerSocials: HeaderSocial[] = [
    {
        label: "facebook",
        link: "https://www.facebook.com/profile.php?id=100050588345055"
    },
    {
        label: "instagram",
        link: "https://instagram.com/nii_okai?igshid=MTNiYzNiMzkwZA=="
    },
    {
        label: "twitter",
        link: "https://x.com/ataaniiokai?s=21&t=1ceGW0tVrfl5Oni8uqn6Bg"
    },
    {
        label: "youtube",
        link: "https://www.youtube.com/@NiiOkaiTV"
    },
]

export const dummyNews: NewsPost[] = [
    {
        _id: "1",
        title: "NII OKAI PERFORMS AT MOKOBE @ 20",
        img: "/images/home-hero-3.jpg",
        link: "/",
    },
    {
        _id: "2",
        title: "NII OKAI LAUNCHES A NEW BOOK",
        img: "/images/book_cover.jpeg",
        link: "/",
    },
    {
        _id: "3",
        title: "NII OKAI LEADS A SPIRIT-FILLED WORSHIP",
        img: "/images/home-music.jpg",
        link: "/",
    },
]