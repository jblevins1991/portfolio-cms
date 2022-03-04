export default {
    title: 'Technology',
    name: 'technology',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            description: 'The name of the technology.'
        },
        {
            title: 'Logo',
            name: 'logo',
            type: 'image',
            description: 'The image of the technology.'
        },
        {
            title: 'Tier',
            name: 'tier',
            list: [
                'code',
                'automate',
                'deploy'
            ],
            type: 'string',
            description: 'The carousel that the image will be tied to.'
        },
        {
            title: 'Order',
            name: 'order',
            type: 'number',
            description: 'The order in which the technology will be displayed.'
        }
    ]
};
