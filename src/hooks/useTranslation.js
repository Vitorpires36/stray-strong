import { useLanguage } from '../context/LanguageContext';

// Import das traduções
import en from '../locales/en.json';
import pt from '../locales/pt.json';
import es from '../locales/es.json';

const translations = { en, pt, es };

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key; // Retorna a chave se não encontrar tradução
  };

  return { t };
};