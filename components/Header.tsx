'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navigation = [
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Approach', href: '/approach' },
        { name: 'About', href: '/about' },
        { name: 'For Couples', href: '/for-couples' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
            <nav className="container-custom py-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-xl md:text-2xl font-serif font-light tracking-tight hover:text-neutral-600 transition-colors"
                    >
                        Elizabeth Holiarchuk
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm tracking-wide uppercase transition-colors ${pathname === item.href
                                        ? 'text-neutral-900 font-medium'
                                        : 'text-neutral-600 hover:text-neutral-900'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-sm tracking-wide uppercase"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? 'Close' : 'Menu'}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-6 pt-6 border-t border-neutral-200 animate-fade-in">
                        <div className="flex flex-col gap-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`text-sm tracking-wide uppercase transition-colors ${pathname === item.href
                                            ? 'text-neutral-900 font-medium'
                                            : 'text-neutral-600 hover:text-neutral-900'
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
