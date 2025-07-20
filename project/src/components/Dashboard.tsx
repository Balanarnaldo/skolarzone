import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import { FormData, ServiceOption, DashboardProps } from '../types';

const Dashboard: React.FC<DashboardProps> = ({ onBackToAccess }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    service: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const services: ServiceOption[] = [
    { value: 'homework5', label: t('services.homework5'), price: 10 },
    { value: 'homework20', label: t('services.homework20'), price: 25 },
    { value: 'homeworkSub', label: t('services.homeworkSub'), price: 75 },
    { value: 'certificate', label: t('services.certificate'), price: 25 },
    { value: 'certificateSub', label: t('services.certificateSub'), price: 50 },
    { value: 'advancement', label: t('services.advancement'), price: 50 }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Envoi vers Formspree
      const response = await fetch('https://formspree.io/f/mpwlapbk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          service: formData.service,
          description: formData.description,
          timestamp: new Date().toISOString(),
          language: t('lang') || 'fr'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setMessage(t('formSent'));
        
        // Redirection vers PayPal après 2 secondes
        setTimeout(() => {
          setMessage(t('redirecting'));
          setTimeout(() => {
            window.location.href = 'https://paypal.me/ArnaldoBalan633?country.x=DO&locale.x=fr_XC';
          }, 1000);
        }, 2000);
      } else {
        throw new Error('Erreur réseau');
      }
    } catch (error) {
      setSubmitStatus('error');
      setMessage(t('error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header avec bouton retour */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
            {t('studentDashboard')}
          </h1>
          <p className="text-gray-400">{t('lastUpdate')}</p>
        </div>
        <button
          onClick={onBackToAccess}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour</span>
        </button>
      </div>

      {/* Formulaire principal */}
      <div className="bg-black/50 backdrop-blur-xl rounded-2xl border border-gray-700 shadow-2xl shadow-cyan-400/10 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {t('yourEmail')} *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="exemple@email.com"
              className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
              required
            />
          </div>

          {/* Service */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {t('selectService')} *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
              required
            >
              <option value="">{t('selectService')}</option>
              {services.map((service) => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {t('description')}
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              placeholder="Décrivez votre demande ou mentionnez vos pièces jointes..."
              className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none"
            />
          </div>

          {/* Bouton de soumission */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 px-6 rounded-lg font-medium text-black transition-all duration-300 transform ${
              isSubmitting
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse cursor-not-allowed'
                : 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 hover:scale-105'
            } shadow-lg shadow-cyan-400/25`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                <span>Envoi en cours...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <Send className="w-5 h-5" />
                <span>{t('submit')}</span>
              </div>
            )}
          </button>
        </form>

        {/* Messages de statut */}
        {submitStatus !== 'idle' && (
          <div className={`mt-6 p-4 rounded-lg flex items-center space-x-3 ${
            submitStatus === 'success' 
              ? 'bg-green-900/50 border border-green-500 text-green-300' 
              : 'bg-red-900/50 border border-red-500 text-red-300'
          }`}>
            {submitStatus === 'success' ? (
              <CheckCircle className="w-5 h-5 text-green-400" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-400" />
            )}
            <span className="font-medium">{message}</span>
          </div>
        )}
      </div>

      {/* Informations de sécurité */}
      <div className="mt-8 bg-gray-900/50 backdrop-blur-xl rounded-xl border border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-cyan-400 mb-3">Sécurité & Paiement</h3>
        <div className="space-y-2 text-sm text-gray-400">
          <p>• Toutes les données sont chiffrées et sécurisées</p>
          <p>• Paiement sécurisé via PayPal</p>
          <p>• Aucune information bancaire stockée</p>
          <p>• Redirection automatique après soumission</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;