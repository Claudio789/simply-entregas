import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Carolina Ruiz",
    role: "Dueña de 'Café del Puente'",
    text: "Antes pasaba la mitad del día coordinando repartidores. Ahora solo ingreso el pedido y me olvido. Mis clientes están felices con el seguimiento.",
    image: "https://picsum.photos/seed/caro/100/100"
  },
  {
    name: "Marco Sepúlveda",
    role: "Fundador de 'ValdiTech'",
    text: "La flexibilidad de pagar por envío nos permitió escalar sin riesgos. Simply Entregas entiende cómo funciona Valdivia, y eso marca la diferencia.",
    image: "https://picsum.photos/seed/marco/100/100"
  },
  {
    name: "Elena Soto",
    role: "Emprendedora Gourmet",
    text: "Es como tener mi propia flota pero sin los dolores de cabeza. La interfaz es súper intuitiva y el soporte local es excepcional.",
    image: "https://picsum.photos/seed/elena/100/100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-4 tracking-tight text-center">Confianza que cruza ríos</h2>
          <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto">Lo que dicen los comerciantes locales sobre nuestra plataforma.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl shadow-blue-900/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-blue-300">Testimonio</h4>
                  <div className="flex gap-1">
                    <span className="text-orange-400 font-bold text-xs">★★★★★</span>
                  </div>
                </div>
                <p className="text-blue-50 italic leading-relaxed font-medium mb-8">
                  "{t.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-10 h-10 rounded-full border-2 border-orange-500 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-white leading-tight text-sm">{t.name}</h4>
                  <p className="text-[10px] text-blue-200 font-semibold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
