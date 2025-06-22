"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";

export function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [messageStatus, setMessageStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                e.currentTarget,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            setMessageStatus({
                type: "success",
                message: "Message sent successfully! I'll get back to you soon.",
            });
            (e.target as HTMLFormElement).reset();
        } catch {
            setMessageStatus({
                type: "error",
                message: "Error sending message. Please try again or contact me directly.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="w-full flex items-center justify-center bg-neutral-950 px-4 sm:px-6 py-12 md:py-20 relative overflow-hidden"
        >
            {/* Background Blur Effect */}
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-[#FF3B5C] blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#FF6B8B] blur-3xl" />
            </div>

            <div className="max-w-3xl mx-auto w-full relative z-10">
                {/* Heading */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-16 text-center"
                >
                    <motion.h2
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] bg-clip-text text-transparent mb-4"
                    >
                        Get in Touch
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-400 max-w-2xl mx-auto"
                    >
                        Have a project in mind or want to collaborate? Send me a message.
                    </motion.p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="h-1 w-24 bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] rounded-full mx-auto mt-6 origin-left"
                    />
                </motion.div>

                {/* Form */}
                <motion.form 
                    onSubmit={handleSubmit} 
                    className="space-y-6 bg-neutral-900 border border-neutral-700 rounded-3xl p-6 sm:p-8 shadow-xl"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="space-y-5">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-400 mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF3B5C]/50 focus:border-transparent placeholder-gray-500 transition-all"
                                placeholder="Your name"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-400 mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF3B5C]/50 focus:border-transparent placeholder-gray-500 transition-all"
                                placeholder="your@email.com"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-400 mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF3B5C]/50 focus:border-transparent placeholder-gray-500 transition-all"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="pt-2"
                    >
                        <motion.button
                            type="submit"
                            disabled={loading}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] text-white py-3 px-6 rounded-xl font-medium hover:shadow-lg hover:shadow-[#FF3B5C]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message <FiSend className="ml-1" />
                                </>
                            )}
                        </motion.button>
                    </motion.div>

                    {messageStatus.type && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`p-4 rounded-xl border ${
                                messageStatus.type === "success"
                                    ? "bg-green-900/20 border-green-800 text-green-400"
                                    : "bg-red-900/20 border-red-800 text-red-400"
                            }`}
                        >
                            {messageStatus.message}
                        </motion.div>
                    )}
                </motion.form>
            </div>
        </section>
    );
}