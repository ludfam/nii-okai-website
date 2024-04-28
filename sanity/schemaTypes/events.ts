import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'events',
    title: 'Events',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: "The name of the event",
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            description: "An artwork/image that represents the event",
        }),
        defineField({
            name: 'start',
            title: 'Start Date',
            type: 'date',
            description: "The start date of the event. If the event begins and ends on the same event use the same date for the end and start dates",
        }),
        defineField({
            name: 'end',
            title: 'End Date',
            type: 'date',
            description: "The end date of the event. If the event begins and ends on the same event use the same date for the end and start dates",
        }),
        defineField({
            name: 'link',
            title: 'Button Link',
            type: 'string',
            description: "The link for the event that would be linked to the button",
        }),
        defineField({
            name: 'label',
            title: 'Button Label',
            type: 'string',
            description: "The label for the button",
        }),
        defineField({
            name: 'description',
            title: 'Event Description',
            type: 'string',
            description: "A brief description of the event",
        }),
    ],
});