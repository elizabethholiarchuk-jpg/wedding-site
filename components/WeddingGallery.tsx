'use client'

import { useState } from 'react'
import Image from 'next/image'
import LightboxWrapper from './LightboxWrapper'

interface WeddingGalleryProps {
    title: string
    description: string
    folder: string
    imageCount: number
}

export default function WeddingGallery({ title, description, folder, imageCount }: WeddingGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)

    // Generate image array from folder
    const images = Array.from({ length: imageCount }, (_, i) => {
        const num = String(i + 1).padStart(2, '0')
        return {
            src: `/${folder}/${num}.jpg`,
            alt: `${title} - Photo ${i + 1}`,
        }
    })

    const openLightbox = (index: number) => {
        setPhotoIndex(index)
        setLightboxOpen(true)
    }

    return (
        <section className="py-20 md:py-32 border-t border-neutral-200">
            <div className="container-custom">
                {/* Title and Description */}
                <div className="max-w-xl mx-auto text-center mb-16">
                    <h2 className="heading-md">{title}</h2>
                    <div className="editorial-rule my-6"></div>
                    <p className="text-lg text-neutral-600 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Responsive Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative aspect-[3/4] cursor-pointer group overflow-hidden"
                            onClick={() => openLightbox(index)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </div>
                    ))}
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
