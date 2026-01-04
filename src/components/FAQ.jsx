import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { IoMdAdd } from 'react-icons/io'


const FAQ = () => {
  const faqRef = useRef(null)
  const isFaqInView = useInView(faqRef, { once: true, margin: '-100px' })
  const testimonialsRef = useRef(null)
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: '-100px' })
  const pricingRef = useRef(null)
  const isPricingInView = useInView(pricingRef, { once: true, margin: '-100px' })
  const [openItems, setOpenItems] = useState({})

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

  const toggleItem = (index) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  const faqData = [
  {
    question: 'Who is this course for?',
    answer:
      'This course is for anyone who wants to use content seriously, not casually. It\'s especially useful if you\'re a creator who wants consistency, a working professional building content on the side, or a founder using content to build trust. You don\'t need to be full-time you just need to care about what your content is building.',
  },
  {
    question: 'Who should NOT take this course?',
    answer:
      'This course is not for you if you\'re looking for shortcuts or hacks, want "go viral in 30 days" promises, or you\'re not willing to think, write, or reflect. This system works best for people who want to stay in the game long-term.',
  },
  {
    question: 'Do I need prior experience in content creation?',
    answer:
      'No. You don\'t need to be a "good writer" or a confident speaker. The course teaches you how to think clearly, how to structure ideas, and how to improve step by step. Clarity comes before confidence.',
  },
  {
    question: 'Is this a growth-hack or algorithm course?',
    answer:
      'No. This course doesn\'t teach you how to chase the algorithm. It teaches you how to stop depending on it. Virality may happen as a side effect—but the focus is on building content that compounds over time.',
  },
  {
    question: 'Will this help with business or career outcomes?',
    answer:
      'Yes. Clear content builds trust. Trust leads to opportunities, clients, partnerships, and credibility. This course helps you use content as a long-term asset, not just a posting habit.',
  },
  {
    question: 'What language is the course in?',
    answer:
      'The course is currently available in Tamil/Tanglish. This was done intentionally—to explain complex ideas more clearly and naturally. An English version will be launched soon.',
  },
  {
    question: 'How much time do I need to commit?',
    answer:
      'You don\'t need to spend hours every day. The course is designed to reduce guesswork, simplify decision-making, and make content feel calmer. You can go at your own pace and apply what you learn immediately.',
  },
  {
    question: 'Is this live or self-paced?',
    answer:
      'This is a self-paced course. You can revisit lessons anytime and move through it based on your schedule.',
  },
  {
    question: 'Is this relevant if my content is already "working"?',
    answer:
      'If your content already feels clear, consistent, and predictable, you may not need this course. But if your growth feels random, exhausting, or fragile—this system will help you stabilise and scale.',
  },
  {
    question: 'One last thing before you decide',
    answer:
      'This course doesn\'t promise fast results. It promises clarity, control, and a system you can reuse. If that\'s what you\'re looking for, you\'ll find this useful.',
  },
]

