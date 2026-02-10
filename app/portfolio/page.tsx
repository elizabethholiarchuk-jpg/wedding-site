import type { Metadata } from 'next'
import JustifiedGallery from '@/components/JustifiedGallery'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Portfolio — Elizabeth Holiarchuk',
    description: 'A curated selection of wedding photography across Europe. Intentional, attentive, human.',
}

// Helper function to generate image array from folder
function getWeddingImages(folder: string, count: number) {
    return Array.from({ length: count }, (_, i) => {
        const num = String(i + 1).padStart(2, '0')
        return {
            src: `/${folder}/${num}.jpg`,
            alt: `Wedding photography ${i + 1}`,
        }
    })
}

export default function Portfolio() {
    // Wedding images from folders
    const wedding1Images = getWeddingImages('w01-hamburg-civil', 16)
    const wedding2Images = getWeddingImages('w02-berlin-church', 18)
    const wedding3Images = getWeddingImages('w03-forest-party', 12)

    return (
        <>
            {/* Header */}
            <section className="pt-32 pb-20">
                <div className="container-custom">
                    <div className="max-w-xl mx-auto text-center">
                        <h1 className="heading-xl">Portfolio</h1>
                        <div className="editorial-rule my-8"></div>
                        <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
                            A curated selection of weddings across Europe, photographed with intention and care.
                        </p>
                    </div>
                </div>
            </section>

            {/* Wedding 1: Hamburg Civil Ceremony */}
            <JustifiedGallery
                images={wedding1Images}
                title="Hamburg Civil Ceremony"
                description="Intimate city hall wedding in Hamburg"
                reorderWindow={8}
                cropMode="smart"
            />

            {/* Wedding 2: Berlin Church Wedding */}
            <JustifiedGallery
                images={wedding2Images}
                title="Berlin Church Wedding"
                description="Classic ceremony in historic Berlin church"
                reorderWindow={8}
                cropMode="smart"
            />

            {/* Wedding 3: Forest Celebration */}
            <JustifiedGallery
                images={wedding3Images}
                title="Forest Celebration"
                description="Outdoor reception in natural woodland setting"
                reorderWindow={8}
                cropMode="smart"
            />

            {/* CTA */}
            <section className="py-24 md:py-32 border-t border-neutral-200">
                <div className="container-custom text-center">
                    <div className="max-w-xl mx-auto">
                        <p className="text-2xl md:text-3xl text-neutral-700 mb-12 leading-relaxed font-light">
                            If you&apos;d like to discuss your wedding, I&apos;d be glad to hear from you.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="btn-primary">
                                Start a Conversation
                            </Link>
                            <Link href="/approach" className="btn-secondary">
                                Read About My Approach
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
