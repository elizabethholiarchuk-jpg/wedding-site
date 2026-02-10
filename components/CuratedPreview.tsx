'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import LightboxWrapper from './LightboxWrapper'

interface ImageData {
    src: string
    alt: string
    width?: number
    height?: number
}

interface CuratedPreviewProps {
    images: ImageData[]
}

interface JustifiedRow {
    images: ImageData[]
    height: number
}

// Simple justified layout for preview (no reordering, just pack into rows)
function createPreviewRows(images: ImageData[], targetHeight: number, containerWidth: number, gap: number): JustifiedRow[] {
    const rows: JustifiedRow[] = []
    let currentRow: ImageData[] = []
    let currentWidth = 0

    for (const image of images) {
        const aspectRatio = (image.width || 1200) / (image.height || 800)
        const scaledWidth = aspectRatio * targetHeight

        const totalGap = gap * currentRow.length

        if (currentWidth + scaledWidth + totalGap > containerWidth && currentRow.length > 0) {
            const totalGap = gap * (currentRow.length - 1)
            const availableWidth = containerWidth - totalGap
            const totalAspectRatio = currentRow.reduce((sum, img) => sum + ((img.width || 1200) / (img.height || 800)), 0)
            const scaleFactor = availableWidth / (totalAspectRatio * targetHeight)
            const actualHeight = targetHeight * scaleFactor

            // Calculate explicit width for each image
            const imagesWithWidths = currentRow.map(img => {
                const aspectRatio = (img.width || 1200) / (img.height || 800)
                const width = aspectRatio * Math.max(actualHeight, 180)
                return { ...img, calculatedWidth: width }
            })

            rows.push({ images: imagesWithWidths, height: Math.max(actualHeight, 180) })
            currentRow = [image]
            currentWidth = scaledWidth
        } else {
            currentRow.push(image)
            currentWidth += scaledWidth
        }
    }

    if (currentRow.length > 0) {
        const totalGap = gap * (currentRow.length - 1)
        const availableWidth = containerWidth - totalGap
        const totalAspectRatio = currentRow.reduce((sum, img) => sum + ((img.width || 1200) / (img.height || 800)), 0)
        const scaleFactor = availableWidth / (totalAspectRatio * targetHeight)
        const actualHeight = targetHeight * scaleFactor

        // Calculate explicit width for each image
        const imagesWithWidths = currentRow.map(img => {
            const aspectRatio = (img.width || 1200) / (img.height || 800)
            const width = aspectRatio * Math.max(actualHeight, 180)
            return { ...img, calculatedWidth: width }
        })

        rows.push({ images: imagesWithWidths, height: Math.max(actualHeight, 180) })
    }

    return rows
}

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
                    resolve({ ...img, width: 1200, height: 800 })
                }
                image.src = img.src
            })
        )
    )
}

export default function CuratedPreview({ images }: CuratedPreviewProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)
    const [rows, setRows] = useState<JustifiedRow[]>([])

    useEffect(() => {
        async function processImages() {
            const withDimensions = await loadImageDimensions(images)
            const targetHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? 220 : 280
            const containerWidth = 1200
            const gap = 18

            const justifiedRows = createPreviewRows(withDimensions, targetHeight, containerWidth, gap)
            setRows(justifiedRows)
        }

        processImages()
    }, [images])

    const openLightbox = (index: number) => {
        setPhotoIndex(index)
        setLightboxOpen(true)
    }

    const getGlobalIndex = (rowIndex: number, imageIndex: number): number => {
        let count = 0
        for (let i = 0; i < rowIndex; i++) {
            count += rows[i].images.length
        }
        return count + imageIndex
    }

    return (
        <div className="space-y-4">
            <div className="justified-gallery max-w-5xl mx-auto">
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
                                        style={{ objectFit: 'contain' }}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        loading={rowIndex === 0 ? 'eager' : 'lazy'}
                                        priority={rowIndex === 0}
                                    />
                                </div>
                            )
                        })}
                    </div>
                ))}
            </div>

            <LightboxWrapper
                images={images}
                open={lightboxOpen}
                index={photoIndex}
                onClose={() => setLightboxOpen(false)}
            />
        </div>
    )
}
