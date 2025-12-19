import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMinusCircle } from 'react-icons/fi'
import { MdAddCircleOutline } from 'react-icons/md'
import { IoMdAdd } from "react-icons/io";
import star from '../assets/images/bluestar.png'

// Simple Price Display Component (replaces ScratchCard)
const PriceDisplay = ({ price, currency = '₹', className }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="text-5xl lg:text-8xl font-cursive font-medium leading-tight">
        {currency}
        {price}/-
      </div>
    </div>
  )
}

// Main Combined Component with Added Framer Motion Animations
const PricingAndFAQ = () => {
  const ref = useRef(null)
  const faqRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isFaqInView = useInView(faqRef, { once: true, margin: '-100px' })

  const [openItems, setOpenItems] = useState({})

  const toggleItem = (index) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  const faqData = [
    {
      question: 'Who are the instructors for the program?',
      answer:
        'The program features mentorship from industry professionals with experience in leading tech companies. For instance, mentors like Anudeep Ayyagari have been associated with the program',
    },
    {
      question: 'Can I change my plan later?',
      answer:
        'Yes, you can change your plan at any time. Simply contact our support team or visit your account settings to modify your subscription plan according to your needs.',
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        "You can cancel your subscription at any time. Upon cancellation, you'll retain access to the program until the end of your current billing cycle. No refunds are provided for partial periods.",
    },
    {
      question: 'Can other info be added to an invoice?',
      answer:
        'Yes, additional information can be added to your invoices. Contact our billing team with any specific requirements such as purchase order numbers, additional company details, or tax information.',
    },
    {
      question: 'How does billing work?',
      answer:
        "Billing is processed automatically based on your selected plan. You'll be charged monthly or annually depending on your chosen subscription. All charges are processed securely through our payment system.",
    },
    {
      question: 'How do I change my account email?',
      answer:
        "To change your account email, go to your account settings and update your email address. You'll need to verify the new email address before the change takes effect.",
    },
  ]

  // Animation variants for section entry
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  }

  // Professional box hover animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const headingBlurContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const headingLetterVariants = {
    hidden: {
      opacity: 0,
      filter: 'blur(50px)',
      y: 20,
      scale: 1.1,
    },
    visible: {
      opacity: 0.7,
      filter: 'blur(0px)',
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  // FAQ animation variants
  const faqContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const faqItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    hover: {
      scale: 1.01,
      y: -2,
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
      transition: {
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const answerContentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  const faqHeadingVariants = {
    hidden: {
      opacity: 0,
      filter: 'blur(15px)',
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
        filter: {
          duration: 1.8,
          ease: [0.25, 0.1, 0.25, 1],
        },
      },
    },
  }

  return (
    <>
      {/* Pricing Section */}
      <motion.div
        ref={ref}
        className="container mx-auto px-4 flex flex-col items-center justify-center relative mt-10 lg:mt-20 bg-cover bg-center bg-no-repeat"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="max-w-5xl space-y-6 md:space-y-10 w-full ">
          <motion.div className="relative" variants={itemVariants}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={
                isInView
                  ? {
                      opacity: 0.2,
                      transition: { opacity: { duration: 0.8 } },
                    }
                  : {}
              }
            >
              {/* Green star with spinning animation */}
              <img
                className="md:w-[200px] h-[100px]  w-[100px] lg:w-96 md:h-[200px] lg:h-96 0 absolute lg:-top-36 md:-top-16 lg:-left-[40%] -top-9 -left-[20%]  "
                style={{
                  animation: 'spin 4s linear infinite',
                }}
                src={star}
                alt=""
              />
            </motion.div>
            <motion.div
              className="flex justify-center lg:justify-start "
              variants={headingBlurContainer}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <h1 className="relative  ">
                <motion.span
                  className="inline-block text-5xl md:text-6xl  lg:text-9xl lg:p-4 p-2 italic  font-semibold tracking-tighter    font-ibm bg-gradient-to-br from-[#0085CC] via-[#00B8D4] to-[#000000] bg-clip-text text-transparent"
                  variants={headingLetterVariants}
                >
                  pricing
                </motion.span>
              </h1>
            </motion.div>
          </motion.div>

          {/* Community Pricing Card with Professional Hover */}
          <motion.div
            className="bg-[#009DFF] rounded-3xl border-l-2 border-t-2 border-r-[10px] border-b-[10px] border-gray-300 p-4 md:p-6 text-white cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center lg:mb-4 mb-10  space-y-4 md:space-y-0">
              <motion.div
                className="w-full md:w-auto lg:text-left text-center"
                variants={itemVariants}
              >
                <h2 className="text-3xl md:text-6xl lg:text-8xl font-bold mb-1 font-rethink leading-tight">
                  Thirdlane
                </h2>
                <h3 className="text-3xl md:text-6xl lg:text-8xl font-bold font-rethink leading-tight">
                  community
                </h3>
                <p className="text-lg md:text-xl lg:text-2xl opacity-90 mt-2  font-cursive">
                  course + community access for 3 months
                </p>
              </motion.div>
              <motion.div
                className="text-center md:text-right w-full md:w-auto"
                variants={itemVariants}
              >
                <PriceDisplay
                  price="6,499"
                  className="inline-block text-white font-cursive"
                />
              </motion.div>
            </div>
            <motion.div
              className="bg-white text-black rounded-lg py-6 lg:px-10 px-7 p-4"
              variants={itemVariants}
            >
              <ul className="flex flex-col text-sm lg:text-base gap-5  font-space">
                {[
                  'Master the Art of Content Writing to write engaging blog posts, ad copy, and social media content that converts.',
                  'Live Mentor-Led Classes — Get real-time feedback and guidance from experienced writers.',
                  'Exclusive Community Support — Join a private group to network, share ideas, and get peer reviews.',
                  'Portfolio-Building Projects — Work on real assignments to showcase your skills to clients.',
                  'Lifetime Access & Updates — Revisit lessons anytime and stay updated with the latest strategies.',
                ].map((point, idx) => (
                  <motion.li
                    key={idx}
                    className="hover:text-[#0085CC] transition-colors  flex  gap-5 duration-300 relative pl-4"
                    whileHover={{ x: 5 }}
                  >
                    <p className="">
                      {' '}
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#0085CC] rotate-45" />
                    </p>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/*  Pricing Card with  Hover */}
          <motion.div
            className="bg-gray-300 rounded-xl p-4 md:p-6 pb-8 border-l-2 border-t-2 border-r-[10px] border-b-[10px] border-[#009DFF] cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <motion.div
                className="w-full md:w-auto text-center lg:text-left "
                variants={itemVariants}
              >
                <p className="text-3xl md:text-5xl lg:text-5xl font-cursive text-gray-600 mb-1">
                  self paced
                </p>
                <h2 className="text-4xl md:text-6xl lg:text-9xl font-bold font-rethink tracking-tighter text-black leading-tight">
                  course
                </h2>
              </motion.div>
              <motion.div
                className="text-center md:text-right text-light w-full md:w-auto"
                variants={itemVariants}
              >
                <PriceDisplay
                  price="3,999"
                  className="inline-block  text-black transform"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className="bg-[#dde9ef]"
        ref={faqRef}
        initial="hidden"
        animate={isFaqInView ? 'visible' : 'hidden'}
        variants={faqContainerVariants} // Animate the outer wrapper too
      >
        <motion.div
          className="container mx-auto px-4 lg:py-16 py-8 mt-7 lg:mt-10"
          variants={faqContainerVariants}
        >
          <motion.div
            className="text-center lg:mb-12 mb-8"
            variants={faqHeadingVariants}
          >
            <motion.div
              className="flex justify-center flex-wrap gap-1"
              variants={headingBlurContainer}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {'any question ?'.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  className={`text-4xl md:text-6xl lg:h-28 lg:text-9xl font-bold mb-10 italic tracking-tighter font-caveat text-[#0085CC] ${
                    letter === ' ' ? 'w-4 md:w-6' : ''
                  }`}
                  variants={headingLetterVariants}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-4  max-w-4xl mx-auto"
            variants={faqContainerVariants}
          >
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 bg-white rounded-lg   overflow-hidden cursor-pointer"
                variants={faqItemVariants}
                whileHover="hover"
                initial="hidden"
                animate="visible"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full lg:px-6 px-3 py-6 text-left transition-colors duration-200 flex items-center justify-between group"
                >
                  <h3 className="text-base lg:text-lg font-semibold text-gray-900 pr-4 group-hover:text-gray-700 transition-colors font-space duration-200">
                    {item.question}
                  </h3>
                  <motion.div
                    className="flex-shrink-0"
                    animate={{ rotate: openItems[index] ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    {openItems[index] ? (
                      <IoMdAdd className="w-7 h-7 text-gray-600 group-hover:text-gray-800 transition-colors duration-200 rotate-45" />
                    ) : (
                      <IoMdAdd className="w-7 h-7 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" />
                    )}
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openItems[index] ? 'auto' : 0,
                    opacity: openItems[index] ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                    opacity: { duration: 0.3 },
                  }}
                  className="overflow-hidden"
                >
                  <motion.div
                    initial="hidden"
                    animate={openItems[index] ? 'visible' : 'hidden'}
                    variants={answerContentVariants}
                    className="overflow-hidden"
                  >
                    <div className="lg:px-6 px-3 pb-6">
                      <p className="text-gray-600 leading-relaxed font-space">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  )
}

export default PricingAndFAQ