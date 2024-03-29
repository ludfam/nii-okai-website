import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: "This field is to give a title to the document you are editing for easy reference. It will not be used on the actual website",
        }),
        defineField({
            name: 'homeSliderImages',
            title: "Home Slider Images",
            type: 'array',
            description: "This field is for the images that will show on the carousel on the home page",
            of: [
                {
                    type: "image",
                }
            ]
        }),
        defineField({
            name: 'book',
            title: 'Book',
            type: 'object',
            description: "This field is for the information that will show at the book section of the home page",
            fields: [
                {
                    name: "bookTitle",
                    type: "string",
                    title: "Book Title"
                },
                {
                    name: "bookSubtitle",
                    type: "string",
                    title: "Book Subtitle"
                },
                {
                    name: "bookDescription",
                    type: "string",
                    title: "Book Description"
                },
                {
                    name: "bookImage",
                    type: "image",
                    title: "Book Image"
                },
            ]
        }),
        defineField({
            name: 'music',
            title: 'Music',
            type: 'object',
            description: "This field is for the information that will show at the music section of the home page",
            fields: [
                {
                    name: "musicTitle",
                    type: "string",
                    title: "Music Title"
                },
                {
                    name: "musicSubtitle",
                    type: "string",
                    title: "Music Subtitle"
                },
                {
                    name: "musicDescription",
                    type: "string",
                    title: "Music Description"
                },
                {
                    name: "musicImage",
                    type: "image",
                    title: "Music Image"
                },
              
            ]
        }),
        defineField({
            name: 'speaker',
            title: 'Speaker',
            type: 'string',
            description: "This field will contain the description for the speaker section of the home page",
        }),
    ],
});