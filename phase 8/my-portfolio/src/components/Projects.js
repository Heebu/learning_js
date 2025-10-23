import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "Todo App",
        description: "A clean todo app with local storage and animations.",
        tags: ["React", "Tailwind"],
        live: "#",
        repo: "#"
    },
    {
        id: 2,
        title: "Weather App",
        description: "Fetches weather data from OpenWeather and shows dynamic UI.",
        tags: ["Vanilla JS", "APIs"],
        live: "#",
        repo: "#"
    },
    {
        id: 3,
        title: "Portfolio",
        description: "This site — React + Tailwind + Framer Motion.",
        tags: ["React", "Framer Motion", "Tailwind"],
        live: "#",
        repo: "#"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <h2 className="text-3xl font-bold mb-6">Selected Projects</h2>

            <div className="grid md:grid-cols-3 gap-6">
                {projects.map((p, i) => (
                    <motion.article
                        key={p.id}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: i * 0.08 }}
                        className="p-5 rounded-xl bg-white/3 border border-white/6 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-xl font-semibold">{p.title}</h3>
                            <p className="text-slate-300 mt-2 text-sm">{p.description}</p>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <div className="flex gap-2">
                                {p.tags.map((t) => (
                                    <span key={t} className="text-xs bg-white/5 px-2 py-1 rounded">{t}</span>
                                ))}
                            </div>

                            <div className="flex gap-2">
                                <a href={p.repo} className="p-2 rounded hover:bg-white/5" aria-label="repo">
                                    <FaGithub />
                                </a>
                                <a href={p.live} className="p-2 rounded hover:bg-white/5" aria-label="live">
                                    <FaExternalLinkAlt />
                                </a>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
