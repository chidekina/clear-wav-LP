import React from "react";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-4 py-1 bg-[#0A1833] shadow-sm md:px-6 md:py-2">
            <div className="flex items-center gap-3">
                <img src="/clear-wave.png" alt="Clear Wave Logo" className="w-64" />
            </div>
            <a
                href="#cadastro"
                className="bg-[#2196F3] text-white px-4 py-2 rounded-xl font-bold text-base shadow-2xl border border-white/30 hover:bg-[#1976d2] transition md:px-6 md:py-3 md:text-lg"
            >
                Solicitar Acesso Beta
            </a>
        </header>
    );
}
