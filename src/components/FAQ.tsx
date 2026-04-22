import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "¿Cuál es la zona de cobertura?",
    answer: "Cubrimos todo el radio urbano de Valdivia, incluyendo Isla Teja, Collico, Angachilla y Las Mulatas. Para zonas rurales periféricas, consulta disponibilidad en nuestro panel."
  },
  {
    question: "¿Cuánto demoran en retirar un pedido?",
    answer: "Una vez solicitado el despacho en tu panel de control, un repartidor cercano recogerá el pedido en un promedio de 15 a 25 minutos."
  },
  {
    question: "¿Cómo se gestionan los pagos?",
    answer: "Funcionamos con un sistema de prepago o facturación semanal según tu volumen. No hay costos de mantención ni suscripciones obligatorias."
  },
  {
    question: "¿Puedo ver dónde está mi producto?",
    answer: "Absolutamente. Tanto tú como tu cliente reciben un enlace de seguimiento en vivo desde que el repartidor retira el paquete hasta que llega a destino."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-4 tracking-tight">Preguntas Frecuentes</h2>
          <p className="text-slate-600 font-medium">Todo lo que necesitas saber para optimizar tus entregas.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-all">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50/50 transition-colors"
              >
                <span className="font-bold text-blue-950 pr-8 tracking-tight">{faq.question}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="p-6 pt-0 text-slate-500 leading-relaxed text-sm font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
