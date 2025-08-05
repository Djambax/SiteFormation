import React from 'react'
import { motion } from 'framer-motion'
import { HiAcademicCap, HiSparkles, HiStar, HiBriefcase, HiPhone } from 'react-icons/hi'

function App() {
  const handleScroll = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            <div className="font-bold text-2xl text-gradient">
              NOVA IMPÉRIA
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#accueil" className="text-secondary-700 hover:text-primary-500 transition-colors">Accueil</a>
              <a href="#formations" className="text-secondary-700 hover:text-primary-500 transition-colors">Formations</a>
              <a href="#apropos" className="text-secondary-700 hover:text-primary-500 transition-colors">À Propos</a>
              <a href="#contact" className="text-secondary-700 hover:text-primary-500 transition-colors">Contact</a>
              <button className="btn-primary">
                <HiPhone className="w-5 h-5 mr-2" />
                Contact
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-primary-50/30 to-secondary-100/50 relative overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-20 right-20 w-32 h-32 bg-primary-300 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-24 h-24 bg-secondary-300 rounded-full blur-2xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hero Title */}
            <motion.h1
              className="heading-xl mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gradient">
                L'Excellence au Service de Vos Ambitions
              </span>
            </motion.h1>

            {/* Hero Subtitle */}
            <motion.p
              className="body-lg text-secondary-600 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transformez votre expertise avec nos formations premium et accompagnements personnalisés sur mesure
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="btn-primary inline-flex items-center">
                <HiAcademicCap className="w-6 h-6 mr-2" />
                Découvrir nos formations
              </button>
              <button className="btn-secondary inline-flex items-center">
                <HiSparkles className="w-6 h-6 mr-2" />
                Demander un devis
              </button>
            </motion.div>

            {/* Statistics */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">500+</div>
                <p className="text-secondary-600 font-medium">Entrepreneurs Formés</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">95%</div>
                <p className="text-secondary-600 font-medium">Taux de Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">15</div>
                <p className="text-secondary-600 font-medium">Ans d'Expertise</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">50+</div>
                <p className="text-secondary-600 font-medium">Formations Disponibles</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Formations Section */}
      <section id="formations" className="section-padding bg-gradient-to-br from-secondary-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
              <HiAcademicCap className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="heading-lg text-secondary-800 mb-6">
              Nos Domaines d'Excellence
            </h2>
            <p className="body-lg text-secondary-600 max-w-3xl mx-auto">
              Découvrez nos 7 domaines de formation premium, conçus pour développer vos compétences et accélérer votre réussite professionnelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Business & Entrepreneuriat", icon: HiBriefcase, color: "from-blue-500 to-blue-700" },
              { title: "Marketing & Communication", icon: HiSparkles, color: "from-purple-500 to-purple-700" },
              { title: "Management & Leadership", icon: HiStar, color: "from-green-500 to-green-700" },
              { title: "Vente & Commercial", icon: HiPhone, color: "from-orange-500 to-orange-700" },
              { title: "Gestion & Finance", icon: HiBriefcase, color: "from-red-500 to-red-700" },
              { title: "IA & Digital", icon: HiSparkles, color: "from-cyan-500 to-cyan-700" },
              { title: "Formation Sur Mesure", icon: HiStar, color: "from-primary-500 to-primary-700" },
            ].map((formation, index) => (
              <motion.div
                key={formation.title}
                className="group relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${formation.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <formation.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-secondary-800 mb-4">
                  {formation.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  Formation spécialisée avec accompagnement personnalisé et certification reconnue.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gradient-to-br from-secondary-800 via-secondary-900 to-secondary-800 text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="heading-lg mb-6">
              Prêt à Développer Vos Compétences ?
            </h2>
            <p className="body-lg text-secondary-200 mb-12">
              Rejoignez plus de 500 professionnels qui ont transformé leur carrière grâce à nos formations premium.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HiPhone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Réserver un entretien gratuit</h3>
                <p className="text-secondary-200 mb-6">30 minutes pour définir vos objectifs</p>
                <button className="btn-primary w-full">
                  Prendre rendez-vous
                </button>
              </div>

              <div className="p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-center">
                <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HiAcademicCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Télécharger notre catalogue</h3>
                <p className="text-secondary-200 mb-6">Plus de 50 formations détaillées</p>
                <button className="btn-secondary w-full border-white/30 text-white hover:bg-white hover:text-secondary-900">
                  Télécharger
                </button>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-secondary-300 mb-4">Ou contactez-nous directement :</p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                <a href="tel:+33123456789" className="flex items-center text-secondary-200 hover:text-primary-400">
                  <HiPhone className="w-5 h-5 mr-2" />
                  +33 1 23 45 67 89
                </a>
                <a href="mailto:contact@nova-imperia.fr" className="flex items-center text-secondary-200 hover:text-primary-400">
                  <HiSparkles className="w-5 h-5 mr-2" />
                  contact@nova-imperia.fr
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-900 text-white section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gradient mb-4">NOVA IMPÉRIA</h3>
            <p className="text-secondary-300 mb-8">L'Excellence au Service de Vos Ambitions</p>
            <div className="flex justify-center items-center space-x-4 text-sm text-secondary-400">
              <span>© 2024 NOVA IMPÉRIA. Tous droits réservés.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
