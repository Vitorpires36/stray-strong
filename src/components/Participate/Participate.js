import React, { useEffect, useRef } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './Participate.css';

const Participate = ({ onOpenForm }) => {
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

  const participationOptions = [
    {
      emoji: "🏠",
      title: t('participate.option1_title'),
      description: t('participate.option1_description'),
      onClick: onOpenForm,
      buttonText: t('participate.option1_button')
    },
    {
      emoji: "💧",
      title: t('participate.option2_title'), 
      description: t('participate.option2_description'),
      link: "https://www.nounspot.com/",
      buttonText: t('participate.option2_button')
    },
    {
      emoji: "🛒",
      title: t('participate.option3_title'),
      description: t('participate.option3_description'),
      link: "https://www.instagram.com/lil.feeders/",
      buttonText: t('participate.option3_button')
    },
    {
      emoji: "💚", 
      title: t('participate.option4_title'),
      description: t('participate.option4_description'),
      link: "https://benfeitoria.com/straystrong",
      buttonText: t('participate.option4_button')
    },
    {
      emoji: "🌐",
      title: t('participate.option5_title'),
      description: t('participate.option5_description'),
      link: "https://lilnouns.wtf/",
      buttonText: t('participate.option5_button')
    }
  ];

  return (
    <section ref={sectionRef} className="section participate-section">
      <div className="participate-content">
        <h2 className="participate-title">{t('participate.title')}</h2>
        <p className="participate-subtitle">{t('participate.subtitle')}</p>

        <div className="participation-grid">
          {participationOptions.map((option, index) => (
            <div key={index} className="participation-card">
              <div className="card-emoji">{option.emoji}</div>
              <h3 className="card-title">{option.title}</h3>
              <p className="card-description">{option.description}</p>
              {option.onClick ? (
                <button 
                  onClick={option.onClick}
                  className="card-button"
                >
                  {option.buttonText}
                </button>
              ) : (
                <a 
                  href={option.link} 
                  className="card-button"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {option.buttonText}
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Participate;