import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { FormationDomain } from '../../types'

interface FormationCardProps {
  formation: FormationDomain
  index: number
  onCardClick?: (href: string) => void
}

const FormationCard: React.FC<FormationCardProps> = ({
  formation,
  index,
  onCardClick
}) => {
  const handleClick = () => {
    if (onCardClick) {
      onCardClick(formation.href)
    }
  }

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, threshold: 0.1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ y: -8 }}
    >
      <motion.div
        className="relative h-full bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 cursor-pointer overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-white/90"
        onClick={handleClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Background Gradient Overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${formation.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />
        
        {/* Icon Container */}
        <motion.div
          className={`relative z-10 w-16 h-16 bg-gradient-to-br ${formation.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="text-white text-2xl"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          >
            {formation.icon}
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <motion.h3
            className="text-xl font-bold text-secondary-800 mb-4 group-hover:text-secondary-900 transition-colors duration-300"
            layout
          >
            {formation.title}
          </motion.h3>
          
          <motion.p
            className="text-secondary-600 leading-relaxed mb-6 group-hover:text-secondary-700 transition-colors duration-300"
            layout
          >
            {formation.description}
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-300"
            whileHover={{ x: 4 }}
          >
            <span className="mr-2">En savoir plus</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <HiArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>

        {/* Hover Effects */}
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 bg-primary-100/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={{ scale: 0.8 }}
          whileHover={{ scale: 1.2 }}
        />
        
        <motion.div
          className="absolute bottom-0 left-0 w-24 h-24 bg-secondary-100/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          initial={{ scale: 0.6 }}
          whileHover={{ scale: 1.4 }}
        />
      </motion.div>
    </motion.div>
  )
}

export default FormationCard