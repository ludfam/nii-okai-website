import { SanityImageSource } from "@sanity/image-url/lib/types/types";

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
}