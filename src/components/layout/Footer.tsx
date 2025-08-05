import React from 'react'
import { motion } from 'framer-motion'
import { 
  HiMail, 
  HiPhone, 
  HiLocationMarker,
  HiExternalLink
} from 'react-icons/hi'
import { 
  FaLinkedin, 
  FaFacebook, 
  FaInstagram, 
  FaYoutube 
} from 'react-icons/fa'
import { FooterProps } from '../../types'
import { navigationItems, companyInfo } from '../../data/navigation'

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear()

  const socialIcons = {
    linkedin: FaLinkedin,
    facebook: FaFacebook,
    instagram: FaInstagram,
    youtube: FaYoutube
  }

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className={`bg-secondary-900 text-white ${className}`}>
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gradient mb-3">
                {companyInfo.name}
              </h3>
              <p className="text-secondary-300 text-lg mb-6">
                {companyInfo.tagline}
              </p>
              <p className="text-secondary-400 leading-relaxed">
                Organisme de formation spécialisé dans l'accompagnement des entrepreneurs 
                et professionnels. Nous proposons des formations premium et un accompagnement 
                personnalisé pour développer vos compétences et faire croître votre activité.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                whileHover={{ x: 4 }}
              >
                <HiMail className="w-5 h-5 mr-3 text-primary-500" />
                {companyInfo.email}
              </motion.a>
              
              <motion.a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                whileHover={{ x: 4 }}
              >
                <HiPhone className="w-5 h-5 mr-3 text-primary-500" />
                {companyInfo.phone}
              </motion.a>
              
              <div className="flex items-center text-secondary-300">
                <HiLocationMarker className="w-5 h-5 mr-3 text-primary-500" />
                {companyInfo.address}
              </div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <motion.a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                    whileHover={{ x: 4 }}
                  >
                    {item.label}
                    <HiExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              <li>
                <motion.a
                  href="#formations"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#formations')
                  }}
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  whileHover={{ x: 4 }}
                >
                  Formations Professionnelles
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#formations"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#formations')
                  }}
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  whileHover={{ x: 4 }}
                >
                  Accompagnement Personnalisé
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#formations"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#formations')
                  }}
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  whileHover={{ x: 4 }}
                >
                  Coaching Entrepreneurial
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#formations"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#formations')
                  }}
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  whileHover={{ x: 4 }}
                >
                  Formations Sur Mesure
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Social Media & Copyright */}
        <motion.div
          className="mt-12 pt-8 border-t border-secondary-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Social Media Links */}
            <div className="flex items-center space-x-6 mb-6 md:mb-0">
              <span className="text-secondary-400 text-sm">Suivez-nous :</span>
              {Object.entries(companyInfo.social).map(([platform, url]) => {
                const IconComponent = socialIcons[platform as keyof typeof socialIcons]
                if (!IconComponent || !url) return null
                
                return (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-400 hover:text-primary-400 transition-colors duration-200"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </motion.a>
                )
              })}
            </div>

            {/* Copyright */}
            <div className="text-secondary-400 text-sm text-center md:text-right">
              <p>© {currentYear} {companyInfo.name}. Tous droits réservés.</p>
              <p className="mt-1">
                Organisme de formation professionnelle continue
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer