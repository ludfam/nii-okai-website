import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: "This field is to give a little creative title to the about page",
        }),
        defineField({
            name: 'about',
            title: 'About',
            type: 'object',
            description: "This field is for the information that will show at the about section of the about page",
            fields: [
                {
                    name: "description",
                    type: "string",
                    title: "About Description",
                    options: {
                        maxLength: 96,
                    }
                },
                {
                    name: "image",
                    type: "image",
                    title: "About Image"
                },
                {
                    name: "more",
                    type: "longContent",
                    title: "Extra Description",
                    description: "Write some more information here"
                },
            ]
        }),
        defineField({
            name: 'life',
            title: 'Life',
            type: 'object',
            description: "This field is for the information that will show at the life section of the about page",
            fields: [
                {
                    name: "description",
                    type: "string",
                    title: "Life Description",
                    options: {
                        maxLength: 200,
                    }
                },
                {
                    name: "foreImage",
                    type: "image",
                    title: "Foreground Image",
                    description: "This image appears in the life section of the about page"

                },
                {
                    name: "bgImage",
                    type: "image",
                    title: "Background Image"
                },

            ]
        }),
    ],
});