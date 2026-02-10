'use client'

import { useState } from 'react'
import Image from 'next/image'
import Masonry from 'react-masonry-css'
import LightboxWrapper from './LightboxWrapper'

interface ImageData {
    src: string
    alt: string
}

interface MasonryGalleryProps {
    images: ImageData[]
    title?: string
    description?: string
    heroIndex?: number
}

export default function MasonryGallery({ images, title, description, heroIndex = 0 }: MasonryGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)

    const hero = images[heroIndex]
    const remaining = images.filter((_, i) => i !== heroIndex)

    const openLightbox = (index: number) => {
        setPhotoIndex(index)
        setLightboxOpen(true)
    }

    // Responsive breakpoints for masonry columns
    const breakpointColumns = {
        default: 3,  // desktop (3 columns)
        1024: 2,     // tablet (2 columns)
        768: 1       // mobile (1 column)
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

                {/* Hero Image - Full Width, Natural Aspect Ratio */}
                <div className="mb-12 md:mb-20 max-w-6xl mx-auto">
                    <div
                        className="relative w-full cursor-pointer group"
                        onClick={() => openLightbox(heroIndex)}
                    >
                        <img
                            src={hero.src}
                            alt={hero.alt}
                            className="w-full h-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </div>
                </div>

                {/* Masonry Grid - Preserves Aspect Ratios */}
                <Masonry
                    breakpointCols={breakpointColumns}
                    className="masonry-grid"
                    columnClassName="masonry-grid-column"
                >
                    {remaining.map((image, index) => {
                        const actualIndex = index < heroIndex ? index : index + 1
                        return (
                            <div
                                key={index}
                                className="cursor-pointer group mb-6"
                                onClick={() => openLightbox(actualIndex)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
                                    style={{ maxWidth: '100%', height: 'auto' }}
                                />
                            </div>
                        )
                    })}
                </Masonry>
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
