import { motion } from 'motion/react';
import { Target, Heart, Shield, Wrench } from 'lucide-react';

export default function MissionVision() {
  const values = [
    {
      icon: Heart,
      title: "Bienestar Real",
      text: "Nuestra prioridad es la calidad de vida de quienes hacen posible cada entrega."
    },
    {
      icon: Shield,
      title: "Seguridad Social",
      text: "Articulamos beneficios de salud y previsión para un trabajo protegido."
    },
    {
      icon: Wrench,
      title: "Soporte Técnico",
      text: "A futuro, participaremos activamente en la mantención de tus vehículos."
    }
  ];

  return (
    <section id="mision" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-xs font-bold uppercase tracking-widest mb-6">
                <Target className="w-4 h-4" />
                Nuestra Razón de Ser
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 leading-tight tracking-tight mb-6">
                Más que logística, un <br />
                <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">ecosistema justo.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                En Simply Entregas, nuestra misión es transformar la última milla en Valdivia equilibrando la eficiencia comercial con el bienestar humano. No solo entregamos paquetes, construimos el futuro del trabajo colaborativo.
              </p>
            </div>

            <div className="grid gap-6">
              {values.map((v, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 items-start group hover:bg-blue-50/50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 text-blue-600 group-hover:scale-110 transition-transform">
                    <v.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950 mb-1">{v.title}</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-blue-600/5 blur-3xl rounded-full" />
            <div className="relative bg-blue-900 rounded-[2.5rem] p-10 md:p-16 text-white shadow-2xl shadow-blue-900/20 overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                <Target className="w-96 h-96 -translate-y-24 translate-x-24" />
              </div>
              
              <div className="relative z-10 space-y-10">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300 mb-4">Nuestra Visión</h3>
                  <p className="text-2xl md:text-3xl font-bold leading-tight italic">
                    "Convertirnos en la plataforma líder que garantiza pagos justos, acceso a salud y soporte técnico integral para cada miembro de nuestra flota en el sur de Chile."
                  </p>
                </div>
                
                <div className="pt-10 border-t border-white/10 grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-4xl font-black text-white mb-2">100%</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-200">Compromiso Local</p>
                  </div>
                  <div>
                    <p className="text-4xl font-black text-white mb-2">+Justo</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-200">Modelo de Pago</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
