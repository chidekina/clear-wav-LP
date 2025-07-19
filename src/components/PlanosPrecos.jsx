import React from "react";

export default function PlanosPrecos() {
    return (
        <section className="px-4 py-8 md:py-16" data-aos="fade-up">
            <h2 className="text-xl md:text-2xl font-semibold text-dark mb-6 text-center">Planos e Preços</h2>
            <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="zoom-in">
                <div className="bg-[#162447] rounded-xl shadow p-8 border border-[#2196F3]/30 flex flex-col items-center">
                    <span className="text-3xl font-bold text-white mb-2">R$ 499/mês</span>
                    <span className="text-white font-medium mb-2">Acesso completo à plataforma</span>
                    <span className="text-white/70 text-sm mb-4 text-center">Inclui integração com CRM, ERP, WhatsApp e IA</span>
                </div>
                <div className="bg-[#162447] rounded-xl shadow p-8 border border-[#2196F3]/30 flex flex-col items-center">
                    <span className="text-xl font-bold text-white mb-2">Add-on</span>
                    <span className="text-white font-medium mb-2">Consulta externa</span>
                    <span className="text-white/70 text-sm mb-4 text-center">Google Trends, Big Data Corp, Semrush etc</span>
                    <span className="text-white font-bold">R$ 9,90 por consulta</span>
                </div>
            </div>
        </section>
    );
}
