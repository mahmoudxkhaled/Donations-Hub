export interface TrustBarItem {
  icon: string;
  labelKey: string;
}

export interface StatItem {
  value: string;
  labelKey: string;
}

export interface FeatureCard {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

export interface ProcessStep {
  number: number;
  titleKey: string;
  subtitleKey: string;
  highlight?: boolean;
}

export interface UserRole {
  icon: string;
  titleKey: string;
  descriptionKey: string;
  actionLabelKey: string;
}

export interface DonationCategory {
  imageSrc: string;
  labelKey: string;
  altKey: string;
}

export interface ValidationNode {
  icon: string;
  labelKey: string;
  variant: 'primary' | 'accent';
}

export interface SimpleLink {
  labelKey: string;
  href: string;
}
