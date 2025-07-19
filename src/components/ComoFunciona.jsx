import React from "react";

export default function ComoFunciona() {
    return (
        <section className="px-4 py-8 md:py-16 bg-white" data-aos="fade-up">
            <h2 className="text-xl md:text-2xl font-semibold text-dark mb-10 text-center">Como funciona</h2>
            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
                <div className="relative w-full max-w-3xl flex justify-center items-center py-8">
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-0 flex items-center" style={{ height: '0' }}>
                        <div className="w-full h-2 bg-[#2196F3] opacity-60" style={{ margin: '0 8%' }}></div>
                    </div>
                    <div className="flex w-full justify-between items-center z-10">
                        {["Conecte", "Pergunte", "Interprete", "Aja"].map((step, i) => (
                            <div key={step} className="flex flex-col items-center w-1/4">
                                <div className={`flex items-center justify-center rounded-full h-16 w-16 text-2xl font-bold border-4 border-[#2196F3] bg-[#0A1833] text-[#2196F3] shadow-xl mb-2`} data-aos="zoom-in" data-aos-delay={i * 200}>{i + 1}</div>
                                <span className="text-white font-semibold text-base mt-1">{step}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
