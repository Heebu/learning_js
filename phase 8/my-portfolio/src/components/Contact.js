import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [values, setValues] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    const onChange = (e) => setValues(v => ({ ...v, [e.target.name]: e.target.value }));

    const onSubmit = (e) => {
        e.preventDefault();
        // Placeholder: integrate EmailJS or your API here.
        // Simulate send:
        setSent(true);
        setTimeout(() => setSent(false), 2000);
        setValues({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="py-20">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
                <p className="text-slate-300 mb-6">Interested in working together? Fill the form and I’ll get back to you.</p>

                <form onSubmit={onSubmit} className="max-w-2xl">
                    <div className="grid md:grid-cols-2 gap-4">
                        <input required name="name" value={values.name} onChange={onChange} className="p-3 rounded bg-white/3 border border-white/6" placeholder="Your name" />
                        <input required name="email" value={values.email} onChange={onChange} className="p-3 rounded bg-white/3 border border-white/6" placeholder="Your email" />
                        <textarea required name="message" value={values.message} onChange={onChange} className="p-3 rounded bg-white/3 border border-white/6 md:col-span-2" placeholder="Your message" rows="5" />
                    </div>

                    <div className="mt-4">
                        <button type="submit" className="bg-brand-500 text-black px-5 py-3 rounded-md font-semibold">
                            {sent ? "Sent" : "Send message"}
                        </button>
                    </div>
                </form>
            </motion.div>
        </section>
    );
}
