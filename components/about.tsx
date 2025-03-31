"use client"
import Image from "next/image";

export function About() {
    return (
        <section id="About" className="w-full min-h-screen flex items-center justify-center bg-neutral-900 px-4 sm:px-6 py-12 md:py-20 lg:py-24">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-center">
                {/* Texto */}
                <div className="space-y-6 md:space-y-8">
                    <div className="mb-6 md:mb-10">
                        <h2 className="text-3xl xs:text-4xl sm:text-[2.5rem] md:text-5xl font-bold bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] bg-clip-text text-transparent mb-4">
                            Professional Profile
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] rounded-full" />
                    </div>

                    <p className="text-base xs:text-[1.05rem] md:text-lg lg:text-xl text-gray-300 leading-relaxed md:leading-loose font-light mb-6 md:mb-8">
                        {"Hello! I'm "}
                        <span className="font-semibold text-[#FF6B8B]">Gustavo Ferreira Cabral</span>
                        {", a full-stack developer specializing in building digital solutions. With 2+ years of experience, I combine technical expertise with user-centered design to create applications that are both powerful and intuitive."}
                    </p>

                    {/* Habilidades Técnicas */}
                    <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-3 gap-2 xs:gap-3 md:gap-4">
                        {['React', 'TypeScript', 'Node.js', 'Java', 'Next-Ts', 'PL/SQL'].map((skill) => (
                            <div
                                key={skill}
                                className="px-3 py-1.5 xs:py-2 text-xs xs:text-sm md:text-base bg-neutral-800 rounded-full text-center text-gray-300 
                                         hover:bg-[#FF3B5C] hover:text-white transition-all duration-300 cursor-default"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Imagem */}
                <div className="hidden lg:block relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                    <div className="relative h-64 md:h-80 lg:h-96 w-full max-w-[500px] mx-auto bg-neutral-800 rounded-2xl flex items-center justify-center overflow-hidden">
                        <Image 
                            src="/assets/images/Ticket.jpg" 
                            alt="Professional Image"
                            width={500}
                            height={500}
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                <div className="lg:hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                    <div className="relative h-64 md:h-80 lg:h-96 w-full max-w-[500px] mx-auto bg-neutral-800 rounded-2xl flex items-center justify-center overflow-hidden">
                        <Image 
                            src="/assets/images/Ticket.jpg" 
                            alt="Professional Image"
                            width={500}
                            height={500}
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}