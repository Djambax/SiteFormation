import React from 'react'
import { motion } from 'framer-motion'
import { HiHeart, HiStar } from 'react-icons/hi'
import TestimonialCard from '../ui/TestimonialCard'
import AnimatedCounter from '../ui/AnimatedCounter'
import { testimonials, testimonialsSectionContent } from '../../data/testimonials'

const Testimonials: React.FC = () => {
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

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-secondary-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-32 h-32 bg-primary-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-300 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/3 w-20 h-20 bg-primary-200 rounded-full blur-2xl" />
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
            <HiHeart className="w-8 h-8 text-primary-600" />
          </motion.div>

          <motion.h2
            className="heading-lg text-secondary-800 mb-6"
            variants={itemVariants}
          >
            {testimonialsSectionContent.title}
          </motion.h2>

          <motion.p
            className="body-lg text-secondary-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            {testimonialsSectionContent.subtitle}
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
          variants={containerVariants}
        >
          <motion.h3
            className="text-center heading-sm text-secondary-800 mb-8"
            variants={itemVariants}
          >
            {testimonialsSectionContent.statsTitle}
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {testimonialsSectionContent.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20"
                variants={statsVariants}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="mb-3">
                  {stat.value.includes('.') ? (
                    <div className="text-3xl md:text-4xl font-bold text-gradient">
                      {stat.value}
                    </div>
                  ) : (
                    <AnimatedCounter
                      value={stat.value.replace(/\D/g, '')}
                      suffix={stat.value.includes('%') ? '%' : '+'}
                      duration={2 + index * 0.2}
                      className="text-3xl md:text-4xl font-bold text-gradient"
                    />
                  )}
                </div>
                <p className="text-secondary-600 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Trust Signal */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, threshold: 0.1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 text-primary-600 font-medium bg-primary-50 px-6 py-3 rounded-full">
            <HiStar className="w-5 h-5 text-yellow-400" />
            <span>Note moyenne de 4.9/5 basée sur {testimonials.length} avis vérifiés</span>
            <HiStar className="w-5 h-5 text-yellow-400" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials