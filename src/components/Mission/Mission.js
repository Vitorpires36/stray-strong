import React, { useEffect, useRef } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './Mission.css';

const Mission = () => {
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

  const values = [
    { emoji: "👥", name: t('mission.value1') },
    { emoji: "💝", name: t('mission.value2') },
    { emoji: "🔄", name: t('mission.value3') },
    { emoji: "🎯", name: t('mission.value4') },
    { emoji: "🔍", name: t('mission.value5') },
    { emoji: "🎨", name: t('mission.value6') },
    { emoji: "🌐", name: t('mission.value7') }
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
                <div className="value-emoji">{value.emoji}</div>
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