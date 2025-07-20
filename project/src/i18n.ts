import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traductions complètes pour les trois langues
const resources = {
  fr: {
    translation: {
      // Navigation et Layout
      "skolarzone": "Skolarzone",
      "admin": "Admin",
      "lastUpdate": "Dernière mise à jour : 14/07/2025, 15:14 AST",
      "accessCode": "Code d'accès",
      "enterCode": "Entrez le code d'accès",
      "unlock": "Déverrouiller",
      "invalidCode": "Code invalide",
      "welcome": "Bienvenue sur Skolarzone",
      "subtitle": "Plateforme éducative avancée",
      
      // Dashboard Étudiant
      "studentDashboard": "Tableau de Bord Étudiant",
      "yourEmail": "Votre email",
      "emailRequired": "Email requis",
      "selectService": "Sélectionnez un service",
      "description": "Description ou pièce jointe (optionnel)",
      "submit": "Soumettre",
      "formSent": "Formulaire envoyé avec succès !",
      "redirecting": "Redirection vers PayPal...",
      "error": "Erreur lors de l'envoi",
      
      // Services et Prix
      "services": {
        "homework5": "Devoir PDF (≤ 5 pages) - $10",
        "homework20": "Devoir PDF (6-20 pages) - $25",
        "homeworkSub": "Abonnement devoirs (15 projets) - $75/mois",
        "certificate": "Certificat unique - $25",
        "certificateSub": "Abonnement certificat (6/mois) - $50/mois",
        "advancement": "Avancement unité (Progrenti, etc.) - $50/mois (5 unités)"
      },
      
      // Panel Admin
      "adminPanel": "Panel Administrateur",
      "submissions": "Soumissions",
      "email": "Email",
      "service": "Service",
      "submissionDate": "Date de soumission",
      "actions": "Actions",
      "approve": "Approuver",
      "reject": "Rejeter",
      "filterByDate": "Filtrer par date",
      "searchByEmail": "Rechercher par email",
      "noSubmissions": "Aucune soumission trouvée",
      "lastSync": "Dernière synchronisation : 14/07/2025, 15:14 AST"
    }
  },
  en: {
    translation: {
      // Navigation et Layout
      "skolarzone": "Skolarzone",
      "admin": "Admin",
      "lastUpdate": "Last update: 07/14/2025, 15:14 AST",
      "accessCode": "Access Code",
      "enterCode": "Enter access code",
      "unlock": "Unlock",
      "invalidCode": "Invalid code",
      "welcome": "Welcome to Skolarzone",
      "subtitle": "Advanced Educational Platform",
      
      // Dashboard Étudiant
      "studentDashboard": "Student Dashboard",
      "yourEmail": "Your email",
      "emailRequired": "Email required",
      "selectService": "Select a service",
      "description": "Description or attachment (optional)",
      "submit": "Submit",
      "formSent": "Form sent successfully!",
      "redirecting": "Redirecting to PayPal...",
      "error": "Error sending form",
      
      // Services et Prix
      "services": {
        "homework5": "PDF Assignment (≤ 5 pages) - $10",
        "homework20": "PDF Assignment (6-20 pages) - $25",
        "homeworkSub": "Assignment Subscription (15 projects) - $75/month",
        "certificate": "Single Certificate - $25",
        "certificateSub": "Certificate Subscription (6/month) - $50/month",
        "advancement": "Unit Advancement (Progrenti, etc.) - $50/month (5 units)"
      },
      
      // Panel Admin
      "adminPanel": "Admin Panel",
      "submissions": "Submissions",
      "email": "Email",
      "service": "Service",
      "submissionDate": "Submission Date",
      "actions": "Actions",
      "approve": "Approve",
      "reject": "Reject",
      "filterByDate": "Filter by date",
      "searchByEmail": "Search by email",
      "noSubmissions": "No submissions found",
      "lastSync": "Last sync: 07/14/2025, 15:14 AST"
    }
  },
  es: {
    translation: {
      // Navigation et Layout
      "skolarzone": "Skolarzone",
      "admin": "Admin",
      "lastUpdate": "Última actualización: 14/07/2025, 15:14 AST",
      "accessCode": "Código de Acceso",
      "enterCode": "Ingrese el código de acceso",
      "unlock": "Desbloquear",
      "invalidCode": "Código inválido",
      "welcome": "Bienvenido a Skolarzone",
      "subtitle": "Plataforma Educativa Avanzada",
      
      // Dashboard Étudiant
      "studentDashboard": "Panel de Estudiante",
      "yourEmail": "Su email",
      "emailRequired": "Email requerido",
      "selectService": "Seleccione un servicio",
      "description": "Descripción o archivo adjunto (opcional)",
      "submit": "Enviar",
      "formSent": "¡Formulario enviado exitosamente!",
      "redirecting": "Redirigiendo a PayPal...",
      "error": "Error al enviar formulario",
      
      // Services et Prix
      "services": {
        "homework5": "Tarea PDF (≤ 5 páginas) - $10",
        "homework20": "Tarea PDF (6-20 páginas) - $25",
        "homeworkSub": "Suscripción tareas (15 proyectos) - $75/mes",
        "certificate": "Certificado único - $25",
        "certificateSub": "Suscripción certificado (6/mes) - $50/mes",
        "advancement": "Avance de unidad (Progrenti, etc.) - $50/mes (5 unidades)"
      },
      
      // Panel Admin
      "adminPanel": "Panel de Administrador",
      "submissions": "Envíos",
      "email": "Email",
      "service": "Servicio",
      "submissionDate": "Fecha de envío",
      "actions": "Acciones",
      "approve": "Aprobar",
      "reject": "Rechazar",
      "filterByDate": "Filtrar por fecha",
      "searchByEmail": "Buscar por email",
      "noSubmissions": "No se encontraron envíos",
      "lastSync": "Última sincronización: 14/07/2025, 15:14 AST"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;