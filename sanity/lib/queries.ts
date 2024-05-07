// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;

export const HOMEPAGE_QUERY = groq`*[_type == "homePage"] | order(_createdAt asc)[0]`;

export const ABOUTPAGE_QUERY = groq`*[_type == "aboutPage"] | order(_createdAt asc)[0]`;
export const MUSICPAGE_QUERY = groq`*[_type == "musicPage"] | order(_createdAt asc)[0]`;



const pageQueryKeys = {
    "homePage": "homePage",
    "aboutPage": "aboutPage",
    "musicPage": "musicPage",
    "speakingPage": "speakingPage",
    "events": "eventsPage",
    "ichurchPage": "ichurchPage",
    "news": "newsPage",
};

type PageQueryKeysType = keyof typeof pageQueryKeys;

export type SortOrder = "asc" | "desc"
type QueryIndex = number | "none"

function isNumber(input: any) {
    return !isNaN(input);
}


function getIdx(idx?: QueryIndex) {
    if (!idx) {
        return "[0]"
    }
    if (idx === "none") {
        return ""
    }
    if (!isNumber(idx)) {
        return ""
    }
    return `[${idx.toString()}]`
}

export function generatePageQuery(page: PageQueryKeysType, sortField?: string, sortOrder?: SortOrder, index: QueryIndex = 0) {
    const field = !!sortField ? sortField : "_createdAt"
    const order = !!sortOrder ? sortOrder : "asc"
    const idx = getIdx(index)
    

    return groq`*[_type == "${page}"] | order(${field} ${order})${idx}`;
}