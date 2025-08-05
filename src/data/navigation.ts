import { NavItem, CompanyInfo } from '../types'

export const navigationItems: NavItem[] = [
  {
    label: 'Accueil',
    href: '#accueil'
  },
  {
    label: 'Formations',
    href: '#formations'
  },
  {
    label: 'Prestations',
    href: '#prestations'
  },
  {
    label: 'À Propos',
    href: '#apropos'
  },
  {
    label: 'Contact',
    href: '#contact'
  }
]

export const companyInfo: CompanyInfo = {
  name: 'NOVA IMPÉRIA',
  tagline: 'L\'excellence au service de vos ambitions',
  email: 'contact@nova-imperia.fr',
  phone: '+33 1 23 45 67 89',
  address: 'Paris, France',
  social: {
    linkedin: 'https://linkedin.com/company/nova-imperia',
    facebook: 'https://facebook.com/nova-imperia',
    instagram: 'https://instagram.com/nova-imperia',
    youtube: 'https://youtube.com/nova-imperia'
  }
}