import { motion } from 'motion/react';
import { Truck } from 'lucide-react';

interface HeaderProps {
  onOpenForm: () => void;
}

export default function Header({ onOpenForm }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <Truck className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-blue-900">Simply Entregas</span>
        </motion.div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500">
          <a href="#problema" className="hover:text-blue-600 transition-colors">Nuestro Método</a>
          <a href="#beneficios" className="hover:text-blue-600 transition-colors">Beneficios</a>
          <a href="#faq" className="hover:text-blue-600 transition-colors">Ayuda</a>
        </nav>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
        >
          <button 
            onClick={onOpenForm}
            className="bg-blue-900 hover:bg-blue-950 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-900/20 active:scale-95 leading-none h-10"
          >
            Empieza hoy
          </button>
        </motion.div>
      </div>
    </header>
  );
}
