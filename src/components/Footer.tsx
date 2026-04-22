import { Truck, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Truck className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-blue-900">Simply Entregas</span>
            </div>
            <p className="text-gray-600 font-medium max-w-sm mb-8">
              Transformando la logística de Valdivia a través de la tecnología y la colaboración local. Entregas inteligentes para negocios que no se detienen.
            </p>
            <div className="flex gap-4 text-blue-900">
               <a href="#" className="p-2 hover:bg-blue-100 rounded-full transition-colors"><Instagram className="w-5 h-5" /></a>
               <a href="#" className="p-2 hover:bg-blue-100 rounded-full transition-colors"><Linkedin className="w-5 h-5" /></a>
               <a href="#" className="p-2 hover:bg-blue-100 rounded-full transition-colors"><MessageCircle className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-blue-900 mb-6 uppercase text-sm tracking-widest">Plataforma</h4>
            <ul className="space-y-4 text-gray-600 font-medium text-sm">
              <li><a href="#" className="hover:text-blue-600">Cómo funciona</a></li>
              <li><a href="#" className="hover:text-blue-600">Tarifas 2024</a></li>
              <li><a href="#" className="hover:text-blue-600">Socios repartidores</a></li>
              <li><a href="#" className="hover:text-blue-600">Panel de control</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-blue-900 mb-6 uppercase text-sm tracking-widest">Legal</h4>
             <ul className="space-y-4 text-gray-600 font-medium text-sm">
              <li><a href="#" className="hover:text-blue-600">Términos de servicio</a></li>
              <li><a href="#" className="hover:text-blue-600">Privacidad</a></li>
              <li><a href="#" className="hover:text-blue-600">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-gray-500 text-sm font-medium">
             © {new Date().getFullYear()} Simply Entregas SpA. Hecho con ❤️ en Valdivia.
           </p>
           <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 grayscale opacity-50">
                 <div className="w-2 h-2 rounded-full bg-green-500" />
                 <span className="text-[10px] font-bold uppercase tracking-tighter">Sistemas Operativos</span>
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
}
