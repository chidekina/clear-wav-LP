import React from "react";

export default function Cadastro() {
    return (
        <section id="cadastro" className="px-4 py-8 md:py-16 bg-white" data-aos="fade-up">
            <h2 className="text-xl md:text-2xl font-semibold text-dark mb-6 text-center">Solicite acesso beta</h2>
            <form className="max-w-lg mx-auto flex flex-col gap-4 w-full" data-aos="zoom-in">
                <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />
                <button
                    type="submit"
                    className="bg-[#2196F3] text-white px-6 py-3 rounded-xl font-bold text-lg shadow-2xl border border-white/30 transition w-full text-center btn-cta"
                >
                    Solicitar acesso
                </button>
            </form>
        </section>
    );
}