const testimonials = [
  {
    id: 1,
    text: "Even with a strong audience, Epaphra's session helped me identify gaps in how I delivered my content. It set a clear benchmark for storytelling, clarity, and effort. Epaphra is a natural storyteller, and learning from him pushes you to raise your standards.",
    name: "Agnel John",
    role: "Founder | Error Makes Clever",
    rotation: "rotate-2",
    hoverRotation: "hover:rotate-3"
  },
  {
    id: 2,
    text: "Before the workshop, my content lacked structure. I learned that good ideas matter only when they're presented clearly and simply. Earlier, I was posting without direction. Now I have clarity and know exactly how to communicate my ideas.",
    name: "Shashank",
    role: "Founder | The Stupidpreneur Newsletter",
    rotation: "-rotate-1",
    hoverRotation: "hover:-rotate-2"
  },
  {
    id: 3,
    text: "I used to rely on instinct, but this workshop showed me the importance of preparation in storytelling. A relatability-first approach changed how I write, speak, and communicate. Strong ideas truly need strong stories to succeed.",
    name: "Deepak Kumar",
    role: "Founder | DNA Community",
    rotation: "-rotate-2",
    hoverRotation: "hover:-rotate-3"
  },
  {
    id: 4,
    text: "I understood storytelling in theory but struggled with short-form content. Epaphra helped me simplify scripting and improve my on-camera confidence. I applied what I learned and landed a client from my second reel.",
    name: "Mahesh",
    role: "Founder & Principal Consultant | Revenueholic",
    rotation: "rotate-1",
    hoverRotation: "hover:rotate-2"
  },
  {
    id: 5,
    text: "I had ideas but struggled with hooks, structure, and consistency. Learning how to build a strong hook changed my content approach. I now create faster, overthink less, and see better engagement, especially on LinkedIn.",
    name: "Senthil Prabhu",
    role: "Founder & CEO | Suprhost",
    rotation: "rotate-2",
    hoverRotation: "hover:rotate-3"
  },
  {
    id: 6,
    text: "I was posting without consistency or structure. Epaphra's framework helped me combine vulnerability, data, and emotion. I saw a big jump in engagement, including a post that crossed 42K impressions, and now feel confident sharing my journey.",
    name: "Sathishraj S",
    role: "Founder | PlayPal Pro",
    rotation: "-rotate-1",
    hoverRotation: "hover:-rotate-2"
  }
];

  const faqContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  }

  const faqItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: {
      scale: 1.01,
    },
  }

  const answerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  const blurTextVariants = {
    hidden: { 
      filter: 'blur(10px)',
      opacity: 0,
      y: 20
    },
    visible: { 
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  const sectionVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      rotate: 0
    },
    visible: (index) => ({ 
      opacity: 1,
      y: 0,
      rotate: index % 2 === 0 ? 2 : -1,
      transition: { 
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut'
      }
    })
  }

  return (
    <div>
      <motion.div 
        ref={testimonialsRef}
        className="py-16 px-4"
        initial="hidden"
        animate={isTestimonialsInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
      >
      <div className="max-w-6xl mx-auto space-grotesk-300">
        {/* Header */}
        <div className="md:text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-6xl rethink-sans-600 tracking-tight font-bold text-gray-900 mb-6"
            variants={blurTextVariants}
          >
            Real feedback. Real results.
          </motion.h1>
          <motion.p 
            className="text-base text-gray-600 space-grotesk-300 max-w-3xl mx-auto leading-relaxed"
            variants={blurTextVariants}
            transition={{ delay: 0.2 }}
          >
            When content doesn't work, most creators blame the algorithm. But the truth is the 
            algorithm isn't broken. Your system is. Once you fix your structure, everything else falls 
            into place.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8  p-2 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id} 
              className="relative"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isTestimonialsInView ? 'visible' : 'hidden'}
            >
              {/* Red pin */}
              <div className="absolute -top-3 left-1/2 w-6 h-6 bg-red-600 rounded-full shadow-lg z-10"></div>
              
              {/* Card */}
              <motion.div 
                className={`bg-[#D9D9D9] rounded-3xl p-8 pt-10 transition-transform  duration-500 ${testimonial.rotation} ${testimonial.hoverRotation}`}
                
              >
                {/* Profile Image */}
                <div className="mb-6">
                  <div className="text-white text-2xl font-bold">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGkdpYljSr2odqONKLFqPnO5UbCoGuKAmIA&s" className='w-20 h-20 border-4 rounded-3xl border-white object-cover' alt="" />
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-900 indie-flower-regular text-lg mb-6 leading-relaxed" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <div>
                  <p className="text-gray-900 font-semibold text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-700 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center md:mt-20">
          <div className="relative">
            {/* Outer shadow layer */}
            <div className="absolute inset-0 bg-black rounded-full blur-3xl opacity-30"></div>
            
            {/* Button */}
            <motion.div
        className="flex justify-center -rotate-1 md:-rotate-6 px-2"
        variants={buttonVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.a
        href="https://academy.townscholar.com/web/checkout/695911a32a8a809684b5178f"
        target="_blank"
        rel="noopener noreferrer"
          className="text-white bg-black px-8 md:px-16 py-3 md:py-5 rounded-full font-bold text-sm md:text-base shadow-xl hover:shadow-2xl md:w-auto"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          animate="wiggle"
          style={{ 
            boxShadow: `0 10px 30px -10px ${'#0085cc'}50`
          }}
        >
          <span className="flex items-center justify-center space-x-2">
            <span>Take Action Now !</span>
            <span className="ml-1 md:ml-2">→</span>
          </span>
        </motion.a>
      </motion.div>
          </div>
        </div>
      </div>
    </motion.div>

    <motion.div
      ref={faqRef}
      className=""
      initial="hidden"
      animate={isFaqInView ? 'visible' : 'hidden'}
      variants={faqContainerVariants}
    >
      <div className="container mx-auto px-4 pt-5 pb-10">
       <div className='relative'>
         <motion.h2 
           className="text-center h-20 md:h-105 playfair-700 text-[#e9d17f] tracking-tighter text-9xl lg:text-[500px] opacity-85 font-bold mb-10"
           variants={blurTextVariants}
         >
           FAQ
         </motion.h2>
       </div>

        <motion.div className="space-y-4 max-w-6xl mx-auto">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="border-2 border-[#EAEAEA] rounded-lg overflow-hidden"
              variants={faqItemVariants}
              whileHover="hover"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left"
              >
                <h3 className="font-semibold text-base md:text-lg text-gray-900">
                  {item.question}
                </h3>
                <motion.span
                  animate={{ rotate: openItems[index] ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoMdAdd size={26} />
                </motion.span>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openItems[index] ? 'auto' : 0,
                  opacity: openItems[index] ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <motion.div
                  variants={answerVariants}
                  initial="hidden"
                  animate={openItems[index] ? 'visible' : 'hidden'}
                  className="px-6 pb-6 text-gray-600"
                >
                  {item.answer}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>

    <motion.div 
      ref={pricingRef}
      className="min-h-screen bg-white p-8 md:p-12 lg:p-16"
      id='pricing'
      initial="hidden"
      animate={isPricingInView ? 'visible' : 'hidden'}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <motion.h1 
            className="text-3xl md:text-7xl indie-flower-regular font-bold mb-2"
            variants={blurTextVariants}
          >
            but <span className="bg-[#FF0000]/45 px-2 indie-flower-regular">why ₹5,999?</span>
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-600 italic indie-flower-regular"
            variants={blurTextVariants}
            transition={{ delay: 0.2 }}
          >
            that's a lot.
          </motion.p>
        </div>

        {/* Introduction */}
        <motion.p 
          className="text-lg mb-6"
          variants={blurTextVariants}
          transition={{ delay: 0.3 }}
        >
          Fair question. Let's break it down.
        </motion.p>

        {/* Compare This To Section */}
        <motion.div 
          className="mb-8"
          variants={blurTextVariants}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-bold mb-4">Compare this to:</h2>
          <ul className="space-y-3 list-disc pl-4 text-lg ml-5">
            <li className="text-gray-700">
              <span className="font-semibold">Trial and error for 6 months:</span> Wasted time, inconsistent results, no clarity. <span className="font-semibold">Cost:</span> Your 20s.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">Hiring a content coach:</span> ₹15,000-₹50,000 for private sessions. Most teach theory, not systems.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">Agency services:</span> ₹25,000+/month for someone to do it for you. You still don't learn how.
            </li>
          </ul>
        </motion.div>

        {/* What ₹6,000 Actually Buys You Section */}
        <motion.div 
          className="mb-8"
          variants={blurTextVariants}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-xl font-bold mb-4">What ₹5,999 actually buys you:</h2>
          <ul className="space-y-2 list-disc pl-4 text-lg ml-5">
            <li className="text-gray-700">10 hours of focused training (not filler, not theory)</li>
            <li className="text-gray-700">AI-powered positioning tool (builds your topic bank automatically)</li>
            <li className="text-gray-700">15 modules covering positioning → writing → filming → editing → monetization</li>
            <li className="text-gray-700">Community access (real creators, real feedback, no fluff)</li>
            <li className="text-gray-700">A system you own forever</li>
          </ul>
        </motion.div>

        {/* The Math That Matters Section */}
        <motion.div 
          className="mb-10"
          variants={blurTextVariants}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-xl font-bold mb-4">The math that matters:</h2>
          <p className="text-gray-700 text-lg mb-4">
            If this course helps you land <span className="font-semibold">one brand deal</span> (₹50,000-₹1,00,000), you've made your money back. If it helps you grow consistently and turn content into a side income, ₹5,999 is nothing. If it saves you 6 months of trial and error, you've saved something priceless: <span className="font-semibold">time.</span>
          </p>
          <p className="text-gray-700 text-lg italic">This isn't a course. It's leverage.</p>
        </motion.div>

        {/* Call to Action Button */}
        <div className="flex justify-center mt-20">
          <div className="relative">
            {/* Outer shadow layer */}
            <div className="absolute inset-0 bg-black rounded-full blur-3xl opacity-30"></div>
            
            {/* Button */}
            <motion.div
        className="flex justify-center -rotate-1 md:-rotate-6 px-2"
        variants={buttonVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.a
        href="https://academy.townscholar.com/web/checkout/695911a32a8a809684b5178f"
        target="_blank"
        rel="noopener noreferrer"
          className="text-white bg-black px-8 md:px-16 py-3 md:py-5 rounded-full font-bold text-sm md:text-base shadow-xl hover:shadow-2xl md:w-auto"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          animate="wiggle"
          style={{ 
            boxShadow: `0 10px 30px -10px ${'#0085cc'}50`
          }}
        >
          <span className="flex items-center justify-center space-x-2">
            <span>Take Action Now !</span>
            <span className="ml-1 md:ml-2">→</span>
          </span>
        </motion.a>
      </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
    </div>
  )
}

export default FAQ