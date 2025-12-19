import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import thinking from '../assets/images/cute-funny.gif'
import writing from '../assets/images/note-noted.gif'

export default function Footer() {
  const [isThinking, setIsThinking] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    const interval = setInterval(() => {
      setIsThinking((prev) => !prev)
    }, 3000) // Changes every 3 seconds - adjust as needed

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.2,
      y: -10,
      color: '#D4A500',
      filter: 'blur(0px)',
      textShadow: '0 0 25px rgba(59, 130, 246, 0.5)',
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
  }

  const getCurrentYear = () => new Date().getFullYear()

  return (
    <div ref={ref} className="container mx-auto space-y-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="flex flex-col md:flex-row gap-5 items-center justify-center  mt-10 text-4xl lg:text-8xl tracking-tighter"
      >
        {/* "Town" - custom font */}
        <div className=" flex">
          <div className="font-belle italic font-light tracking-tighter">
            {'Town'.split('').map((letter, i) => (
              <motion.span
                key={`town-${i}`}
                variants={letterVariants}
                whileHover="hover"
                initial={{ filter: 'blur(15px)' }}
                animate={
                  isInView ? { filter: 'blur(0px)' } : { filter: 'blur(15px)' }
                }
                transition={{
                  filter: {
                    duration: 0.8,
                    ease: 'easeOut',
                    delay: isInView ? i * 0.08 : 0,
                  },
                }}
                className="inline-block cursor-pointer"
              >
                {letter}
              </motion.span>
            ))}
          </div>
          {/* "Scholar" - different font */}
          <div className="font-rethink font-bold">
            {'Scholar'.split('').map((letter, i) => (
              <motion.span
                key={`scholar-${i}`}
                variants={letterVariants}
                whileHover="hover"
                initial={{ filter: 'blur(15px)' }}
                animate={
                  isInView ? { filter: 'blur(0px)' } : { filter: 'blur(15px)' }
                }
                transition={{
                  filter: {
                    duration: 0.8,
                    ease: 'easeOut',
                    delay: isInView ? (i + 4) * 0.08 : 0,
                  },
                }}
                className="inline-block cursor-pointer"
              >
                {letter}
              </motion.span>
            ))}
          </div>
          {/* Yellow dot */}
          <motion.span
            variants={letterVariants}
            whileHover={{ scale: 1.5 }}
            initial={{ filter: 'blur(15px)' }}
            animate={
              isInView ? { filter: 'blur(0px)' } : { filter: 'blur(15px)' }
            }
            transition={{
              filter: {
                duration: 0.8,
                ease: 'easeOut',
                delay: isInView ? 11 * 0.08 : 0,
              },
            }}
            className="text-yellow-400 "
          >
            .
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: isInView ? 0.3 : 0, duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="relative group">
            {/* Static placeholder when not thinking */}
            {!isThinking && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center overflow-hidden"
              >
                <div className="text-center">
                  <img
                    src={thinking}
                    alt="Thinking animation"
                    className="lg:w-28 w-20 h-20 lg:h-28 rounded-lg transition-opacity"
                  />
                </div>
              </motion.div>
            )}

            {/* Animated thinking/writing GIF area */}
            {isThinking && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="lg:w-28 w-20 h-20 lg:h-28 flex items-center justify-center overflow-hidden"
              >
                {/* Actual thinking/writing boy GIF */}
                <img
                  src={writing}
                  alt="Boy thinking and writing"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
      <div className="flex flex-col sm:flex-row items-center font-rethink justify-center gap-2 sm:gap-4 mb-2">
        <motion.a
          href="mailto: reach@townscholar.com."
          whileHover={{ scale: 1.05, color: '#D4A500' }}
          className="text-gray-500 hover:text-yellow-400 transition-colors duration-200 "
        >
          reach@townscholar.com
        </motion.a>
        <span className="hidden sm:inline text-gray-400">|</span>
        <motion.a
          href="/terms"
          whileHover={{ scale: 1.05, color: '#D4A500' }}
          className="text-gray-500 hover:text-yellow-400 transition-colors duration-200"
        >
          Terms & Conditions
        </motion.a>
        <span className="hidden sm:inline text-gray-400">|</span>
        <motion.span
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4"
          whileHover={{ scale: 1.05, color: '#D4A500' }}
        >
          <h1 className=" text-gray-500 hover:text-yellow-400 transition-colors duration-200">
            Chennai , Tamilnadu , India .
          </h1>
        </motion.span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: isInView ? 1.2 : 0, duration: 0.6 }}
        className="py-4 rounded-t-2xl bg-black text-white"
      >
        <motion.div
          initial={{ filter: 'blur(10px)' }}
          animate={
            isInView ? { filter: 'blur(0px)' } : { filter: 'blur(10px)' }
          }
          transition={{
            filter: {
              duration: 0.8,
              ease: 'easeOut',
              delay: isInView ? 1.4 : 0,
            },
          }}
          className="text-center text-sm lg:text-base font-space space-y-2"
        >
          {/* Email and Terms Links */}

          {/* Copyright */}
          <h1>Copyrights {getCurrentYear()}. All rights reserved.</h1>
        </motion.div>
      </motion.div>
    </div>
  )
}