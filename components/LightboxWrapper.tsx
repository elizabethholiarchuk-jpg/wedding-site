'use client'

import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

interface LightboxWrapperProps {
    images: Array<{ src: string; alt: string }>
    open: boolean
    index: number
    onClose: () => void
}

export default function LightboxWrapper({ images, open, index, onClose }: LightboxWrapperProps) {
    const slides = images.map(img => ({
        src: img.src,
        alt: img.alt,
    }))

    return (
        <Lightbox
            open={open}
            close={onClose}
            index={index}
            slides={slides}
            carousel={{
                finite: false,
            }}
            controller={{
                closeOnBackdropClick: true,
            }}
        />
    )
}
