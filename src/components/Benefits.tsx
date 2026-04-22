import { motion } from 'motion/react';
import { Eye, BadgePercent, MapPin } from 'lucide-react';

const benefits = [
  {
    icon: Eye,
    title: "Visibilidad Total",
    description: "Accede a tu panel de control y sigue cada despacho en un mapa interactivo. Sabrás exactamente cuándo se retira y cuándo se entrega.",
    color: "bg-indigo-500"
  },
  {
    icon: BadgePercent,
    title: "Ahorro Inteligente",
    description: "Elimina los costos fijos de mantener una flota propia. Paga únicamente por cada envío realizado, optimizando tu presupuesto mensual.",
    color: "bg-orange-500"
  },
  {
    icon: MapPin,
    title: "Identidad Local",
    description: "Nacimos en Valdivia. Conocemos cada puente, cada calle y el ritmo único de nuestra ciudad para asegurar rutas más cortas y rápidas.",
    color: "bg-blue-600"
  }
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-6">
              Diseñado para el ritmo <br /><span className="text-blue-600 underline decoration-orange-500 underline-offset-8">de Valdivia.</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg italic">
              No somos una solución genérica. Somos tu socio logístico en la Región de los Ríos.
            </p>
          </div>
          <div className="flex gap-2">
             <div className="w-12 h-1 bg-orange-600 rounded-full" />
             <div className="w-4 h-1 bg-blue-200 rounded-full" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all border border-gray-100 group"
            >
              <div className={`${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform shadow-lg`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-blue-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
