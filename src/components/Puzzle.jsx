import React, { useRef, useEffect, useState } from "react";
import { useInView, motion } from "framer-motion";
import puzzle1 from "../assets/images/puzzle1.png";
import puzzle2 from "../assets/images/puzzle2.png";
import puzzle3 from "../assets/images/puzzle3.png";
import puzzle4 from "../assets/images/puzzle4.png"; // FIXED: Changed from full-puzzle.png to puzzle4.png
import fullPuzzle from "../assets/images/full-puzzle.png";
import Arrow from "../assets/images/puzzle-Arrow.png";

export default function Puzzle() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const isInView = useInView(containerRef, { 
    once: false,
    amount: 0.3,
    margin: "0px 0px -100px 0px"
  });

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Simple puzzle variants
  const puzzleVariants = {
    initial: (index) => ({
      x: getInitialX(index, isMobile),
      y: getInitialY(index, isMobile),
      rotate: getInitialRotation(index),
      opacity: 1,
      scale: isMobile ? 0.8 : 1
    }),
    assembled: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 0,
      scale: isMobile ? 0.8 : 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  function getInitialX(index, isMobile) {
    if (isMobile) {
      const mobileOffsets = ["-120px", "120px", "-120px", "120px"];
      return mobileOffsets[index];
    }
    const offsets = ["-18rem", "15rem", "-15rem", "18rem"];
    return offsets[index];
  }

  function getInitialY(index, isMobile) {
    if (isMobile) {
      const mobileOffsets = ["-100px", "-100px", "100px", "100px"];
      return mobileOffsets[index];
    }
    const offsets = ["-12rem", "-12rem", "12rem", "12rem"];
    return offsets[index];
  }

  function getInitialRotation(index) {
    const rotations = ["-15deg", "18deg", "15deg", "-12deg"];
    return rotations[index];
  }

  const fullPuzzleVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      filter: "blur(8px)",
      x: isMobile ? "-50%" : 0 // Center fix for mobile
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      x: isMobile ? "-50%" : 0, // Center fix for mobile
      transition: {
        duration: 1,
        delay: 0.5,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="w-full bg-[#FCFCFC] md:pt-10 overflow-hidden md:overflow-visible">
      <div className="max-w-6xl mx-auto px-4 lg:px-0 md:text-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl indie-flower-regular  font-medium text-[#1C1C1C] px-2"
            variants={itemVariants}
          >
            4 pillars of good content
          </motion.h1>

          <motion.p 
            className="mt-4 md:mt-6 text-base lg:text-lg text-[#4B4B4B] leading-relaxed max-w-2xl mx-auto px-2 md:px-0"
            variants={itemVariants}
          >
            You'll have a system you can reuse — again and again.
            <br className="hidden md:block" />
            No guessing. No chasing trends. No panic when the algorithm changes.
            <br className="hidden md:block" />
            Just a clear process that works.
          </motion.p>

          <motion.div 
            className="flex justify-center mt-6 md:mt-10"
            variants={itemVariants}
          >
            <motion.img
              src={Arrow}
              alt="Arrow"
              className="w-10 md:w-16"
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>

        {/* Puzzle Container */}
        <div 
          ref={containerRef}
          className="relative mt-8 md:mt-14 h-[400px] md:h-[600px] lg:h-[700px] flex items-center justify-center"
        >
          {/* Full Puzzle - Centered properly for mobile */}
          <motion.div
            className={`absolute z-10 ${isMobile ? 'left-1/2' : ''} w-full max-w-[340px] md:max-w-[450px] lg:max-w-[650px]`}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fullPuzzleVariants}
            style={isMobile ? { transform: 'translateX(-50%)' } : {}}
          >
            <img
              src={fullPuzzle}
              alt="Full Puzzle"
              className="w-full h-auto drop-shadow-2xl mx-auto"
            />
          </motion.div>

          {/* Puzzle Pieces */}
          {[puzzle1, puzzle2, puzzle3, puzzle4].map((puzzle, index) => (
            <motion.div
              key={index}
              className={`absolute w-[250px] md:w-[400px] lg:w-[370px]`}
              custom={index}
              initial="initial"
              animate={isInView ? "assembled" : "initial"}
              variants={puzzleVariants}
              style={isMobile ? { transform: 'translateX(-50%)' } : {}}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                delay: index * 0.15
              }}
            >
              <img
                src={puzzle}
                alt={`Puzzle ${index + 1}`}
                className="w-full h-auto drop-shadow-xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}