import React from "react";

export default function Hero() {
    return (
        <section className="flex flex-col items-center text-center px-4 py-12 md:py-20" data-aos="fade-up">
            <h1 className="text-3xl md:text-5xl font-bold text-dark mb-4 title-glow" data-aos="zoom-in" data-aos-delay="100">Transforme dados em decisões com clareza</h1>
            <p className="text-lg md:text-2xl text-dark/80 mb-6" data-aos="fade" data-aos-delay="200">Uma IA conectada ao cérebro da sua empresa</p>
            <a href="#cadastro" className="bg-[#2196F3] text-white px-6 py-3 rounded-xl font-bold text-lg shadow-2xl border border-white/30 hover:bg-[#1976d2] transition btn-cta" data-aos="zoom-in-up" data-aos-delay="300">Quero Testar o Clear</a>
        </section>
    );
}
