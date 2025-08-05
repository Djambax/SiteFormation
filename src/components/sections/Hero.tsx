import React from 'react'
import { motion } from 'framer-motion'
import { HiAcademicCap, HiSparkles, HiArrowDown } from 'react-icons/hi'
import Button from '../ui/Button'
import AnimatedCounter from '../ui/AnimatedCounter'
import BackgroundEffects from '../ui/BackgroundEffects'
import { heroContent, heroStatistics } from '../../data/hero'

const Hero: React.FC = () => {
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
        delayChildren: 0.3
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

  const statsVariants = {
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
    <section 
      id="accueil" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Section d'accueil"
    >
      {/* Background Effects */}
      <BackgroundEffects />
      
      {/* Main Content */}
      <div className="relative z-10 container-custom">
        <motion.div
          className="text-center max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Title */}
          <motion.h1
            className="heading-xl mb-8 max-w-4xl mx-auto optimal-spacing"
            variants={itemVariants}
          >
            <span className="text-gradient">
              {heroContent.title}
            </span>
          </motion.h1>

          {/* Hero Subtitle */}
          <motion.p
            className="body-lg text-secondary-600 mb-12 max-w-3xl mx-auto leading-relaxed optimal-spacing"
            variants={itemVariants}
          >
            {heroContent.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            variants={itemVariants}
            role="group"
            aria-label="Actions principales"
          >
            <Button
              variant="primary"
              size="lg"
              icon={<HiAcademicCap aria-hidden="true" />}
              href={heroContent.primaryCTA.href}
              onClick={() => handleNavClick(heroContent.primaryCTA.href)}
              className="transform hover:scale-105 hover:shadow-glow transition-all duration-300"
              aria-label={`${heroContent.primaryCTA.text} - Accéder à nos formations`}
            >
              {heroContent.primaryCTA.text}
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              icon={<HiSparkles aria-hidden="true" />}
              href={heroContent.secondaryCTA.href}
              onClick={() => handleNavClick(heroContent.secondaryCTA.href)}
              aria-label={`${heroContent.secondaryCTA.text} - Nous contacter`}
            >
              {heroContent.secondaryCTA.text}
            </Button>
          </motion.div>

          {/* Statistics Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, threshold: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
            role="group"
            aria-label="Nos statistiques"
          >
            {heroStatistics.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="text-center"
                variants={statsVariants}
              >
                <motion.div
                  className="mb-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2 + index * 0.2}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient block"
                  />
                </motion.div>
                <p className="text-secondary-600 font-medium text-sm md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            <motion.button
              onClick={() => handleNavClick('#formations')}
              className="flex flex-col items-center text-secondary-500 hover:text-primary-500 transition-colors duration-300 group touch-target"
              whileHover={{ y: -2 }}
              aria-label="Descendre vers les formations"
            >
              <span className="text-sm font-medium mb-2 group-hover:text-primary-600">
                Découvrir nos formations
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <HiArrowDown className="w-6 h-6" aria-hidden="true" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero