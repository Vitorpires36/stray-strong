import React, { useEffect, useRef } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import limpezaPraiasLogo from '../../assets/images/partners/limpeza-praias-logo.png';
import casaPlasticaLogo from '../../assets/images/partners/casa-plastica-logo.png';
import coletivoPlasticoLogo from '../../assets/images/partners/coletivo-plastico-logo.jpg';
import './Partners.css';

const Partners = () => {
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

  const partners = [
    {
      name: t('partners.partner1_name'),
      logo: limpezaPraiasLogo,
      description: t('partners.partner1_description'),
      achievements: t('partners.partner1_achievements'),
      link: "https://www.instagram.com/limpezadepraias",
      instagram: "@limpezadepraias"
    },
    {
      name: t('partners.partner2_name'),
      logo: casaPlasticaLogo,
      description: t('partners.partner2_description'),
      achievements: t('partners.partner2_achievements'),
      link: "https://www.instagram.com/projetocasaplastica/",
      instagram: "@projetocasaplastica"
    },
    {
      name: t('partners.partner3_name'),
      logo: coletivoPlasticoLogo,
      description: t('partners.partner3_description'),
      achievements: t('partners.partner3_achievements'),
      link: "#",
      instagram: t('partners.coming_soon')
    }
  ];

  return (
    <section ref={sectionRef} className="section partners-section">
      <div className="partners-content">
        <h2 className="partners-title">{t('partners.title')}</h2>
        <p className="partners-subtitle">{t('partners.subtitle')}</p>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <div className="partner-logo">
                <img src={partner.logo} alt={partner.name} className="logo-image" />
              </div>
              
              <h3 className="partner-name">{partner.name}</h3>
              
              <div className="partner-info">
                <p className="partner-description">{partner.description}</p>
                <p className="partner-achievements">{partner.achievements}</p>
              </div>

              <div className="partner-links">
                <a 
                  href={partner.link} 
                  className="partner-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {t('partners.instagram')}: {partner.instagram}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="partners-footer">
          <p>{t('partners.footer')}</p>
        </div>

      </div>
    </section>
  );
};

export default Partners;