import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './Participate.css';

// Import das imagens
import instalarImg from '../../assets/images/instalar.png';  
import abastecerImg from '../../assets/images/abastecer.png';
import comprarImg from '../../assets//images/comprar.png';
import doarImg from '../../assets//images/doar.png';
import entrarImg from '../../assets//images/entrar.png';

const Participate = ({ onOpenForm }) => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [showCryptoOptions, setShowCryptoOptions] = useState(false);

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

  const handleCryptoClick = (e) => {
    e.preventDefault();
    setShowCryptoOptions(!showCryptoOptions);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('ENS address copied to clipboard!');
    });
  };

  const participationOptions = [
    {
      image: instalarImg,
      title: t('participate.option1_title'),
      description: t('participate.option1_description'),
      onClick: onOpenForm,
      buttonText: t('participate.option1_button')
    },
    {
      image: abastecerImg,
      title: t('participate.option2_title'), 
      description: t('participate.option2_description'),
      link: "https://www.nounspot.com/",
      buttonText: t('participate.option2_button')
    },
    {
      image: comprarImg,
      title: t('participate.option3_title'),
      description: t('participate.option3_description'),
      link: "https://www.instagram.com/lil.feeders/",
      buttonText: t('participate.option3_button')
    },
    {
      image: doarImg,
      title: t('participate.option4_title'),
      description: t('participate.option4_description'),
      link: "https://www.patreon.com/cw/LilFeeders",
      buttonText: "Patreon",
      cryptoOption: true
    },
    {
      image: entrarImg,
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
              {/* Substitui o emoji pela imagem */}
              <img 
                src={option.image} 
                alt={option.title}
                className="card-image"
              />
              <h3 className="card-title">{option.title}</h3>
              <p className="card-description">{option.description}</p>
              
              {option.onClick ? (
                <button 
                  onClick={option.onClick}
                  className="card-button"
                >
                  {option.buttonText}
                </button>
              ) : option.cryptoOption ? (
                <div className="crypto-buttons">
                  <a 
                    href={option.link} 
                    className="card-button primary"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {option.buttonText}
                  </a>
                  <button 
                    onClick={handleCryptoClick}
                    className="card-button secondary"
                  >
                    Crypto
                  </button>
                </div>
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

              {/* Modal de opções de crypto */}
              {option.cryptoOption && showCryptoOptions && (
                <div className="crypto-modal">
                  <div className="crypto-content">
                    <h4>Donate with Crypto</h4>
                    <div className="ens-address">
                      <span className="ens-label">ENS:</span>
                      <code className="ens-value">lilfeeders.eth</code>
                      <button 
                        className="copy-button"
                        onClick={() => copyToClipboard('lilfeeders.eth')}
                        title="Copy to clipboard"
                      >
                        📋
                      </button>
                    </div>
                    <p className="crypto-note">
                      Send ETH or any ERC-20 token to this address
                    </p>
                    <button 
                      className="close-crypto"
                      onClick={() => setShowCryptoOptions(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Participate;