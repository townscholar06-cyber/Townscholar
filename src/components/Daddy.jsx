import React from "react";
import greenStar from "../assets/images/daddy-images/green-star.png";
import redStar from "../assets/images/daddy-images/red-star.png";
import arrow from "../assets/images/daddy-images/arrow.png";
import arrow2 from "../assets/images/daddy-images/arrow2.png";
import arrow3 from "../assets/images/daddy-images/arrow3.png";
import { useState, useEffect } from "react";
import { BiSolidDislike } from "react-icons/bi";
import { motion } from "framer-motion";
// Additional icons for checklist
import {
  MdGroup,
  MdLightbulb,
  MdTrendingDown,
  MdScience,
  MdPeople,
  MdShare,
  MdPhoneAndroid,
} from "react-icons/md";

const Daddy = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mouse tracking for parallax (desktop only)
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.34, 1.56, 0.64, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  const titleTextVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const arrowVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotate: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotate: 12,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.06 : 0.08,
        delayChildren: 0.4,
      },
    },
  };

  const sectionVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1.4,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  const rightSectionVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1.4,
        ease: [0.34, 1.56, 0.64, 1],
        delay: 0.6,
      },
    },
  };

  const checklistVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 1,
      },
    },
  };

  const checklistItemVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  const spinVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 4,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  const getParallaxVariants = () => {
    if (isMobile) return {};

    return {
      animate: {
        x: mousePosition.x,
        y: mousePosition.y,
        transition: {
          type: "spring",
          stiffness: 150,
          damping: 15,
        },
      },
    };
  };

  const getSectionWithParallaxVariants = (baseVariants, parallaxMultiplier) => {
    if (isMobile) return baseVariants;

    return {
      ...baseVariants,
      animate: {
        x: mousePosition.x * parallaxMultiplier.x,
        y: mousePosition.y * parallaxMultiplier.y,
        transition: {
          type: "spring",
          stiffness: 150,
          damping: 15,
        },
      },
    };
  };

  // Checklist data as arrays with icons
  const algorithmBlamerChecklist = [
    { text: "You constantly complain about the", icon: BiSolidDislike },
    { text: "You blame everyone else for lack", icon: MdGroup },
    { text: "You think you know best but still", icon: MdLightbulb },
    { text: "You say you can't take your content", icon: MdTrendingDown },
    { text: "You rarely experiment or try", icon: MdScience },
    { text: "You think everyone 50/50 fit", icon: MdPeople },
    { text: "You think everyone 50/50 fit", icon: MdPeople },
  ];

  const algoDaddyChecklist = [
    { text: "You constantly complain about the", icon: BiSolidDislike },
    { text: "You blame everyone else for lack", icon: MdGroup },
    { text: "You think you know best but still", icon: MdLightbulb },
    { text: "You say you can't take your content", icon: MdTrendingDown },
    { text: "You rarely experiment or try", icon: MdScience },
    { text: "You think everyone 50/50 fit", icon: MdPeople },
    { text: "You think everyone 50/50 fit", icon: MdPeople },
  ];

  const renderAnimatedText = (text, className) => {
    return (
      <motion.span
        className={className}
        variants={wordVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={letterVariants}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.span>
    );
  };

  // Image component replacement for the missing import
  const Image = ({ src, alt, className }) => {
    return <img src={src} alt={alt} className={className} />;
  };

  return (
    <motion.div
      className="min-h-screen container max-w-6xl px-4 lg:px-0 mx-auto my-10 font-rethink"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Browser-like header */}
      <div className="">
        <div className="rounded-t-lg">
          <motion.div
            className="flex items-center space-x-2"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="w-6 h-6 bg-red-500 rounded-full"
              variants={dotVariants}
              whileHover="hover"
            />
            <motion.div
              className="w-6 h-6 bg-yellow-500 rounded-full"
              variants={dotVariants}
              whileHover="hover"
            />
            <motion.div
              className="w-6 h-6 bg-green-500 rounded-full"
              variants={dotVariants}
              whileHover="hover"
            />
          </motion.div>
        </div>

        {/* Main content */}
        <div className="rounded-b-lg relative">
          {/* Header text */}
          <div className="w-full mb-8 md:mb-16 relative">
            <motion.div
              className="w-full mt-6 md:mt-10 font-bad-script"
              variants={titleTextVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1 className="text-5xl md:text-8xl text-left indie-flower-regular font-light text-gray-800 mb-4 leading-tight">
                your content isn't working
                <br className="hidden md:block" />
                <span className="md:hidden"> </span>because you're...
              </h1>
            </motion.div>

            <motion.div
              className="flex items-center justify-center absolute top-48 md:top-72 left-[38%] md:left-[35%]"
              initial={{ y: 0, rotate: 6 }}
              animate={{
                y: [0, -28, 0],
                rotate: [8, -8, 8],
              }}
              transition={{
                duration: 3.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src={arrow}
                alt="arrow"
                className="w-[130px] md:w-[170px] lg:w-64"
              />
            </motion.div>
          </div>

          {/* Two column layout */}
          <div className="grid mt-20 md:mt-56 md:grid-cols-2 gap-8 md:gap-0 items-start relative">
            {/* Left column - Algorithm Blamer */}
            <motion.div
              className="relative mt-4 md:mt-7 lg:-rotate-3"
              variants={getSectionWithParallaxVariants(sectionVariants, {
                x: 0.3,
                y: 0.2,
              })}
              initial="hidden"
              whileInView="visible"
              animate={!isMobile ? "animate" : undefined}
              viewport={{ once: true }}
            >
              <div className="">
                <div className="">
                  <motion.div
                    className="w-36 md:w-56 absolute -top-20 md:-top-36 -left-10 md:-left-16"
                    variants={spinVariants}
                    animate="animate"
                  >
                    <Image
                      src={redStar}
                      alt="Red Star"
                      className="w-full h-auto"
                    />
                  </motion.div>
                </div>
                <div className="mt-10">
                  <h2>
                    {renderAnimatedText(
                      "algorithm",
                      "text-4xl md:text-5xl tracking-tighter font-bellefair font-light text-[#252524]"
                    )}
                  </h2>
                  <h2>
                    {renderAnimatedText(
                      "blamer",
                      "text-7xl md:text-8xl font-bold tracking-tighter text-[#FF6262] mb-4"
                    )}
                  </h2>
                  <motion.p
                    className="text-base text-gray-600 mb-3 leading-relaxed font-space"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    You're posting. You're trying. But it
                    <br />
                    always feels like guesswork.Here's what
                    <br />
                    most creators believe (and why it keeps
                    <br />
                    them stuck): You blame the algorithm
                    <br />
                    when posts flop
                  </motion.p>
                </div>
              </div>

              <div className="py-4 md:py-6 rounded-lg">
                <motion.div
                  className="space-y-1 overflow-hidden md:space-y-2 bg-[#FFB7B7] w-full md:w-[80%] border rounded-lg border-[#FF6262] py-2 text-sm shadow-lg"
                  variants={checklistVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {algorithmBlamerChecklist.map((item, index) => (
                    <motion.div
                      key={index}
                      className="border-b last:border-b-0 font-space border-[#FF6262]"
                      variants={checklistItemVariants}
                      whileHover="hover"
                    >
                      <div className="flex items-center gap-2 p-2 md:p-3">
                        <item.icon className="w-3 h-3 md:w-4 md:h-4 text-red-500 flex-shrink-0" />
                        <span className="leading-snug font-space">
                          {item.text}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Right column - AI Daddy */}
            <motion.div
              className="relative mt-16 md:mt-40 lg:mt-56"
              variants={getSectionWithParallaxVariants(rightSectionVariants, {
                x: -0.3,
                y: 0.2,
              })}
              initial="hidden"
              whileInView="visible"
              animate={!isMobile ? "animate" : undefined}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="hidden md:block md:-ml-24"
              >
                <Image
                  src={arrow2}
                  alt="arrow"
                  className="w-[120px] md:w-[170px] lg:w-[300px] drop-shadow-sm"
                />
              </motion.div>

              <div className="relative lg:rotate-3">
                <div className="">
                  <div className="flex items-end md:justify-center w-full">
                    <motion.div
                      className="w-28 md:w-48 absolute -top-20 md:-top-48 -left-4 md:left-72"
                      variants={spinVariants}
                      animate="animate"
                    >
                      <Image
                        src={greenStar}
                        alt="Green Star"
                        className="w-full h-auto"
                      />
                    </motion.div>
                  </div>
                  <div className="flex flex-col md:items-end mt-8 md:mt-0 justify-end md:w-[90%]">
                    <h2>
                      {renderAnimatedText(
                        "algo",
                        "text-4xl md:text-5xl tracking-tighter font-light font-bellefair"
                      )}
                    </h2>
                    <h2>
                      {renderAnimatedText(
                        "daddy",
                        "text-7xl md:text-8xl font-bold tracking-tighter text-[#00CC94] mb-4"
                      )}
                    </h2>
                    <motion.h2
                      className="text-base md:text-lg md:text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.8 }}
                    >
                      (with an AI sidekick)
                    </motion.h2>
                    <motion.p
                      className="text-base text-gray-600 mb-4 md:mb-6 text-left md:text-right leading-relaxed font-space"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1 }}
                    >
                      You're not guessing anymore — you're structuring.
                      <br />
                      Trust content trends and aren't flexible
                      <br />
                      You've built a system that earns
                      <br />
                      attention, builds trust, and scales on
                      <br />
                      repeat.
                    </motion.p>
                  </div>
                </div>

                <div className="rounded-lg">
                  <motion.div
                    className="space-y-1 md:space-y-2 bg-[#C4FFCB] border w-full md:w-[80%] mx-auto rounded-lg border-[#24C637] py-2 text-sm relative shadow-lg overflow-hidden"
                    variants={checklistVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {algoDaddyChecklist.map((item, index) => (
                      <motion.div
                        key={index}
                        className="border-b last:border-b-0 border-[#24C637] font-space"
                        variants={checklistItemVariants}
                        whileHover="hover"
                      >
                        <div
                          className={`flex items-center gap-2 font-space ${
                            index < 2 ? "p-3" : "p-2 md:p-3"
                          }`}
                        >
                          <item.icon className="w-4 h-4 md:w-4 md:h-4 text-green-600 flex-shrink-0" />
                          <span className="leading-snug font-space">
                            {item.text}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                    <motion.div
                      className="absolute -bottom-6 md:-bottom-10 lg:-bottom-24 -left-[60%] md:-left-[75%] hidden md:block"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1.8 }}
                    >
                      <Image
                        src={arrow3}
                        alt="Arrow"
                        className="text-red-500 w-[150px] lg:w-[180px] xl:w-[200px] drop-shadow-sm"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Daddy;
