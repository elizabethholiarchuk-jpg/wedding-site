import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center">
            {/* Hero Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.jpg"
                    alt="Wedding photography"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 container-custom text-center pt-24 pb-16">
                <div className="max-w-4xl mx-auto animate-fade-in">
                    {/* Main Headline */}
                    <h1 className="heading-xl mb-8 text-white drop-shadow-lg">
                        Wedding photography with intention.
                    </h1>

                    {/* Subheadline */}
                    <p className="body-lg text-white/95 mb-12 max-w-3xl mx-auto drop-shadow-md">
                        Guided when needed. Observed when it matters.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/portfolio" className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100 border-white">
                            View Work
                        </Link>
                        <Link href="/contact" className="btn-secondary text-white border-white hover:bg-white/10">
                            Tell Me About Your Day
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
