import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Users, 
  Star, 
  ChevronRight,
  Play,
  CheckCircle,
  Globe,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react';

interface PublicLandingProps {
  onSecretAccess: () => void;
}

const PublicLanding: React.FC<PublicLandingProps> = ({ onSecretAccess }) => {
  const { t } = useTranslation();
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);

  // Accès secret via 5 clics rapides sur le logo (dans les 3 secondes)
  const handleLogoClick = () => {
    const now = Date.now();
    
    // Reset si plus de 3 secondes entre les clics
    if (now - lastClickTime > 3000) {
      setLogoClickCount(1);
    } else {
      setLogoClickCount(prev => prev + 1);
    }
    
    setLastClickTime(now);

    // Accès accordé après 5 clics rapides
    if (logoClickCount >= 4) { // 4 car on vient d'ajouter 1
      onSecretAccess();
      setLogoClickCount(0);
    }

    // Reset automatique après 5 secondes
    setTimeout(() => {
      setLogoClickCount(0);
    }, 5000);
  };

  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Étudiante en Informatique",
      content: "Skolarzone a transformé ma façon d'apprendre. Les ressources sont exceptionnelles !",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Jean Dubois",
      role: "Doctorant en Physique",
      content: "Une plateforme révolutionnaire qui repousse les limites de l'éducation moderne.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Sarah Johnson",
      role: "Professeure Universitaire",
      content: "L'avenir de l'éducation est ici. Skolarzone redéfinit l'apprentissage.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Apprentissage Adaptatif",
      description: "IA avancée qui s'adapte à votre rythme d'apprentissage unique"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certifications Reconnues",
      description: "Obtenez des certifications valorisées par l'industrie"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Communauté Mondiale",
      description: "Rejoignez une communauté de millions d'apprenants"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Technologie Quantique",
      description: "Powered by quantum computing pour une expérience ultra-rapide"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Particules animées de fond */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-gray-700 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
             onClick={handleLogoClick}
            >
              <div className="relative">
               <div className={`w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center border-2 border-cyan-400 shadow-lg transition-all duration-300 ${
                 logoClickCount > 0 
                   ? 'shadow-cyan-400/100 animate-pulse' 
                   : 'shadow-cyan-400/50 group-hover:shadow-cyan-400/80'
               }`}>
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                </div>
               <div className={`absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full transition-all duration-300 ${
                 logoClickCount > 0 ? 'animate-ping' : 'animate-pulse'
               }`}></div>
               {/* Indicateur de progression secret (très subtil) */}
               {logoClickCount > 0 && (
                 <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                   <div className="flex space-x-1">
                     {[...Array(5)].map((_, i) => (
                       <div
                         key={i}
                         className={`w-1 h-1 rounded-full transition-all duration-200 ${
                           i < logoClickCount ? 'bg-cyan-400' : 'bg-gray-600'
                         }`}
                       />
                     ))}
                   </div>
                 </div>
               )}
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Skolarzone
              </h1>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors">Fonctionnalités</a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">À propos</a>
              <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
              <a href="#legal" className="text-gray-300 hover:text-cyan-400 transition-colors">Mentions légales</a>
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-400/25">
                Découvrir
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 
              className="text-6xl md:text-8xl font-bold mb-8"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                L'Avenir
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                de l'Éducation
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Découvrez une plateforme éducative révolutionnaire qui utilise l'intelligence artificielle 
              et la technologie quantique pour transformer votre apprentissage.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-lg rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-2xl shadow-cyan-400/50 hover:shadow-cyan-400/80 transform hover:scale-105">
                <Play className="w-6 h-6 inline mr-2" />
                Commencer l'Aventure
              </button>
              
              <button className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold text-lg rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-lg shadow-cyan-400/25">
                Voir la Démo
                <ChevronRight className="w-6 h-6 inline ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Statistiques impressionnantes */}
        <div className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "2.5M+", label: "Étudiants Actifs" },
              { number: "150+", label: "Pays" },
              { number: "98%", label: "Taux de Réussite" },
              { number: "24/7", label: "Support IA" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-24 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              Technologie Révolutionnaire
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explorez les fonctionnalités qui font de Skolarzone la plateforme éducative la plus avancée au monde.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-8 hover:border-cyan-400 transition-all duration-300 group hover:shadow-2xl hover:shadow-cyan-400/20">
                <div className="text-cyan-400 mb-6 group-hover:text-cyan-300 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-100 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Services Détaillés */}
      <section id="services" className="relative z-10 py-24 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              Nos Services Éducatifs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez notre gamme complète de services éducatifs conçus pour accompagner votre réussite académique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 - Aide aux devoirs */}
            <div className="bg-black/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-8 hover:border-cyan-400 transition-all duration-300 group">
              <div className="text-cyan-400 mb-6">
                <BookOpen className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Aide aux Devoirs</h3>
              <p className="text-gray-300 mb-6">
                Assistance professionnelle pour vos devoirs et projets académiques. Nos experts vous accompagnent 
                dans la réalisation de vos travaux avec un support personnalisé et des corrections détaillées.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Devoirs PDF jusqu'à 5 pages : $10 USD</p>
                <p>• Devoirs PDF de 6 à 20 pages : $25 USD</p>
                <p>• Abonnement mensuel (15 projets) : $75 USD</p>
              </div>
            </div>

            {/* Service 2 - Certificats */}
            <div className="bg-black/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-8 hover:border-cyan-400 transition-all duration-300 group">
              <div className="text-cyan-400 mb-6">
                <Award className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Certificats Académiques</h3>
              <p className="text-gray-300 mb-6">
                Obtenez des certificats reconnus pour valider vos compétences et connaissances. 
                Nos certifications sont acceptées par de nombreuses institutions éducatives.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Certificat unique : $25 USD</p>
                <p>• Abonnement certificat (6/mois) : $50 USD</p>
                <p>• Validation institutionnelle incluse</p>
              </div>
            </div>

            {/* Service 3 - Progression d'unité */}
            <div className="bg-black/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-8 hover:border-cyan-400 transition-all duration-300 group">
              <div className="text-cyan-400 mb-6">
                <TrendingUp className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Progression d'Unité</h3>
              <p className="text-gray-300 mb-6">
                Accélérez votre progression dans vos cours en ligne (Progrenti, etc.). 
                Notre service vous aide à compléter efficacement vos unités d'apprentissage.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Forfait mensuel : $50 USD</p>
                <p>• Jusqu'à 5 unités par mois</p>
                <p>• Support technique inclus</p>
              </div>
            </div>
          </div>

          {/* Avantages */}
          <div className="mt-16 bg-black/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Pourquoi Choisir Skolarzone ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-white font-semibold mb-2">Sécurisé</h4>
                <p className="text-gray-400 text-sm">Paiements sécurisés via PayPal</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-white font-semibold mb-2">Rapide</h4>
                <p className="text-gray-400 text-sm">Traitement en 24-48h maximum</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-white font-semibold mb-2">Qualité</h4>
                <p className="text-gray-400 text-sm">Experts certifiés et expérimentés</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-white font-semibold mb-2">Multilingue</h4>
                <p className="text-gray-400 text-sm">Support en FR, EN, ES</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-6">
              Ils Nous Font Confiance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez ce que disent nos utilisateurs de leur expérience transformatrice avec Skolarzone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-8 hover:border-orange-400 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-cyan-400 mr-4"
                  />
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic group-hover:text-white transition-colors">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section id="about" className="relative z-10 py-24 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              À Propos de Skolarzone
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez l'histoire et la vision derrière la plateforme éducative la plus innovante au monde.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Notre Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                Skolarzone révolutionne l'éducation en combinant intelligence artificielle avancée, 
                technologie quantique et pédagogie moderne pour créer une expérience d'apprentissage 
                personnalisée et accessible à tous.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Notre plateforme s'adapte au rythme unique de chaque apprenant, offrant des parcours 
                éducatifs sur mesure qui maximisent le potentiel de chaque étudiant à travers le monde.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-black/50 backdrop-blur-xl rounded-xl border border-gray-700 p-4">
                  <div className="text-2xl font-bold text-cyan-400">2025</div>
                  <div className="text-sm text-gray-400">Année de création</div>
                </div>
                <div className="bg-black/50 backdrop-blur-xl rounded-xl border border-gray-700 p-4">
                  <div className="text-2xl font-bold text-cyan-400">150+</div>
                  <div className="text-sm text-gray-400">Pays desservis</div>
                </div>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Notre Vision</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">Démocratiser l'accès à une éducation de qualité mondiale</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">Personnaliser l'apprentissage grâce à l'IA avancée</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">Créer une communauté mondiale d'apprenants connectés</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">Préparer les leaders de demain avec les compétences du futur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="relative z-10 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-6">
              Contactez-Nous
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une question ? Une suggestion ? Notre équipe est là pour vous accompagner dans votre parcours éducatif.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Informations de contact */}
            <div className="bg-black/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Informations de Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <a 
                      href="mailto:bidalgosk@hotmail.com" 
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      bidalgosk@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">siège numérique</h4>
                    <p className="text-gray-400">République Dominicaine</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Support</h4>
                    <p className="text-gray-400">24/7 - Réponse sous 24h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="bg-black/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Envoyez-nous un Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nom</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Votre message..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-400/25"
                >
                  Envoyer le Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Section Mentions Légales */}
      <section id="legal" className="relative z-10 py-24 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              Mentions Légales
            </h2>
          </div>

          <div className="bg-black/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-8 space-y-8">
            {/* Informations légales */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Informations Légales</h3>
              <div className="space-y-4 text-gray-300">
                <p><strong>Nom du site :</strong> Skolarzone</p>
                <p><strong>Propriétaire :</strong> Skolarzone Educational Services</p>
                <p><strong>Email de contact :</strong> <a href="mailto:bidalgosk@hotmail.com" className="text-cyan-400 hover:text-cyan-300">bidalgosk@hotmail.com</a></p>
                <p><strong>Localisation :</strong> République Dominicaine</p>
                <p><strong>Hébergement :</strong> Vercel Inc.</p>
              </div>
            </div>

            {/* Politique de confidentialité */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Politique de Confidentialité</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong>Collecte de données :</strong> Nous collectons uniquement les informations nécessaires 
                  au traitement de vos demandes (email, service demandé, description optionnelle).
                </p>
                <p>
                  <strong>Utilisation des données :</strong> Vos données sont utilisées exclusivement pour 
                  traiter vos commandes et vous contacter concernant nos services.
                </p>
                <p>
                  <strong>Protection des données :</strong> Toutes les données sont transmises de manière 
                  sécurisée via Formspree et les paiements sont traités par PayPal.
                </p>
                <p>
                  <strong>Cookies :</strong> Ce site utilise Google AdSense qui peut placer des cookies 
                  pour personnaliser les publicités. Vous pouvez désactiver les cookies dans votre navigateur.
                </p>
                <p>
                  <strong>Droits des utilisateurs :</strong> Vous avez le droit d'accéder, modifier ou 
                  supprimer vos données personnelles en nous contactant.
                </p>
              </div>
            </div>

            {/* Conditions d'utilisation */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Conditions d'Utilisation</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong>Services :</strong> Skolarzone propose des services d'aide éducative, 
                  de certification et de progression académique.
                </p>
                <p>
                  <strong>Paiements :</strong> Tous les prix sont en USD. Les paiements sont traités 
                  via PayPal de manière sécurisée.
                </p>
                <p>
                  <strong>Délais :</strong> Les services sont généralement traités sous 24-48h 
                  après confirmation du paiement.
                </p>
                <p>
                  <strong>Responsabilité :</strong> Skolarzone s'engage à fournir des services 
                  de qualité mais ne peut garantir les résultats académiques.
                </p>
                <p>
                  <strong>Propriété intellectuelle :</strong> Tout le contenu de ce site est 
                  protégé par les droits d'auteur.
                </p>
              </div>
            </div>

            {/* Contact pour questions légales */}
            <div className="border-t border-gray-600 pt-6">
              <p className="text-gray-400 text-sm">
                Pour toute question concernant ces mentions légales ou notre politique de confidentialité, 
                contactez-nous à : <a href="mailto:bidalgosk@hotmail.com" className="text-cyan-400 hover:text-cyan-300">bidalgosk@hotmail.com</a>
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Dernière mise à jour : 14 juillet 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8">
            Prêt à Révolutionner Votre Apprentissage ?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Rejoignez des millions d'étudiants qui ont déjà transformé leur avenir avec Skolarzone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-lg rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-2xl shadow-cyan-400/50 transform hover:scale-105">
              <CheckCircle className="w-6 h-6 inline mr-2" />
              Commencer Gratuitement
            </button>
            
            <button className="px-10 py-4 bg-transparent border-2 border-orange-400 text-orange-400 font-bold text-lg rounded-xl hover:bg-orange-400 hover:text-black transition-all duration-300">
              <Globe className="w-6 h-6 inline mr-2" />
              Explorer les Cours
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-700 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center border-2 border-cyan-400">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Skolarzone</h3>
              </div>
              <p className="text-gray-400 mb-4">
                L'avenir de l'éducation commence ici. Transformez votre potentiel en réalité.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors cursor-pointer">
                  <Globe className="w-4 h-4 text-gray-400 hover:text-black" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Plateforme</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Cours en Ligne</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Certifications</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">IA Personnalisée</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Communauté</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Centre d'Aide</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">API</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">À propos</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
                <li><a href="#legal" className="hover:text-cyan-400 transition-colors">Mentions légales</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Skolarzone Educational Services. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#legal" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Confidentialité</a>
              <a href="#legal" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Conditions</a>
              <a href="#legal" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Mentions légales</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Indicateur de progression secret (invisible sauf pour debug) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-cyan-400 p-2 rounded text-xs z-50">
          Clics: {logoClickCount}/5 | Temps: {lastClickTime > 0 ? Math.max(0, 3 - Math.floor((Date.now() - lastClickTime) / 1000)) : 3}s
        </div>
      )}
    </div>
  );
};

export default PublicLanding;