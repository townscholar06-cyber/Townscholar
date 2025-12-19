import React, { useEffect, useState, useCallback } from 'react'
import { useMotionValue, useSpring, useTransform, motion } from 'framer-motion'

const Cursor = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [isMoving, setIsMoving] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 200, damping: 30 })
  const smoothY = useSpring(mouseY, { stiffness: 200, damping: 30 })

  const handleMouseMove = useCallback((e) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
    setIsMoving(true)

    const target = e.target
    const interactive =
      ['BUTTON', 'A'].includes(target.tagName) ||
      target.closest('button, a, [role="button"]') !== null ||
      getComputedStyle(target).cursor === 'pointer' ||
      target.classList.contains('cursor-pointer')

    setIsHovering(interactive)

    // reset movement state after a delay
    clearTimeout(window.__cursorMoveTimeout)
    window.__cursorMoveTimeout = setTimeout(() => {
      setIsMoving(false)
    }, 100)
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  return (
    <div className="hero-cursor">
      {/* Follow Cursor Container */}
      <motion.div
        className="fixed z-[10005] pointer-events-none"
        style={{
          x: useTransform(smoothX, (x) => x - 12),
          y: useTransform(smoothY, (y) => y - 12),
        }}
      >
        {/* Hover Ring */}
        <motion.div
          animate={{
            width: isHovering ? '40px' : '0px',
            height: isHovering ? '40px' : '0px',
            opacity: isHovering ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            border: '2px solid rgba(0,133,204,0.6)',
            background: 'rgba(0,133,204,0.1)',
            backdropFilter: 'blur(4px)',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Main Dot */}
        <motion.div
          animate={{
            width: isMoving ? '14px' : '10px',
            height: isMoving ? '14px' : '10px',
            scale: isHovering ? 1.3 : 1,
          }}
          transition={{ duration: 0.15 }}
          style={{
            borderRadius: '50%',
            background: isHovering
              ? 'linear-gradient(135deg, rgba(59,130,246,1) 0%, rgba(0,133,204,0.9) 50%, rgba(6,182,212,0.8) 100%)'
              : 'linear-gradient(135deg, rgba(0,133,204,0.9) 0%, rgba(59,130,246,0.7) 50%, rgba(6,182,212,0.5) 100%)',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: isHovering
              ? '0 0 20px rgba(59,130,246,0.8), 0 0 40px rgba(0,133,204,0.4)'
              : '0 0 12px rgba(0,133,204,0.6), 0 0 24px rgba(59,130,246,0.3)',
            filter: 'brightness(1.5)',
          }}
        />

        {/* Pulse Glow */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.8, 0.3, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.9)',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(0.5px)',
          }}
        />
      </motion.div>

      {/* Cursor Hide Logic for Touch Devices */}
      <style jsx>{`
        .hero-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
        }
        @media (hover: none) {
          .hero-cursor {
            display: none;
          }
        }
        @media (hover: hover) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Cursor