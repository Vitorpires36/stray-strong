import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Logo e Descrição */}
        <div className="footer-section">
          <div className="footer-logo">
            <h3>STRAY STRONG</h3>
          </div>
          <p className="footer-description">
            {t('footer.description')}
          </p>
          <div className="footer-credits">
            <span>{t('footer.developed_by')} </span>
            <strong>MAIKAO</strong>
          </div>
        </div>

        {/* Links Rápidos */}
        <div className="footer-section">
          <h4 className="footer-title">{t('footer.quick_links')}</h4>
          <ul className="footer-links">
            <li><a href="#lilfeeders">{t('header.about')}</a></li>
            <li><a href="#cycle">{t('header.cycle')}</a></li>
            <li><a href="#participate">{t('header.participate')}</a></li>
            <li><a href="#mission">{t('header.mission')}</a></li>
            <li><a href="#partners">{t('header.partners')}</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div className="footer-section">
          <h4 className="footer-title">{t('footer.contact')}</h4>
          <div className="footer-contact">
            <div className="contact-item">
              <span className="contact-label">{t('footer.email')}:</span>
              <a href="mailto:straysstrong@gmail.com">straysstrong@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">{t('footer.ens')}:</span>
              <code>lilfeeders.eth</code>
            </div>
            <div className="contact-item">
              <span className="contact-label">{t('footer.donate')}:</span>
              <a href="https://www.patreon.com/cw/LilFeeders" target="_blank" rel="noopener noreferrer">
                Patreon
              </a>
            </div>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="footer-section">
          <h4 className="footer-title">{t('footer.follow_us')}</h4>
          <div className="social-links">
            <a 
              href="https://www.instagram.com/lil.feeders/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              📷 {t('footer.instagram')}
            </a>
            <a 
              href="https://lilnouns.wtf/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Lil Nouns"
            >
              🌐 {t('footer.lil_nouns')}
            </a>
            <a 
              href="https://www.instagram.com/limpezadepraias/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Beach Cleanup"
            >
              🏖️ {t('footer.beach_cleanup')}
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>{t('footer.copyright')}</p>
          <p>{t('footer.made_with_love')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;