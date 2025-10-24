import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useTranslation } from '../../hooks/useTranslation';
import feederDog from '../../assets/images/products/lil-feeder-dog.jpg';
import './LilFeeders.css';

const LilFeeders = () => {
  const [ref, isVisible] = useScrollAnimation();
  const { t } = useTranslation();

  return (
    <section 
      ref={ref}
      className={`section lilfeeders-section ${isVisible ? 'visible' : ''}`}
      id="lilfeeders"
    >
      <div className="lilfeeders-content">
        
        <div className="lilfeeders-header">
          <h2 className="lilfeeders-title">{t('lilfeeders.title')}</h2>
          <p className="lilfeeders-subtitle">
            {t('lilfeeders.subtitle')}
          </p>
        </div>

        <div className="product-showcase">
          <img 
            src={feederDog} 
            alt="Lil Feeder in use by community animals" 
            className="featured-product-image"
          />
          <div className="image-caption">
            {t('lilfeeders.image_caption')}
          </div>
        </div>

        <div className="lilfeeders-body">
          <div className="text-content">
            
            <div className="intro-block">
              <p>
                {t('lilfeeders.intro1')}{' '}
                <a href="https://lilnouns.wtf/" target="_blank" rel="noopener noreferrer" className="text-link">
                  {t('lilfeeders.lilnouns_link')}
                </a>{' '}
                {t('lilfeeders.intro2')}
              </p>
              <p>
                {t('lilfeeders.intro3')}{' '}
                <a href="https://lilnouns.wtf/" target="_blank" rel="noopener noreferrer" className="text-link">
                  {t('lilfeeders.lilnouns_community')}
                </a>{' '}
                {t('lilfeeders.intro4')}
              </p>
            </div>

            <div className="product-block">
              <div className="product-intro">
                <h3>{t('lilfeeders.product_title')}</h3>
                <p>
                  <strong>{t('lilfeeders.title')}</strong>{' '}
                  {t('lilfeeders.product_desc')}{' '}
                  <strong>{t('lilfeeders.recycled_plastic')}</strong>,{' '}
                  {t('lilfeeders.product_desc2')}
                </p>
              </div>

              <div className="specifications-grid">
                <div className="spec-card">
                  <div className="spec-icon"></div>
                  <div className="spec-content">
                    <h4>{t('lilfeeders.spec1_title')}</h4>
                    <p>{t('lilfeeders.spec1_desc')}</p>
                  </div>
                </div>
                <div className="spec-card">
                  <div className="spec-icon"></div>
                  <div className="spec-content">
                    <h4>{t('lilfeeders.spec2_title')}</h4>
                    <p>{t('lilfeeders.spec2_desc')}</p>
                  </div>
                </div>
                <div className="spec-card">
                  <div className="spec-icon"></div>
                  <div className="spec-content">
                    <h4>{t('lilfeeders.spec3_title')}</h4>
                    <p>{t('lilfeeders.spec3_desc')}</p>
                  </div>
                </div>
                <div className="spec-card">
                  <div className="spec-icon"></div>
                  <div className="spec-content">
                    <h4>{t('lilfeeders.spec4_title')}</h4>
                    <p>{t('lilfeeders.spec4_desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cycle-block">
              <h3>{t('lilfeeders.cycle_title')}</h3>
              <div className="cycle-content">
                <p>
                  {t('lilfeeders.cycle_desc')}
                </p>
                <div className="cycle-highlight">
                  <strong>{t('lilfeeders.cycle_highlight')}</strong>
                </div>
              </div>
            </div>

            <div className="results-block">
              <h3>{t('lilfeeders.impact_title')}</h3>
              
              <div className="impact-grid">
                <div className="impact-card visible-impact">
                  <h4>{t('lilfeeders.visible_title')}</h4>
                  <p>
                    {t('lilfeeders.visible_desc')}
                  </p>
                  <div className="impact-note">
                    {t('lilfeeders.visible_note')}
                  </div>
                </div>
                
                <div className="impact-card invisible-impact">
                  <h4>{t('lilfeeders.systemic_title')}</h4>
                  <p>
                    {t('lilfeeders.systemic_desc')}
                  </p>
                  <div className="impact-note">
                    {t('lilfeeders.systemic_note')}
                  </div>
                </div>
              </div>
            </div>

            <div className="action-block">
              <div className="craftsmanship">
                <p>{t('lilfeeders.craftsmanship')}</p>
              </div>
              <a 
                href="https://www.instagram.com/lil.feeders/" 
                className="lilfeeders-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('lilfeeders.cta')}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LilFeeders;