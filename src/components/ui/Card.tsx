import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { CardProps } from '../../types'

const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  padding = 'md',
  hover = true,
  ...props
}) => {
  const baseClasses = 'rounded-xl transition-all duration-300'
  
  const variantClasses = {
    default: 'bg-white border border-secondary-200 shadow-sm hover:shadow-md',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20 shadow-glass',
    elevated: 'bg-white shadow-lg hover:shadow-xl border border-secondary-100'
  }
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  const hoverClasses = hover ? 'hover:scale-[1.02] hover:shadow-xl' : ''
  
  const combinedClasses = clsx(
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
    hoverClasses,
    className
  )
  
  return (
    <motion.div
      className={combinedClasses}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card