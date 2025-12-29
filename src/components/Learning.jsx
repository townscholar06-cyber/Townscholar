import React from 'react'
import arrow4 from '../assets/images/daddy-images/arrow4.png'
import { useState } from 'react'
import { IoChevronDown, IoPlay, IoLockClosed } from 'react-icons/io5'
import { CiClock1 } from 'react-icons/ci'
import { TiDocumentText } from 'react-icons/ti'
import { motion, AnimatePresence } from 'framer-motion'

export default function Learning() {
  const [openModules, setOpenModules] = useState({
    0: true,
  }) // Module 1 open by default
  
  const modules = [
    {
      title: 'Module 1: Pre-Course Journey',
      duration: '1h 35min',
      lessonCount: 12,
      isExpanded: true,
      lessons: [
        { title: 'What is Marketing?', type: 'video', icon: IoPlay },
        {
          title: 'Day in the life of a Content Writer',
          type: 'video',
          icon: IoPlay,
        },
        {
          title: 'How to get recruited as a Content Writer?',
          type: 'video',
          icon: IoPlay,
        },
        { title: 'Portfolio of a Content Writer', type: 'video', icon: IoPlay },
        { title: 'Portfolio of a Writer', type: 'locked', icon: IoLockClosed },
      ],
    },
    {
      title: 'Module 2: Preparing for Interviews (Primary)',
      duration: '1h 35min',
      lessonCount: 12,
      isExpanded: false,
      lessons: [
        { title: 'What is Marketing?', type: 'video', icon: IoPlay },
        {
          title: 'Day in the life of a Content Writer',
          type: 'video',
          icon: IoPlay,
        },
        {
          title: 'How to get recruited as a Content Writer?',
          type: 'video',
          icon: IoPlay,
        },
        { title: 'Portfolio of a Content Writer', type: 'video', icon: IoPlay },
        { title: 'Portfolio of a Writer', type: 'locked', icon: IoLockClosed },
      ],
    },
    {
      title: 'Module 3: Real Interview Challenge & Review',
      duration: '1h 35min',
      lessonCount: 12,
      isExpanded: false,
      lessons: [
        { title: 'What is Marketing?', type: 'video', icon: IoPlay },
        {
          title: 'Day in the life of a Content Writer',
          type: 'video',
          icon: IoPlay,
        },
        {
          title: 'How to get recruited as a Content Writer?',
          type: 'video',
          icon: IoPlay,
        },
        { title: 'Portfolio of a Content Writer', type: 'video', icon: IoPlay },
        { title: 'Portfolio of a Writer', type: 'locked', icon: IoLockClosed },
      ],
    },
    {
      title: 'Module 4: Deep-dive into Secondary Research',
      duration: '1h 35min',
      lessonCount: 12,
      isExpanded: false,
      lessons: [
        { title: 'What is Marketing?', type: 'video', icon: IoPlay },
        {
          title: 'Day in the life of a Content Writer',
          type: 'video',
          icon: IoPlay,
        },
        {
          title: 'How to get recruited as a Content Writer?',
          type: 'video',
          icon: IoPlay,
        },
        { title: 'Portfolio of a Content Writer', type: 'video', icon: IoPlay },
        { title: 'Portfolio of a Writer', type: 'locked', icon: IoLockClosed },
      ],
    },
    {
      title: 'Module 5: Product Strategy',
      duration: '1h 35min',
      lessonCount: 12,
      isExpanded: false,
      lessons: [
        { title: 'What is Marketing?', type: 'video', icon: IoPlay },
        {
          title: 'Day in the life of a Content Writer',
          type: 'video',
          icon: IoPlay,
        },
        {
          title: 'How to get recruited as a Content Writer?',
          type: 'video',
          icon: IoPlay,
        },
        { title: 'Portfolio of a Content Writer', type: 'video', icon: IoPlay },
        { title: 'Portfolio of a Writer', type: 'locked', icon: IoLockClosed },
      ],
    },
    {
      title: 'Module 6: Component Interaction',
      duration: '1h 35min',
      lessonCount: 12,
      isExpanded: false,
      lessons: [
        { title: 'What is Marketing?', type: 'video', icon: IoPlay },
        {
          title: 'Day in the life of a Content Writer',
          type: 'video',
          icon: IoPlay,
        },
        {
          title: 'How to get recruited as a Content Writer?',
          type: 'video',
          icon: IoPlay,
        },
        { title: 'Portfolio of a Content Writer', type: 'video', icon: IoPlay },
        { title: 'Portfolio of a Writer', type: 'locked', icon: IoLockClosed },
      ],
    },
    {
      title: 'Module 7: Component Anatomy',
      duration: '1h 35min',
      lessonCount: 12,
      isExpanded: false,
      lessons: [
        { title: 'What is Marketing?', type: 'video', icon: IoPlay },
        {
          title: 'Day in the life of a Content Writer',
          type: 'video',
          icon: IoPlay,
        },
        {
          title: 'How to get recruited as a Content Writer?',
          type: 'video',
          icon: IoPlay,
        },
        { title: 'Portfolio of a Content Writer', type: 'video', icon: IoPlay },
        { title: 'Portfolio of a Writer', type: 'locked', icon: IoLockClosed },
      ],
    },
    {
      title: 'Module 8: Component Variables',
      duration: '1h 35min',
      lessonCount: 12,
      isExpanded: false,
      lessons: [
        { title: 'What is Marketing?', type: 'video', icon: IoPlay },
        {
          title: 'Day in the life of a Content Writer',
          type: 'video',
          icon: IoPlay,
        },
        {
          title: 'How to get recruited as a Content Writer?',
          type: 'video',
          icon: IoPlay,
        },
        { title: 'Portfolio of a Content Writer', type: 'video', icon: IoPlay },
        { title: 'Portfolio of a Writer', type: 'locked', icon: IoLockClosed },
      ],
    },
  ]

  const toggleModule = (index) => {
    setOpenModules((prev) => {
      if (prev[index]) {
        return { [index]: false }
      }
      return { [index]: true }
    })
  }

  const bottomVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        staggerChildren: 0.3,
      },
    },
  }

  const moduleVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.08,
      },
    },
  }

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
    },
    wiggle: {
      rotate: [-4, 4, -4],
      transition: {
        repeat: Infinity,
        duration: 1.2,
        ease: 'easeInOut',
      },
    },
  }

  // Add this Image component function
  const Image = ({ src, alt, className }) => {
    return <img src={src} alt={alt} className={className} />
  }

  return (
    <div className='max-w-6xl lg:mx-auto mx-4'>
      {/* Bottom text */}
      <motion.div
        className="text-center mt-12 md:mt-20"
        variants={bottomVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-2xl md:text-3xl lg:text-6xl font-cursive font-light text-gray-800 mb-4 leading-tight"
          variants={bottomVariants}
        >
          here's what you'll be learning:{`)`}
        </motion.h3>
        <motion.p
          className="text-sm md:text-xl font-space text-gray-600 leading-relaxed px-4 md:px-0"
          variants={bottomVariants}
        >
          When content doesn't work, most creators blame the algorithm. But
          the truth is <br className="hidden md:block" /> the algorithm
          isn't broken. Your system is. Once you fix your structure,
          everything <br className="hidden md:block" /> else falls into
          place
        </motion.p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Image
          src={arrow4}
          alt="Arrow"
          className="text-red-500 w-[60%] md:w-[50%] mx-auto drop-shadow-sm"
        />
      </motion.div>

      {/* Modules section */}
      <motion.div
        className="bg-white rounded-2xl shadow-xl overflow-hidden mt-8 md:mt-14 border border-gray-100"
        variants={moduleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {modules.map((module, index) => (
          <motion.div
            key={index}
            className="border-b border-gray-100 last:border-b-0"
            variants={moduleVariants}
          >
            <motion.div
              className="flex items-center justify-between p-4 md:p-6 cursor-pointer hover:bg-gray-50"
              onClick={() => toggleModule(index)}
              whileHover={{ backgroundColor: '#f9fafb' }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-3 md:space-x-4">
                <motion.div
                  animate={{ rotate: openModules[index] ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoChevronDown className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                </motion.div>
                <h3 className="font-medium md:font-semibold text-gray-900 text-sm md:text-base lg:text-lg leading-snug">
                  {module.title}
                </h3>
              </div>

              <div className="hidden md:flex items-center gap-2">
                <motion.div
                  className="px-2 md:px-3 py-1 bg-[#F5B9FF] rounded-full flex items-center justify-center text-xs lg:text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <CiClock1 className="mr-1" />
                  {module.duration}
                </motion.div>
                <motion.div
                  className="px-2 md:px-3 py-1 bg-[#FFEC8A] rounded-full flex items-center justify-center text-xs lg:text-sm gap-1 md:gap-2 font-medium"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <TiDocumentText />
                  {module.lessonCount} lessons
                </motion.div>
              </div>
            </motion.div>

            <AnimatePresence>
              {openModules[index] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-4 md:px-6 pb-4 md:pb-6">
                    {module.lessons.length > 0 && (
                      <motion.div
                        className="space-y-2 md:space-y-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, staggerChildren: 0.1 }}
                      >
                        {module.lessons.map((lesson, lessonIndex) => (
                          <motion.div
                            key={lessonIndex}
                            className="flex items-center space-x-3 md:space-x-4 p-2 md:p-3 rounded-lg hover:bg-gray-50 cursor-pointer group"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: lessonIndex * 0.1 }}
                            whileHover={{
                              backgroundColor: '#f9fafb',
                              transition: { duration: 0.3 },
                            }}
                          >
                            <motion.div
                              className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center ${
                                lesson.type === 'locked'
                                  ? 'bg-gray-100 text-gray-400'
                                  : 'bg-blue-50 text-blue-600'
                              }`}
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.3 }}
                            >
                              <lesson.icon className="w-3 h-3 md:w-4 md:h-4" />
                            </motion.div>
                            <span
                              className={`font-medium text-sm md:text-base ${
                                lesson.type === 'locked'
                                  ? 'text-gray-400'
                                  : 'text-gray-700'
                              }`}
                            >
                              {lesson.title}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      {/* Watch Video Button with infinite shake */}
      <motion.div
        className="flex justify-center mt-6 -rotate-1 md:-rotate-6"
        variants={buttonVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.button
          className="bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg shadow-xl hover:shadow-2xl"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          animate="wiggle"
        >
          Watch the free video now
        </motion.button>
      </motion.div>
    </div>
  )
}