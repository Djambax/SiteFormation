import React from 'react'
import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi'
import FormationCard from '../ui/FormationCard'
import Button from '../ui/Button'
import { formationDomains, formationsSectionContent } from '../../data/formations'

const Formations: React.FC = () => {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="formations" className="section-padding bg-gradient-to-br from-secondary-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary-300 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6"
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <HiAcademicCap className="w-8 h-8 text-primary-600" />
          </motion.div>

          <motion.h2
            className="heading-lg text-secondary-800 mb-6"
            variants={itemVariants}
          >
            {formationsSectionContent.title}
          </motion.h2>

          <motion.p
            className="body-lg text-secondary-600 max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            {formationsSectionContent.subtitle}
          </motion.p>
        </motion.div>

        {/* Formations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {formationDomains.map((formation, index) => (
            <FormationCard
              key={formation.id}
              formation={formation}
              index={index}
              onCardClick={handleNavClick}
            />
          ))}
        </div>

        {/* Section CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, threshold: 0.1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            variant="primary"
            size="lg"
            href={formationsSectionContent.ctaHref}
            onClick={() => handleNavClick(formationsSectionContent.ctaHref)}
            className="transform hover:scale-105 transition-all duration-300"
          >
            {formationsSectionContent.ctaText}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Formations