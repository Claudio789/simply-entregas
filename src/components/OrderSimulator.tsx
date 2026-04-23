import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ShoppingBag, Users, Truck, MapPin, CheckCircle, ArrowRight, Info, Layout, Compass, ShieldCheck, Clock, Navigation } from 'lucide-react';

const simulationData = {
  cliente: {
    steps: [
      {
        icon: Layout,
        title: "Registro de Venta",
        description: "Ingresas el pedido en tu sucursal digital.",
        importance: "Automatizamos la entrada de datos para que te enfoques en vender, no en digitar.",
        actionLabel: "Crear Pedido",
        color: "blue",
        image: "https://images.unsplash.com/photo-1556740734-754f46759f3d?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: ShieldCheck,
        title: "Configuración de Carga",
        description: "Seleccionas requerimientos especiales (Frío, delicado, extra peso).",
        importance: "Nuestra flota diversa se adapta a cualquier naturaleza de producto.",
        actionLabel: "Configurar Vehículo",
        color: "blue",
        image: "https://images.unsplash.com/photo-1524660988544-2749c77e99c8?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: Clock,
        title: "Despacho Express",
        description: "El sistema asigna y despacha en menos de 5 minutos.",
        importance: "La velocidad de despacho es tu ventaja competitiva en el mercado local.",
        actionLabel: "Ver Despacho",
        color: "blue",
        image: "https://images.unsplash.com/photo-1620455805821-742f3fdb36ca?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: CheckCircle,
        title: "Prueba de Entrega",
        description: "Recibes la firma digital y foto del producto entregado.",
        importance: "Cierra el ciclo de venta con seguridad Jurídica y operativa total.",
        actionLabel: "Finalizar",
        color: "green",
        image: "https://images.unsplash.com/photo-1533900293325-1e35dcd9d44c?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  repartidor: {
    steps: [
      {
        icon: Navigation,
        title: "Inicio de Jornada",
        description: "Activas tu disponibilidad y recibes la ruta optimizada.",
        importance: "Nuestra IA calcula la ruta más corta para que ahorres combustible y tiempo.",
        actionLabel: "Iniciar Ruta",
        color: "blue",
        image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: ShoppingBag,
        title: "Pick-up en Tienda",
        description: "Llegas al local y escaneas el código de seguridad.",
        importance: "Garantizamos que retires el paquete correcto mediante validación digital.",
        actionLabel: "Escanear Paquete",
        color: "orange",
        image: "https://images.unsplash.com/photo-1580673010156-f08480337c62?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: Truck,
        title: "Entrega en Destino",
        description: "Navegación guiada hasta la puerta del cliente final.",
        importance: "Precisión GPS hasta el último metro para una entrega sin contratiempos.",
        actionLabel: "Entregar Pedido",
        color: "blue",
        image: "https://images.unsplash.com/photo-1533900293325-1e35dcd9d44c?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  consumidor: {
    steps: [
      {
        icon: Compass,
        title: "Tracking en Vivo",
        description: "Ves el camión moviéndose hacia tu casa en tiempo real.",
        importance: "La transparencia elimina la incertidumbre y genera confianza.",
        actionLabel: "Ver Mapa",
        color: "blue",
        image: "https://images.unsplash.com/photo-1556740714-a316972412e1?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: Users,
        title: "Recepción Segura",
        description: "Recibes tu pedido de manos de un profesional identificado.",
        importance: "Seguridad y amabilidad en cada interacción de última milla.",
        actionLabel: "Confirmar Recibo",
        color: "green",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
      }
    ]
  }
};

interface OrderSimulatorProps {
  activeView: 'cliente' | 'repartidor' | 'consumidor';
}

export default function OrderSimulator({ activeView }: OrderSimulatorProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const steps = simulationData[activeView].steps;

  useEffect(() => {
    setCurrentStep(0);
    setIsCompleted(false);
  }, [activeView]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setIsCompleted(false);
  };

  const step = steps[currentStep];

  return (
    <section id="simulador" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 mb-6 tracking-tight">
            Simula la experiencia <span className="text-blue-600 capitalize">{activeView}</span>
          </h2>
          <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
            Descubre cómo nuestra tecnología optimiza cada aspecto según tu rol en el ecosistema logístico.
          </p>
        </div>

        <div className={`grid gap-4 mb-12`} style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
          {steps.map((s, i) => (
            <div key={i} className="relative">
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 border-2 ${
                  i <= currentStep ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-white border-slate-200 text-slate-300'
                }`}>
                  <s.icon className="w-5 h-5" />
                </div>
                <div className={`mt-3 text-[10px] font-extrabold uppercase tracking-widest transition-colors text-center ${i <= currentStep ? 'text-blue-950' : 'text-slate-400'}`}>
                  {s.title}
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-1/2 w-full h-[2px] bg-slate-200 -z-10">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: i < currentStep ? '100%' : '0%' }}
                    className="h-full bg-blue-600"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-white p-8 md:p-16 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isCompleted ? (
              <motion.div 
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold text-blue-950 tracking-tight">{step.title}</span>
                  </div>
                  
                  <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
                    {step.description}
                  </p>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative group">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0">
                        <Info className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-blue-900 mb-2 uppercase tracking-widest">¿Por qué es importante?</h4>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">
                          {step.importance}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={handleNext}
                    className="mt-10 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-blue-600/20 group w-full lg:w-auto"
                  >
                    {step.actionLabel}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="hidden lg:block relative aspect-video bg-slate-200 rounded-3xl overflow-hidden shadow-inner border-4 border-white">
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={currentStep}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        <img 
                          key={`${activeView}-${currentStep}`}
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
                       
                       {/* Contextual UI Overlays for each step */}
                       <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
                         <div className="flex justify-between items-start">
                            <motion.div 
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              key={`status-${activeView}-${currentStep}`}
                              className="bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/50"
                            >
                               <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Estado del Sistema</div>
                               <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                  <span className="text-xs font-bold text-blue-950 uppercase">{step.title}</span>
                               </div>
                            </motion.div>

                            {activeView === 'cliente' && currentStep === 1 && (
                              <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-blue-600 text-white p-3 rounded-xl shadow-xl flex items-center gap-3 border border-blue-400"
                              >
                                 <div className="bg-white/20 p-2 rounded-lg">
                                    <ShieldCheck className="w-4 h-4" />
                                 </div>
                                 <div className="pr-2">
                                    <div className="text-[9px] font-bold uppercase tracking-wider opacity-80 text-blue-100 leading-none mb-1">Seguridad de Carga</div>
                                    <div className="text-[10px] font-black leading-tight max-w-[140px]">
                                       Validando requerimientos térmicos y fragilidad
                                    </div>
                                 </div>
                              </motion.div>
                            )}

                            {activeView === 'repartidor' && currentStep === 0 && (
                              <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-blue-900 text-white p-3 rounded-xl shadow-xl flex items-center gap-3 border border-blue-700"
                              >
                                 <div className="bg-white/20 p-2 rounded-lg">
                                    <Navigation className="w-4 h-4" />
                                 </div>
                                 <div className="pr-2">
                                    <div className="text-[9px] font-bold uppercase tracking-wider opacity-80 text-blue-100 leading-none mb-1">Ruta Inteligente</div>
                                    <div className="text-[10px] font-black leading-tight max-w-[140px]">
                                       Calculando trayectoria óptima en Valdivia
                                    </div>
                                 </div>
                              </motion.div>
                            )}
                         </div>

                         <div className="flex justify-center">
                            {activeView === 'consumidor' && currentStep === 0 && (
                               <motion.div 
                                 initial={{ opacity: 0, scale: 0.8 }}
                                 animate={{ opacity: 1, scale: 1 }}
                                 className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white max-w-[180px]"
                               >
                                  <div className="flex items-center justify-between mb-3">
                                     <span className="text-[9px] font-black uppercase tracking-tighter text-blue-950">Mapa en Vivo</span>
                                     <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                                  </div>
                                  <div className="aspect-square bg-blue-50 rounded-lg p-2 relative overflow-hidden border border-blue-100">
                                     <div className="absolute inset-x-2 top-1/2 h-1 bg-slate-200 rounded-full" />
                                     <div className="absolute inset-y-2 left-1/2 w-1 bg-slate-200 rounded-full" />
                                     <motion.div 
                                       animate={{ 
                                         x: [0, 40, 40, 60],
                                         y: [0, 0, 30, 30]
                                       }}
                                       transition={{ duration: 4, repeat: Infinity }}
                                       className="absolute top-1/2 left-[10%] w-3 h-3 bg-blue-600 rounded-lg shadow-md flex items-center justify-center -translate-y-1/2"
                                     >
                                        <Truck className="w-2 h-2 text-white" />
                                     </motion.div>
                                     <div className="absolute bottom-2 right-2 w-2 h-2 bg-green-500 rounded-full shadow-sm" />
                                  </div>
                               </motion.div>
                            )}

                            {activeView === 'cliente' && currentStep === 3 && (
                              <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-white max-w-[200px]"
                              >
                                 <div className="text-[10px] font-black uppercase tracking-widest text-blue-950 mb-3 border-b pb-2">Comprobante Digital</div>
                                 <div className="space-y-2">
                                    {[
                                      "Identidad Verificada",
                                      "Paquete Intacto",
                                      "Foto de Recepción",
                                      "Firma Cliente"
                                    ].map((item, idx) => (
                                      <div key={idx} className="flex items-center gap-2">
                                         <CheckCircle className="w-3 h-3 text-green-500" />
                                         <span className="text-[9px] font-bold text-slate-600">{item}</span>
                                      </div>
                                    ))}
                                 </div>
                              </motion.div>
                            )}
                         </div>
                       </div>

                       {/* Central Floating Icon Overlay */}
                       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                         <div className="bg-white/90 backdrop-blur-md p-6 rounded-full shadow-2xl scale-150 border-4 border-white">
                            <step.icon className="w-8 h-8 text-blue-600" />
                         </div>
                       </div>
                     </motion.div>
                   </AnimatePresence>

                   <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="flex items-center gap-3 text-white">
                         <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                         <span className="text-xs font-bold uppercase tracking-widest opacity-80">Vista Previa del Proceso</span>
                      </div>
                   </div>
                   <div className="absolute bottom-6 left-6 right-6 h-1 bg-white/50 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                        className="h-full bg-blue-600"
                      />
                   </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-600/10">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-extrabold text-blue-950 mb-4 tracking-tight">¡Simulación Completada!</h3>
                <p className="text-slate-600 font-medium text-lg max-w-xl mx-auto mb-10">
                  Ya viste lo simple y estratégico que es nuestro proceso. El siguiente paso es llevar esta eficiencia a tu negocio real.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={reset}
                    className="px-8 py-4 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-all"
                  >
                    Repetir Simulación
                  </button>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-orange-500/30">
                    Empieza hoy mismo
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
