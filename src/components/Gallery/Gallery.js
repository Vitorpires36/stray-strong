import React, { useEffect, useRef } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './Gallery.css';

// Import das imagens reais
import v1Concrete from '../../assets/images/evolution/v1-concrete.jpg';
import v2Plastic from '../../assets/images/evolution/v2-plastic.jpg';
import feederDog from '../../assets/images/products/lil-feeder-dog.jpg';
import animalPrint from '../../assets/images/products/animal-print.jpg';

const Gallery = () => {
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

  const images = [
    {
      id: 1,
      title: t('gallery.v1_title'),
      description: t('gallery.v1_description'),
      src: v1Concrete,
      alt: "First concrete prototype of Lil Feeder"
    },
    {
      id: 2, 
      title: t('gallery.v2_title'),
      description: t('gallery.v2_description'),
      src: v2Plastic,
      alt: "Recycled plastic version of Lil Feeder"
    },
    {
      id: 3,
      title: t('gallery.action_title'),
      description: t('gallery.action_description'),
      src: feederDog,
      alt: "Dog using Lil Feeder"
    },
    {
      id: 4,
      title: t('gallery.design_title'), 
      description: t('gallery.design_description'),
      src: animalPrint,
      alt: "Animal print design on Lil Feeders"
    }
  ];

  return (
    <section ref={sectionRef} className="section gallery-section">
      <div className="gallery-content">
        <h2 className="gallery-title">{t('gallery.title')}</h2>
        <p className="gallery-subtitle">{t('gallery.subtitle')}</p>

        <div className="gallery-grid">
          {images.map((image) => (
            <div key={image.id} className="gallery-item">
              <div className="image-container">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="gallery-image"
                  loading="lazy"
                />
              </div>
              <div className="image-info">
                <h3 className="image-title">{image.title}</h3>
                <p className="image-description">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-note">
          <p>
            {t('gallery.note')}{" "}
            <a 
              href="https://photos.app.goo.gl/UC7EGMyRLssqP5n49" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {t('gallery.album')}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;