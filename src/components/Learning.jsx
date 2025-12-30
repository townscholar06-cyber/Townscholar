import React from 'react'
import arrow from '../assets/images/learning-arrow.png'
import { useState } from 'react'
import { IoChevronDown, IoPlay } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'

export default function Learning() {
  const [openModules, setOpenModules] = useState({
    0: true,
  }) // Module 1 open by default
  
  // Color definitions
  const colors = {
    primary: '#0085cc',
    primaryDark: '#005e99',
    primaryDarker: '#006bb3',
    primaryLight: '#00ccff',
    gradientFrom: '#0085cc',
    gradientTo: '#005e99',
  }
  
  const modules = [
    {
      title: 'Module 1: Positioning — What You\'re Actually Known For',
      isExpanded: true,
      description: "Most people jump straight into posting. That's why they get stuck. If someone watches a few of your posts and still can't answer: 'What is this person actually about?' Your content will never scale.",
      lessons: [
        { 
          title: 'Clearly define what you should talk about (and what to ignore)', 
          type: 'video', 
          icon: IoPlay 
        },
        {
          title: 'Stop copying others in your niche',
          type: 'video',
          icon: IoPlay,
        },
        {
          title: 'Position yourself so people recognise you within a few posts',
          type: 'video',
          icon: IoPlay,
        },
        { 
          title: 'AI-assisted exercises to remove blind spots and speed up clarity', 
          type: 'video', 
          icon: IoPlay 
        },
      ],
      outcome: 'When positioning is right, content becomes easier.'
    },
    {
      title: 'Module 2: Pre-Production — Writing That Actually Holds Attention',
      isExpanded: false,
      description: "This is the most important module in the course. Editing can enhance content. But writing creates it. This is where most creators struggle — and where most growth actually comes from.",
      lessons: [
        { 
          title: 'How to think before you write', 
          type: 'video', 
          icon: IoPlay 
        },
        {
          title: 'How to write hooks that work without fancy edits',
          type: 'video',
          icon: IoPlay,
        },
        {
          title: 'How to structure ideas so people stay till the end',
          type: 'video',
          icon: IoPlay,
        },
        { 
          title: 'How to turn scattered thoughts into clear scripts', 
          type: 'video', 
          icon: IoPlay 
        },
      ],
      outcome: 'When your writing is strong, you don\'t need to depend on the algorithm to save your content.'
    },
    {
      title: 'Module 3: Production — Translating Ideas to Camera',
      isExpanded: false,
      description: "You don't need expensive gear. You don't need complex setups. You need clarity on how to translate ideas naturally on camera.",
      lessons: [
        { 
          title: 'How to speak on camera naturally', 
          type: 'video', 
          icon: IoPlay 
        },
        {
          title: 'How to set yourself up so your personality shows',
          type: 'video',
          icon: IoPlay,
        },
        {
          title: 'How to record content that feels effortless, not forced',
          type: 'video',
          icon: IoPlay,
        },
        { 
          title: 'Feel comfortable on camera and reduce retakes', 
          type: 'video', 
          icon: IoPlay 
        },
      ],
      outcome: 'Good production makes content feel human.'
    },
    {
      title: 'Module 4: Post-Production — Editing That Supports the Idea',
      isExpanded: false,
      description: "Editing should serve the message, not distract from it. This includes complete knowledge transfer from a professional editor, so editing stops feeling mysterious or overwhelming.",
      lessons: [
        { 
          title: 'What actually matters in editing', 
          type: 'video', 
          icon: IoPlay 
        },
        {
          title: 'What is unnecessary noise in editing',
          type: 'video',
          icon: IoPlay,
        },
        {
          title: 'How pacing, cuts, and visuals support storytelling',
          type: 'video',
          icon: IoPlay,
        },
        { 
          title: 'What to tell your editor (or how to do it yourself)', 
          type: 'video', 
          icon: IoPlay 
        },
      ],
      outcome: 'You\'ll know exactly what to do with your editing process.'
    },
    {
      title: 'Module 5: The Complete Content System',
      isExpanded: false,
      description: "By the end of the course, you won't just have 'better content'. You'll have a complete system you can reuse — again and again.",
      lessons: [
        { 
          title: 'Putting it all together: Your repeatable system', 
          type: 'video', 
          icon: IoPlay 
        },
        {
          title: 'No guessing, no chasing trends - just a clear process',
          type: 'video',
          icon: IoPlay,
        },
        {
          title: 'What to do when the algorithm changes',
          type: 'video',
          icon: IoPlay,
        },
        { 
          title: 'Review: Clarity, confidence, and consistency', 
          type: 'video', 
          icon: IoPlay 
        },
      ],
      outcome: 'Just a clear process that works. No panic when the algorithm changes.'
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
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
    },
    wiggle: {
      rotate: [-3, 3, -3],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  }

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
    <div className='max-w-6xl lg:mx-auto mx-4 md:mx-6'>
      {/* Bottom text */}
      <motion.div
        className="md:text-center mt-8 md:mt-28"
        variants={bottomVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-4xl md:text-6xl indie-flower-regular font-light text-gray-800 mb-4 md:mb-6 leading-snug md:leading-tight px-2"
          variants={bottomVariants}
        >
          here's what you'll be learning:{`)`}
        </motion.h3>
        <motion.p
          className="text-base md:text-lg space-grotesk-300 text-gray-600 leading-relaxed px-2 md:px-0 mb-4"
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
            className="flex justify-center mt-6 md:mt-10"
            variants={itemVariants}
          >
            <motion.img
              src={arrow}
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

      {/* Modules section */}
      <motion.div
        className="mt-6 md:mt-14"
        variants={moduleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {modules.map((module, index) => (
          <motion.div
            key={index}
            className="mb-4 md:mb-6"
            variants={moduleVariants}
          >
            <motion.div
              className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden border border-gray-200"
              whileHover={{ boxShadow: "0 10px 30px -10px rgba(0, 133, 204, 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex items-start md:items-center justify-between p-4 md:p-6 cursor-pointer hover:bg-gray-50"
                onClick={() => toggleModule(index)}
                whileHover={{ backgroundColor: '#f8fafc' }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start space-x-3 md:space-x-4 flex-1">
                  <div 
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-lg flex-shrink-0 mt-1 md:mt-0"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`
                    }}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base md:text-xl leading-tight mb-1 md:mb-0">
                      {module.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm md:mt-1 max-w-2xl">
                      {module.description}
                    </p>
                  </div>
                </div>

                <motion.div
                  animate={{ rotate: openModules[index] ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-2 md:ml-4 flex-shrink-0 mt-1 md:mt-0"
                >
                  <IoChevronDown className="w-5 h-5 md:w-6 md:h-6" style={{ color: colors.primary }} />
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {openModules[index] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 md:px-6 pb-4 md:pb-6">
                      {/* Lessons */}
                      <div className="mb-4 md:mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3 md:mb-4 text-base md:text-lg">
                          In this module, you'll learn how to:
                        </h4>
                        <motion.div
                          className="space-y-2 md:space-y-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2, staggerChildren: 0.1 }}
                        >
                          {module.lessons.map((lesson, lessonIndex) => (
                            <motion.div
                              key={lessonIndex}
                              className="flex items-center space-x-3 md:space-x-4 p-2 md:p-3 rounded-lg md:rounded-xl hover:bg-blue-50 cursor-pointer group border border-transparent hover:border-blue-100"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: lessonIndex * 0.1 }}
                              whileHover={{
                                backgroundColor: '#f0f9ff',
                                transition: { duration: 0.3 },
                              }}
                              style={{ borderColor: colors.primaryLight }}
                            >
                              <motion.div
                                className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-white shadow-sm flex-shrink-0"
                                style={{ 
                                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`
                                }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                              >
                                <lesson.icon className="w-3 h-3 md:w-4 md:h-4" />
                              </motion.div>
                              <span className="font-medium text-gray-800 group-hover:text-blue-700 transition-colors duration-300 text-sm md:text-base flex-1">
                                {lesson.title}
                              </span>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>

                      {/* Outcome */}
                      <motion.div 
                        className="p-3 md:p-4 rounded-lg md:rounded-xl border"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        style={{ 
                          background: `linear-gradient(135deg, #f0f9ff, ${colors.primaryLight}15)`,
                          borderColor: colors.primaryLight
                        }}
                      >
                        <div className="flex items-start space-x-2 md:space-x-3">
                          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ backgroundColor: colors.primaryLight + '40' }}>
                            <span className="font-bold" style={{ color: colors.primaryDark }}>→</span>
                          </div>
                          <p className="font-medium italic text-sm md:text-base" style={{ color: colors.primaryDark }}>
                            {module.outcome}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* System Benefits Section */}
      <motion.div 
        className="mt-8 md:mt-12 mb-6 md:mb-8 p-4 md:p-6 rounded-xl md:rounded-2xl border"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ 
          background: `linear-gradient(135deg, #f0f9ff, ${colors.primaryLight}20)`,
          borderColor: colors.primaryLight
        }}
      >
        <h4 className="text-lg md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">
          What This System Gives You
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-left">
          <div className="space-y-2 md:space-y-3">
            <div className="flex items-start space-x-2 md:space-x-3">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: colors.primaryLight + '40' }}>
                <span className="font-semibold text-sm md:text-base" style={{ color: colors.primary }}>✓</span>
              </div>
              <p className="text-gray-700 text-sm md:text-base">Clarity on what to talk about</p>
            </div>
            <div className="flex items-start space-x-2 md:space-x-3">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: colors.primaryLight + '40' }}>
                <span className="font-semibold text-sm md:text-base" style={{ color: colors.primary }}>✓</span>
              </div>
              <p className="text-gray-700 text-sm md:text-base">Confidence in your writing</p>
            </div>
            <div className="flex items-start space-x-2 md:space-x-3">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: colors.primaryLight + '40' }}>
                <span className="font-semibold text-sm md:text-base" style={{ color: colors.primary }}>✓</span>
              </div>
              <p className="text-gray-700 text-sm md:text-base">A repeatable way to shoot content</p>
            </div>
          </div>
          <div className="space-y-2 md:space-y-3">
            <div className="flex items-start space-x-2 md:space-x-3">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: colors.primaryLight + '40' }}>
                <span className="font-semibold text-sm md:text-base" style={{ color: colors.primary }}>✓</span>
              </div>
              <p className="text-gray-700 text-sm md:text-base">A clean post-production process</p>
            </div>
            <div className="flex items-start space-x-2 md:space-x-3">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: colors.primaryLight + '40' }}>
                <span className="font-semibold text-sm md:text-base" style={{ color: colors.primary }}>✓</span>
              </div>
              <p className="text-gray-700 text-sm md:text-base">A system you can reuse — again and again</p>
            </div>
            <div className="flex items-start space-x-2 md:space-x-3">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: colors.primaryLight + '40' }}>
                <span className="font-semibold text-sm md:text-base" style={{ color: colors.primary }}>✓</span>
              </div>
              <p className="text-gray-700 font-semibold text-sm md:text-base">No guessing. No chasing trends.</p>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t" style={{ borderColor: colors.primaryLight }}>
          <p className="text-gray-700 italic text-center text-sm md:text-base">
            Most importantly: You'll have a system you can reuse — again and again.
            No guessing. No chasing trends. No panic when the algorithm changes.
            Just a clear process that works.
          </p>
        </div>
      </motion.div>

      {/* Watch Video Button with infinite shake */}
      <motion.div
        className="flex justify-center mt-8 md:mt-10 -rotate-1 md:-rotate-6 px-2"
        variants={buttonVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.button
          className="text-white bg-black px-6 md:px-10 py-3 md:py-5 rounded-full font-bold text-base md:text-xl shadow-xl hover:shadow-2xl md:w-auto"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          animate="wiggle"
          style={{ 
            boxShadow: `0 10px 30px -10px ${colors.primary}50`
          }}
        >
          <span className="flex items-center justify-center space-x-2">
            <span>Watch the video now</span>
            <span className="ml-1 md:ml-2">→</span>
          </span>
        </motion.button>
      </motion.div>
    </div>
  )
}