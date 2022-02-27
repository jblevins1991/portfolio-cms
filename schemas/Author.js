export default {
    title: 'Author',
    name: 'author',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            description: 'Your name.'
        },
        {
            title: 'Github URL',
            name: 'github_url',
            type: 'url',
            description: 'The URL to your github.'
        },
        {
            title: 'Bio',
            name: 'bio',
            type: 'text',
            description: 'Tell us a little about you'
        }
    ]
}
