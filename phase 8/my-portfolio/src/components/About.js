import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-slate-300 max-w-3xl">
                    I'm a developer passionate about building performant web apps and creating pleasant user experiences.
                    I enjoy transforming complex problems into simple, elegant solutions using modern web technologies.
                </p>

                <div className="mt-8 grid md:grid-cols-3 gap-6">
                    <SkillCard title="Frontend" body="React, HTML, CSS, Tailwind, Accessibility" />
                    <SkillCard title="Animations" body="Framer Motion, micro-interactions, motion design" />
                    <SkillCard title="Tools" body="Git, Webpack, Vite, Testing, Performance" />
                </div>
            </motion.div>
        </section>
    );
}

function SkillCard({ title, body }) {
    return (
        <div className="p-5 rounded-xl bg-white/3 border border-white/6">
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-slate-300 text-sm">{body}</p>
        </div>
    );
}
