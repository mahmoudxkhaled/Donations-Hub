export interface TrustBarItem {
  icon: string;
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  subtitle: string;
  highlight?: boolean;
}

export interface UserRole {
  icon: string;
  title: string;
  description: string;
  actionLabel: string;
}

export interface DonationCategory {
  imageSrc: string;
  label: string;
  alt: string;
}

export interface ValidationNode {
  icon: string;
  label: string;
  variant: 'primary' | 'accent';
}

export interface SimpleLink {
  label: string;
  href: string;
}
