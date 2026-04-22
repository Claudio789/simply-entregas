/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import DispatchForm from './components/DispatchForm';

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header onOpenForm={openForm} />
      <main>
        <Hero onOpenForm={openForm} />
        <ProblemSolution />
        <Benefits />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <DispatchForm isOpen={isFormOpen} onClose={closeForm} />
    </div>
  );
}
