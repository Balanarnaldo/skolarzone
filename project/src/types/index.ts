// Types TypeScript pour l'application
export interface FormData {
  email: string;
  service: string;
  description?: string;
}

export interface Submission {
  id: string;
  email: string;
  service: string;
  description?: string;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface ServiceOption {
  value: string;
  label: string;
  price: number;
}

export interface AccessCodeProps {
  onUnlock: () => void;
}

export interface DashboardProps {
  onBackToAccess: () => void;
}