import React from "react";
import { CheckCircleIcon, BoltIcon, ChartBarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const benefits = [
    {
        icon: <CheckCircleIcon className="h-8 w-8 text-primary" />, title: 'Centralização de Dados', desc: 'Todos os dados internos e externos em um só lugar.'
    },
    {
        icon: <BoltIcon className="h-8 w-8 text-primary" />, title: 'Respostas Rápidas', desc: 'Insights em segundos, sem espera.'
    },
    {
        icon: <ChartBarIcon className="h-8 w-8 text-primary" />, title: 'Análise Preditiva', desc: 'Antecipe tendências e oportunidades.'
    },
    {
        icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-primary" />, title: 'WhatsApp Integrado', desc: 'Receba insights direto no WhatsApp.'
    },
];

export default function Beneficios() {
    return (
        <section className="px-4 py-8 md:py-16" data-aos="fade-up">
            <h2 className="text-xl md:text-2xl font-semibold text-dark mb-6 text-center">Benefícios</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {benefits.map((b, i) => (
                    <div key={i} className="flex flex-col items-center bg-[#162447] rounded-2xl shadow-2xl p-6 border border-[#2196F3]/30" data-aos="zoom-in" data-aos-delay={i * 150}>
                        {b.icon}
                        <h3 className="mt-3 text-lg font-bold text-dark title-glow">{b.title}</h3>
                        <p className="text-dark/70 mt-2 text-center text-sm">{b.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
