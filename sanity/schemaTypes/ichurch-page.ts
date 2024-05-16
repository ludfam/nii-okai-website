import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'ichurchPage',
    title: 'iChurch Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: "This field is to give a little creative title to the ichurch page",
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            description: "This field is for the background image of the hero section of the ichurch page",
        }),
        defineField({
            name: 'about',
            title: 'About',
            type: 'object',
            description: "This field is for the information that will show at the about section of the ichurch page",
            fields: [
                {
                    name: "subtitle",
                    type: "string",
                    title: "About Subtitle",
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
                    name: "description",
                    type: "string",
                    title: "About Description",
                    description: "Write some more information here"
                },
            ]
        }),
        defineField({
            name: 'meeting1',
            title: '1st Meeting Time',
            type: 'object',
            description: "Write about your church meeting time",
            fields: [
                {
                    name: "title",
                    type: "string",
                    title: "Meeting Title",
                },
                {
                    name: "description",
                    type: "string",
                    title: "Meeting Description",
                },
                {
                    name: "time",
                    type: "string",
                    title: "Meeting Time",
                },
             
            ]
        }),
        defineField({
            name: 'meeting2',
            title: '2nd Meeting Time',
            type: 'object',
            description: "Write about your church meeting time",
            fields: [
                {
                    name: "title",
                    type: "string",
                    title: "Meeting Title",
                },
                {
                    name: "description",
                    type: "string",
                    title: "Meeting Description",
                },
                {
                    name: "time",
                    type: "string",
                    title: "Meeting Time",
                },
             
            ]
        }),
        defineField({
            name: 'join',
            title: 'Join Us',
            type: 'object',
            description: "This field is for the information that will show at the join us section of the church page",
            fields: [
                {
                    name: "foreImage",
                    type: "image",
                    title: "Foreground Image",

                },
                {
                    name: "backImage",
                    type: "image",
                    title: "Back Image"
                },

            ]
        }),
        defineField({
            name: 'videoLink1',
            title: 'Embed Video Link 1',
            type: 'string',
            description: "For this field, provide a youtube embed link to be displayed on the sermon videos section of the website",
        }),
        defineField({
            name: 'videoLink2',
            title: 'Embed Video Link 2',
            type: 'string',
            description: "For this field, provide a youtube embed link to be displayed on the sermon videos section of the website",
        }),
        defineField({
            name: 'videoLink3',
            title: 'Embed Video Link 3',
            type: 'string',
            description: "For this field, provide a youtube embed link to be displayed on the sermon videos section of the website",
        }),
    ],
});