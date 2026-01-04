import React from 'react'
import arrow from '../assets/images/learning-arrow.png'
import { useState } from 'react'
import { IoChevronDown, IoPlay, IoLockClosed } from 'react-icons/io5'
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
      title: 'MODULE 1: Understanding Content Today',
      isExpanded: true,
      description: "Master the fundamentals of modern content creation and understand why content is the most powerful leverage in today's digital landscape.",
      lessons: [
        { 
          title: 'Video 1 - When Content Becomes Leverage', 
          type: 'video', 
          icon: IoPlay 
        },
        {
          title: 'Video 2 - How Attention Turns Into Opportunity',
          type: 'video',
          icon: IoPlay,
        },
        {
          title: 'Video 3 - The Lowest-Risk Way to Start',
          type: 'video',
          icon: IoPlay,
        },
        { 
          title: 'Video 4 - What Makes Content Survive', 
          type: 'video', 
          icon: IoPlay 
        },
      ],
      outcome: 'Understand why content is the most powerful leverage in the digital age',
      isLocked: false
    },
    {
      title: 'MODULE 2: Why People Choose You (a.k.a Positioning)',
      isExpanded: false,
      description: "Learn the art of positioning yourself uniquely in a crowded market so people naturally choose you over competitors.",
      lessons: [
        { 
          title: 'Video 1 - The Art of Positioning', 
          type: 'video', 
          icon: IoPlay 
        },
        {
          title: 'Video 2 - The EEE Advantage',
          type: 'video',
          icon: IoPlay,
        },
        {
          title: 'Video 3 - Define Your Positioning (AI-guided)',
          type: 'video',
          icon: IoPlay,
        },
        { 
          title: 'Video 4 - You Are the Niche', 
          type: 'video', 
          icon: IoPlay 
        },
      ],
      outcome: 'Develop a unique positioning that makes people choose you naturally',
      isLocked: false
    },
    {
      title: 'MODULE 3: Writing Is the Real Work (a.k.a Pre-Production)',
      isExpanded: false,
      description: "This is the most important module in the course. Editing can enhance content. But writing creates it. This is where most creators struggle — and where most growth actually comes from.",
      lessons: [
        { 
          title: 'Video 1 - How to think before you write', 
          type: 'video', 
          icon: IoPlay 
        },
        {
          title: 'Video 2 - How to write hooks that work without fancy edits',
          type: 'video',
          icon: IoPlay,
        },
        {
          title: 'Video 3 - How to structure ideas so people stay till the end',
          type: 'video',
          icon: IoPlay,
        },
        { 
          title: 'Video 4 - How to turn scattered thoughts into clear scripts', 
          type: 'video', 
          icon: IoPlay 
        },
      ],
      outcome: 'When your writing is strong, you don\'t need to depend on the algorithm to save your content.',
      isLocked: true
    },
    {
      title: 'MODULE 4: Talking to the Camera (a.k.a Production)',
      isExpanded: false,
      description: "You don't need expensive gear. You don't need complex setups. You need clarity on how to translate ideas naturally on camera.",
      lessons: [
        { 
          title: 'Video 1 - How to speak on camera naturally', 
          type: 'video', 
          icon: IoPlay 
        },
        {
          title: 'Video 2 - How to set yourself up so your personality shows',
          type: 'video',
          icon: IoPlay,
        },
        {
          title: 'Video 3 - How to record content that feels effortless, not forced',
          type: 'video',
          icon: IoPlay,
        },
        { 
          title: 'Video 4 - Feel comfortable on camera and reduce retakes', 
          type: 'video', 
          icon: IoPlay 
        },
      ],
      outcome: 'Good production makes content feel human.',
      isLocked: true
    },
    {
      title: 'MODULE 5: What Editing Should and Shouldn\'t Do (a.k.a Post-Production)',
      isExpanded: false,
      description: "Editing should serve the message, not distract from it. This includes complete knowledge transfer from a professional editor, so editing stops feeling mysterious or overwhelming.",
      lessons: [
        { 
          title: 'Video 1 - What actually matters in editing', 
          type: 'video', 
          icon: IoPlay 
        },
        {
          title: 'Video 2 - What is unnecessary noise in editing',
          type: 'video',
          icon: IoPlay,
        },
        {
          title: 'Video 3 - How pacing, cuts, and visuals support storytelling',
          type: 'video',
          icon: IoPlay,
        },
        { 
          title: 'Video 4 - What to tell your editor (or how to do it yourself)', 
          type: 'video', 
          icon: IoPlay 
        },
      ],
      outcome: 'You\'ll know exactly what to do with your editing process.',
      isLocked: true
    },
  ]

  const toggleModule = (index) => {
    // Don't toggle if module is locked
    if (modules[index].isLocked) {
      return;
    }
    
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
        id='modules'
        variants={bottomVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-4xl md:text-6xl indie-flower-regular font-light text-gray-800 mb-4 md:mb-6 leading-snug md:leading-tight px-2"
          variants={bottomVariants}
        >
          here's what you'll be learning :{`)`}
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
              className={`bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden border ${module.isLocked ? 'border-gray-300' : 'border-gray-200'}`}
              whileHover={{ 
                boxShadow: module.isLocked 
                  ? "0 5px 15px -5px rgba(0, 0, 0, 0.1)" 
                  : "0 10px 30px -10px rgba(0, 133, 204, 0.15)" 
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Module Header */}
              <motion.div
                className={`flex items-start md:items-center justify-between p-4 md:p-6 cursor-pointer ${module.isLocked ? 'cursor-not-allowed bg-gray-50' : 'hover:bg-gray-50'}`}
                onClick={() => toggleModule(index)}
                whileHover={!module.isLocked ? { backgroundColor: '#f8fafc' } : {}}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start space-x-3 md:space-x-4 flex-1">
                  <div 
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-lg flex-shrink-0 mt-1 md:mt-0 ${module.isLocked ? 'opacity-70' : ''}`}
                    style={{ 
                      background: module.isLocked 
                        ? 'linear-gradient(135deg, #9ca3af, #6b7280)'
                        : `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`
                    }}
                  >
                    {module.isLocked ? (
                      <IoLockClosed className="w-4 h-4 md:w-5 md:h-5" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 md:gap-3 mb-1">
                      <h3 className={`font-bold text-gray-900 text-base md:text-xl leading-tight ${module.isLocked ? 'text-gray-600' : ''}`}>
                        {module.title}
                      </h3>
                      {module.isLocked && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded-full">
                          <IoLockClosed className="w-3 h-3" />
                          LOCKED
                        </span>
                      )}
                    </div>
                    <p className={`text-xs md:text-sm md:mt-1 max-w-2xl ${module.isLocked ? 'text-gray-500' : 'text-gray-600'}`}>
                      {module.description}
                    </p>
                  </div>
                </div>

                {!module.isLocked && (
                  <motion.div
                    animate={{ rotate: openModules[index] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-2 md:ml-4 flex-shrink-0 mt-1 md:mt-0"
                  >
                    <IoChevronDown className="w-5 h-5 md:w-6 md:h-6" style={{ color: colors.primary }} />
                  </motion.div>
                )}
              </motion.div>

              {/* Module Content - Only show if not locked and expanded */}
              <AnimatePresence>
                {!module.isLocked && openModules[index] && (
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
                          In this module, you'll learn:
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
        className="mt-4 md:mt-6 mb-6 md:mb-8 p-4 md:p-6 rounded-xl md:rounded-2xl border"
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
      </motion.div>

      {/* Live Session Notes Section */}
      <motion.div 
        className="mt-6 md:mt-8 p-4 md:p-5 rounded-lg md:rounded-xl border mb-8 md:mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ 
          background: `linear-gradient(135deg, #fefce8, ${colors.primaryLight}10)`,
          borderColor: colors.primaryLight + '60',
          borderStyle: 'dashed',
          borderWidth: '2px'
        }}
      >
        <div className="flex items-start space-x-2 md:space-x-3">
          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{ 
              backgroundColor: colors.primaryLight + '30',
              border: `2px solid ${colors.primaryLight}60`
            }}>
            <span className="font-bold text-xs md:text-sm" style={{ color: colors.primaryDark }}>ℹ</span>
          </div>
          <div className="flex-1">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              <span className="font-semibold" style={{ color: colors.primaryDark }}>Along with the recorded modules, there is one live Content Review Session every month.</span>
              <br/><br/>
              In this session, we review the activities completed by students as part of the course.
              <br/><br/>
              This includes: <br />
              • Content drafts <br />
              • Short-form videos created using the framework <br />
              • Common patterns, mistakes, and improvements
              <br/><br/>
              <span className="italic text-gray-600">This is not a lecture or a repeat of the modules.</span>
              <br/>
              <span className="font-medium" style={{ color: colors.primaryDark }}>It's a working session focused on applying what you've learned.</span>
              <br/><br/>
              Each live session is recorded. From the date you join the course, you will have access to the most recent session recording for 3 months.
            </p>
          </div>
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
        <motion.a
          href="https://academy.townscholar.com/web/checkout/695911a32a8a809684b5178f"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-black px-6 md:px-10 py-3 md:py-5 rounded-full font-bold text-sm md:text-base shadow-xl hover:shadow-2xl md:w-auto"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          animate="wiggle"
          style={{ 
            boxShadow: `0 10px 30px -10px ${colors.primary}50`
          }}
        >
          <span className="flex items-center justify-center space-x-2">
            <span>Enroll Now to Unlock All Modules</span>
            <span className="ml-1 md:ml-2">→</span>
          </span>
        </motion.a>
      </motion.div>
    </div>
  )
}