'use client'

import { useState } from 'react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        location: '',
        message: '',
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const response = await fetch('https://formspree.io/f/mwvnverl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                alert('Thank you for your inquiry. I will respond within 48 hours.')
                // Clear form on success
                setFormData({
                    name: '',
                    email: '',
                    date: '',
                    location: '',
                    message: ''
                })
            } else {
                alert('There was a problem sending your message. Please try again or email me directly at hello@lizaholiarchuk.com')
            }
        } catch (error) {
            alert('There was a problem sending your message. Please try again or email me directly at hello@lizaholiarchuk.com')
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm uppercase tracking-wide mb-2">
                    Your Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm uppercase tracking-wide mb-2">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="date" className="block text-sm uppercase tracking-wide mb-2">
                        Wedding Date
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                    />
                </div>

                <div>
                    <label htmlFor="location" className="block text-sm uppercase tracking-wide mb-2">
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm uppercase tracking-wide mb-2">
                    Tell me about your day
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors resize-none"
                    placeholder="What matters most to you? How do you envision your wedding?"
                />
            </div>

            <button
                type="submit"
                className="btn-primary w-full md:w-auto"
            >
                Send Inquiry
            </button>
        </form>
    )
}
