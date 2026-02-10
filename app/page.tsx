import Hero from '@/components/Hero'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <Hero />

            {/* Portfolio Preview */}
            <section className="py-20 md:py-32">
                <div className="container-custom">
                    <div className="text-center mb-16 md:mb-20">
                        <h2 className="heading-md">Recent Work</h2>
                        <div className="editorial-rule my-6"></div>
                        <p className="text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed">
                            Weddings across Europe, photographed with intention and care.
                        </p>
                    </div>

                    {/* Editorial Asymmetric Layout */}
                    <div className="max-w-6xl mx-auto space-y-6">
                        {/* Hero Image - Dominant */}
                        <div className="relative w-full h-[500px] md:h-[650px]">
                            <Image
                                src="/w01-hamburg-civil/05.jpg"
                                alt="Wedding photography"
                                fill
                                className="object-cover"
                                style={{ objectPosition: '50% 50%' }}
                                quality={90}
                                priority
                            />
                        </div>

                        {/* Two Medium Images Side by Side */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative w-full h-[350px] md:h-[450px]">
                                <Image
                                    src="/w02-berlin-church/08.jpg"
                                    alt="Wedding photography"
                                    fill
                                    className="object-cover"
                                    style={{ objectPosition: '50% 20%' }}
                                    quality={90}
                                />
                            </div>
                            <div className="relative w-full h-[350px] md:h-[450px]">
                                <Image
                                    src="/w03-forest-party/04.jpg"
                                    alt="Wedding photography"
                                    fill
                                    className="object-cover"
                                    style={{ objectPosition: '50% 20%' }}
                                    quality={90}
                                />
                            </div>
                        </div>

                        {/* Small Accent Image - Detail */}
                        <div className="max-w-2xl mx-auto">
                            <div className="relative w-full h-[280px] md:h-[350px]">
                                <Image
                                    src="/w02-berlin-church/13.jpg"
                                    alt="Wedding photography"
                                    fill
                                    className="object-cover"
                                    style={{ objectPosition: '50% 10%' }}
                                    quality={90}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-16">
                        <Link href="/portfolio" className="btn-primary">
                            View Full Portfolio
                        </Link>
                    </div>
                </div>
            </section>

            {/* How I Work */}
            <section className="py-24 md:py-40 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-xl mx-auto text-center">
                        <h2 className="heading-md">How I Work</h2>
                        <div className="editorial-rule my-8"></div>
                    </div>
                    <div className="max-w-2xl mx-auto space-y-10 text-lg md:text-xl text-neutral-700 leading-loose">
                        <p>
                            Most people don&apos;t know how to act naturally in front of a camera. That&apos;s normal. My role is to make sure you never have to figure it out on your own.
                        </p>
                        <p>
                            I guide you when you need it—during portraits, group photos, moments when the day stalls or when people feel uncertain. I give clear direction that helps you relax, not instructions that make you feel managed.
                        </p>
                    </div>

                    {/* Editorial Image 1 */}
                    <div className="max-w-4xl mx-auto my-16 md:my-20">
                        <div className="relative w-full h-[400px] md:h-[600px]">
                            <Image
                                src="/w02-berlin-church/14.jpg"
                                alt="Wedding photography"
                                fill
                                className="object-cover"
                                style={{ objectPosition: '50% 65%' }}
                                quality={90}
                            />
                        </div>
                    </div>

                    <div className="max-w-2xl mx-auto space-y-10 text-lg md:text-xl text-neutral-700 leading-loose">
                        <p>
                            I work with intention. I notice when moments are unfolding naturally and step back. I read the room, anticipate what's needed, and create flow when things stall.
                        </p>
                    </div>

                    {/* Editorial Image 2 */}
                    <div className="max-w-4xl mx-auto my-16 md:my-20">
                        <div className="relative w-full h-[400px] md:h-[600px]">
                            <Image
                                src="/w01-hamburg-civil/10.jpg"
                                alt="Wedding photography"
                                fill
                                className="object-cover"
                                style={{ objectPosition: '50% 15%' }}
                                quality={90}
                            />
                        </div>
                    </div>

                    <div className="max-w-2xl mx-auto space-y-10 text-lg md:text-xl text-neutral-700 leading-loose">
                        <p className="text-neutral-900 font-serif italic text-2xl md:text-3xl leading-relaxed pt-6">
                            The result is photography that feels like you—not stiff, not overly posed, but not left to chance either.
                        </p>
                    </div>

                    <div className="text-center mt-16">
                        <Link href="/approach" className="btn-secondary">
                            Read More About My Approach
                        </Link>
                    </div>
                </div>
            </section>

            {/* Editorial Image 3 - Before CTA */}
            <section className="py-16 md:py-20 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative w-full h-[400px] md:h-[600px]">
                            <Image
                                src="/w01-hamburg-civil/14.jpg"
                                alt="Wedding photography"
                                fill
                                className="object-cover"
                                style={{ objectPosition: '50% 15%' }}
                                quality={90}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 md:py-32 border-t border-neutral-200">
                <div className="container-custom text-center">
                    <div className="max-w-xl mx-auto">
                        <p className="text-2xl md:text-3xl text-neutral-700 mb-12 leading-relaxed font-light">
                            If you want a photographer who will help you feel at ease and create images that feel true to who you are, I'd be glad to hear about your wedding.
                        </p>
                        <Link href="/contact" className="btn-primary">
                            Tell Me About Your Day
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
