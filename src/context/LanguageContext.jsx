import { createContext, useContext, useState } from 'react';
const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);
export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  const toggleLanguage = () => setLang(prev => prev === 'en' ? 'ur' : 'en');
  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};