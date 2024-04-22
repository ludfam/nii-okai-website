// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;

export const HOMEPAGE_QUERY = groq`*[_type == "homePage"] | order(_createdAt asc)[0]`;

export const ABOUTPAGE_QUERY = groq`*[_type == "aboutPage"] | order(_createdAt asc)[0]`;
export const MUSICPAGE_QUERY = groq`*[_type == "musicPage"] | order(_createdAt asc)[0]`;