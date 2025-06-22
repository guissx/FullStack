"use client";
import Image from "next/image";

export function About() {
    const skills = ['React', 'TypeScript', 'Node.js', 'Java', 'Next.js', 'PL/SQL', 'Tailwind', 'Express', 'SQL Server'];

    return (
        <section id="about" className="w-full min-h-screen top-20 flex items-center justify-center bg-neutral-950 px-4 sm:px-6 py-12 md:py-20 lg:py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-[#FF3B5C] blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#FF6B8B] blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-center">
                {/* Text Content */}
                <div className="space-y-6 md:space-y-8">
                    <div className="mb-6 md:mb-10">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] bg-clip-text text-transparent mb-4">
                            Professional Profile
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] rounded-full" />
                    </div>

                    <p className="text-lg text-gray-400 leading-relaxed md:leading-loose">
                        {"Hello! I'm "}
                        <span className="font-semibold text-[#FF6B8B]">Gustavo Ferreira Cabral</span>
                        {", a full-stack developer with 2+ years of experience building digital solutions. I specialize in creating performant, accessible applications with modern technologies."}
                    </p>

                    {/* Technical Skills */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                        {skills.map((skill) => (
                            <div
                                key={skill}
                                className="px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-center text-gray-300 
                                         hover:bg-gradient-to-r hover:from-[#FF3B5C]/20 hover:to-[#FF6B8B]/20 hover:border-[#FF3B5C]/30
                                         transition-all duration-300 cursor-default"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl" />
                    <div className="relative h-64 md:h-80 lg:h-96 w-full max-w-[500px] mx-auto bg-neutral-900 border border-neutral-700 rounded-3xl flex items-center justify-center overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-102">
                        <Image 
                            src="/assets/images/eu.png" 
                            alt="Gustavo Ferreira Cabral - Full Stack Developer"
                            width={500}
                            height={500}
                            className="object-cover w-full h-full"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <div className="text-white">
                                <h3 className="text-xl font-bold">Gustavo Ferreira Cabral</h3>
                                <p className="text-[#FF6B8B]">Full Stack Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}