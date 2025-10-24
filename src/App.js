import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Origin from './components/Origin/Origin';
import LilFeeders from './components/LilFeeders/LilFeeders';
import Gallery from './components/Gallery/Gallery';
import Cycle from './components/Cycle/Cycle';
import Participate from './components/Participate/Participate';
import Mission from './components/Mission/Mission';
import Partners from './components/Partners/Partners';
import Form from './components/Form/Form';
import './App.css';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <LanguageProvider>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <section id="hero" className="section hero-section">
            <Hero />
          </section>
          
          <section id="origin" className="section">
            <Origin />
          </section>
          
          <section id="lilfeeders" className="section">
            <LilFeeders />
          </section>
          
          <section id="gallery" className="section">
            <Gallery />
          </section>
          
          <section id="cycle" className="section">
            <Cycle />
          </section>
          
          <section id="participate" className="section">
            <Participate onOpenForm={handleOpenForm} />
          </section>
          
          <section id="mission" className="section">
            <Mission />
          </section>
          
          <section id="partners" className="section">
            <Partners />
          </section>
        </div>
        
        <Form isOpen={isFormOpen} onClose={handleCloseForm} />
      </div>
    </LanguageProvider>
  );
}

export default App;