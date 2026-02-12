import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'For Couples — Elizabeth Holiarchuk',
    description: 'What to expect when working with me. Best fit, process, and approach to wedding photography.',
}

export default function ForCouples() {
    return (
        <div className="min-h-screen">

            {/* Header */}
            <section className="pt-32 pb-20">
                <div className="container-custom">
                    <div className="max-w-xl mx-auto text-center">
                        <h1 className="heading-xl">For Couples</h1>
                        <div className="editorial-rule my-8"></div>
                        <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
                            What to expect when working with me, and who I work best with.
                        </p>
                    </div>
                </div>
            </section>

            {/* Best Fit */}
            <section className="py-20 md:py-32 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h2 className="heading-md">We&apos;re Likely a Good Fit If</h2>
                        <div className="editorial-rule my-6"></div>
                    </div>
                    <div className="max-w-2xl mx-auto space-y-10 text-lg md:text-xl text-neutral-700 leading-loose">
                        <p>
                            You value photography that feels true to who you are, not performative or overly styled.
                        </p>
                        <p>
                            You want guidance when you need it—during portraits, group photos, transitions—but don&apos;t want to feel micromanaged.
                        </p>
                        <p>
                            You appreciate intentional composition and timeless aesthetics over trendy effects.
                        </p>
                        <p>
                            You&apos;re planning a wedding in Europe (or are willing to bring me to your destination).
                        </p>
                        <p className="text-neutral-900 font-serif italic text-2xl md:text-3xl leading-relaxed pt-4">
                            You understand that great photography requires trust, collaboration, and a photographer who knows when to step in and when to step back.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mid-page CTA */}
            <section className="py-16 md:py-20 border-t border-neutral-200">
                <div className="container-custom text-center">
                    <div className="max-w-xl mx-auto">
                        <Link href="/contact" className="btn-primary">
                            Start a Conversation
                        </Link>
                    </div>
                </div>
            </section>

            {/* Editorial Image 1 */}
            <section className="py-16 md:py-20 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative w-full h-[400px] md:h-[600px]">
                            <Image
                                src="/w02-berlin-church/14.jpg"
                                alt="Couple portrait"
                                fill
                                className="object-cover"
                                style={{ objectPosition: '50% 5%' }}
                                quality={90}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Coverage Options */}
            <section className="py-20 md:py-32 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h2 className="heading-md">Coverage Options</h2>
                        <div className="editorial-rule my-6"></div>
                    </div>
                    <div className="max-w-2xl mx-auto space-y-12 text-lg text-neutral-700 leading-relaxed">
                        <div>
                            <h3 className="text-xl font-medium text-neutral-900 mb-4">Half Day</h3>
                            <p>
                                For intimate weddings, elopements, or couples who want focused coverage of their ceremony and portraits without extended reception photography.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-neutral-900 mb-4">Full Day</h3>
                            <p>
                                Complete coverage from getting ready through the first dance. This is the most common choice for weddings with a full timeline, allowing me to capture the entire flow of your day.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-neutral-900 mb-4">Multi-Day</h3>
                            <p>
                                For destination weddings or multi-day celebrations. I'll be there for welcome dinners, ceremonies, receptions, and day-after sessions—whatever your celebration includes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Editorial Image 2 */}
            <section className="py-16 md:py-20 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative w-full h-[400px] md:h-[600px]">
                            <Image
                                src="/w02-berlin-church/05.jpg"
                                alt="Wedding ceremony"
                                fill
                                className="object-cover"
                                style={{ objectPosition: '50% 15%' }}
                                quality={90}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* What to Expect */}
            <section className="py-20 md:py-32 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h2 className="heading-md">What to Expect</h2>
                        <div className="editorial-rule my-6"></div>
                    </div>
                    <div className="max-w-2xl mx-auto space-y-10 text-lg md:text-xl text-neutral-700 leading-loose">
                        <p>
                            <strong>Initial conversation.</strong> We'll discuss your wedding, your vision, and whether we're a good fit. This can be via email or video call.
                        </p>
                        <p>
                            <strong>Planning support.</strong> I&apos;ll help you think through timeline, lighting, and logistics to ensure your day flows smoothly.
                        </p>
                        <p>
                            <strong>On the day.</strong> I&apos;ll guide you when you need it, step back when you don&apos;t, and make sure you feel comfortable and taken care of.
                        </p>
                        <p>
                            <strong>Delivery.</strong> You&apos;ll receive a curated gallery of edited images, typically within 6-8 weeks. Collections are shared after we start a conversation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Editorial Image 3 */}
            <section className="py-16 md:py-20 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative w-full h-[400px] md:h-[600px]">
                            <Image
                                src="/w01-hamburg-civil/08.jpg"
                                alt="Candid wedding moment"
                                fill
                                className="object-cover"
                                style={{ objectPosition: '50% 15%' }}
                                quality={90}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Editorial Image 4 */}
            <section className="py-16 md:py-20 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative w-full h-[400px] md:h-[600px]">
                            <Image
                                src="/w03-forest-party/06.jpg"
                                alt="Wedding details"
                                fill
                                className="object-cover"
                                style={{ objectPosition: '50% 15%' }}
                                quality={90}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Editorial Image 5 */}
            <section className="py-16 md:py-20 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative w-full h-[400px] md:h-[600px]">
                            <Image
                                src="/w01-hamburg-civil/12.jpg"
                                alt="Couple together"
                                fill
                                className="object-cover"
                                style={{ objectPosition: '50% 15%' }}
                                quality={90}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Editorial Image 6 */}
            <section className="py-16 md:py-20 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative w-full h-[400px] md:h-[600px]">
                            <Image
                                src="/w02-berlin-church/16.jpg"
                                alt="Wedding celebration"
                                fill
                                className="object-cover"
                                style={{ objectPosition: '50% 15%' }}
                                quality={90}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 md:py-32 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h2 className="heading-md">Common Questions</h2>
                        <div className="editorial-rule my-6"></div>
                    </div>
                    <div className="max-w-2xl mx-auto space-y-12">
                        <div>
                            <h3 className="text-xl font-medium text-neutral-900 mb-4">When do you share pricing?</h3>
                            <p className="text-lg text-neutral-700 leading-relaxed">
                                I share detailed pricing after our initial conversation. This allows me to understand your wedding and recommend the right coverage for your day, rather than offering a one-size-fits-all package.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-neutral-900 mb-4">Do you travel?</h3>
                            <p className="text-lg text-neutral-700 leading-relaxed">
                                Yes. I&apos;m based in Hamburg and work throughout Europe and beyond. Travel costs are included in packages for weddings outside Hamburg.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 md:py-32 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-xl mx-auto text-center">
                        <p className="text-2xl md:text-3xl text-neutral-700 mb-12 leading-relaxed font-light">
                            If this sounds like the right fit, I&apos;d be glad to hear about your wedding.
                        </p>
                        <Link href="/contact" className="btn-primary">
                            Start a Conversation
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}
