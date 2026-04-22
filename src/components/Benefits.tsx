import { motion } from 'motion/react';
import { Eye, BadgePercent, MapPin } from 'lucide-react';

const benefits = [
  {
    icon: Eye,
    title: "Visibilidad Real",
    description: "Seguimiento en tiempo real de cada pedido desde que sale hasta que llega a su destino.",
    bg: "bg-blue-100",
    text: "text-blue-600"
  },
  {
    icon: BadgePercent,
    title: "Paga Solo por Envío",
    description: "Sin costos fijos de flota. Pagas únicamente por lo que despachas hoy, optimizando tu caja.",
    bg: "bg-orange-100",
    text: "text-orange-600"
  },
  {
    icon: MapPin,
    title: "Sello Valdiviano",
    description: "Servicio diseñado específicamente para el ritmo y las rutas de nuestra gran ciudad.",
    bg: "bg-green-100",
    text: "text-green-600"
  }
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 mb-6 tracking-tight">
              Diseñado para el ritmo <br /><span className="text-blue-600 underline decoration-blue-200 underline-offset-8">de Valdivia.</span>
            </h2>
            <p className="text-slate-600 font-medium text-lg">
              Sencillez total con una plataforma automatizada para el comercio local.
            </p>
          </div>
          <div className="flex gap-2">
             <div className="w-12 h-1 bg-blue-600 rounded-full" />
             <div className="w-4 h-1 bg-slate-200 rounded-full" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-white hover:bg-blue-50/20 transition-all group"
            >
              <div className={`${benefit.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}>
                <benefit.icon className={`w-6 h-6 ${benefit.text}`} />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3 tracking-tight">{benefit.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
