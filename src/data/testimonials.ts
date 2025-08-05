import { Testimonial } from '../types'

export const testimonials: Testimonial[] = [
  {
    id: 'marie-dupont',
    name: 'Marie Dupont',
    role: 'Directrice Marketing',
    company: 'TechStart Solutions',
    content: 'La formation en marketing digital m\'a permis de transformer complètement notre stratégie de communication. En 6 mois, nous avons triplé notre visibilité en ligne et doublé notre taux de conversion. L\'approche pratique et personnalisée de NOVA IMPÉRIA fait vraiment la différence.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b192?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'thomas-martin',
    name: 'Thomas Martin',
    role: 'Entrepreneur',
    company: 'Martin Consulting',
    content: 'Grâce à l\'accompagnement personnalisé de NOVA IMPÉRIA, j\'ai pu structurer mon projet entrepreneurial et le lancer avec succès. Les formateurs m\'ont transmis les clés essentielles pour développer mon business plan et gérer efficacement mon entreprise.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'sophie-bernard',
    name: 'Sophie Bernard',
    role: 'Responsable RH',
    company: 'Innov Group',
    content: 'La formation en management m\'a donné les outils pour mieux gérer mon équipe et améliorer la cohésion. Les techniques de leadership que j\'ai apprises sont maintenant au cœur de ma pratique managériale. Une formation qui a réellement impacté ma carrière.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'alexandre-rousseau',
    name: 'Alexandre Rousseau',
    role: 'Directeur Commercial',
    company: 'SalesForce Pro',
    content: 'Les techniques de vente enseignées par NOVA IMPÉRIA ont révolutionné mon approche commerciale. J\'ai augmenté mes performances de 40% et je me sens beaucoup plus confiant dans mes négociations. Formation exceptionnelle avec des résultats concrets.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'claire-moreau',
    name: 'Claire Moreau',
    role: 'Consultante Finance',
    company: 'FinanceExpert',
    content: 'La formation en gestion financière était exactement ce dont j\'avais besoin pour faire évoluer ma carrière. Le contenu était riche, actuel et immédiatement applicable. Le suivi post-formation est un vrai plus qui m\'a aidée dans ma transition professionnelle.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'julien-petit',
    name: 'Julien Petit',
    role: 'Chef de Projet Digital',
    company: 'Digital Innovations',
    content: 'NOVA IMPÉRIA m\'a accompagné dans ma montée en compétences sur l\'IA et les nouvelles technologies. Aujourd\'hui, je pilote des projets de transformation digitale avec une expertise que je n\'aurais jamais imaginé acquérir si rapidement.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face'
  }
]

export const testimonialsSectionContent = {
  title: "Ils Nous Font Confiance",
  subtitle: "Découvrez les témoignages de nos clients qui ont transformé leur carrière grâce à nos formations premium et notre accompagnement personnalisé.",
  statsTitle: "Nos Résultats Parlent d'Eux-Mêmes",
  stats: [
    { value: "95%", label: "Taux de Satisfaction" },
    { value: "500+", label: "Professionnels Formés" },
    { value: "4.9/5", label: "Note Moyenne" }
  ]
}