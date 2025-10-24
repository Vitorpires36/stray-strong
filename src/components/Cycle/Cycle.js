import React, { useEffect, useRef } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './Cycle.css';

const Cycle = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="section cycle-section">
      <div className="cycle-content">
        <h2 className="cycle-title">{t('cycle.title')}</h2>
        <p className="cycle-subtitle">{t('cycle.subtitle')}</p>

        <div className="cycle-steps">
          
          <div className="cycle-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>{t('cycle.step1_title')}</h3>
              <p>
                {t('cycle.step1_description')}{" "}
                <a 
                  href="https://www.instagram.com/limpezadepraias/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="partner-link"
                >
                  {t('cycle.beach_cleanup_ngo')}
                </a>
              </p>
            </div>
          </div>

          <div className="cycle-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>{t('cycle.step2_title')}</h3>
              <p>
                <a 
                  href="https://www.instagram.com/projetocasaplastica/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="partner-link"
                >
                  {t('cycle.casa_plastica')}
                </a>{" "}
                {t('cycle.step2_description')}
              </p>
            </div>
          </div>

          <div className="cycle-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>{t('cycle.step3_title')}</h3>
              <p>{t('cycle.step3_description')}</p>
            </div>
          </div>

          <div className="cycle-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>{t('cycle.step4_title')}</h3>
              <p>{t('cycle.step4_description')}</p>
            </div>
          </div>

          <div className="cycle-step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3>{t('cycle.step5_title')}</h3>
              <p>{t('cycle.step5_description')}</p>
            </div>
          </div>

        </div>

        <div className="cycle-cta">
          <a 
            href="#participate" 
            className="cycle-button"
          >
            ♻️ {t('cycle.cta_button')}
          </a>
        </div>

      </div>
    </section>
  );
};

export default Cycle;