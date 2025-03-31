"use client"
import { useState } from "react";
import emailjs from '@emailjs/browser';

export function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [messageStatus, setMessageStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            await emailjs.sendForm(
                'service_v383vww', 
                'template_5e24ss5',
                e.currentTarget,
                'Dq56H-ekE7HbuLo-H'
            );
            
            setMessageStatus({ type: 'success', message: 'Message sent successfully!' });
            (e.target as HTMLFormElement).reset();
        } catch { 
            setMessageStatus({ type: 'error', message: 'Error sending message. Please try again.' });
        } finally {
            setLoading(false);
        }
    };



    return (
        <section id="contact" className="w-full flex items-center justify-center bg-neutral-900 px-4 sm:px-6 py-12 md:py-20">
            <div className="max-w-3xl mx-auto w-full">
                <div className="mb-10 md:mb-14">
                    <h2 className="text-3xl xs:text-4xl sm:text-[2.5rem] md:text-5xl font-bold bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] bg-clip-text text-transparent mb-4">
                        Get in Touch
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] rounded-full" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
                                required
                                className="w-full px-4 py-3 bg-neutral-800 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF3B5C] placeholder-gray-500"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                required
                                className="w-full px-4 py-3 bg-neutral-800 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF3B5C] placeholder-gray-500"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Message</label>
                            <textarea 
                                id="message" 
                                name="message"
                                required
                                rows={5}
                                className="w-full px-4 py-3 bg-neutral-800 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF3B5C] placeholder-gray-500"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>

                    {messageStatus.type && (
                        <div className={`p-4 rounded-lg text-sm border ${
                            messageStatus.type === 'success' 
                                ? 'bg-green-900/20 border-green-800 text-green-400' 
                                : 'bg-red-900/20 border-red-800 text-red-400'
                        }`}>
                            {messageStatus.message}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}