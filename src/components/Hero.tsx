import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-widest uppercase">
            Logística Valdiviana de Confianza
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-blue-900 leading-[1.1] mb-6">
            Tus entregas listas, <span className="text-blue-600">tu agenda libre.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
            Conectamos el comercio local de Valdivia con una flota eficiente y colaborativa. Reduce costos, ahorra tiempo y recupera la tranquilidad mientras nosotros nos encargamos del último kilómetro.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-orange-600/20 group">
              Empieza a despachar hoy
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl text-lg font-bold hover:bg-gray-50 transition-colors">
              Ver tarifas
            </button>
          </div>
          
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 font-medium">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt="User"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <span>+150 negocios en Valdivia ya confían</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-blue-600/5 blur-3xl rounded-full" />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://picsum.photos/seed/delivery-valdivia/1000/800" 
              alt="Logística en Valdivia" 
              className="w-full aspect-[4/3] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-blue-900">Pedido en Ruta</span>
                <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Llegando en 12m</span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "30%" }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  className="h-full bg-blue-600"
                />
              </div>
              <p className="mt-3 text-xs text-gray-500 font-medium text-center">Tracking en tiempo real para tus clientes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
