import { motion } from 'motion/react';
import { ArrowRight, Truck, BadgePercent } from 'lucide-react';

interface HeroProps {
  onOpenForm: () => void;
}

export default function Hero({ onOpenForm }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-8 items-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="lg:col-span-12 xl:col-span-7 bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-white relative overflow-hidden bg-gradient-to-br from-white to-blue-50/30"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Truck className="w-64 h-64 -mr-16 -mt-16" />
          </div>
          
          <div className="relative z-10 text-center lg:text-left">
            <div className="inline-block px-3 py-1 mb-6 bg-blue-100 text-blue-600 rounded-lg text-xs font-bold tracking-widest uppercase">
              Valdivia, Chile
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-950 leading-[1.1] tracking-tight mb-6">
              Tus entregas listas,<br />
              <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">tu agenda libre.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-md mx-auto lg:mx-0">
              Conectamos tu comercio en Valdivia con una flota eficiente para que reduzcas costos y tiempos de entrega sin complicaciones.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onOpenForm}
                className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-orange-500/30 group"
              >
                Empieza a despachar hoy
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 font-medium">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                    alt="User"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <span>+150 negocios locales ya optimizaron</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6"
        >
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 flex-1">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
               <Truck className="w-6 h-6 text-blue-600" />
            </div>
            <div>
               <h3 className="font-bold text-blue-950">Visibilidad Real</h3>
               <p className="text-sm text-slate-500 mt-1">Seguimiento en tiempo real de cada pedido desde que sale hasta que llega.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 flex-1">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
               <BadgePercent className="w-6 h-6 text-orange-600" />
            </div>
            <div>
               <h3 className="font-bold text-blue-950">Paga Solo por Envío</h3>
               <p className="text-sm text-slate-500 mt-1">Sin costos fijos de flota. Pagas únicamente por lo que despachas hoy.</p>
            </div>
          </div>

          <div className="bg-blue-900 p-6 rounded-2xl text-white shadow-xl shadow-blue-900/10">
             <div className="flex justify-between items-center mb-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-blue-300">Testimonio</h4>
                <div className="flex gap-1">
                   <span className="text-orange-400 font-bold">★★★★★</span>
                </div>
             </div>
             <p className="text-sm italic leading-relaxed text-blue-50">"Gracias a Simply, pudimos expandir nuestro delivery sin contratar más personal. Simplicidad total."</p>
             <p className="text-xs mt-3 font-semibold text-blue-200">— Café del Sur, Valdivia</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
