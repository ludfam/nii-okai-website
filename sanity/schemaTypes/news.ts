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
            description: "This is the unique string that would reference this news post. It is advised to generate one for consistency. It will be generated from the title, so make sure you have a title before generating one",
            options: {
                source: 'title',
                maxLength: 96,
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200),
            },
            
        }),
        defineField({
            name: 'summary',
            title: 'Summary',
            description: "This is a short description of the news post. This is different from the blog post",
            type: 'string',
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
});
