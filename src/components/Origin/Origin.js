import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useTranslation } from '../../hooks/useTranslation';
import './Origin.css';

const Origin = () => {
  const [ref, isVisible] = useScrollAnimation();
  const { t } = useTranslation();

  return (
    <section 
      ref={ref}
      className={`section origin-section ${isVisible ? 'visible' : ''}`}
      id="origin"
    >
      <div className="origin-content">
        <h2 className="origin-title">{t('origin.title')}</h2>
        
        <div className="origin-text">
          <p className="origin-paragraph">
            {t('origin.paragraph1')} <strong>{t('origin.highlight1')}</strong>.
          </p>
          
          <p className="origin-paragraph">
            {t('origin.paragraph2')}
          </p>

          <p className="origin-paragraph">
            {t('origin.paragraph3')} <strong>{t('origin.highlight2')}</strong>.
          </p>

          <p className="origin-decision">
            <strong>{t('origin.decision')}</strong>
          </p>

          <p className="origin-paragraph">
            {t('origin.paragraph4')} <strong>{t('origin.highlight3')}</strong>.{' '}
            {t('origin.paragraph5')}
          </p>

          <p className="origin-human">
            {t('origin.human')}
          </p>

          <p className="origin-transformation">
            {t('origin.transformation')}{' '}
            <span className="highlight-red">{t('origin.highlight4')}</span> — 
            and <span className="highlight-red">{t('origin.highlight5')}</span>.
          </p>

          <p className="origin-call">
            <strong>{t('origin.call')}</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Origin;