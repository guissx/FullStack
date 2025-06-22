"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const timeline = [
  {
    id: 1,
    title: "Omni News",
    date: "2024",
    description:
      "Full Stack application that provides real-time cryptocurrency news with dynamic UI and API integrations. Built with Next.js and Tailwind CSS, it also features a backend in Express hosted on Vercel with PostgreSQL (Neon).",
    tech: ["Next.js", "Tailwind", "TypeScript", "PostgreSQL", "Express"],
    link: "https://omni-news.vercel.app/",
    github: "https://github.com/guissx/omni-news",
  },
  {
    id: 2,
    title: "FinSync",
    date: "2024",
    description:
      "Personal finance management application. The frontend, built with Next.js and Tailwind, communicates with an Express backend that uses PostgreSQL for handling user accounts, transactions, and financial dashboards.",
    tech: ["Next.js", "Tailwind", "TypeScript", "PostgreSQL", "Express"],
    github: "https://github.com/guissx/finsync-frontend",
    backend: "https://github.com/guissx/express-backend-SD-backend",
  },
  {
    id: 3,
    title: "Workout Save",
    date: "2024",
    description:
      "A web app to register, manage, and monitor workout routines. Built with React and TypeScript, it helps users track exercises, repetitions, and progress over time.",
    tech: ["React", "TypeScript", "Tailwind", "Vite"],
    github: "https://github.com/guissx/WorkoutSave",
  },
  {
    id: 4,
    title: "QuizSocket",
    date: "2024",
    description:
      "A real-time multiplayer quiz game using WebSockets. Users can join rooms, answer questions in real time, and compete with others. The project is focused on real-time communication with Socket.io.",
    tech: ["Node.js", "Express", "Socket.io", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/guissx/QuizSocket",
  },
  {
    id: 5,
    title: "PulseTrack",
    date: "2025",
    description:
      "A full-stack health monitoring application designed to track users' heart rate, health metrics, and activity over time. Built with Next.js on the frontend and Node.js/Express with PostgreSQL on the backend.",
    tech: ["Next.js", "Tailwind", "TypeScript", "Express", "PostgreSQL"],
    github: "https://github.com/guissx/PulseTrack",
  },
];


export function Timeline() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex items-center justify-center bg-neutral-950 px-4 sm:px-6 py-20 relative overflow-hidden"
    >
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-[#FF3B5C] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#FF6B8B] blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] bg-clip-text text-transparent"
          >
            Tech Project Timeline
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mt-4"
          >
            My journey through technology projects, highlighting skills and
            experiences.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="h-1 w-24 bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] rounded-full mx-auto mt-6 origin-left"
          />
        </div>

        <div className="relative">
          {/* Central vertical line */}
          <motion.div
            className="absolute left-1/2 top-0 w-1 h-[calc(100%-150px)] bg-gradient-to-b from-[#FF3B5C] to-[#FF6B8B] transform -translate-x-1/2 rounded-full shadow-[0_0_15px_2px_rgba(255,59,92,0.3)]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ transformOrigin: "top center" }}
          />

          {/* Timeline Items */}
          <div className="space-y-14 md:space-y-24">
            {timeline.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.6 }}
                className="relative flex flex-col md:flex-row items-center gap-8 group"
              >
                {/* Card */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12 md:order-2"
                  }`}
                >
                  <div
                    className={`p-6 sm:p-8 bg-neutral-900 border border-neutral-700 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF3B5C]/10 to-[#FF6B8B]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-3xl" />
                    <h3 className="text-2xl font-semibold text-[#FF6B8B] mb-1">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {project.date}
                    </span>
                    <p className="text-gray-300 mt-4 mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Links */}
                    <div
                      className={`flex gap-3 mb-4 ${
                        index % 2 === 0
                          ? "md:justify-end"
                          : "md:justify-start"
                      }`}
                    >
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="text-sm bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] text-white px-3 py-1 rounded-md flex items-center gap-1">
                            Live Demo <FiExternalLink size={14} />
                          </span>
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="text-sm bg-neutral-700 hover:bg-neutral-600 text-white px-3 py-1 rounded-md flex items-center gap-1">
                            Code <FiGithub size={14} />
                          </span>
                        </motion.a>
                      )}
                    </div>

                    <div
                      className={`flex flex-wrap gap-2 ${
                        index % 2 === 0
                          ? "md:justify-end"
                          : "md:justify-start"
                      }`}
                    >
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          initial={{ scale: 0.8 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 text-xs bg-neutral-800 border border-neutral-600 rounded-full text-gray-300 hover:bg-neutral-700 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Marker */}
                <div className="hidden md:block w-1/2 relative h-full">
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 ${
                      index % 2 === 0 ? "right-0" : "left-0"
                    }`}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="w-8 h-8 rounded-full bg-[#FF3B5C] flex items-center justify-center shadow-[0_0_15px_2px_rgba(255,59,92,0.5)] group-hover:shadow-[0_0_20px_5px_rgba(255,59,92,0.7)] transition-shadow"
                    >
                      <div className="w-4 h-4 rounded-full bg-neutral-900" />
                    </motion.div>

                    <div
                      className={`absolute top-1/2 -translate-y-1/2 h-1 bg-[#FF3B5C] transition-all duration-300 ${
                        index % 2 === 0
                          ? "right-0 translate-x-full w-16 group-hover:w-24"
                          : "left-0 -translate-x-full w-16 group-hover:w-24"
                      }`}
                    />
                  </div>
                </div>

                {/* Mobile Marker */}
                <div className="md:hidden absolute left-1/2 -translate-x-1/2 -translate-y-[calc(50%+20px)]">
                  <div className="w-8 h-8 rounded-full bg-[#FF3B5C] flex items-center justify-center shadow-[0_0_15px_2px_rgba(255,59,92,0.5)]">
                    <div className="w-4 h-4 rounded-full bg-neutral-900" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl font-semibold text-gray-300 mb-4">
              Want to see more projects?
            </h3>
            <motion.a
              href="https://github.com/guissx"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] text-white text-lg font-medium shadow-md hover:shadow-lg transition"
            >
              Visit My GitHub <FiGithub size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
