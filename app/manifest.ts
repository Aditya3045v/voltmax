import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Voltmax Power Solution',
        short_name: 'Voltmax Power',
        description: 'Solar Power Plants | LT Panels | Electrical Works',
        start_url: '/',
        display: 'standalone',
        background_color: '#0B1120',
        theme_color: '#0056D2',
        icons: [
            {
                src: '/assets/logo.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    }
}
