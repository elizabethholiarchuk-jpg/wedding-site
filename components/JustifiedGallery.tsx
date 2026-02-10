'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import LightboxWrapper from './LightboxWrapper'

interface ImageData {
    src: string
    alt: string
    width?: number
    height?: number
}

interface JustifiedGalleryProps {
    images: ImageData[]
    title?: string
    description?: string
    reorderWindow?: number
    cropMode?: 'smart' | 'contain' | 'cover'
}

interface JustifiedRow {
    images: ImageData[]
    height: number
    cropMode: 'contain' | 'cover'
}

// Load image dimensions
async function loadImageDimensions(images: ImageData[]): Promise<ImageData[]> {
    return Promise.all(
        images.map(img =>
            new Promise<ImageData>((resolve) => {
                if (img.width && img.height) {
                    resolve(img)
                    return
                }
                const image = new window.Image()
                image.onload = () => {
                    resolve({ ...img, width: image.naturalWidth, height: image.naturalHeight })
                }
                image.onerror = () => {
                    // Fallback dimensions
                    resolve({ ...img, width: 1200, height: 800 })
                }
                image.src = img.src
            })
        )
    )
}

// Smart reorder: balance aspect ratios within windows, keep first 3 locked
function smartReorder(images: ImageData[], windowSize: number): ImageData[] {
    if (images.length <= 3) return images

    const locked = images.slice(0, 3)
    const remaining = images.slice(3)

    const result: ImageData[] = []

    for (let i = 0; i < remaining.length; i += windowSize) {
        const window = remaining.slice(i, i + windowSize)
        const optimized = optimizeWindow(window)
        result.push(...optimized)
    }

    return [...locked, ...result]
}

function optimizeWindow(images: ImageData[]): ImageData[] {
    if (!images.length) return []

    const landscapes = images.filter(img => {
        const ratio = (img.width || 1200) / (img.height || 800)
        return ratio > 1.2
    })
    const portraits = images.filter(img => {
        const ratio = (img.width || 1200) / (img.height || 800)
        return ratio <= 1.2
    })

    // Interleave for better row packing
    const result: ImageData[] = []
    const maxLen = Math.max(landscapes.length, portraits.length)

    for (let i = 0; i < maxLen; i++) {
        if (i < landscapes.length) result.push(landscapes[i])
        if (i < portraits.length) result.push(portraits[i])
    }

    return result
}

// Create justified rows
function createJustifiedRows(
    images: ImageData[],
    targetHeight: number,
    containerWidth: number,
    gap: number
): JustifiedRow[] {
    const rows: JustifiedRow[] = []
    let currentRow: ImageData[] = []
    let currentWidth = 0

    for (const image of images) {
        const aspectRatio = (image.width || 1200) / (image.height || 800)
        const scaledWidth = aspectRatio * targetHeight

        const totalGap = gap * currentRow.length

        if (currentWidth + scaledWidth + totalGap > containerWidth && currentRow.length > 0) {
            rows.push(finalizeRow(currentRow, containerWidth, targetHeight, gap))
            currentRow = [image]
            currentWidth = scaledWidth
        } else {
            currentRow.push(image)
            currentWidth += scaledWidth
        }
    }

    if (currentRow.length > 0) {
        rows.push(finalizeRow(currentRow, containerWidth, targetHeight, gap))
    }

    return rows
}

function finalizeRow(
    images: ImageData[],
    containerWidth: number,
    targetHeight: number,
    gap: number
): JustifiedRow {
    const totalGap = gap * (images.length - 1)
    const availableWidth = containerWidth - totalGap

    const totalAspectRatio = images.reduce((sum, img) => {
        return sum + ((img.width || 1200) / (img.height || 800))
    }, 0)

    const scaleFactor = availableWidth / (totalAspectRatio * targetHeight)
    const actualHeight = targetHeight * scaleFactor

    // Smart crop mode: only use cover if scale factor is extreme
    const cropMode = (scaleFactor < 0.85 || scaleFactor > 1.15) ? 'cover' : 'contain'

    // Calculate explicit width for each image
    const imagesWithWidths = images.map(img => {
        const aspectRatio = (img.width || 1200) / (img.height || 800)
        const width = aspectRatio * Math.max(actualHeight, 180)
        return { ...img, calculatedWidth: width }
    })

    return {
        images: imagesWithWidths,
        height: Math.max(actualHeight, 180), // Min height
        cropMode
    }
}

export default function JustifiedGallery({
    images,
    title,
    description,
    reorderWindow = 8,
    cropMode = 'smart'
}: JustifiedGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)
    const [rows, setRows] = useState<JustifiedRow[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function processImages() {
            setIsLoading(true)

            // Load dimensions
            const withDimensions = await loadImageDimensions(images)

            // Smart reorder
            const reordered = smartReorder(withDimensions, reorderWindow)

            // Create justified rows with responsive container width
            const targetHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? 220 :
                typeof window !== 'undefined' && window.innerWidth < 1024 ? 280 : 340

            // Responsive container width with max-width constraint
            const containerWidth = typeof window !== 'undefined'
                ? Math.min(window.innerWidth - 48, 1200) // 48px for padding (24px each side)
                : 1200

            const gap = 20

            const justifiedRows = createJustifiedRows(reordered, targetHeight, containerWidth, gap)
            setRows(justifiedRows)
            setIsLoading(false)
        }

        processImages()
    }, [images, reorderWindow])

    const openLightbox = (index: number) => {
        setPhotoIndex(index)
        setLightboxOpen(true)
    }

    // Calculate global image index from row/image indices
    const getGlobalIndex = (rowIndex: number, imageIndex: number): number => {
        let count = 0
        for (let i = 0; i < rowIndex; i++) {
            count += rows[i].images.length
        }
        return count + imageIndex
    }

    return (
        <section className="py-20 md:py-32 border-t border-neutral-200">
            <div className="container-custom">
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

                <div className="justified-gallery">
                    {rows.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="justified-row"
                            style={{ height: `${row.height}px` }}
                        >
                            {row.images.map((image, imageIndex) => {
                                const globalIndex = getGlobalIndex(rowIndex, imageIndex)
                                const width = (image as any).calculatedWidth || 300

                                return (
                                    <div
                                        key={imageIndex}
                                        className="justified-image"
                                        style={{ width: `${width}px` }}
                                        onClick={() => openLightbox(globalIndex)}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            style={{ objectFit: row.cropMode }}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            loading={rowIndex === 0 ? 'eager' : 'lazy'}
                                            priority={rowIndex === 0}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    ))}
                </div>
            </div>

            <LightboxWrapper
                images={images}
                open={lightboxOpen}
                index={photoIndex}
                onClose={() => setLightboxOpen(false)}
            />
        </section>
    )
}
