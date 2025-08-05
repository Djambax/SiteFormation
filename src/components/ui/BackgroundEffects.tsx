import React from 'react'
import { motion } from 'framer-motion'

const BackgroundEffects: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/30 to-secondary-100/50" />
      
      {/* Animated Mesh Grid */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="rgb(245, 184, 0)"
                strokeWidth="0.1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border-2 border-primary-300/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-primary-200/30 to-primary-400/30 rounded-lg"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-20 w-12 h-12 border-2 border-secondary-300/40"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div
        className="absolute top-60 right-40 w-8 h-8 bg-primary-400/20 rounded-full"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      {/* Larger Accent Elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-32 h-32 border border-primary-200/20 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-5 w-24 h-24 bg-gradient-to-tr from-secondary-200/20 to-primary-200/20 rounded-xl"
        animate={{
          y: [0, -40, 0],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Subtle Light Rays */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-32 bg-gradient-to-b from-primary-300/50 to-transparent" />
      <div className="absolute top-0 left-1/3 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary-200/40 to-transparent" />
      <div className="absolute top-0 right-1/3 transform translate-x-1/2 w-px h-28 bg-gradient-to-b from-primary-200/40 to-transparent" />

      {/* Ambient Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-300/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export default BackgroundEffects