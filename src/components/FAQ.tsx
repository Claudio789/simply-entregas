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
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-4">Preguntas Frecuentes</h2>
          <p className="text-gray-600 font-medium italic">Todo lo que necesitas saber para empezar.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-blue-900 pr-8">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-blue-600 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed font-medium">
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
