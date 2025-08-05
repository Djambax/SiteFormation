import React from 'react'
import { motion } from 'framer-motion'
import { 
  HiPhone, 
  HiMail, 
  HiCalendar, 
  HiDownload, 
  HiClock,
  HiBadgeCheck,
  HiSparkles,
  HiLightningBolt
} from 'react-icons/hi'
import Button from '../ui/Button'
import { ctaSectionContent } from '../../data/cta'

const ContactCTA: React.FC = () => {
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
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-secondary-800 via-secondary-900 to-secondary-800 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent" />
        
        {/* Animated Elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-40 left-10 w-24 h-24 bg-primary-300/30 rounded-full blur-2xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Geometric Patterns */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-400 rounded-full opacity-60" />
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-primary-300 rounded-full opacity-40" />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary-500 rounded-full opacity-80" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          {/* Urgency Banner */}
          <motion.div
            className="text-center mb-8"
            variants={itemVariants}
          >
            <div className="inline-flex items-center space-x-2 bg-primary-500 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">
              <HiLightningBolt className="w-5 h-5" />
              <span>{ctaSectionContent.urgency.text}</span>
              <HiSparkles className="w-5 h-5" />
            </div>
            <p className="mt-2 text-primary-200 text-sm">
              {ctaSectionContent.urgency.description}
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="text-center mb-16">
            <motion.h2
              className="heading-lg mb-6"
              variants={itemVariants}
            >
              {ctaSectionContent.title}
            </motion.h2>

            <motion.p
              className="body-lg text-secondary-200 max-w-3xl mx-auto mb-6"
              variants={itemVariants}
            >
              {ctaSectionContent.subtitle}
            </motion.p>

            <motion.p
              className="text-secondary-300 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              {ctaSectionContent.description}
            </motion.p>
          </div>

          {/* CTA Options */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Primary CTA */}
            <motion.div
              className="relative p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center group hover:bg-white/15 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Recommandé
                </span>
              </div>

              <motion.div
                className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <HiCalendar className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-xl font-bold mb-2">
                {ctaSectionContent.primaryCTA.subtitle}
              </h3>
              <p className="text-secondary-200 mb-6">
                {ctaSectionContent.primaryCTA.description}
              </p>

              <Button
                variant="primary"
                size="lg"
                href={ctaSectionContent.primaryCTA.href}
                onClick={() => handleNavClick(ctaSectionContent.primaryCTA.href)}
                className="w-full justify-center hover:shadow-glow"
              >
                {ctaSectionContent.primaryCTA.text}
              </Button>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              className="relative p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-center group hover:bg-white/10 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <motion.div
                className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <HiDownload className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-xl font-bold mb-2">
                {ctaSectionContent.secondaryCTA.subtitle}
              </h3>
              <p className="text-secondary-200 mb-6">
                {ctaSectionContent.secondaryCTA.description}
              </p>

              <Button
                variant="secondary"
                size="lg"
                href={ctaSectionContent.secondaryCTA.href}
                onClick={() => handleNavClick(ctaSectionContent.secondaryCTA.href)}
                className="w-full justify-center border-white/30 text-white hover:bg-white hover:text-secondary-900"
              >
                {ctaSectionContent.secondaryCTA.text}
              </Button>
            </motion.div>
          </div>

          {/* Contact Information */}
          <motion.div
            className="text-center mb-12"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold mb-8">Ou contactez-nous directement</h3>
            
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <motion.a
                href={`tel:${ctaSectionContent.contactInfo.phone.number}`}
                className="flex items-center space-x-3 text-secondary-200 hover:text-primary-400 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                <HiPhone className="w-6 h-6 text-primary-500" />
                <div className="text-left">
                  <div className="font-medium">{ctaSectionContent.contactInfo.phone.number}</div>
                  <div className="text-sm">{ctaSectionContent.contactInfo.phone.description}</div>
                </div>
              </motion.a>

              <motion.a
                href={`mailto:${ctaSectionContent.contactInfo.email.address}`}
                className="flex items-center space-x-3 text-secondary-200 hover:text-primary-400 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                <HiMail className="w-6 h-6 text-primary-500" />
                <div className="text-left">
                  <div className="font-medium">{ctaSectionContent.contactInfo.email.address}</div>
                  <div className="text-sm">{ctaSectionContent.contactInfo.email.description}</div>
                </div>
              </motion.a>

              <div className="flex items-center space-x-3 text-secondary-200">
                <HiClock className="w-6 h-6 text-primary-500" />
                <div className="text-sm">{ctaSectionContent.contactInfo.hours}</div>
              </div>
            </div>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={itemVariants}
          >
            {ctaSectionContent.trustSignals.map((signal, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center space-x-2 text-sm text-secondary-300"
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.1 }}
              >
                <HiBadgeCheck className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-center">{signal}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Urgency Footer */}
          <motion.div
            className="text-center mt-8"
            variants={itemVariants}
          >
            <p className="text-primary-300 text-sm font-medium">
              {ctaSectionContent.urgency.expiryText}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactCTA