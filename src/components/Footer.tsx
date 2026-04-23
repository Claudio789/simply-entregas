import { Truck, Instagram, Linkedin, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenDriverForm: () => void;
}

export default function Footer({ onOpenDriverForm }: FooterProps) {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <Truck className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-blue-900 uppercase">Simply Entregas</span>
            </div>
            <p className="text-slate-500 font-medium max-w-sm mb-8 leading-relaxed">
              Transformando la logística de Valdivia con tecnología de última milla. Eficiencia local para negocios modernos.
            </p>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">¿Dónde entregamos?</h4>
            <p className="text-slate-500 font-medium text-sm leading-relaxed mb-4">
              Isla Teja, Las Ánimas, Collico, Angachilla y todo el centro de Valdivia.
            </p>
            <button 
              onClick={onOpenDriverForm}
              className="text-blue-600 font-bold text-sm hover:underline flex items-center gap-1"
            >
              ¡Únete como repartidor!
            </button>
          </div>

          <div className="md:col-span-3 text-right md:text-left">
             <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Soporte Express</h4>
             <p className="text-slate-500 font-medium text-sm leading-relaxed">
               Retiros en promedio de 15 minutos. Soporte local 24/7 para tu comercio.
             </p>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
             © {new Date().getFullYear()} Simply Entregas SpA • Valdivia, Chile
           </p>
           <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-slate-400 font-medium text-xs">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <span>Plataforma Activa en Valdivia</span>
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
}
