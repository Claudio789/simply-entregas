import { motion } from 'motion/react';
import { XCircle, CheckCircle2, AlertCircle, ShoppingBag } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section id="problema" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-4 tracking-tight">
            Menos gestión, más ventas
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium">
            Entendemos que el crecimiento de tu negocio no debe ser sinónimo de caos logístico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center border-4 border-white shadow-lg">
              <ShoppingBag className="w-6 h-6 text-blue-600" />
            </div>
          </div>

          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            className="p-8 rounded-2xl bg-slate-50/50 border border-slate-100 border-l-4 border-l-slate-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-8 h-8 text-slate-400" />
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Gestión Tradicional</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Llamadas constantes de repartidores perdidos",
                "Falta de visibilidad sobre dónde está el pedido",
                "Costos fijos de flota aunque no vendas",
                "Clientes frustrados por retrasos sin aviso"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-500 font-medium text-sm leading-relaxed">
                  <AlertCircle className="w-5 h-5 shrink-0 opacity-50" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            className="p-8 rounded-2xl bg-blue-50/50 border border-blue-100 border-l-4 border-l-blue-600 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-bold text-blue-900 tracking-tight">Con Simply Entregas</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Tu panel de control centraliza todo",
                "Seguimiento preciso en tiempo real",
                "Pagas solo por lo que envías",
                "Tu cliente recibe a tiempo y feliz"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-blue-900 font-semibold text-sm leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
            <p className="text-2xl font-extrabold text-blue-950 italic tracking-tight">
              "Tu cliente recibe a tiempo, tú te enfocas en vender."
            </p>
        </div>
      </div>
    </section>
  );
}
