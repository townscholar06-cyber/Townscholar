import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

import linkedin from "../assets/images/li.png";
import instagram from "../assets/images/ig.png";
import youtube from "../assets/images/yt.png";
import profile from "../assets/images/epaphra.png";
import dp from "../assets/images/epaphra-dp.png";

import ditto from "../assets/images/ditto.png";
import kent from "../assets/images/kent.png";
import apple from "../assets/images/apple.png";
import zoho from "../assets/images/zoho.png";
import a2b from "../assets/images/A2B.png";

// Counter component with proper counting
const Counter = ({ end, suffix = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / 100; // 100 frames for smooth animation
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 20); // 20ms interval for smooth animation

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <span ref={ref} className="text-3xl font-extrabold">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
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

export default function Founder() {
  const [readMore, setReadMore] = useState(false);

  // Using useInView for the entire section triggers
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="w-full bg-[#fafafa] md:py-16">
      <div className="rounded-t-lg max-w-6xl md:mx-auto mb-8 md:mb-16 mx-4">
          <motion.div
            className="flex items-center space-x-2"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="w-8 h-8 bg-[#FF6262] rounded-full"
              variants={dotVariants}
              whileHover="hover"
            />
            <motion.div
              className="w-8 h-8 bg-[#FFCB20] rounded-full"
              variants={dotVariants}
              whileHover="hover"
            />
            <motion.div
              className="w-8 h-8 bg-[#76FF86] rounded-full"
              variants={dotVariants}
              whileHover="hover"
            />
          </motion.div>
        </div>
      <div className="max-w-6xl mx-auto px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8">
        {/* LEFT COLUMN */}
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Meet your mentor */}
          <div className="border border-[#9F9F9F] rounded-2xl p-8 bg-white">
            <h2 className="text-6xl md:text-7xl leading-tight indie-flower-regular text-black">
              meet <br /> your <br /> mentor
            </h2>
          </div>

          {/* YOUTUBE */}
          <motion.a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="relative flex items-center w-full max-w-xl mx-auto"
          >
            {/* Icon */}
            <div className="absolute left-0 z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden">
              <img
                src={youtube}
                alt="YouTube"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Border container */}
            <div className="ml-10 w-full rounded-2xl border border-[#FF0000] pl-14 sm:pl-20 py-3 flex flex-col justify-center bg-white">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black leading-tight">
                <Counter end={740} suffix="K+" delay={0.2} />
              </p>
              <p className="text-lg sm:text-xl text-gray-700">Subscribers</p>
            </div>
          </motion.a>

          {/* INSTAGRAM */}
          <motion.a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex items-center w-full max-w-xl mx-auto"
          >
            {/* Icon */}
            <div className="absolute left-0 z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden">
              <img
                src={instagram}
                alt="Instagram"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Border container */}
            <div className="ml-10 w-full rounded-2xl border border-[#FEA918] pl-14 sm:pl-20 py-3 flex flex-col justify-center bg-white">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black leading-tight">
                <Counter end={638} suffix="K+" delay={0.3} />
              </p>
              <p className="text-lg sm:text-xl text-gray-700">Followers</p>
            </div>
          </motion.a>

          {/* LINKEDIN */}
          <motion.a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="relative flex items-center w-full max-w-xl mx-auto"
          >
            {/* Icon */}
            <div className="absolute left-0 z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden">
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Border container */}
            <div className="ml-10 w-full rounded-2xl border border-[#0072B1] pl-14 sm:pl-20 py-3 flex flex-col justify-center bg-white">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black leading-tight">
                <Counter end={173} suffix="K+" delay={0.4} />
              </p>
              <p className="text-lg sm:text-xl text-gray-700">Followers</p>
            </div>
          </motion.a>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white border border-[#9F9F9F] rounded-3xl overflow-hidden"
        >
          {/* LinkedIn Header */}
          <div className="p-6">
            <div>
              <div className="flex gap-4 items-start">
                <img src={dp} alt="dp" className="md:w-20 md:h-20 w-16 h-16 rounded-full" />
                <div>
                  <h3 className="font-semibold text-xl md:text-2xl">Epaphra T</h3>
                  <p className="text-sm md:text-lg text-gray-500">
                    Founder TownScholar | Storyteller | Podcast Host
                  </p>
                </div>
              </div>

              {/* Updated Story Section */}
              <div className="mt-6 text-gray-700 text-base leading-relaxed space-y-4">
                <p className="font-medium">
                  I'm not going to tell you I'm special. I'm not.
                  {!readMore && "..."}
                </p>

                {readMore && (
                  <div className="space-y-4">
                    <p>
                      I was a technical support engineer at Zoho. I joined
                      during my final year of college, and honestly, I didn't
                      hate the job — I just knew I could do more. My vision was
                      limited though. I thought maybe I'd become a data analyst,
                      a product manager... or in the worst case, a stand-up
                      comedian.
                    </p>

                    <p>
                      Then I discovered content creation. Not the "post daily
                      and pray" kind. The kind where positioning and
                      storytelling matter more than editing and trends.
                    </p>

                    <p>
                      I started creating content at 23. Made my first crore at
                      24. Quit my job when I had 70K followers — not because I
                      went viral, but because I had a system that worked.
                    </p>

                    <div>
                      <p className="font-semibold mb-2">Today:</p>
                      <ul className="space-y-2 pl-5">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>
                            Apple gave me their products for free and made me
                            part of their creator ecosystem (something I never
                            imagined growing up in Tirunelveli, a tier-3 city)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>
                            I interviewed Gukesh, the world chess champion
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>I spoke at TEDx</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>
                            A company that rejected me during my Zoho days? They
                            came back wanting to collaborate
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>
                            I pay GST that's 4x what I used to earn as salary —
                            every single month
                          </span>
                        </li>
                      </ul>
                    </div>

                    <p className="font-medium">
                      But here's the thing: None of this happened because I'm
                      special. It happened because I figured out what actually
                      works — and it's not what most content "gurus" will tell
                      you.
                    </p>
                  </div>
                )}

                <button
                  onClick={() => setReadMore(!readMore)}
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
                >
                  Read {readMore ? "less" : "more..."}
                </button>
              </div>
            </div>
          </div>

          {/* Image */}
          <motion.img
            initial={{ scale: 1.05, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            src={profile}
            alt="Founder"
            className="w-full object-cover"
          />
        </motion.div>
      </div>

      <div className="w-full bg-[#E5E5E5] mt-20">
        {/* Animated Logos Marquee */}
        <div className="md:py-12 py-8 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-gray-600 text-sm sm:text-base md:mb-12 tracking-wider"
            >
              <div className="flex justify-center mb-8 md:mb-10">
                <h1 className="px-6 py-2 rounded-full border border-black text-sm sm:text-base font-medium text-gray-900">
                  Trusted by 30+ brands
                </h1>
              </div>
            </motion.p>

            {/* Marquee Container */}
            <div className="relative">
              <motion.div
                className="flex items-center gap-16 sm:gap-24"
                animate={{
                  x: [0, -1000],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {/* Duplicate logos for seamless loop */}
                {[...Array(2)].map((_, setIndex) => (
                  <div
                    key={setIndex}
                    className="flex items-center gap-16 sm:gap-24 flex-shrink-0"
                  >
                    {[
                      {
                        src: apple,
                        alt: "Apple",
                        className:
                          "h-10 sm:h-12 transition-transform duration-300 ease-out hover:scale-110",
                      },
                      {
                        src: kent,
                        alt: "Kent",
                        className:
                          "h-10 sm:h-12 transition-transform duration-300 ease-out hover:scale-110",
                      },
                      {
                        src: zoho,
                        alt: "Zoho",
                        className:
                          "h-11 sm:h-13 transition-transform duration-300 ease-out hover:scale-110",
                      },
                      {
                        src: a2b,
                        alt: "A2B",
                        className:
                          "h-12 sm:h-14 transition-transform duration-300 ease-out hover:scale-110",
                      },
                      {
                        src: ditto,
                        alt: "Ditto",
                        className:
                          "h-10 sm:h-12 transition-transform duration-300 ease-out hover:scale-110",
                      },
                    ].map((logo, index) => (
                      <div key={`${setIndex}-${index}`} className="flex-shrink-0">
                        <img src={logo.src} alt={logo.alt} className={logo.className} />
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}