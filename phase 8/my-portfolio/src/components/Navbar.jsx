import React, { useState, useEffect } from "react";

const NavLink = ({ href, children }) => (
    <a href={href} className="px-3 py-2 rounded-md hover:bg-white/5 transition">
        {children}
    </a>
);

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition ${scrolled ? 'bg-black/40 shadow-md' : 'bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
                <a href="#hero" className="font-display font-bold text-xl tracking-tight">YourName</a>
                <div className="hidden md:flex items-center">
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
                    <a href="#projects" className="ml-4 inline-block bg-brand-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-brand-700 transition">See Work</a>
                </div>
                <div className="md:hidden">
                    <MobileMenu />
                </div>
            </div>
        </nav>
    );
}

function MobileMenu() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setOpen(!open)} className="p-2 rounded-md hover:bg-white/5">
                {open ? "Close" : "Menu"}
            </button>
            {open && (
                <div className="absolute right-4 mt-12 bg-black/60 backdrop-blur rounded-md p-3">
                    <a href="#about" onClick={() => setOpen(false)} className="block py-2 px-3">About</a>
                    <a href="#projects" onClick={() => setOpen(false)} className="block py-2 px-3">Projects</a>
                    <a href="#contact" onClick={() => setOpen(false)} className="block py-2 px-3">Contact</a>
                </div>
            )}
        </div>
    );
}
