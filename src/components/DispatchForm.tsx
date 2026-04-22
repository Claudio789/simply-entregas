import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';

interface DispatchFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DispatchForm({ isOpen, onClose }: DispatchFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-blue-950/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden border border-white"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10">
              {!isSuccess ? (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-extrabold text-blue-950 tracking-tight mb-2">
                      {step === 1 ? 'Cuéntanos de tu negocio' : 'Detalles del despacho'}
                    </h2>
                    <p className="text-slate-500 text-sm font-medium">
                      Estás a un paso de simplificar tu logística en Valdivia.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {step === 1 ? (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-5"
                      >
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Nombre del Negocio</label>
                          <input 
                            required
                            type="text" 
                            placeholder="Ej: Café del Puente"
                            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all font-medium text-blue-950"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Tipo de Productos</label>
                          <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium text-blue-950">
                            <option>Gastronomía / Alimentos</option>
                            <option>Retail / Tienda</option>
                            <option>Farmacia / Salud</option>
                            <option>Otro</option>
                          </select>
                        </div>
                        <button 
                          type="button"
                          onClick={() => setStep(2)}
                          className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-900/20 hover:bg-blue-950 transition-all active:scale-[0.98]"
                        >
                          Siguiente paso
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-5"
                      >
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Zona de Retiro en Valdivia</label>
                          <input 
                            required
                            type="text" 
                            placeholder="Ej: Isla Teja, Centro..."
                            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium text-blue-950"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Volumen Estimado Diario</label>
                          <div className="grid grid-cols-3 gap-3">
                            {['1-5', '5-20', '20+'].map((vol) => (
                              <button 
                                key={vol}
                                type="button"
                                className="py-3 border border-slate-200 rounded-xl font-bold text-sm text-slate-600 hover:border-blue-600 hover:text-blue-600 transition-all"
                              >
                                {vol}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <button 
                            type="button"
                            onClick={() => setStep(1)}
                            className="flex-1 px-5 py-4 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-all"
                          >
                            Atrás
                          </button>
                          <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-[2] bg-orange-500 text-white py-4 rounded-xl font-bold shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                          >
                            {isSubmitting ? (
                              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                              <>
                                Enviar solicitud
                                <Send className="w-4 h-4" />
                              </>
                            )}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </form>
                </>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-600/10">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-blue-950 mb-4 tracking-tight">¡Solicitud recibida!</h2>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8">
                    Un ejecutivo de Simply Entregas te contactará en menos de 15 minutos para activar tu cuenta.
                  </p>
                  <button 
                    onClick={onClose}
                    className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-blue-950 transition-all"
                  >
                    Entendido
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
