import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { AccessCodeProps } from '../types';

const AccessCode: React.FC<AccessCodeProps> = ({ onUnlock }) => {
  const { t } = useTranslation();
  const [code, setCode] = useState('');
  const [showCode, setShowCode] = useState(false);
  const [error, setError] = useState('');
  const [isUnlocking, setIsUnlocking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsUnlocking(true);

    // Simulation d'une vérification sécurisée
    setTimeout(() => {
      if (code.toLowerCase() === 'oveni') {
        // Animation de déverrouillage
        setTimeout(() => {
          onUnlock();
        }, 1000);
      } else {
        setError(t('invalidCode'));
        setIsUnlocking(false);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Overlay futuriste */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
      
      {/* Particules animées */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto px-6">
        {/* Panneau d'accès */}
        <div className="bg-black/70 backdrop-blur-xl rounded-2xl border border-gray-700 shadow-2xl shadow-cyan-400/10 p-8">
          {/* En-tête */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-cyan-400 shadow-lg shadow-cyan-400/50">
              <Lock className={`w-8 h-8 text-cyan-400 transition-transform duration-500 ${isUnlocking ? 'animate-spin' : ''}`} />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              {t('welcome')}
            </h2>
            <p className="text-gray-400 text-sm">
              {t('subtitle')}
            </p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t('accessCode')}
              </label>
              <div className="relative">
                <input
                  type={showCode ? 'text' : 'password'}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder={t('enterCode')}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowCode(!showCode)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  {showCode ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {error && (
                <p className="text-red-400 text-sm mt-2 animate-pulse">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isUnlocking}
              className={`w-full py-3 px-4 rounded-lg font-medium text-black transition-all duration-300 transform ${
                isUnlocking
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 hover:scale-105'
              } shadow-lg shadow-cyan-400/25`}
            >
              {isUnlocking ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  <span>Déverrouillage...</span>
                </div>
              ) : (
                t('unlock')
              )}
            </button>
          </form>

          {/* Indicateur de sécurité */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center space-x-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Accès sécurisé • Chiffrement actif</span>
            </div>
          </div>
        </div>

        {/* Hint discret */}
        <div className="mt-6 text-center text-xs text-gray-600">
          <p className="opacity-30 hover:opacity-100 transition-opacity duration-500">
            "Oveni" - Wakanda Forever
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccessCode;