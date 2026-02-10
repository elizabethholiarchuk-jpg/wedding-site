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
            <section className="pt-32 pb-20">
                <div className="container-custom">
                    <div className="max-w-xl mx-auto text-center">
                        <h1 className="heading-xl">About</h1>
                        <div className="editorial-rule my-8"></div>
                        <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
                            Wedding photographer based in Hamburg, working across Europe.
                        </p>
                        <p className="text-sm italic text-neutral-500 mt-6">
                            Guided when needed. Observed when it matters.
                        </p>
                    </div>
                </div>
            </section>

            {/* Bio */}
            <section className="py-20 md:py-32 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h2 className="heading-md">Background</h2>
                        <div className="editorial-rule my-6"></div>
                    </div>
                    <div className="max-w-2xl mx-auto space-y-10 text-lg md:text-xl text-neutral-700 leading-loose">
                        <p>
                            I&apos;m Elizabeth, a wedding photographer based in Hamburg, working across Europe.
                        </p>
                        <p>
                            I&apos;ve been working as a professional photographer for five years, including corporate and event photography. Wedding photography has become my focus because it combines intentional composition with real human moments.
                        </p>
                        <p>
                            I approach weddings with calm presence and attention. I guide you when you need it—during portraits, group photos, moments when the day stalls. I notice when moments are unfolding naturally and step back.
                        </p>
                        <p className="text-neutral-900 font-serif italic text-2xl md:text-3xl leading-relaxed pt-4">
                            I work with couples who value photography that feels true to who they are. People who want images that will age well, not chase trends.
                        </p>
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="py-20 md:py-32 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h2 className="heading-md">Experience</h2>
                        <div className="editorial-rule my-6"></div>
                    </div>
                    <div className="max-w-2xl mx-auto space-y-10 text-lg text-neutral-700 leading-relaxed">
                        <p>
                            <strong>5 years</strong> of professional photography, including corporate and event work
                        </p>
                        <p>
                            <strong>Based in</strong> Hamburg, available for travel throughout Europe and beyond
                        </p>
                        <p>
                            <strong>Approach</strong> Intentional composition, attentive presence, professional guidance
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 md:py-32 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-xl mx-auto text-center">
                        <p className="text-2xl md:text-3xl text-neutral-700 mb-12 leading-relaxed font-light">
                            If you&apos;d like to work together, I&apos;d be glad to hear about your day.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="btn-primary">
                                Tell Me About Your Day
                            </Link>
                            <Link href="/for-couples" className="btn-secondary">
                                What to Expect
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
