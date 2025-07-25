import React from "react";
import emailjs from '@emailjs/browser';

export default function Cadastro() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Você receberá um email em instantes!');
        console.log('Formulário enviado, tentando EmailJS...');
        emailjs.sendForm(
            'service_88uq6kh', // Service ID
            'template_w2840gc', // Template ID
            e.target,           // Formulário
            'NkYZ4oLGP9hyJtFaP' // Public Key
        ).then(() => {
            console.log('EmailJS: enviado com sucesso!');
            window.location.href = "https://seusiteexterno.com";
        }).catch((err) => {
            console.error('EmailJS erro:', err);
            alert('Erro ao enviar. Tente novamente.');
        });
    };
    return (
        <section id="cadastro" className="px-4 py-8 md:py-16 bg-white" data-aos="fade-up">
            <h2 className="text-xl md:text-2xl font-semibold text-dark mb-6 text-center">Solicite acesso beta</h2>
            <form className="max-w-lg mx-auto flex flex-col items-center gap-4 w-full" data-aos="zoom-in" onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Seu e-mail"
                    className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                    required
                />
                <button
                    type="submit"
                    className="bg-[#2196F3] text-white px-6 py-3 rounded-xl font-bold text-lg shadow-2xl border border-white/30 hover:bg-[#1976d2] transition w-full text-center btn-cta"
                >
                    Solicitar acesso
                </button>
            </form>
        </section>
    );
}
