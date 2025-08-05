import React from 'react'
import { LayoutProps } from '../../types'
import Header from './Header'
import Footer from './Footer'

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className={`min-h-screen flex flex-col ${className || ''}`}>
      <Header />
      
      <main id="main-content" className="flex-1 pt-20" role="main">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}

export default Layout