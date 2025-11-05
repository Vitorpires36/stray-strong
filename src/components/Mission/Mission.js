import React, { useEffect, useRef } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './Mission.css';

// Import das imagens
import cuidadoImg from '../../assets/images/cuidado.png';
import empatiaImg from '../../assets/images/empatia.png';
import regenImg from '../../assets/images/regen.png';
import acessImg from '../../assets/images/acess.png';
import transImg from '../../assets/images/trans.png';
import criatividadeImg from '../../assets/images/creatividade.png';
import comunidadeImg from '../../assets/images/comunidade.png';

const Mission = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  const values = [
    { image: comunidadeImg, name: t('mission.value1') },
    { image: empatiaImg, name: t('mission.value2') },
    { image: regenImg, name: t('mission.value3') },
    { image: cuidadoImg, name: t('mission.value4') },
    { image: transImg, name: t('mission.value5') },
    { image: criatividadeImg, name: t('mission.value6') },
    { image: acessImg, name: t('mission.value7') }
  ];

  return (
    <section ref={sectionRef} className="section mission-section">
      <div className="mission-content">
        
        {/* Missão */}
        <div className="mission-block">
          <h2 className="mission-title">{t('mission.mission_title')}</h2>
          <p className="mission-text">
            {t('mission.mission_text')}
          </p>
          <p className="mission-detail">
            {t('mission.mission_detail1')}
          </p>
          <p className="mission-detail">
            {t('mission.mission_detail2')}
          </p>
        </div>

        {/* Visão */}
        <div className="vision-block">
          <h2 className="vision-title">{t('mission.vision_title')}</h2>
          <p className="vision-text">
            {t('mission.vision_text')}
          </p>
          <p className="vision-goal">
            {t('mission.vision_goal')}
          </p>
        </div>

        {/* Valores */}
        <div className="values-block">
          <h2 className="values-title">{t('mission.values_title')}</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <img 
                  src={value.image} 
                  alt={value.name}
                  className="value-image"
                />
                <h3 className="value-name">{value.name}</h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Mission;