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

