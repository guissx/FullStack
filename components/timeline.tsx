"use client"
import { motion } from "framer-motion";

const timeline = [
    {
      id: 1,
      title: "Cimatec JR",
      date: "2022",
      description: "Starting my journey at Cimatec JR (Junior Enterprise), in the Computer Projects Division",
      tech: ["HTML", "CSS", "JavaScript", "Figma"],
      link: "https://cimatecjr.com.br"  // Added link here
    },
    {
        id: 2,
        title: "Technical Designer & Project Coordinator",
        date: "2023",
        description: "Full-cycle project exec and coordinating projects ",
        tech: ["TypeScript", "Tailwind", "React", "Figma", "Node"]
      },
      {
        id: 3,
        title: "Technical Manager Track",
        date: "2024",
        description: "Full-cycle project",
        tech: ["Next-ts", "Tailwind", "Figma", "Node","Express", "Sql-Server"]
      },
      {
        id: 4,
        title: "Age Calculator",
        date: "2025",
        description: "React-Hook Aplication- Frontendmentor Challenge",
        tech: ["React", "Tailwind", "Java-Script", "Vite"],
        link: "https://age-calculator-one-kohl.vercel.app/"
      },
      {
        id: 5,
        title: "Ticket Genarator",
        date: "2025",
        description: " HTML/CSS/JS- Frontendmentor Challenge",
        tech: ["HTML", "CSS", "Java-Script"],
        link: "https://ticket-genarator-guissxs-projects.vercel.app/"
      },

      {
        id: 6,
        title: "Omni News ",
        date: "2025",
        description: "Full Stack Group Project",
        tech: ["Next-ts", "Tailwind", "Coin Gecko", "FormSpree", "TSParticles"],
        link: "https://omni-news.vercel.app/"
      },
  ];

export function Timeline() {
  return (
    <section id="projects" className="w-full min-h-screen flex items-center justify-center bg-neutral-900 px-4 sm:px-6 py-12 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl xs:text-4xl sm:text-[2.5rem] md:text-5xl font-bold bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] bg-clip-text text-transparent mb-4">
            Tech Project Timeline
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] rounded-full" />
        </div>

        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-[#FF3B5C] to-[#FF6B8B] transform -translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {timeline.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className="relative flex flex-col md:flex-row items-center gap-8"
              >
                {/* Alternating content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className={`p-6 bg-neutral-800 rounded-xl shadow-xl hover:transform hover:translate-y-2 transition-all duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <h3 className="text-xl font-semibold text-[#FF6B8B] mb-2">{project.title}</h3>
                    <span className="text-sm text-gray-400 block mb-3">{project.date}</span>
                    <p className="text-gray-300 mb-4 text-left">{project.description}</p>
                    
                    {/* Project link */}
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mb-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-sm bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] text-white px-3 py-1 rounded-md transition-all">
                          View Project →
                        </span>
                      </motion.a>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-xs bg-neutral-700 rounded-full text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline marker */}
                <div className="hidden md:block w-1/2 relative h-full">
                  <div className={`absolute top-1/2 -translate-y-1/2 ${index % 2 === 0 ? 'right-0' : 'left-0'}`}>
                    <div className="w-6 h-6 rounded-full bg-[#FF3B5C] flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-neutral-900" />
                    </div>
                  </div>
                </div>

                {/* Mobile version */}
                <div className="md:hidden absolute left-1/2 -translate-x-1/2 -translate-y-[calc(50%+20px)]">
                  <div className="w-6 h-6 rounded-full bg-[#FF3B5C] flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-neutral-900" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}