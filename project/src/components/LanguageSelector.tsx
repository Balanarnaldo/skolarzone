import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'fr', label: 'FR', flag: '🇫🇷' },
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'es', label: 'ES', flag: '🇪🇸' }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-5 h-5 text-cyan-400" />
      <div className="flex space-x-1">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`
              px-3 py-1 rounded-md text-sm font-bold transition-all duration-300
              border border-gray-600 hover:border-cyan-400
              ${i18n.language === lang.code 
                ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-400/50' 
                : 'bg-gray-800 text-cyan-400 hover:bg-gray-700'
              }
            `}
          >
            {lang.flag} {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;