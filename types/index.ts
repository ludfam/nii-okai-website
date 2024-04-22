import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { StringSegmentUnchanged } from "sanity";

export type Children = {
    children: React.ReactNode
}

export type HeaderSocial = {
    label: any
    link: string
}

export type NewsPost = {
    _id: string
    title: string
    img: string
    link: string
}

export type Embed = {
    embedLink?: string
    title?: string
    size?: "sm" | "lg" | "md"
    aspect?: "video" | "square"
}

export type Book = {
    bookImage: SanityImageSource;
    bookSubtitle: string;
    bookDescription: string;
    bookTitle: string;
}

export type Music = {
    musicTitle: string
    musicSubtitle: string
    musicDescription: string
    musicImage: SanityImageSource
}

export type HomepageValues = {
    book: Book
    speaker: string
    music: Music
    title: string
    homeSliderImages: SanityImageSource[];
};

export type AboutLife = {
    description: string 
    foreImage: SanityImageSource;
    bgImage: SanityImageSource;
}

export type AboutAbout = {
    description: string
    image: SanityImageSource;
    more: any
}

export type AboutPageValues = {
    title: string
    about: AboutAbout
    life: AboutLife
}

export type Category = {
    title: string
    description: string
};

export type News = {
    title: string
    thumbnail: SanityImageSource
    content: string
    slug: string
    categories?: Category[] | []
};

export type FeaturedMusic = {
    title: string
    subtitle: string
    description: any
    link: string
    image: SanityImageSource
}

export type MusicHero = {
    image: SanityImageSource
    title: string
}


export type MusicPageValues = {
    hero: MusicHero
    music: FeaturedMusic;
    videoLink1: string
    videoLink2: string
    videoLink3: string
};

export type SpeakingHero = {
    title: string
    subtitle: string
    image: string
}

export type SpeakingSpeaker = {
    subtitle: string
    description: any
}

export type SpeakingPastor = {
    image: string
    description: any
}

export type SpeakingBooking = {
    description: any
    link: string
}


export type SpeakingPageValues = {
    hero: SpeakingHero
    speaker: SpeakingSpeaker
    booking: SpeakingBooking
}

export type Event = {
    title: string
    image: SanityImageSource
    start: any
    end?: any
    link: string
    label: string
    description: any
}

