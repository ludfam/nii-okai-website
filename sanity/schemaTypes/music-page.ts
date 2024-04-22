import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'musicPage',
    title: 'Music Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: "This field is to give a little creative title to the music page",
        }),
        defineField({
            name: 'hero',
            title: 'Hero',
            type: 'object',
            description: "This field is for the information that will show at the hero section of the about page",
            fields: [
                {
                    name: "image",
                    type: "image",
                    title: "Hero Image"
                },
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    description: "This field is to give a little creative title to the music page",
                },
            ]
        }),
        defineField({
            name: 'music',
            title: 'Music',
            type: 'object',
            description: "This field is for the information that will show at the featured music section of the music page",
            fields: [
                {
                    name: "title",
                    type: "string",
                    title: "Music Title"
                },
                {
                    name: "subtitle",
                    type: "string",
                    title: "Music Subtitle"
                },
                {
                    name: "description",
                    type: "longContent",
                    title: "Music Description"
                },
                {
                    name: "image",
                    type: "image",
                    title: "Music Image"
                },
                {
                    name: "link",
                    type: "string",
                    title: "Music Link"
                },

            ]
        }),
        defineField({
            name: 'videoLink1',
            title: 'Embed Video Link 1',
            type: 'string',
            description: "For this field, provide a youtube embed link to be displayed on the music videos section of the website",
        }),
        defineField({
            name: 'videoLink2',
            title: 'Embed Video Link 2',
            type: 'string',
            description: "For this field, provide a youtube embed link to be displayed on the music videos section of the website",
        }),
        defineField({
            name: 'videoLink3',
            title: 'Embed Video Link 3',
            type: 'string',
            description: "For this field, provide a youtube embed link to be displayed on the music videos section of the website",
        }),
    ],
});