import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="header">
      <div className="header-logo" onClick={() => scrollToSection('hero')}>
        <span className="logo-text">STRAY STRONG</span>
      </div>
      
      <div className="header-right">
        <nav className="header-nav">
          <a href="#origin" onClick={(e) => { e.preventDefault(); scrollToSection('origin'); }}>
            {t('header.about')}
          </a>
          <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>
            {t('header.evolution')}
          </a>
          <a href="#cycle" onClick={(e) => { e.preventDefault(); scrollToSection('cycle'); }}>
            {t('header.cycle')}
          </a>
          <a href="#participate" onClick={(e) => { e.preventDefault(); scrollToSection('participate'); }}>
            {t('header.participate')}
          </a>
          <a href="#mission" onClick={(e) => { e.preventDefault(); scrollToSection('mission'); }}>
            {t('header.mission')}
          </a>
          <a href="#partners" onClick={(e) => { e.preventDefault(); scrollToSection('partners'); }}>
            {t('header.partners')}
          </a>
        </nav>
        
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;