import { useState, useRef, useEffect } from 'react'
import { Play, Sparkles, ArrowRight, X, Zap, Star, Circle } from 'lucide-react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { IndianRupee, GraduationCap, Rocket } from "lucide-react";

export default function Hero() {
  const videoRef = useRef(null)
  const containerRef = useRef(null)
  const [showRealVideo, setShowRealVideo] = useState(false)
  const [currentTypeText, setCurrentTypeText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [hasRotated, setHasRotated] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [particles, setParticles] = useState([])

  const typewriterTexts = [
    'Content Creation',
    'Viral Marketing',
    'Brand Building',
    'Audience Growth',
    'Social Media',
    'Digital Strategy',
  ]

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Optimized particle generation
  useEffect(() => {
    const generateParticles = () => {
      const count = isMobile ? 8 : 20
      const newParticles = []

      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * (isMobile ? 2 : 4) + 1,
          opacity: Math.random() * 0.3 + 0.1,
          speed: Math.random() * 0.5 + 0.2,
        })
      }
      setParticles(newParticles)
    }

    if (typeof window !== 'undefined') {
      generateParticles()
      window.addEventListener('resize', generateParticles)
      return () => window.removeEventListener('resize', generateParticles)
    }
  }, [isMobile])

  // Typewriter effect
  useEffect(() => {
    let timeout
    const currentText = typewriterTexts[currentIndex]

    if (isTyping) {
      if (currentTypeText.length < currentText.length) {
        timeout = setTimeout(() => {
          setCurrentTypeText(currentText.slice(0, currentTypeText.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000)
      }
    } else {
      if (currentTypeText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentTypeText(currentTypeText.slice(0, -1))
        }, 50)
      } else {
        setCurrentIndex((prev) => (prev + 1) % typewriterTexts.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentTypeText, currentIndex, isTyping])

  const handleCoverClick = () => {
    setShowRealVideo(true)
    setTimeout(() => handleRealVideoPlay(), 100)
  }

  const handleRealVideoPlay = () => {
    const video = videoRef.current
    if (!video) return
    video.play().catch(() => {})
  }

  const handleCloseVideo = () => {
    const video = videoRef.current
    if (video) {
      video.pause()
    }
    setShowRealVideo(false)
  }

  // Scroll-based video scaling
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const videoScale = useTransform(scrollYProgress, [0.2, 0.5], [0.6, 1])

  // Optimized word animation
  const wordAnimation = (word, delay = 0) => {
    return word.split('').map((char, index) => (
      <motion.span
        key={index}
        initial={{
          opacity: 0,
          y: 50,
          rotate: -10,
          scale: 0.5,
          filter: 'blur(10px)',
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: 0,
          scale: 1,
          filter: 'blur(0px)',
        }}
        whileHover={{
          scale: 1.1,
          color: '#0085cc',
          textShadow: '0 0 8px rgba(0, 133, 204, 0.6)',
          filter: 'blur(0px)',
          transition: { duration: 0.2 },
        }}
        transition={{
          delay: delay + index * 0.05,
          type: 'spring',
          stiffness: 120,
          filter: {
            delay: delay + index * 0.05,
            duration: 0.6,
            ease: 'easeOut',
          },
        }}
        className="inline-block cursor-pointer transition-colors"
      >
        {char}
      </motion.span>
    ))
  }

  return (
    <div className="relative rethink-sans-700 pt-16" ref={containerRef}>
      <style jsx>{`
        .rainbow {
          background: linear-gradient(
            270deg,
            #0085cc,
            #005e99,
            #006bb3,
            #0085cc,
            #00ccff,
            #0085cc
          );
          background-size: 400% 400%;
          animation: rainbowShift 4s ease infinite;
        }

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

        .glow {
          box-shadow: 0 0 20px rgba(0, 133, 204, 0.3);
        }
        .text-glow {
          text-shadow: 0 0 10px rgba(0, 133, 204, 0.5);
        }

        /* Performance optimizations */
        .will-change-transform {
          will-change: transform;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>

      {/* Optimized Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute will-change-transform backface-hidden"
            animate={{
              x: particle.x + Math.random() * 20,
              y: particle.y + Math.random() * 20,
              rotate: 360,
            }}
            transition={{
              duration: 10 + particle.id,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              opacity: particle.opacity,
            }}
          >
            {particle.id % 3 === 0 ? (
              <Star
                className={`${isMobile ? 'w-1.5 h-1.5' : 'w-2 h-2'} text-blue-300`}
              />
            ) : particle.id % 3 === 1 ? (
              <Circle
                className={`${isMobile ? 'w-1 h-1' : 'w-1 h-1'} text-blue-400 fill-current`}
              />
            ) : (
              <Zap
                className={`${isMobile ? 'w-1.5 h-1.5' : 'w-2 h-2'} text-cyan-400`}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Optimized Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center py-16"
      >
        {/* Enhanced Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 8px 25px rgba(0, 133, 204, 0.4)',
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-5 rounded-full"
        >
          <div className="relative text-xs inline-flex items-center gap-3 text-white pl-4 pr-7 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300 rounded-full rainbow glow">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-4 h-4 relative z-10" />
            </motion.div>
            <span className="relative z-10">
              AI-powered
               {/* {currentTypeText}{' '} */}
              {/* <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-sm"
              >
                |
              </motion.span> */}
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <div className="text-center mb-8">
        <motion.h1
  className="text-4xl md:text-[5.2rem] text-black lexend-deca-900 font-bold mb-3 text-center flex flex-wrap justify-center gap-x-3"
  initial={{ opacity: 0, y: 20, filter: 'blur(20px)' }}
  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
  transition={{
    duration: 0.8,
    delay: 0.5,
    filter: { duration: 1.2, delay: 0.5, ease: 'easeOut' },
  }}
>
  <motion.span
    className="italic whitespace-nowrap inline-block md:mr-3"
    whileHover={
      !hasRotated
        ? {
            rotateY: 360,
            transition: { duration: 0.6 },
          }
        : {}
    }
    onHoverStart={() => {
      if (!hasRotated) setHasRotated(true)
    }}
  >
    {wordAnimation(`Don't`, 0)}
  </motion.span>

  <span className="whitespace-nowrap inline-block md:mr-3">
    {wordAnimation('GET', 0.3)}
  </span>

  <span className="whitespace-nowrap inline-block md:mr-3">
    {wordAnimation('IGNORED', 0.6)}
  </span>

  <span className="whitespace-nowrap inline-block">
    {wordAnimation('ONLINE', 0.9)}
  </span>
</motion.h1>


          <motion.p
            className="md:text-xl text-lg text-gray-600 font-space leading-relaxed max-w-3xl mx-auto mb-8 font-normal"
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              delay: 1.2,
              duration: 0.6,
              filter: { duration: 0.8, delay: 1.2, ease: 'easeOut' },
            }}
          >
            The only content course that treats you like a business, not a gambler.
            
          </motion.p>

          {/* Fixed Button */}
          <motion.button
            className="relative inline-flex items-center gap-2 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg group glow overflow-hidden border-0"
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
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              delay: 1.4,
              duration: 0.6,
              filter: { duration: 0.7, delay: 1.4, ease: 'easeOut' },
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />

            <span className="relative z-10 text-sm md:text-lg">
              Start Creating with AI
            </span>

            <motion.div
              whileHover={{ x: 5, rotate: 45 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="relative z-10"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </div>

        <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 border-y border-gray-200">
  <div className="max-w-6xl mx-auto py-4">
    <div className="flex flex-row items-center justify-center gap-2 sm:gap-12 text-gray-800 overflow-x-auto py-2">
      
      {/* Price */}
      <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-4 rounded-lg sm:rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition flex-shrink-0">
        <div className="p-1 sm:p-2 shadow rounded sm:rounded-lg">
          <IndianRupee className="w-4 h-4 sm:w-6 sm:h-6" />
        </div>
        <div>
          <p className="text-base sm:text-2xl font-bold text-gray-900 whitespace-nowrap">6,000</p>
        </div>
      </div>

      <div className="hidden sm:block w-px h-8 sm:h-12 bg-gray-300 flex-shrink-0" />

      {/* Seats */}
      <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-4 rounded-lg sm:rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition flex-shrink-0">
        <div className="p-1 sm:p-2 shadow rounded sm:rounded-lg">
          <GraduationCap className="w-4 h-4 sm:w-6 sm:h-6" />
        </div>
        <div>
          <p className="text-sm sm:text-lg font-bold whitespace-nowrap">
            <span className="hidden sm:inline">Limited to </span>100 
            <span className="text-xs sm:text-sm text-gray-600 ml-1">Students</span>
          </p>
        </div>
      </div>

      <div className="hidden sm:block w-px h-8 sm:h-12 bg-gray-300 flex-shrink-0" />

      {/* Launch */}
      <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-4 rounded-lg sm:rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition flex-shrink-0">
        <div className="p-1 sm:p-2 shadow rounded sm:rounded-lg">
          <Rocket className="w-4 h-4 sm:w-6 sm:h-6" />
        </div>
        <div>
          <p className="text-sm sm:text-lg font-bold whitespace-nowrap">
            <span className="hidden sm:inline">January </span>2025
          </p>
        </div>
      </div>

    </div>
  </div>
</div>


        {/* Optimized Video Container - Full Width on Mobile */}
        <div className="max-w-6xl md:mx-auto mx-4">
          <motion.div
            className="relative w-full mx-auto mt-6 md:mt-8 aspect-video will-change-transform"
            style={{
              scale: videoScale,
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            {/* Optimized Glow Background */}
            <div
              className="absolute -inset-24 rounded-3xl opacity-50"
              style={{
                background: `
                  radial-gradient(circle at 20% 20%, rgba(168, 162, 255, 0.4) 0%, transparent 60%),
                  radial-gradient(circle at 80% 20%, rgba(255, 193, 222, 0.4) 0%, transparent 60%),
                  radial-gradient(circle at 50% 80%, rgba(141, 200, 255, 0.4) 0%, transparent 60%)
                `,
                filter: `blur(${isMobile ? '30px' : '60px'})`,
              }}
            />

            {/* Conditional Glow Layers */}
            {!isMobile && (
              <>
                <div
                  className="absolute -inset-16 rounded-3xl opacity-60"
                  style={{
                    background: `
                      radial-gradient(circle at 20% 20%, rgba(168, 162, 255, 0.6) 0%, transparent 55%),
                      radial-gradient(circle at 80% 20%, rgba(255, 193, 222, 0.6) 0%, transparent 55%),
                      radial-gradient(circle at 50% 80%, rgba(141, 200, 255, 0.6) 0%, transparent 55%)
                    `,
                    filter: 'blur(40px)',
                  }}
                />

                <div
                  className="absolute -inset-12 rounded-3xl opacity-50"
                  style={{
                    background: `
                      radial-gradient(circle at 15% 50%, rgba(223, 255, 253, 0.8) 0%, transparent 45%),
                      radial-gradient(circle at 85% 50%, rgba(255, 182, 193, 0.8) 0%, transparent 45%),
                      radial-gradient(circle at 50% 15%, rgba(173, 216, 230, 0.8) 0%, transparent 45%)
                    `,
                    filter: 'blur(30px)',
                  }}
                />

                <div
                  className="absolute -inset-6 rounded-3xl opacity-40"
                  style={{
                    background: `
                      linear-gradient(135deg, 
                        rgba(168, 162, 255, 0.4) 0%, 
                        rgba(223, 255, 253, 0.3) 35%, 
                        rgba(255, 193, 222, 0.4) 70%, 
                        rgba(141, 200, 255, 0.3) 100%
                      )
                    `,
                    filter: 'blur(20px)',
                  }}
                />
              </>
            )}

            {/* Video Content */}
            <div className="relative z-10 lg:max-w-6xl w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                {!showRealVideo ? (
                  <motion.div
                    key="cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full cursor-pointer group"
                    onClick={handleCoverClick}
                  >
                    <video
                      className="w-full h-full object-cover"
                      src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                      muted
                      autoPlay
                      loop
                      playsInline
                      preload="metadata"
                    />
                    <motion.div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <motion.div
                        className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm"
                        whileTap={{ scale: 0.9 }}
                        animate={{
                          boxShadow: [
                            '0 0 0 0 rgba(0, 133, 204, 0.4)',
                            '0 0 0 20px rgba(0, 133, 204, 0)',
                          ],
                        }}
                        transition={{
                          boxShadow: { duration: 2, repeat: Infinity },
                        }}
                      >
                        <Play
                          className="w-8 h-8 text-white ml-1"
                          fill="currentColor"
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="real"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <motion.button
                      onClick={handleCloseVideo}
                      className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-[#0085CC] rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20"
                      whileTap={{ scale: 0.9 }}
                    >
                      <X className="w-5 h-5 text-white" />
                    </motion.button>
                    <video
                      ref={videoRef}
                      className={`w-full h-full ${isMobile ? 'object-contain' : 'object-cover'}`}
                      controls
                      autoPlay
                      preload="metadata"
                    >
                      <source
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
