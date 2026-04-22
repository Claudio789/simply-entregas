import { motion } from 'motion/react';
import { Truck } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="bg-blue-600 p-2 rounded-lg">
            <Truck className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-blue-900">Simply Entregas</span>
        </motion.div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#problema" className="hover:text-blue-600 transition-colors">Nuestro Método</a>
          <a href="#beneficios" className="hover:text-blue-600 transition-colors">Beneficios</a>
          <a href="#faq" className="hover:text-blue-600 transition-colors">Ayuda</a>
        </nav>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
        >
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-orange-600/20 active:scale-95">
            Empieza a despachar hoy
          </button>
        </motion.div>
      </div>
    </header>
  );
}
