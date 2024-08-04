import { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
    slug: 'projects',
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            type: 'text',
        },
        {
            name: 'thumbnail',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'tags',
            type: 'relationship',
            relationTo: 'tags',
            hasMany: true,
        }
    ]
}

// work after work (branding)?
// westtt (branding) ?