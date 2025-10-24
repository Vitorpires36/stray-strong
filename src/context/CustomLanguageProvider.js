import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const CustomLanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  // Retornar children diretamente, sem wrapper div
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a CustomLanguageProvider');
  }
  return context;
};