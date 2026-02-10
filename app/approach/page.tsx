import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Approach — Elizabeth Holiarchuk',
    description: 'How I work: wedding photography with intention. Guided when needed, observant when it matters. Professional presence without intrusion.',
}

export default function Approach() {
    return (
        <div className="min-h-screen">

            {/* Header */}
            <section className="pt-32 pb-20">
                <div className="container-custom">
                    <div className="max-w-xl mx-auto text-center">
                        <h1 className="heading-xl">Approach</h1>
                        <div className="editorial-rule my-8"></div>
                        <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
                            Most people don&apos;t know how to act naturally in front of a camera. My role is to make sure you never have to figure it out on your own.
                        </p>
                        <p className="text-sm italic text-neutral-500 mt-6">
                            Guided when needed. Invisible when not.
                        </p>
                    </div>
                </div>
            </section>

            {/* Supporting Image */}
            <section className="pb-20 md:pb-32">
                <div className="container-custom">
                    <div className="relative w-full h-[350px] md:h-[500px] max-w-5xl mx-auto">
                        <Image
                            src="/images/hero.jpg"
                            alt="Wedding photography"
                            fill
                            className="object-cover"
                            style={{ objectPosition: '50% 15%' }}
                            quality={90}
                        />
                    </div>
                </div>
            </section>

            {/* In practice */}
            <section className="py-20 md:py-32 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h2 className="heading-md">In practice</h2>
                        <div className="editorial-rule my-6"></div>
                    </div>
                    <div className="max-w-2xl mx-auto">
                        <ul className="space-y-4 text-lg md:text-xl text-neutral-700 leading-loose">
                            <li>You&apos;ll never wonder what to do.</li>
                            <li>No interruptions during real moments.</li>
                            <li>Light + framing that feels editorial, not posed.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* How I Work */}
            <section className="py-20 md:py-32 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h2 className="heading-md">How I Work</h2>
                        <div className="editorial-rule my-6"></div>
                    </div>
                    <div className="max-w-2xl mx-auto space-y-8 text-lg md:text-xl text-neutral-700 leading-loose">
                        <p>
                            I guide you during portraits, group photos, and moments when the day stalls. Clear direction that helps you relax, not instructions that make you feel managed.
                        </p>
                        <p>
                            When the moment doesn&apos;t need me, I step back. I read the room and know when my presence should fade into the background.
                        </p>
                        <p className="text-neutral-900 font-serif italic text-2xl md:text-3xl leading-relaxed pt-4">
                            The result is photography that feels like you—comfortable, honest, and never forced.
                        </p>
                    </div>
                </div>
            </section>

            {/* When I Guide */}
            <section className="py-24 md:py-40 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-xl mx-auto text-center mb-20">
                        <h2 className="heading-md">When I Guide</h2>
                        <div className="editorial-rule my-6"></div>
                        <p className="text-lg text-neutral-600 leading-relaxed">
                            I take the lead during moments that would otherwise feel awkward or unclear.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
                        <div>
                            <h3 className="text-base font-medium text-neutral-900 mb-4 tracking-wide uppercase">Portraits</h3>
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                I position you in flattering light, suggest natural movement, and help you feel at ease. You won&apos;t be left wondering what to do with your hands or where to look.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-base font-medium text-neutral-900 mb-4 tracking-wide uppercase">Group Photos</h3>
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                I organize people quickly and clearly. No one stands around confused. No one feels uncomfortable.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-base font-medium text-neutral-900 mb-4 tracking-wide uppercase">Moments of Pressure</h3>
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                When the timeline is tight or energy is low, I create structure. I keep things moving without making it feel rushed.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-base font-medium text-neutral-900 mb-4 tracking-wide uppercase">Transitions</h3>
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                Between ceremony and reception, during family photos, when guests don&apos;t know what&apos;s expected—I provide clarity so you can stay present.
                            </p>
                        </div>
                    </div>

                    <div className="max-w-xl mx-auto text-center mt-20">
                        <p className="text-lg text-neutral-700 leading-relaxed italic">
                            This is not about control. It&apos;s about removing uncertainty so you can be yourself.
                        </p>
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
                                alt="Guided couple portrait"
                                fill
                                className="object-cover"
                                style={{ objectPosition: '50% 65%' }}
                                quality={90}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* When I Step Back */}
            <section className="py-20 md:py-32 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h2 className="heading-md">When I Step Back</h2>
                        <div className="editorial-rule my-6"></div>
                    </div>
                    <div className="max-w-2xl mx-auto space-y-8 text-lg md:text-xl text-neutral-700 leading-loose">
                        <p>
                            I don&apos;t interrupt moments that are already unfolding naturally.
                        </p>
                        <p>
                            When you&apos;re with your partner during golden hour, I&apos;m not repositioning you every thirty seconds. When your family is laughing together, I&apos;m not stopping them to recreate it.
                        </p>
                        <p>
                            I work with what&apos;s real. I frame it well, I wait for the right light, I anticipate the moment—but I don&apos;t manufacture it.
                        </p>
                        <p className="text-neutral-900 font-medium pt-4">
                            You&apos;ll notice me when you need direction. You won&apos;t notice me when you don&apos;t.
                        </p>
                    </div>
                </div>
            </section>

            {/* Editorial Image 2 */}
            <section className="py-16 md:py-20 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative w-full h-[400px] md:h-[600px]">
                            <Image
                                src="/w01-hamburg-civil/10.jpg"
                                alt="Natural wedding moment"
                                fill
                                className="object-cover"
                                style={{ objectPosition: '50% 15%' }}
                                quality={90}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* What This Means for You */}
            <section className="py-20 md:py-32 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h2 className="heading-md">What This Means for You</h2>
                        <div className="editorial-rule my-6"></div>
                    </div>
                    <div className="max-w-2xl mx-auto space-y-8 text-lg md:text-xl text-neutral-700 leading-loose">
                        <p>
                            You will feel taken care of. You won&apos;t be left guessing what to do or how to act.
                        </p>
                        <p>
                            You won&apos;t feel stiff, awkward, or like you&apos;re performing.
                        </p>
                        <p>
                            The photos will feel true to who you are—not because I disappeared, but because I knew when to help and when to let the moment be.
                        </p>
                        <p className="text-neutral-900 font-serif italic text-2xl md:text-3xl leading-relaxed pt-4">
                            Editorial wedding photography with intention. Guided when it needs to be. Natural when it should be.
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
                                src="/w02-berlin-church/08.jpg"
                                alt="Wedding photography with intention"
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
                <div className="container-custom">
                    <div className="max-w-xl mx-auto text-center">
                        <p className="text-2xl md:text-3xl text-neutral-700 mb-12 leading-relaxed font-light">
                            If this feels like the right approach for you, I&apos;d be glad to hear about your wedding.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="btn-primary">
                                Tell Me About Your Day
                            </Link>
                            <Link href="/portfolio" className="btn-secondary">
                                View Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
