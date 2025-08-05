import React from 'react'
import { 
  HiUserGroup, 
  HiAcademicCap, 
  HiBadgeCheck, 
  HiSupport 
} from 'react-icons/hi'
import { ValueProposition } from '../types'

export const valuePropositions: ValueProposition[] = [
  {
    id: 'accompagnement-personnalise',
    title: 'Accompagnement Personnalisé',
    description: 'Chaque parcours de formation est unique et adapté à vos besoins spécifiques. Nos experts vous accompagnent individuellement pour maximiser votre progression et atteindre vos objectifs professionnels.',
    icon: React.createElement(HiUserGroup)
  },
  {
    id: 'formateurs-experts',
    title: 'Formateurs Experts',
    description: 'Nos formateurs sont des professionnels reconnus dans leur domaine avec une expérience terrain confirmée. Ils partagent leur expertise pratique pour vous transmettre des compétences immédiatement applicables.',
    icon: React.createElement(HiAcademicCap)
  },
  {
    id: 'certifications-reconnues',
    title: 'Certifications Reconnues',
    description: 'Nos formations sont certifiées et éligibles au CPF. Obtenez des certifications reconnues par les entreprises et valorisez votre parcours professionnel avec des compétences certifiées.',
    icon: React.createElement(HiBadgeCheck)
  },
  {
    id: 'suivi-post-formation',
    title: 'Suivi Post-Formation',
    description: 'L\'apprentissage ne s\'arrête pas à la fin de la formation. Nous assurons un suivi continu, des sessions de révision et un accompagnement dans la mise en pratique de vos nouvelles compétences.',
    icon: React.createElement(HiSupport)
  }
]

export const valuePropositionsSectionContent = {
  title: "Pourquoi Choisir NOVA IMPÉRIA ?",
  subtitle: "Découvrez les 4 piliers qui font de NOVA IMPÉRIA votre partenaire privilégié pour votre développement professionnel et la réussite de vos projets.",
  backgroundTitle: "Excellence"
}