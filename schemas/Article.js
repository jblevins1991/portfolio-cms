export default {
    title: 'Article',
    name: 'article',
    type: 'document',
    fields: [
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            description: 'The slug used on the frontend.'
        },
        {
            title: 'Thumbnail',
            name: 'thumbnail',
            type: 'image',
            description: 'The thumbnail image.'
        },
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            description: 'A compelling article title.',
            validation: Rule => Rule
                .max(50)
                .warning('A title shouldn\'t be more than 50 characters.')
        },
        {
            title: 'Published',
            name: 'published',
            type: 'boolean',
            description: 'Is this article publicly viewable?'
        },
        {
            title: 'Category',
            name: 'category',
            type: 'reference',
            description: 'The technology the article is about.',
            weak: true,
            to: [
                { type: 'category' }
            ]
        },
        {
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Content of the blog post.'
        },
        {
            title: 'Author',
            name: 'author',
            type: 'reference',
            description: 'The author of the article.',
            weak: true,
            to: [
                { type: 'author' }
            ]
        }
    ]
}
