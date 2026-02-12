import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'About — Elizabeth Holiarchuk',
    description: 'Wedding photographer based in Hamburg, working across Europe with intention and care.',
}

export default function About() {
    return (
        <div className="min-h-screen">

            {/* Header */}
            <section className="pt-32 pb-24 md:pb-32">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="heading-xl mb-8">About</h1>
                        <div className="editorial-rule my-8"></div>
                        <h2 className="text-3xl md:text-4xl font-serif font-light text-neutral-900 mb-6 leading-tight">
                            Calm presence. Editorial eyes.
                        </h2>
                        <p className="text-lg md:text-xl text-neutral-600 mb-8">
                            Based in Hamburg. Available across Europe.
                        </p>
                        <p className="text-lg md:text-xl text-neutral-700 leading-relaxed max-w-2xl mx-auto">
                            I work with couples who want photographs that feel honest, composed, and quietly powerful. Clear direction when needed. Space when it matters. Images built to age well.
                        </p>
                    </div>
                </div>
            </section>

            {/* Behind the camera */}
            <section className="py-24 md:py-40 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
                            {/* Text Block */}
                            <div className="order-2 md:order-1">
                                <h2 className="heading-md mb-8">Behind the camera</h2>
                                <div className="space-y-6 text-base md:text-lg text-neutral-700 leading-relaxed">
                                    <ul className="space-y-3">
                                        <li>Direction that feels natural, not forced</li>
                                        <li>Awareness of light, timing, and composition</li>
                                        <li>Presence without intrusion</li>
                                    </ul>
                                    <p className="pt-4">
                                        Working with me feels calm. You won&apos;t be left guessing what to do, but you also won&apos;t feel micromanaged. I guide when it helps, step back when it doesn&apos;t, and make sure you feel taken care of throughout your day.
                                    </p>
                                </div>
                            </div>
                            {/* Image */}
                            <div className="order-1 md:order-2">
                                <div className="relative w-full aspect-[3/4] max-w-md mx-auto overflow-hidden">
                                    <Image
                                        src="/images/about/about-01.jpg"
                                        alt="Elizabeth Holiarchuk with camera"
                                        fill
                                        className="object-cover"
                                        quality={90}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="py-24 md:py-32 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h2 className="heading-md">Experience</h2>
                        <div className="editorial-rule my-6"></div>
                    </div>
                    <div className="max-w-2xl mx-auto space-y-6 text-lg text-neutral-700">
                        <p>
                            <strong>Background:</strong> 5 years professional photography (events + portrait work).
                        </p>
                        <p>
                            <strong>Base:</strong> Hamburg, traveling across Europe.
                        </p>
                        <p>
                            <strong>Approach:</strong> Intentional composition + calm direction.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 md:py-32 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-serif font-light text-neutral-900 mb-6">
                            If it feels like a fit
                        </h2>
                        <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                            Send a short note with your date and location. I&apos;ll reply within 48 hours with availability and next steps.
                        </p>
                        <Link href="/contact" className="btn-primary">
                            Inquire
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}
