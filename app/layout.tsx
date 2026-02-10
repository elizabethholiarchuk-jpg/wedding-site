import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
    title: 'Elizabeth Holiarchuk — Wedding Photographer Europe',
    description: 'Editorial wedding photography for modern couples who value presence, aesthetics, and honest storytelling — across Europe and beyond.',
    keywords: ['wedding photographer Europe', 'destination wedding photographer', 'editorial wedding photography', 'European wedding photographer'],
    authors: [{ name: 'Elizabeth Holiarchuk' }],
    openGraph: {
        title: 'Elizabeth Holiarchuk — Wedding Photographer Europe',
        description: 'Editorial wedding photography for modern couples who value presence, aesthetics, and honest storytelling.',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
