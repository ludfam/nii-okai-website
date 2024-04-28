import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'speakingPage',
    title: 'Speaking Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: "This field is to give a little creative title to the speaking page",
        }),
        defineField({
            name: 'hero',
            title: 'Hero',
            type: 'object',
            description: "This field is for the information that will show at the hero section of the speaking page",
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
                    description: "This field is to give a little creative title to the speaking page",
                },
                {
                    name: 'subtitle',
                    title: 'Subtitle',
                    type: 'string',
                    description: "This field is to give a short subtitle to the speaking page",
                },
            ]
        }),
        defineField({
            name: 'speaker',
            title: 'Speaker',
            type: 'object',
            description: "This field is for the information that will show at the featured music section of the music page",
            fields: [
                {
                    name: 'subtitle',
                    title: 'Speaker Subtitle',
                    type: 'string',
                    description: "This field is to give a short subtitle to the speaking page",
                },
                {
                    name: "description",
                    type: "longContent",
                    title: "Speaker Description"
                },
               

            ]
        }),
        defineField({
            name: 'pastor',
            title: 'Pastor',
            type: 'object',
            description: "This field is for the information that will show at the pastor section of the speaking page",
            fields: [
                {
                    name: "image",
                    type: "image",
                    title: "Pastor Background Image"
                },
                {
                    name: "description",
                    type: "longContent",
                    title: "Pastor Description"
                },
            ]
        }),
        defineField({
            name: 'booking',
            title: 'Booking',
            type: 'object',
            description: "This field is for the information that will show at the booking section of the speaking page",
            fields: [
                {
                    name: "link",
                    type: "string",
                    title: "Booking Link"
                },
                {
                    name: "description",
                    type: "longContent",
                    title: "Booking Description"
                },
            ]
        }),
        
    ],
});