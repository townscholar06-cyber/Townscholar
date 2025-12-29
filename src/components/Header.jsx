import React, { useEffect, useState } from 'react'
import logo from '../assets/images/TS-logo.png'
import { motion } from 'framer-motion'

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0)

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

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#151515] shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-36 sm:w-48" />
          </div>

          {/* Login Button */}
          <motion.button
            className="relative inline-flex items-center justify-center text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg overflow-hidden border-0"
            style={{
              background:
                'linear-gradient(135deg, #0085cc 0%, #005e99 25%, #006bb3 50%, #0085cc 75%, #00ccff 100%)',
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
            <span className="relative z-10 font-rethink">Login now</span>
          </motion.button>
        </div>

        {/* Scroll Progress Bar */}
        <div className="h-[6px] w-full bg-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full rounded-r-full"
            animate={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.1, ease: 'linear' }} // faster and smoother
            style={{
              background:
                'linear-gradient(135deg, #0085cc 0%, #005e99 25%, #006bb3 50%, #0085cc 75%, #00ccff 100%)',
              backgroundSize: '400% 400%',
              animation: 'rainbowShift 3s ease infinite',
            }}
          />
        </div>
      </header>

      <style jsx global>{`
        @keyframes rainbowShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  )
}