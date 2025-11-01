'use client'

import { useState } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import AboutHubCard from './navigation/AboutHubCard'
import ProgramsCard from './navigation/ProgramsCard'
import ServicesCard from './navigation/ServicesCard'
import AITechCard from './navigation/AITechCard'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setOpenMobileSection(null) // Reset sections when closing menu
  }

  const toggleMobileSection = (section: string) => {
    setOpenMobileSection(openMobileSection === section ? null : section)
  }

  // Mobile menu sections data
  const aboutSections = [
    { title: 'Our History', desc: 'Journey from inception to impact', href: '/about#history', icon: '🕒' },
    { title: 'Mission & Vision', desc: 'Our commitment to digital transformation', href: '/about#mission', icon: '✅' },
    { title: 'Our Team', desc: 'Meet the innovators driving change', href: '/about#team', icon: '👥' },
    { title: 'Partners', desc: 'Strategic collaborations and alliances', href: '/about#partners', icon: '🤝' }
  ]

  const programSections = [
    { title: 'Education & Innovation', desc: 'Digital skills training programs', href: '/programs#education', icon: '💻' },
    { title: 'AgriTech Solutions', desc: 'Smart farming technology', href: '/programs#agritech', icon: '🌾' },
    { title: 'Climate Justice', desc: 'Environmental monitoring tools', href: '/programs#climate', icon: '🌍' },
    { title: 'Peacebuilding', desc: 'Digital peace platforms', href: '/programs#peace', icon: '🕊️' }
  ]

  const serviceSections = [
    { title: 'Tech Training', desc: 'Comprehensive ICT courses', href: '/services#training', icon: '🎓' },
    { title: 'Business Incubation', desc: 'Startup support and mentorship', href: '/services#incubation', icon: '🚀' },
    { title: 'Digital Marketing', desc: 'Online marketing solutions', href: '/services#marketing', icon: '📱' },
    { title: 'Community Access', desc: 'Internet and tech resources', href: '/services#access', icon: '🌐' }
  ]

  const aiTechSections = [
    { title: 'AI Solutions', desc: 'Artificial intelligence applications', href: '/services#ai', icon: '🤖' },
    { title: 'Tech Innovation', desc: 'Cutting-edge technology projects', href: '/services#innovation', icon: '⚡' },
    { title: 'Research & Development', desc: 'Technology research initiatives', href: '/services#research', icon: '🔬' },
    { title: 'Digital Transformation', desc: 'Enterprise digitization', href: '/services#transformation', icon: '🔄' }
  ]

  return (
    <header className="bg-base-100 shadow-xl sticky top-0 z-50 border-b border-base-300">
      {/* Main Navigation Bar */}
      <div className="navbar px-4 sm:px-6 lg:px-12 py-3 lg:py-4">
        <div className="navbar-start">
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="btn btn-ghost btn-square lg:hidden mr-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          
          {/* Logo */}
          <Link 
            className="text-lg sm:text-xl lg:text-3xl font-bold bg-gradient-to-r from-blue-500 via-yellow-500 to-red-500 bg-clip-text text-transparent"
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="hidden sm:inline">KWALE TECH HUB</span>
            <span className="sm:hidden">KTH</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center space-x-8">
            <AboutHubCard />
            <ProgramsCard />
            <ServicesCard />
            <AITechCard />
          </div>
        </div>
        
        {/* Right Side Actions */}
        <div className="navbar-end flex items-center space-x-2 lg:space-x-4">
          <ThemeToggle />
          
          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/gallery" className="btn btn-ghost btn-circle hover:bg-primary hover:text-primary-content transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
            <Link href="/contact" className="btn btn-primary rounded-full px-6 lg:px-8 py-2 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </Link>
            <Link href="/donate" className="btn btn-warning rounded-full px-6 lg:px-8 py-2 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Donate
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center space-x-2">
            <Link href="/contact" className="btn btn-primary btn-sm rounded-full px-4 py-2 text-xs font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={toggleMobileMenu}></div>
      )}

      {/* Mobile Menu Slide-out Panel */}
      <div className={`lg:hidden fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-base-100 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6 h-full overflow-y-auto">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-base-200">
            <Link 
              href="/" 
              className="text-xl font-bold bg-gradient-to-r from-blue-500 via-yellow-500 to-red-500 bg-clip-text text-transparent"
              onClick={toggleMobileMenu}
            >
              KWALE TECH HUB
            </Link>
            <button 
              onClick={toggleMobileMenu}
              className="btn btn-ghost btn-sm btn-circle"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <nav className="space-y-2">
            {/* Home Link */}
            <Link 
              href="/" 
              className="flex items-center p-3 rounded-xl text-base-content hover:bg-base-200 transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              <span className="text-xl mr-3">🏠</span>
              <span className="font-medium">Home</span>
            </Link>

            {/* About Hub Section */}
            <div className="space-y-1">
              <button
                onClick={() => toggleMobileSection('about')}
                className="w-full flex items-center justify-between p-3 rounded-xl text-base-content hover:bg-base-200 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <span className="text-xl mr-3">🏛️</span>
                  <span className="font-medium">About Hub</span>
                </div>
                <svg 
                  className={`w-5 h-5 transition-transform duration-200 ${openMobileSection === 'about' ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openMobileSection === 'about' && (
                <div className="ml-6 pl-6 border-l-2 border-primary/20 space-y-1">
                  {aboutSections.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-start p-2 rounded-lg text-base-content/80 hover:bg-base-200 hover:text-base-content transition-colors duration-200"
                      onClick={toggleMobileMenu}
                    >
                      <span className="text-sm mr-2 mt-0.5">{item.icon}</span>
                      <div>
                        <div className="font-medium text-sm">{item.title}</div>
                        <div className="text-xs text-base-content/60 mt-0.5">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                  <Link
                    href="/about"
                    className="flex items-center p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors duration-200 mt-2"
                    onClick={toggleMobileMenu}
                  >
                    <span className="text-sm mr-2">👁️</span>
                    <span className="font-medium text-sm">View All About</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Programs Section */}
            <div className="space-y-1">
              <button
                onClick={() => toggleMobileSection('programs')}
                className="w-full flex items-center justify-between p-3 rounded-xl text-base-content hover:bg-base-200 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <span className="text-xl mr-3">🎓</span>
                  <span className="font-medium">Programs</span>
                </div>
                <svg 
                  className={`w-5 h-5 transition-transform duration-200 ${openMobileSection === 'programs' ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openMobileSection === 'programs' && (
                <div className="ml-6 pl-6 border-l-2 border-secondary/20 space-y-1">
                  {programSections.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-start p-2 rounded-lg text-base-content/80 hover:bg-base-200 hover:text-base-content transition-colors duration-200"
                      onClick={toggleMobileMenu}
                    >
                      <span className="text-sm mr-2 mt-0.5">{item.icon}</span>
                      <div>
                        <div className="font-medium text-sm">{item.title}</div>
                        <div className="text-xs text-base-content/60 mt-0.5">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                  <Link
                    href="/programs"
                    className="flex items-center p-2 rounded-lg text-secondary hover:bg-secondary/10 transition-colors duration-200 mt-2"
                    onClick={toggleMobileMenu}
                  >
                    <span className="text-sm mr-2">👁️</span>
                    <span className="font-medium text-sm">View All Programs</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Services Section */}
            <div className="space-y-1">
              <button
                onClick={() => toggleMobileSection('services')}
                className="w-full flex items-center justify-between p-3 rounded-xl text-base-content hover:bg-base-200 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <span className="text-xl mr-3">⚙️</span>
                  <span className="font-medium">Services</span>
                </div>
                <svg 
                  className={`w-5 h-5 transition-transform duration-200 ${openMobileSection === 'services' ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openMobileSection === 'services' && (
                <div className="ml-6 pl-6 border-l-2 border-accent/20 space-y-1">
                  {serviceSections.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-start p-2 rounded-lg text-base-content/80 hover:bg-base-200 hover:text-base-content transition-colors duration-200"
                      onClick={toggleMobileMenu}
                    >
                      <span className="text-sm mr-2 mt-0.5">{item.icon}</span>
                      <div>
                        <div className="font-medium text-sm">{item.title}</div>
                        <div className="text-xs text-base-content/60 mt-0.5">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="flex items-center p-2 rounded-lg text-accent hover:bg-accent/10 transition-colors duration-200 mt-2"
                    onClick={toggleMobileMenu}
                  >
                    <span className="text-sm mr-2">👁️</span>
                    <span className="font-medium text-sm">View All Services</span>
                  </Link>
                </div>
              )}
            </div>

            {/* AI & Tech Section */}
            <div className="space-y-1">
              <button
                onClick={() => toggleMobileSection('aitech')}
                className="w-full flex items-center justify-between p-3 rounded-xl text-base-content hover:bg-base-200 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <span className="text-xl mr-3">🤖</span>
                  <span className="font-medium">AI & Tech</span>
                </div>
                <svg 
                  className={`w-5 h-5 transition-transform duration-200 ${openMobileSection === 'aitech' ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openMobileSection === 'aitech' && (
                <div className="ml-6 pl-6 border-l-2 border-info/20 space-y-1">
                  {aiTechSections.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-start p-2 rounded-lg text-base-content/80 hover:bg-base-200 hover:text-base-content transition-colors duration-200"
                      onClick={toggleMobileMenu}
                    >
                      <span className="text-sm mr-2 mt-0.5">{item.icon}</span>
                      <div>
                        <div className="font-medium text-sm">{item.title}</div>
                        <div className="text-xs text-base-content/60 mt-0.5">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                  <Link
                    href="/services#ai"
                    className="flex items-center p-2 rounded-lg text-info hover:bg-info/10 transition-colors duration-200 mt-2"
                    onClick={toggleMobileMenu}
                  >
                    <span className="text-sm mr-2">👁️</span>
                    <span className="font-medium text-sm">View AI & Tech</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <div className="pt-4 mt-4 border-t border-base-200 space-y-2">
              <Link 
                href="/gallery" 
                className="flex items-center p-3 rounded-xl text-base-content hover:bg-base-200 transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                <span className="text-xl mr-3">📸</span>
                <span className="font-medium">Gallery</span>
              </Link>
              
              <Link 
                href="/contact" 
                className="flex items-center p-3 rounded-xl text-base-content hover:bg-base-200 transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                <span className="text-xl mr-3">📞</span>
                <span className="font-medium">Contact Us</span>
              </Link>
              
              <Link 
                href="/donate" 
                className="flex items-center p-3 rounded-xl text-warning hover:bg-warning/10 transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                <span className="text-xl mr-3">❤️</span>
                <span className="font-medium">Donate</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}