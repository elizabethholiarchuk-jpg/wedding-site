import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
    title: 'Contact — Elizabeth Holiarchuk',
    description: 'Get in touch to discuss your wedding. I respond to all inquiries within 48 hours.',
}

export default function Contact() {
    return (
        <>
            {/* Header */}
            <section className="pt-32 pb-20">
                <div className="container-custom">
                    <div className="max-w-xl mx-auto text-center">
                        <h1 className="heading-xl">Get in Touch</h1>
                        <div className="editorial-rule my-8"></div>
                        <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
                            I&apos;d be glad to hear about your wedding. Share some details below, and I&apos;ll respond within 48 hours.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="pb-32">
                <div className="container-custom">
                    <ContactForm />
                </div>
            </section>

            {/* What Happens Next */}
            <section className="py-20 md:py-32 border-t border-neutral-200">
                <div className="container-custom">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h2 className="heading-md">What Happens Next</h2>
                        <div className="editorial-rule my-6"></div>
                    </div>
                    <div className="max-w-2xl mx-auto space-y-10 text-lg text-neutral-700 leading-relaxed">
                        <p>
                            After you submit your inquiry, I&apos;ll review your information and respond within 48 hours (typically sooner).
                        </p>
                        <p>
                            If it seems like we might be a good fit, I&apos;ll send you detailed information about my process, pricing, and availability. We can then schedule a call or video chat to discuss your wedding in more detail.
                        </p>
                    </div>

                    <div className="mt-16 pt-16 border-t border-neutral-300/50 text-center max-w-xl mx-auto">
                        <p className="text-base text-neutral-600 mb-4">
                            Prefer to email directly?
                        </p>
                        <a
                            href="mailto:hello@elizabethholiarchuk.com"
                            className="text-lg text-neutral-900 link-underline"
                        >
                            hello@elizabethholiarchuk.com
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
