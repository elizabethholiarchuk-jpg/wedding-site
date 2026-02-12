import Link from 'next/link'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-neutral-200 bg-white">
            <div className="container-custom py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-serif font-light mb-4">
                            Elizabeth Holiarchuk
                        </h3>
                        <p className="body-sm text-neutral-600">
                            Wedding photographer based in Europe, available for destination weddings worldwide.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-sm uppercase tracking-wide mb-4 text-neutral-900">
                            Navigate
                        </h4>
                        <nav className="flex flex-col gap-2">
                            <Link href="/portfolio" className="body-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                                Portfolio
                            </Link>
                            <Link href="/approach" className="body-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                                Approach
                            </Link>
                            <Link href="/about" className="body-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                                About
                            </Link>
                            <Link href="/for-couples" className="body-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                                For Couples
                            </Link>
                            <Link href="/contact" className="body-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm uppercase tracking-wide mb-4 text-neutral-900">
                            Connect
                        </h4>
                        <div className="flex flex-col gap-2">
                            <a
                                href="mailto:hello@lizaholiarchuk.com"
                                className="body-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                            >
                                hello@lizaholiarchuk.com
                            </a>
                            <a
                                href="https://instagram.com/elizabethholiarchuk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="body-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-neutral-200">
                    <p className="text-sm text-neutral-500 text-center">
                        © {currentYear} Elizabeth Holiarchuk. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
