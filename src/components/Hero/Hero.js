import React, { useEffect, useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import backgroundImage from '../../assets/images/products/animals-bg.jpg';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Array com as chaves de tradução dos textos rotativos
  const rotatingTexts = [
    'hero.rotating_text1',
    'hero.rotating_text2',
    'hero.rotating_text3',
    'hero.rotating_text4',
    'hero.rotating_text5'
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Efeito para rotacionar os textos
  useEffect(() => {
    const typingDuration = 3000; // Duração da animação de digitação
    const displayDuration = 2000; // Tempo que o texto fica visível
    const fadeOutDuration = 500; // Duração do fade out

    const timer = setTimeout(() => {
      setIsTyping(false);
      
      // Após o fade out, muda para o próximo texto
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => 
          (prevIndex + 1) % rotatingTexts.length
        );
        setIsTyping(true);
      }, fadeOutDuration);
      
    }, typingDuration + displayDuration);

    return () => clearTimeout(timer);
  }, [currentTextIndex, rotatingTexts.length]);

  return (
    <section className={`hero-section ${loaded ? 'loaded' : ''}`}>
      <div 
        className="hero-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="hero-background-overlay"></div>
        <div className="hero-gradient-overlay"></div>
        <div className="hero-scanlines"></div>
      </div>
      
      {/* Partículas flutuantes */}
      <div className="hero-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title-line">{t('hero.title_line1')}</span>
          <span className="hero-title-line">{t('hero.title_line2')}</span>
        </h1>
        
        <div className="hero-subtitle-container">
          <p className={`hero-subtitle ${isTyping ? 'fade-in' : 'fade-out'}`}>
            {t(rotatingTexts[currentTextIndex])}
          </p>
        </div>
        
        <div className="hero-actions">
          <a 
            href="https://benfeitoria.com/straystrong" 
            className="hero-cta primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('hero.cta_primary')}
          </a>
          <a 
            href="#lilfeeders" 
            className="hero-cta secondary"
          >
            {t('hero.cta_secondary')}
          </a>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;