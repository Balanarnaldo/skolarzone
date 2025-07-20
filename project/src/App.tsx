import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PublicLanding from './components/PublicLanding';
import Layout from './components/Layout';
import AccessCode from './components/AccessCode';
import Dashboard from './components/Dashboard';
import './i18n';

type AppView = 'public' | 'access' | 'dashboard';

function App() {
  const { t } = useTranslation();
  const [currentView, setCurrentView] = useState<AppView>('public');
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleSecretAccess = () => {
    setCurrentView('access');
  };

  const handleUnlock = () => {
    setIsUnlocked(true);
    setCurrentView('dashboard');
  };


  const handleBackToAccess = () => {
    setCurrentView('public');
    setIsUnlocked(false);
  };

  // Page publique
  if (currentView === 'public') {
    return <PublicLanding onSecretAccess={handleSecretAccess} />;
  }

  // Page d'accès avec code
  if (!isUnlocked && currentView === 'access') {
    return <AccessCode onUnlock={handleUnlock} />;
  }

  // Interfaces protégées
  return (
    <Layout>
      <Dashboard onBackToAccess={handleBackToAccess} />
    </Layout>
  );
}

export default App;