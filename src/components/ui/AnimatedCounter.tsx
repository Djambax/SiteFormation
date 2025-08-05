import React, { useEffect, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: string
  suffix?: string
  duration?: number
  className?: string
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = '',
  duration = 2,
  className = ''
}) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const controls = useAnimation()
  const ref = React.useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.3 })

  // Extract numeric value from string
  const numericValue = parseInt(value.replace(/\D/g, ''), 10) || 0

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true)
      
      const startTime = Date.now()
      const endTime = startTime + (duration * 1000)

      const updateCount = () => {
        const now = Date.now()
        const progress = Math.min((now - startTime) / (duration * 1000), 1)
        
        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3)
        const currentCount = Math.floor(easeOutCubic * numericValue)
        
        setCount(currentCount)
        
        if (progress < 1) {
          requestAnimationFrame(updateCount)
        } else {
          setCount(numericValue)
        }
      }
      
      requestAnimationFrame(updateCount)
      
      controls.start({
        scale: [1, 1.1, 1],
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      })
    }
  }, [inView, hasAnimated, numericValue, duration, controls])

  return (
    <motion.span
      ref={ref}
      animate={controls}
      className={className}
    >
      {count}{suffix}
    </motion.span>
  )
}

export default AnimatedCounter