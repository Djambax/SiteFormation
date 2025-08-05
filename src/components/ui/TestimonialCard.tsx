import React from 'react'
import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi'
import { Testimonial } from '../../types'

interface TestimonialCardProps {
  testimonial: Testimonial
  index: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  index
}) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
      >
        <HiStar
          className={`w-5 h-5 ${
            i < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
        />
      </motion.div>
    ))
  }

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, threshold: 0.1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ y: -4 }}
    >
      <motion.div
        className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-xl border border-secondary-100 p-8 transition-all duration-300 overflow-hidden"
        whileHover={{ scale: 1.02 }}
      >
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 opacity-10">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 12L4 8V16L8 12ZM20 12L16 8V16L20 12Z"
              fill="currentColor"
              className="text-primary-500"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Rating */}
          <motion.div
            className="flex space-x-1 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {renderStars(testimonial.rating)}
          </motion.div>

          {/* Testimonial Text */}
          <motion.blockquote
            className="text-secondary-700 leading-relaxed mb-6 text-base italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            "{testimonial.content}"
          </motion.blockquote>

          {/* Client Info */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {/* Avatar */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-primary-200 shadow-lg">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Status indicator */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-sm" />
            </motion.div>

            {/* Client Details */}
            <div className="ml-4 flex-1">
              <motion.h4
                className="font-semibold text-secondary-800 text-lg"
                whileHover={{ color: '#f5b800' }}
                transition={{ duration: 0.2 }}
              >
                {testimonial.name}
              </motion.h4>
              <p className="text-secondary-600 text-sm">
                {testimonial.role}
              </p>
              <p className="text-primary-600 text-sm font-medium">
                {testimonial.company}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Hover Effect */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        />
        
        {/* Background Gradient on Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-secondary-50/0 group-hover:from-primary-50/30 group-hover:to-secondary-50/20 transition-all duration-500"
        />
      </motion.div>
    </motion.div>
  )
}

export default TestimonialCard