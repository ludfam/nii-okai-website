import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'news',
    title: 'News',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)

            },
        }),
        defineField({
            name: 'thumbnail',
            title: 'Thumbnail Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'blockContent',
        }),
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection;
            return { ...selection, subtitle: author && `by ${author}` };
        },
    },
});
