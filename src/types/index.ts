// Navigation types
export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

// Button component types
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

// Card component types
export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'elevated';
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

// Layout component types
export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

// Header component types
export interface HeaderProps {
  className?: string;
}

// Footer component types
export interface FooterProps {
  className?: string;
}

// Company information types
export interface CompanyInfo {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  social: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
  };
}

// Formation domain types
export interface FormationDomain {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  href: string;
}

// Testimonial types
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

// Statistics types
export interface Statistic {
  id: string;
  value: string;
  label: string;
  suffix?: string;
}

// Value proposition types
export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Animation types
export interface AnimationProps {
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  once?: boolean;
}

// Common component props
export interface CommonProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}