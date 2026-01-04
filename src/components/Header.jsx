import React, { useEffect, useState } from 'react'
import logo from '../assets/images/TS-logo.png'
import { motion } from 'framer-motion'
import { Menu, X, Home, Layers, FileText, Users, IndianRupee, UserPlus } from 'lucide-react'

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')
  
  const navLinks = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Us', icon: FileText },
    { id: 'modules', label: 'Modules', icon: Layers },
    { id: 'clients', label: 'Our Clients', icon: Users },
    { id: 'pricing', label: 'Pricing', icon: IndianRupee },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const scrolled = (scrollTop / docHeight) * 100
      setScrollProgress(scrolled)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Update active link based on scroll position
    const handleScrollActive = () => {
      const sections = navLinks.map(link => document.getElementById(link.id))
      const scrollPosition = window.scrollY + 100
      
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && scrollPosition >= sections[i].offsetTop) {
          setActiveLink(navLinks[i].id)
          break
        }
      }
    }
    
    window.addEventListener('scroll', handleScrollActive)
    return () => window.removeEventListener('scroll', handleScrollActive)
  }, [])

  const handleNavClick = (linkId) => {
    setActiveLink(linkId)
    setIsMenuOpen(false)
    
    const element = document.getElementById(linkId)
    if (element) {
      // Set different scroll offsets based on the section
      let scrollOffset = 80 // Default offset for most sections
      
      // Add extra top space only for Modules and Pricing
      if (linkId === 'modules' || linkId === 'pricing') {
        scrollOffset = 120 // Extra 40px for these sections
      }
      
      // Calculate the target position
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - scrollOffset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleEnrollClick = () => {
    // You can add enrollment functionality here
    console.log('Enroll Now clicked')
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#151515] shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 lg:px-0 py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Logo" 
              className="w-36 sm:w-48 cursor-pointer" 
              onClick={() => handleNavClick('home')} 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="relative flex items-center gap-2 text-gray-300 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                  {activeLink === link.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0085cc] to-[#00ccff]"
                      layoutId="activeTab"
                      initial={false}
                    />
                  )}
                </motion.button>
              )
            })}
          </nav>

          {/* Right Side - Enroll Now & Menu Button */}
          <div className="flex items-center gap-4">
            {/* Enroll Now Button */}
            <motion.a
              href="https://academy.townscholar.com/web/checkout/695911a32a8a809684b5178f"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex relative items-center justify-center text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg overflow-hidden border-0 group no-underline"
              style={{
                background: 'linear-gradient(135deg, #0085cc 0%, #005e99 25%, #006bb3 50%, #0085cc 75%, #00ccff 100%)',
                backgroundSize: '400% 400%',
                animation: 'rainbowShift 3s ease infinite',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0, 133, 204, 0.4)',
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10 font-rethink flex items-center gap-2">
                <UserPlus className="w-4 h-4" />
                Enroll Now
              </span>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="h-[6px] w-full bg-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full rounded-r-full"
            animate={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.1, ease: 'linear' }}
            style={{
              background: 'linear-gradient(135deg, #0085cc 0%, #005e99 25%, #006bb3 50%, #0085cc 75%, #00ccff 100%)',
              backgroundSize: '400% 400%',
              animation: 'rainbowShift 3s ease infinite',
            }}
          />
        </div>
      </header>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden"
        initial={false}
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, pointerEvents: 'auto' },
          closed: { opacity: 0, pointerEvents: 'none' },
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
          onClick={() => setIsMenuOpen(false)} 
        />

        {/* Menu Panel */}
        <motion.div
          className="absolute top-0 right-0 w-64 h-full bg-[#151515] shadow-xl"
          initial={{ x: '100%' }}
          animate={isMenuOpen ? { x: 0 } : { x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        >
          <div className="p-6">
            {/* Mobile Logo */}
            <div className="mb-8">
              <img
                src={logo}
                alt="Logo"
                className="w-40 cursor-pointer"
                onClick={() => {
                  handleNavClick('home')
                  setIsMenuOpen(false)
                }}
              />
            </div>

            {/* Mobile Navigation Links */}
            <nav className="space-y-4">
              {navLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeLink === link.id
                        ? 'bg-gradient-to-r from-[#0085cc]/20 to-[#00ccff]/10 text-white border-l-4 border-[#0085cc]'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{link.label}</span>
                  </motion.button>
                )
              })}

              {/* Mobile Enroll Now Button */}
              <motion.a
                href="https://academy.townscholar.com/web/checkout/695911a32a8a809684b5178f"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-8 relative flex items-center justify-center gap-2 text-white px-6 py-3 rounded-full font-semibold shadow-lg overflow-hidden no-underline"
                style={{
                  background: 'linear-gradient(135deg, #0085cc 0%, #005e99 25%, #006bb3 50%, #0085cc 75%, #00ccff 100%)',
                  backgroundSize: '400% 400%',
                  animation: 'rainbowShift 3s ease infinite',
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <UserPlus className="w-5 h-5 relative z-10" />
                <span className="relative z-10 font-rethink">Enroll Now</span>
              </motion.a>
            </nav>
          </div>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @keyframes rainbowShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        /* Smooth scrolling for the whole page */
        html {
          scroll-behavior: smooth;
        }
        
        /* Set different scroll margins for different sections */
        #home,
        #about,
        #clients {
          scroll-margin-top: 80px;
        }
        
        /* Extra top space for Modules and Pricing only */
        #modules,
        #pricing {
          scroll-margin-top: 120px; /* 40px extra space */
        }
      `}</style>
    </>
  )
}