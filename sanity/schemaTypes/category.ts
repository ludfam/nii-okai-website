import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "This is the name of the category you want to create. This will be used for the news"
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: "This is the description of the category you want to create. This will be used for the news to give more information"
    }),
  ],
})
