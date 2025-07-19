import React from "react";

export default function ExemploReal() {
    return (
        <section className="px-4 py-8 md:py-16 bg-primary/5" data-aos="fade-up">
            <h2 className="text-xl md:text-2xl font-semibold text-dark mb-6 text-center">Exemplo de uso real</h2>
            <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-6 flex flex-col gap-4" data-aos="zoom-in">
                <div className="flex gap-2 items-center">
                    <span className="bg-primary text-white rounded-full px-3 py-1 text-sm font-semibold">Pergunta</span>
                    <span className="text-dark">Qual produto teve maior crescimento de vendas no último mês?</span>
                </div>
                <div className="flex gap-2 items-center">
                    <span className="bg-dark text-white rounded-full px-3 py-1 text-sm font-semibold">Resposta IA</span>
                    <span className="text-dark">O produto "XWave Pro" teve crescimento de 32%, impulsionado por buscas no Google Trends e campanhas no WhatsApp.</span>
                </div>
            </div>
        </section>
    );
}
