import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="hero" className="min-h-[70vh] flex items-center">
            <div className="w-full grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                        Hi, I’m <span className="text-brand-500">YourName</span><br/>
                        I build thoughtful web experiences.
                    </h1>
                    <p className="text-slate-300 mb-6 max-w-xl">
                        Frontend-focused developer building responsive apps with clean code and delightful UX.
                        I love animation, performance, and the small details that make interfaces feel alive.
                    </p>
                    <div className="flex gap-3">
                        <a href="#projects" className="inline-block bg-brand-500 text-black px-5 py-3 rounded-md font-semibold shadow hover:bg-brand-700 transition">See projects</a>
                        <a href="#contact" className="inline-block border border-white/10 px-5 py-3 rounded-md hover:bg-white/5 transition">Contact me</a>
                    </div>
                </motion.div>

                <motion.div
                    className="bg-gradient-to-br from-white/5 to-white/3 p-6 rounded-2xl shadow-xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div className="w-full h-56 rounded-lg bg-gradient-to-br from-[#062a2b] to-[#063447] p-4 flex flex-col justify-between">
                        <div className="text-sm text-slate-300">Latest project</div>
                        <div>
                            <h3 className="text-xl font-semibold">Awesome App</h3>
                            <p className="text-sm text-slate-300">A UI-first app with delightful micro-interactions.</p>
                        </div>
                        <div className="text-xs text-slate-400">React · Framer Motion · Tailwind</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
