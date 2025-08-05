import React from 'react'
import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi'
import { valuePropositions, valuePropositionsSectionContent } from '../../data/valuePropositions'

const ValuePropositions: React.FC = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Background Title */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
          <h2 className="text-8xl md:text-9xl font-bold text-secondary-200 select-none">
            {valuePropositionsSectionContent.backgroundTitle}
          </h2>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-primary-100 rounded-full opacity-30" />
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-secondary-100 rounded-full opacity-40" />
        <div className="absolute top-60 left-10 w-12 h-12 bg-primary-200 rounded-full opacity-20" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
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
            <HiStar className="w-8 h-8 text-primary-600" />
          </motion.div>

          <motion.h2
            className="heading-lg text-secondary-800 mb-6"
            variants={itemVariants}
          >
            {valuePropositionsSectionContent.title}
          </motion.h2>

          <motion.p
            className="body-lg text-secondary-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            {valuePropositionsSectionContent.subtitle}
          </motion.p>
        </motion.div>

        {/* Value Propositions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {valuePropositions.map((proposition, index) => (
            <motion.div
              key={proposition.id}
              className="group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, threshold: 0.1 }}
              variants={cardVariants}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                className="relative p-8 rounded-2xl bg-gradient-to-br from-white to-secondary-50 border border-secondary-100 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -4, scale: 1.02 }}
              >
                {/* Icon */}
                <motion.div
                  className="flex items-center mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg mr-4">
                    <motion.div
                      className="text-white text-2xl"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {proposition.icon}
                    </motion.div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-secondary-800 group-hover:text-primary-600 transition-colors duration-300">
                      {proposition.title}
                    </h3>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.p
                  className="text-secondary-600 leading-relaxed group-hover:text-secondary-700 transition-colors duration-300"
                  layout
                >
                  {proposition.description}
                </motion.p>

                {/* Hover Effect */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 bg-primary-100/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                />

                {/* Number Badge */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {index + 1}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, threshold: 0.1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 text-primary-600 font-medium">
            <HiStar className="w-5 h-5" />
            <span>Plus de 500 professionnels nous font confiance</span>
            <HiStar className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ValuePropositions