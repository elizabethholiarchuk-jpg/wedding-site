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

            {/* Hero */}
            <section className="pt-20 md:pt-28 pb-12 md:pb-16">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center px-6">
                        <h1 className="heading-xl mb-8">About</h1>
                        <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed">
                            Wedding photographer based in Hamburg, working across Europe.
                        </p>
                        <div className="max-w-2xl mx-auto space-y-5 text-lg md:text-xl text-neutral-700 leading-relaxed">
                            <p>
                                I&apos;m Elizabeth. For five years, I&apos;ve photographed people in environments where timing, energy, and trust matter. Weddings are no different.
                            </p>
                            <p>
                                I don&apos;t chase trends. I pay attention — to people, to space, to what&apos;s actually happening.
                            </p>
                        </div>
                        <div className="w-full max-w-sm mx-auto h-px bg-neutral-200 mt-12"></div>
                    </div>
                </div>
            </section>

            {/* Working with me */}
            <section className="py-20 md:py-32 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                            {/* Text Block */}
                            <div className="order-2 md:order-1">
                                <h2 className="heading-md mb-8">Working with me</h2>
                                <div className="space-y-4 text-base md:text-lg text-neutral-700 leading-relaxed">
                                    <p>• You&apos;ll know when guidance is needed</p>
                                    <p>• You&apos;ll have space when it&apos;s not</p>
                                    <p>• Your day won&apos;t feel staged</p>
                                    <p>• The images won&apos;t feel temporary</p>
                                    <p className="pt-4 text-neutral-900">
                                        Photography should feel natural in the moment — and intentional in memory.
                                    </p>
                                </div>
                            </div>
                            {/* Image */}
                            <div className="order-1 md:order-2">
                                <div className="relative w-full aspect-[4/5] max-w-md mx-auto overflow-hidden border border-neutral-200">
                                    <Image
                                        src="/images/about/about-01.jpg"
                                        alt="Elizabeth Holiarchuk with camera"
                                        fill
                                        className="object-cover"
                                        style={{ objectPosition: 'center' }}
                                        quality={90}
                                        sizes="(max-width: 768px) 92vw, 480px"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="py-16 md:py-24 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-xl mx-auto text-center mb-12">
                        <h2 className="heading-md">Experience</h2>
                        <div className="editorial-rule my-6"></div>
                    </div>
                    <div className="max-w-2xl mx-auto space-y-5 text-lg text-neutral-700 text-center">
                        <p>5 years of professional photography</p>
                        <p>Events + portrait background</p>
                        <p>Based in Germany — available across Europe</p>
                        <p>English, Ukrainian, Russian — conversational German</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-28 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-serif font-light text-neutral-900 mb-6">
                            If it feels like a fit
                        </h2>
                        <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                            Send a short note with your date and location. I reply within 48 hours.
                        </p>
                        <Link href="/contact" className="btn-primary inline-block">
                            Inquire
                        </Link>
                        <p className="text-sm text-neutral-500 mt-6">
                            Or email: <a href="mailto:hello@lizaholiarchuk.com" className="underline hover:text-neutral-900 transition-colors">hello@lizaholiarchuk.com</a>
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}
