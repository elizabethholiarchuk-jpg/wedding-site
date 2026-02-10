'use client'

import { useState } from 'react'
import Image from 'next/image'
import LightboxWrapper from './LightboxWrapper'

interface ImageData {
    src: string
    alt: string
}

interface ImageSet {
    type: 'A' | 'B' | 'C' | 'D'
    images: ImageData[]
}

interface EditorialGalleryProps {
    images: ImageData[]
    title?: string
    description?: string
    heroIndex?: number
}

// Adaptive distribution algorithm
function distributeImages(images: ImageData[], heroIndex: number = 0): { hero: ImageData; sets: ImageSet[] } {
    const hero = images[heroIndex]
    const remaining = images.filter((_, i) => i !== heroIndex)
    const sets: ImageSet[] = []

    let i = 0
    const patterns = ['A', 'B', 'C', 'D'] // Cycle through set types
    let patternIndex = 0

    while (i < remaining.length) {
        const setType = patterns[patternIndex % patterns.length] as 'A' | 'B' | 'C' | 'D'
        const remainingCount = remaining.length - i

        if (setType === 'A' && remainingCount >= 1) {
            sets.push({ type: 'A', images: [remaining[i]] })
            i += 1
        } else if (setType === 'B' && remainingCount >= 2) {
            sets.push({ type: 'B', images: [remaining[i], remaining[i + 1]] })
            i += 2
        } else if (setType === 'C' && remainingCount >= 3) {
            sets.push({ type: 'C', images: [remaining[i], remaining[i + 1], remaining[i + 2]] })
            i += 3
        } else if (setType === 'D' && remainingCount >= 1) {
            sets.push({ type: 'D', images: [remaining[i]] })
            i += 1
        } else {
            // Fallback: intelligently handle remaining images
            if (remainingCount >= 3) {
                sets.push({ type: 'C', images: [remaining[i], remaining[i + 1], remaining[i + 2]] })
                i += 3
            } else if (remainingCount === 2) {
                sets.push({ type: 'B', images: [remaining[i], remaining[i + 1]] })
                i += 2
            } else if (remainingCount === 1) {
                sets.push({ type: 'A', images: [remaining[i]] })
                i += 1
            }
        }

        patternIndex++
    }

    return { hero, sets }
}

export default function EditorialGallery({ images, title, description, heroIndex = 0 }: EditorialGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)

    const { hero, sets } = distributeImages(images, heroIndex)

    const openLightbox = (index: number) => {
        setPhotoIndex(index)
        setLightboxOpen(true)
    }

    return (
        <section className="py-20 md:py-32 border-t border-neutral-200">
            <div className="container-custom">
                {/* Title and Description */}
                {(title || description) && (
                    <div className="max-w-xl mx-auto text-center mb-16">
                        {title && <h2 className="heading-md">{title}</h2>}
                        {title && <div className="editorial-rule my-6"></div>}
                        {description && (
                            <p className="text-lg text-neutral-600 leading-relaxed">
                                {description}
                            </p>
                        )}
                    </div>
                )}

                {/* Hero Image */}
                <div className="mb-12 md:mb-20">
                    <div
                        className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] cursor-pointer group overflow-hidden"
                        onClick={() => openLightbox(heroIndex)}
                    >
                        <Image
                            src={hero.src}
                            alt={hero.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="100vw"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    </div>
                </div>

                {/* Editorial Sets */}
                <div className="space-y-12 md:space-y-20">
                    {sets.map((set, setIndex) => {
                        const startIndex = heroIndex + 1 + sets.slice(0, setIndex).reduce((acc, s) => acc + s.images.length, 0)

                        return (
                            <div key={setIndex}>
                                {/* Set A: 1 Large Landscape */}
                                {set.type === 'A' && (
                                    <div className="max-w-5xl mx-auto">
                                        <div
                                            className="relative w-full h-[350px] md:h-[500px] lg:h-[600px] cursor-pointer group overflow-hidden"
                                            onClick={() => openLightbox(startIndex)}
                                        >
                                            <Image
                                                src={set.images[0].src}
                                                alt={set.images[0].alt}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 1024px) 100vw, 1200px"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                                        </div>
                                    </div>
                                )}

                                {/* Set B: 2-Up */}
                                {set.type === 'B' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                        {set.images.map((image, imgIndex) => (
                                            <div
                                                key={imgIndex}
                                                className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] cursor-pointer group overflow-hidden"
                                                onClick={() => openLightbox(startIndex + imgIndex)}
                                            >
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Set C: 3-Up Strip */}
                                {set.type === 'C' && (
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                                        {set.images.map((image, imgIndex) => (
                                            <div
                                                key={imgIndex}
                                                className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] cursor-pointer group overflow-hidden"
                                                onClick={() => openLightbox(startIndex + imgIndex)}
                                            >
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Set D: 1 Large Portrait */}
                                {set.type === 'D' && (
                                    <div className="max-w-3xl mx-auto">
                                        <div
                                            className="relative w-full h-[500px] md:h-[650px] lg:h-[750px] cursor-pointer group overflow-hidden"
                                            onClick={() => openLightbox(startIndex)}
                                        >
                                            <Image
                                                src={set.images[0].src}
                                                alt={set.images[0].alt}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 1024px) 100vw, 900px"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Lightbox */}
            <LightboxWrapper
                images={images}
                open={lightboxOpen}
                index={photoIndex}
                onClose={() => setLightboxOpen(false)}
            />
        </section>
    )
}
