/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Benefits from './components/Benefits';
import OrderSimulator from './components/OrderSimulator';
import MissionVision from './components/MissionVision';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import DispatchForm from './components/DispatchForm';
import DriverForm from './components/DriverForm';

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDriverFormOpen, setIsDriverFormOpen] = useState(false);
  const [simulationView, setSimulationView] = useState<'cliente' | 'repartidor' | 'consumidor'>('cliente');

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);
  
  const openDriverForm = () => setIsDriverFormOpen(true);
  const closeDriverForm = () => setIsDriverFormOpen(false);

  const handleSelectView = (view: 'cliente' | 'repartidor' | 'consumidor') => {
    setSimulationView(view);
    const simulator = document.getElementById('simulador');
    if (simulator) {
      simulator.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header 
        onOpenForm={openForm} 
        onOpenDriverForm={openDriverForm} 
        onSelectView={handleSelectView}
      />
      <main>
        <Hero onOpenForm={openForm} />
        <ProblemSolution />
        <OrderSimulator activeView={simulationView} />
        <Benefits />
        <MissionVision />
        <Testimonials />
        <FAQ />
      </main>
      <Footer onOpenDriverForm={openDriverForm} />
      <DispatchForm isOpen={isFormOpen} onClose={closeForm} />
      <DriverForm isOpen={isDriverFormOpen} onClose={closeDriverForm} />
    </div>
  );
}
