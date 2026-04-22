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
    <section className="py-24 bg-blue-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <Quote className="w-96 h-96 -translate-y-24 translate-x-24" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Confianza que cruza ríos</h2>
          <p className="text-blue-200 text-lg font-medium">Lo que dicen los emprendedores que ya optimizaron su logística.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full border-2 border-orange-500"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-white leading-tight">{t.name}</h4>
                  <p className="text-xs text-blue-300 font-medium">{t.role}</p>
                </div>
              </div>
              <p className="text-blue-50 italic leading-relaxed font-medium">
                "{t.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
