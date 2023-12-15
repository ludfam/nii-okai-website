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
        title: "Hephzibah Worship conference",
        img: "/images/heph-banner.jpeg",
        link: "/events",
    },
    {
        _id: "2",
        title: "End of Year Power Weekend",
        img: "/images/end-year.jpeg",
        link: "/events",
    },
    {
        _id: "3",
        title: "NII OKAI LAUNCHES A NEW BOOK",
        img: "/images/book_cover.jpeg",
        link: "/",
    },
]

export const aboutStates: string[] = [
    "15 Grammys", "27 Dove Awards", "16 STELLAR AWARDS", "BMI TRAILBLAZER", "WALK OF FAME"
]

// albums, books, awards