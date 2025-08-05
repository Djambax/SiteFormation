import React from 'react'
import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import Formations from './components/sections/Formations'
import ValuePropositions from './components/sections/ValuePropositions'
import Testimonials from './components/sections/Testimonials'
import ContactCTA from './components/sections/ContactCTA'

function App() {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Formations Section */}
      <Formations />

      {/* Value Propositions Section */}
      <ValuePropositions />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact CTA Section */}
      <ContactCTA />

      {/* Placeholder sections for navigation */}
      <div id="prestations" className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-secondary-800 mb-4">Prestations</h2>
          <p className="text-secondary-600">Section en cours de développement...</p>
        </div>
      </div>

      <div id="apropos" className="section-padding bg-secondary-50">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-secondary-800 mb-4">À Propos</h2>
          <p className="text-secondary-600">Section en cours de développement...</p>
        </div>
      </div>

      {/* Hidden contact anchor for navigation */}
      <div id="contact" />
    </Layout>
  )
}

export default App
