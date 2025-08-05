import React from 'react'
import { 
  HiBriefcase, 
  HiSpeakerphone, 
  HiUserGroup, 
  HiTrendingUp, 
  HiCalculator,
  HiLightningBolt,
  HiSparkles
} from 'react-icons/hi'
import { FormationDomain } from '../types'

export const formationDomains: FormationDomain[] = [
  {
    id: 'business-entrepreneuriat',
    title: 'Business & Entrepreneuriat',
    description: 'Création et développement d\'entreprise, stratégie business, innovation et gestion entrepreneuriale.',
    icon: React.createElement(HiBriefcase),
    color: 'from-blue-500 to-blue-700',
    href: '#business-formation'
  },
  {
    id: 'marketing-communication',
    title: 'Marketing & Communication',
    description: 'Marketing digital, communication de marque, réseaux sociaux et stratégies de communication.',
    icon: React.createElement(HiSpeakerphone),
    color: 'from-purple-500 to-purple-700',
    href: '#marketing-formation'
  },
  {
    id: 'management-leadership',
    title: 'Management & Leadership',
    description: 'Leadership d\'équipe, gestion des ressources humaines et développement des compétences managériales.',
    icon: React.createElement(HiUserGroup),
    color: 'from-green-500 to-green-700',
    href: '#management-formation'
  },
  {
    id: 'vente-commercial',
    title: 'Vente & Commercial',
    description: 'Techniques de vente, négociation commerciale, développement client et stratégies commerciales.',
    icon: React.createElement(HiTrendingUp),
    color: 'from-orange-500 to-orange-700',
    href: '#vente-formation'
  },
  {
    id: 'gestion-finance',
    title: 'Gestion & Finance',
    description: 'Gestion d\'entreprise, contrôle financier, comptabilité et pilotage de la performance.',
    icon: React.createElement(HiCalculator),
    color: 'from-red-500 to-red-700',
    href: '#gestion-formation'
  },
  {
    id: 'ia-digital',
    title: 'IA & Digital',
    description: 'Intelligence artificielle en entreprise, transformation digitale et nouvelles technologies.',
    icon: React.createElement(HiLightningBolt),
    color: 'from-cyan-500 to-cyan-700',
    href: '#ia-formation'
  },
  {
    id: 'formation-sur-mesure',
    title: 'Formation Sur Mesure',
    description: 'Accompagnement personnalisé, coaching individuel et formations adaptées à vos besoins spécifiques.',
    icon: React.createElement(HiSparkles),
    color: 'from-primary-500 to-primary-700',
    href: '#sur-mesure-formation'
  }
]

export const formationsSectionContent = {
  title: "Nos Domaines d'Excellence",
  subtitle: "Découvrez nos 7 domaines de formation premium, conçus pour développer vos compétences et accélérer votre réussite professionnelle.",
  ctaText: "Voir toutes nos formations",
  ctaHref: "#contact"
}