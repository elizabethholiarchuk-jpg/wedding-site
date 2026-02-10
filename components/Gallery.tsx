'use client'

import Image from 'next/image'
import { useState } from 'react'

interface GalleryImage {
    src: string
    alt: string
    width: number
    height: number
}

interface GalleryProps {
    images: GalleryImage[]
    columns?: 1 | 2 | 3
}

export default function Gallery({ images, columns = 2 }: GalleryProps) {
    const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

    const handleImageLoad = (index: number) => {
        setLoadedImages(prev => new Set(prev).add(index))
    }

    const gridCols = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    }

    return (
        <div className={`grid ${gridCols[columns]} gap-4 md:gap-6 lg:gap-8`}>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`image-overlay transition-opacity duration-700 ${loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div className="relative w-full" style={{ paddingBottom: `${(image.height / image.width) * 100}%` }}>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                            onLoad={() => handleImageLoad(index)}
                            priority={index < 4}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
