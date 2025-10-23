import React from "react";

export default function Footer() {
    return (
        <footer className="py-8 mt-12 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6 text-center text-slate-400">
                <p>© {new Date().getFullYear()} YourName. Built with ❤️ and JavaScript.</p>
            </div>
        </footer>
    );
}
