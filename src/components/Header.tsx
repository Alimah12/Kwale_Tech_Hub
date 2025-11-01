'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import AboutHubCard from './navigation/AboutHubCard'
import ProgramsCard from './navigation/ProgramsCard'
import ServicesCard from './navigation/ServicesCard'
import AITechCard from './navigation/AITechCard'

export default function Header() {
  return (
    <header className="bg-base-100 shadow-xl sticky top-0 z-50 border-b border-base-300">
      {/* Main Navigation Bar */}
      <div className="navbar px-6 lg:px-12 py-4">
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
          </div>
          
          {/* Logo */}
          <Link className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-500 via-yellow-500 to-red-500 bg-clip-text text-transparent" href="/">
            KWALE TECH HUB
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
        <div className="navbar-end flex items-center space-x-4">
          <ThemeToggle />
          <Link href="/gallery" className="btn btn-ghost btn-circle hover:bg-primary hover:text-primary-content transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </Link>
          <Link href="/contact" className="btn btn-primary rounded-full px-8 py-2 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us
          </Link>
          <Link href="/donate" className="btn btn-warning rounded-full px-8 py-2 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Donate
          </Link>
        </div>
      </div>
    </header>
  )
}