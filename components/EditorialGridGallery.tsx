'use client'

import React, { useState } from 'react'
import LightboxWrapper from './LightboxWrapper'

interface ImageData {
    src: string
    alt: string
}

interface EditorialGridGalleryProps {
    images: ImageData[]
    title?: string
    description?: string
}

interface Row {
    type: 'A' | 'B' | 'C'
    images: ImageData[]
}

// Assign images to repeating row patterns
function assignImagesToGrid(images: ImageData[]): Row[] {
    const rows: Row[] = []
    const patterns: ('A' | 'B' | 'C')[] = ['A', 'B', 'C']
    let imageIndex = 0

    while (imageIndex < images.length) {
        const patternType = patterns[rows.length % 3]

        if (patternType === 'A' && imageIndex + 2 < images.length) {
            // Row A: 2 portraits + 1 landscape (3 images)
            rows.push({
                type: 'A',
                images: images.slice(imageIndex, imageIndex + 3)
            })
            imageIndex += 3
        } else if (patternType === 'B' && imageIndex + 3 < images.length) {
            // Row B: 1 wide + 3 squares (4 images)
            rows.push({
                type: 'B',
                images: images.slice(imageIndex, imageIndex + 4)
            })
            imageIndex += 4
        } else if (patternType === 'C' && imageIndex + 2 < images.length) {
            // Row C: 1 landscape + 2 portraits (3 images)
            rows.push({
                type: 'C',
                images: images.slice(imageIndex, imageIndex + 3)
            })
            imageIndex += 3
        } else {
            // Fallback: create a simple row with remaining images
            const remaining = images.slice(imageIndex)
            if (remaining.length >= 3) {
                rows.push({ type: 'A', images: remaining.slice(0, 3) })
                imageIndex += 3
            } else if (remaining.length === 2) {
                rows.push({ type: 'A', images: [...remaining, remaining[0]] })
                break
            } else if (remaining.length === 1) {
                rows.push({ type: 'A', images: [remaining[0], remaining[0], remaining[0]] })
                break
            } else {
                break
            }
        }
    }

    return rows
}

export default function EditorialGridGallery({ images, title, description }: EditorialGridGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)

    const hero = images[0]
    const remaining = images.slice(1)
    const rows = assignImagesToGrid(remaining)

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

                {/* Hero Image - 16:9 */}
                <div className="mb-12 md:mb-20">
                    <div
                        className="aspect-16-9 editorial-image"
                        onClick={() => openLightbox(0)}
                    >
                        <img src={hero.src} alt={hero.alt} />
                    </div>
                </div>

                {/* Editorial Grid */}
                <div className="editorial-grid">
                    {rows.map((row, rowIndex) => {
                        const startIndex = 1 + rows.slice(0, rowIndex).reduce((acc, r) => acc + r.images.length, 0)

                        if (row.type === 'A') {
                            // Row A: 2 portraits (3:4) + 1 landscape (4:3)
                            return (
                                <React.Fragment key={rowIndex}>
                                    <div
                                        className="col-span-4 aspect-3-4 editorial-image"
                                        onClick={() => openLightbox(startIndex)}
                                    >
                                        <img src={row.images[0].src} alt={row.images[0].alt} />
                                    </div>
                                    <div
                                        className="col-span-4 aspect-3-4 editorial-image"
                                        onClick={() => openLightbox(startIndex + 1)}
                                    >
                                        <img src={row.images[1].src} alt={row.images[1].alt} />
                                    </div>
                                    <div
                                        className="col-span-4 aspect-4-3 editorial-image"
                                        onClick={() => openLightbox(startIndex + 2)}
                                    >
                                        <img src={row.images[2].src} alt={row.images[2].alt} />
                                    </div>
                                </React.Fragment>
                            )
                        } else if (row.type === 'B') {
                            // Row B: 1 wide (16:9) + 3 squares (1:1)
                            return (
                                <React.Fragment key={rowIndex}>
                                    <div
                                        className="col-span-8 aspect-16-9 editorial-image"
                                        onClick={() => openLightbox(startIndex)}
                                    >
                                        <img src={row.images[0].src} alt={row.images[0].alt} />
                                    </div>
                                    <div
                                        className="col-span-4 grid grid-cols-1 gap-6"
                                    >
                                        {row.images.slice(1, 4).map((image, idx) => (
                                            <div
                                                key={idx}
                                                className="aspect-1-1 editorial-image"
                                                onClick={() => openLightbox(startIndex + 1 + idx)}
                                            >
                                                <img src={image.src} alt={image.alt} />
                                            </div>
                                        ))}
                                    </div>
                                </React.Fragment>
                            )
                        } else {
                            // Row C: 1 landscape (4:3) + 2 portraits (3:4)
                            return (
                                <React.Fragment key={rowIndex}>
                                    <div
                                        className="col-span-4 aspect-4-3 editorial-image"
                                        onClick={() => openLightbox(startIndex)}
                                    >
                                        <img src={row.images[0].src} alt={row.images[0].alt} />
                                    </div>
                                    <div
                                        className="col-span-4 aspect-3-4 editorial-image"
                                        onClick={() => openLightbox(startIndex + 1)}
                                    >
                                        <img src={row.images[1].src} alt={row.images[1].alt} />
                                    </div>
                                    <div
                                        className="col-span-4 aspect-3-4 editorial-image"
                                        onClick={() => openLightbox(startIndex + 2)}
                                    >
                                        <img src={row.images[2].src} alt={row.images[2].alt} />
                                    </div>
                                </React.Fragment>
                            )
                        }
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
