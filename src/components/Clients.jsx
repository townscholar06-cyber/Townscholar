import React, { useEffect, useRef, useState, useCallback } from "react";
import ig1 from "../assets/images/ig1.png";
import { motion } from "framer-motion";

export default function Clients() {
  const containerRef = useRef(null);
  const casesRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

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
        ease: "easeOut",
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
        ease: "easeInOut",
      },
    },
  };

  const clientCases = [
    {
      badgeLeft: "Agency Client",
      badgeRight: "2025",
      title: "When She Swiped Right",
      intro:
        "This couple already had reach. But reach wasn't converting into followers.\nPeople watched. Then moved on.",
      changeFrom: "what they do to",
      changeTo: "who they are",
      storyPoints: [
        "how they met",
        "how they think",
        "how they navigate life together",
      ],
      result: [
        "~25 million views",
        "~100K followers",
        "From three story-first videos.",
      ],
      lesson: "Stories create memory. Memory creates growth.",
      image: ig1,
    },
    {
      badgeLeft: "Founder Case",
      badgeRight: "2024",
      title: "Vijay Pravin — Blockchain Founder",
      intro:
        "A founder with ₹100 crores raised and 20K dead followers. On paper, his profile should have worked. It didn't.\nNot because he lacked credibility — but because people couldn't connect.",
      changeFrom: "industry topics to",
      changeTo: "human story",
      storyPoints: [
        "his relationship with cricket and cinema",
        "building a company while his wife was pregnant",
        "his personality before his profession",
      ],
      result: [
        "Content stopped feeling 'educational'",
        "Started feeling relatable",
        "Growth followed naturally",
      ],
      lesson:
        "People don't follow topics. They follow people — and then their ideas.",
      image: ig1, // assuming you have ig2 variable
    },
    {
      badgeLeft: "Professional Case",
      badgeRight: "2024",
      title: "SSR — The Architect",
      intro:
        "Came in with solid background, clear profession, decent visibility. But the content felt… flat.\nNot because he lacked skill — but because his real personality wasn't showing on camera.",
      changeFrom: "performing to",
      changeTo: "being",
      storyPoints: [
        "focusing on comfort over format",
        "natural tone and delivery",
        "environment that matched his personality",
      ],
      result: [
        "Page took off without changing platforms",
        "Content finally matched the person",
        "Natural charisma translated to video",
      ],
      lesson:
        "If your content doesn't reflect who you really are, the audience won't stick.",
      image: ig1, // assuming you have ig3 variable
    },
  ];

  // Scroll to specific slide
  const scrollToSlide = useCallback(
    (index) => {
      if (!casesRef.current || !containerRef.current) return;

      const newIndex = Math.max(0, Math.min(index, clientCases.length - 1));
      setCurrentIndex(newIndex);

      const cases = casesRef.current;
      const slideWidth = cases.children[0].offsetWidth + 32;

      cases.style.transition = "transform 0.3s ease-out";
      cases.style.transform = `translateX(-${newIndex * slideWidth}px)`;

      // Update progress bar
      const progressBar = document.getElementById("scroll-progress-bar");
      if (progressBar) {
        const progress = (newIndex / (clientCases.length - 1)) * 100;
        progressBar.style.width = `${progress}%`;
      }
    },
    [clientCases.length]
  );

  // Next slide
  const nextSlide = () => {
    if (currentIndex < clientCases.length - 1) {
      scrollToSlide(currentIndex + 1);
    }
  };

  // Previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      scrollToSlide(currentIndex - 1);
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setStartScrollLeft(
      parseInt(
        casesRef.current.style.transform
          ?.replace("translateX(", "")
          .replace("px)", "")
      ) || 0
    );

    casesRef.current.style.transition = "none";
    document.body.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !casesRef.current) return;

    const x = e.pageX;
    const walk = x - startX;

    casesRef.current.style.transform = `translateX(${
      startScrollLeft - walk
    }px)`;
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      document.body.style.cursor = "";

      casesRef.current.style.transition = "transform 0.3s ease-out";

      const slideWidth = casesRef.current.children[0].offsetWidth + 32;
      const currentTranslate =
        parseInt(
          casesRef.current.style.transform
            .replace("translateX(", "")
            .replace("px)", "")
        ) || 0;

      const newIndex = Math.round(-currentTranslate / slideWidth);
      scrollToSlide(Math.max(0, Math.min(newIndex, clientCases.length - 1)));
    }
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setStartScrollLeft(
      parseInt(
        casesRef.current.style.transform
          ?.replace("translateX(", "")
          .replace("px)", "")
      ) || 0
    );

    casesRef.current.style.transition = "none";
  };

  const handleTouchMove = (e) => {
    if (!casesRef.current) return;

    const touchX = e.touches[0].clientX;
    const diff = touchStartX - touchX;

    casesRef.current.style.transform = `translateX(${
      startScrollLeft - diff
    }px)`;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    casesRef.current.style.transition = "transform 0.3s ease-out";

    const swipeThreshold = 50;

    if (diff > swipeThreshold && currentIndex < clientCases.length - 1) {
      nextSlide();
    } else if (diff < -swipeThreshold && currentIndex > 0) {
      prevSlide();
    } else {
      scrollToSlide(currentIndex);
    }
  };

  // Attach event listeners
  useEffect(() => {
    const cases = casesRef.current;
    if (!cases) return;

    cases.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    cases.addEventListener("touchstart", handleTouchStart);
    cases.addEventListener("touchmove", handleTouchMove);
    cases.addEventListener("touchend", handleTouchEnd);

    return () => {
      cases.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      cases.removeEventListener("touchstart", handleTouchStart);
      cases.removeEventListener("touchmove", handleTouchMove);
      cases.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, startX, startScrollLeft, touchStartX, currentIndex]);

  // Initialize first slide
  useEffect(() => {
    scrollToSlide(0);
  }, [scrollToSlide]);

  // Update progress bar on mount
  useEffect(() => {
    const progressBar = document.getElementById("scroll-progress-bar");
    if (progressBar) {
      progressBar.style.width = `${
        (currentIndex / (clientCases.length - 1)) * 100
      }%`;
    }
  }, [currentIndex, clientCases.length]);

  return (
    <div className="max-w-6xl mx-auto px-4 pt-6 pb-16 md:py-20 space-grotesk-300" id="clients">
      {/* Heading */}
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl indie-flower-regular leading-tight font-medium text-black">
          i'm not just telling you theories.
        </h1>

        <h2 className="mt-2 indie-flower-regular inline-block bg-yellow-200 px-2 py-1 text-4xl md:text-6xl leading-tight font-medium text-black">
          i've proven this system with real clients.
        </h2>

        <p className="mt-6 text-base leading-relaxed text-gray-600">
          Before I built this course, I tested everything with clients through
          my agency.
          <br />
          Different niches. Different problems. Same system.
          <br />
          Here's what happened.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="mt-16 relative">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white border border-gray-300 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Previous case"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          disabled={currentIndex === clientCases.length - 1}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white border border-gray-300 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Next case"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Carousel */}
        <div ref={containerRef} className="">
          <div
            ref={casesRef}
            className="flex gap-8 transition-transform duration-300 ease-out"
            style={{
              cursor: isDragging ? "grabbing" : "grab",
              transform: `translateX(0px)`,
            }}
          >
            {clientCases.map((item, index) => (
              <div
                key={index}
                className={`w-[90vw] mx-auto max-w-4xl bg-[#121212] rounded-2xl px-6 py-8 sm:px-10 sm:py-12 flex flex-col lg:flex-row gap-12 flex-shrink-0 select-none ${
                  index === currentIndex ? "" : "blur-[1px] opacity-90"
                }`}
              >
                {/* LEFT CONTENT */}
                <div className="lg:w-[55%] text-white">
                  {/* Badges */}
                  <div className="flex gap-3 mb-8">
                    <span className="border border-gray-600 space-grotesk-300 rounded-full px-4 py-1 text-xs">
                      {item.badgeLeft}
                    </span>
                    <span className="border border-gray-600 space-grotesk-300 rounded-full px-4 py-1 text-xs">
                      {item.badgeRight}
                    </span>
                  </div>

                  <h3 className="text-3xl font-serif mb-4 playfair-italic">{item.title}</h3>

                  <p className="text-sm leading-relaxed mb-8 whitespace-pre-line">
                    {item.intro}
                  </p>

                  {/* What we changed */}
                  <div className="mb-8">
                    <p className="text-sm font-semibold mb-2 text-white">
                      What we changed
                    </p>
                    <p className="text-sm">We shifted the focus from:</p>
                    <p className="text-sm ml-4">• {item.changeFrom}</p>
                    <p className="text-sm ml-4">• {item.changeTo}</p>
                  </div>

                  {/* Story-led content */}
                  <div className="mb-8">
                    <p className="text-sm font-semibold mb-2 text-white">
                      We introduced story-led content:
                    </p>
                    <ul className="text-sm space-y-1 ml-4">
                      {item.storyPoints.map((point, i) => (
                        <li key={i}>• {point}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Result */}
                  <div className="mb-8">
                    <p className="text-sm font-semibold mb-2 text-white">
                      Result
                    </p>
                    <ul className="text-sm space-y-1">
                      {item.result.map((res, i) => (
                        <li key={i}>{res}</li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-sm">No hacks.</p>
                  <p className="text-sm mb-6">No trend abuse.</p>

                  <p className="text-sm text-white font-medium">
                    Lesson: {item.lesson}
                  </p>
                </div>

                {/* RIGHT IMAGE */}
                <div className="lg:w-[45%] flex justify-center items-start">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full max-w-sm rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="mt-8 flex flex-col items-center">
        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            id="scroll-progress-bar"
            className="h-full bg-black transition-all duration-300"
            style={{ width: "0%" }}
          />
        </div>

        {/* Slide Indicators */}
        <div className="flex gap-2 mt-4">
          {clientCases.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-black w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="mt-2 text-sm text-gray-500">
          {currentIndex + 1} / {clientCases.length}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        className="flex justify-center mt-6 -rotate-1 md:-rotate-6"
        variants={buttonVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.a
        href="https://academy.townscholar.com/web/checkout/695911a32a8a809684b5178f"
        target="_blank"
        rel="noopener noreferrer"
          className="bg-black text-white px-8 md:px-16 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base shadow-xl hover:shadow-2xl"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          animate="wiggle"
        >
          Take Action Now !
        </motion.a>
      </motion.div>

      <style jsx>{`
        @media (max-width: 768px) {
          .w-[90vw] {
            width: 85vw;
          }
        }

        @media (max-width: 480px) {
          .w-[90vw] {
            width: 80vw;
          }
        }

        /* Prevent text selection during drag */
        .select-none {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }
      `}</style>
    </div>
  );
}
