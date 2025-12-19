import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import confetti from "canvas-confetti";
import arrow1 from "../assets/images/Story-images/arrow1.png";
import paperBg1 from "../assets/images/Story-images/paper1.png";
import paperBg2 from "../assets/images/Story-images/paper2.png";
import paperBg3 from "../assets/images/Story-images/paper3.png";
import paperBg4 from "../assets/images/Story-images/paper4.png";

const Story = () => {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showCards, setShowCards] = useState(false);
  const isDesktop = window.innerWidth >= 1024;
  const [firstCardConfettiTriggered, setFirstCardConfettiTriggered] =
    useState(false);
  const [topicChangeKey, setTopicChangeKey] = useState(0); // Key to force re-render

  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);

  // Paper backgrounds array
  const paperBackgrounds = useMemo(
    () => [paperBg1, paperBg2, paperBg3, paperBg4],
    []
  );

  // Confetti function
  const triggerConfetti = useCallback((cardIndex) => {
    const colors = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];
    const cardColor = colors[cardIndex % colors.length];

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: [cardColor, "#FFD700", "#FF69B4"],
      gravity: 1.2,
      scalar: 0.8,
    });
  }, []);

  // Enhanced handle topic selection with smooth transition
  const handleTopicSelect = useCallback((topic) => {
    // Reset all states immediately
    setSelectedTopic(topic);
    setScrollProgress(0);
    setFirstCardConfettiTriggered(false);
    setShowCards(false); // Hide cards first
    setTopicChangeKey((prev) => prev + 1); // Force component re-render

    // Show cards after a brief delay to ensure clean state reset
    setTimeout(() => {
      setShowCards(true);

      // Smooth scroll to cards section after cards are rendered
      setTimeout(() => {
        if (cardsContainerRef.current) {
          cardsContainerRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 150);
    }, 50);
  }, []);

  // Predefined topics
  const topics = useMemo(
    () => [
      "Personal Branding",
      "Leadership Skills",
      "Communication Mastery",
      "Productivity Hacks",
      "Career Growth",
    ],
    []
  );

  // Content data for each topic (keeping your existing content)
  const topicContent = useMemo(
    () => ({
      "Personal Branding": [
        {
          id: 1,
          title: "authentic story",
          content: `Your personal brand isn't what you say about yourself.
It's what others say about you when you're not in the room.

I learned this when I started my career.
I thought posting motivational quotes would build my brand.
But real personal branding comes from consistency.
Consistent value. Consistent voice. Consistent action.

Now I focus on three pillars:
What I stand for.
What I deliver.
How I make people feel.

Your brand should be so clear that people know:
What to expect from you.
What problems you solve.
Why they should care.

Stop trying to be everything to everyone.
Be something specific to someone specific.
That's when your personal brand becomes magnetic.`,
        },
        {
          id: 2,
          title: "digital presence",
          content: `Your digital footprint is your new resume.
Every post, every comment, every share matters.
It's not about being perfect.
It's about being intentional.

I audit my online presence monthly.
What story does my LinkedIn tell?
What impression does my Instagram give?
What value does my content provide?

The goal isn't to go viral.
It's to be valuable.
Consistently valuable.
So when opportunity knocks,
you're already prepared to answer.`,
        },
        {
          id: 3,
          title: "networking strategy",
          content: `Networking isn't about collecting business cards.
It's about planting seeds of genuine relationships.

I stopped going to events to "network."
I started going to events to learn and contribute.
The difference? Authentic connections vs transactional exchanges.

Now I focus on giving first:
Share opportunities.
Make introductions.
Offer help.

When you lead with value,
relationships become reciprocal naturally.
Your network becomes your net worth,
but only if it's built on mutual respect.`,
        },
        {
          id: 4,
          title: "content creation",
          content: `Content is the currency of personal branding.
But most people create content for vanity metrics.
Likes, shares, comments.
What about impact?

I measure my content differently:
Did someone learn something new?
Did I change a perspective?
Did I inspire action?

The best content doesn't just get attention.
It gets results.
It moves people.
It creates change.

Create content that matters.
To you. To your audience. To the world.
Everything else is just noise.`,
        },
        {
          id: 5,
          title: "reputation building",
          content: `Reputation is built in drops and lost in buckets.
Every interaction is a reputation moment.
Every decision reflects your character.
Every promise tests your integrity.

I treat my reputation like a savings account.
Every good deed is a deposit.
Every broken promise is a withdrawal.
The goal is to stay in the positive.

When crisis hits—and it will—
your reputation bank account determines survival.
Have you made enough deposits?
Can you weather the storm?

Build your reputation intentionally.
Protect it fiercely.
It's the only asset that truly belongs to you.`,
        },
      ],
      "Leadership Skills": [
        {
          id: 1,
          title: "leading by example",
          content: `Leadership isn't a title on your business card.
It's the influence you have when nobody's watching.

I learned leadership the hard way.
I thought being loud meant being heard.
I thought giving orders meant getting results.
But real leadership is quieter than that.

It's showing up early and staying late.
It's admitting when you're wrong.
It's celebrating others' successes.
It's taking responsibility for failures.

People don't follow titles.
They follow character.
They follow consistency.
They follow someone who makes them better.

Lead yourself first.
Everything else follows.`,
        },
        {
          id: 2,
          title: "team empowerment",
          content: `The best leaders create more leaders.
Not more followers.

I used to micromanage everything.
I thought control meant leadership.
But control kills creativity.
It stifles growth.

Now I focus on empowerment:
Give people ownership.
Trust their judgment.
Support their decisions.
Learn from their mistakes together.

When your team succeeds without you,
that's when you know you've led well.
True leadership multiplies impact.
It doesn't hoard it.`,
        },
        {
          id: 3,
          title: "decision making",
          content: `Leadership is about making decisions with incomplete information.
Under pressure. With consequences.

I've learned that perfect decisions don't exist.
Only timely ones.
The cost of indecision often exceeds
the cost of a wrong decision.

My decision-making framework:
Gather facts quickly.
Consider stakeholder impact.
Make the call.
Adjust as you learn.

Leaders aren't right all the time.
But they're decisive all the time.
They'd rather be wrong and fast
than right and late.`,
        },
        {
          id: 4,
          title: "conflict resolution",
          content: `Conflict isn't the enemy of leadership.
Avoiding conflict is.

Every team has tension.
Different opinions. Competing priorities.
The leader's job isn't to eliminate conflict.
It's to channel it productively.

I approach conflict as opportunity:
Opportunity to clarify values.
Opportunity to strengthen relationships.
Opportunity to find better solutions.

The best decisions often emerge
from the healthiest disagreements.
Lead through conflict, not around it.
That's where growth happens.`,
        },
        {
          id: 5,
          title: "vision casting",
          content: `A leader without vision is just a manager.
Vision gives direction to effort.
Purpose to struggle.
Meaning to sacrifice.

I learned that vision isn't just about destination.
It's about inspiration.
People need to see not just where they're going,
but why it matters.

Clear vision answers three questions:
Where are we headed?
Why does it matter?
What's my role in getting there?

Paint a picture so compelling
that people want to help you build it.
That's when leadership becomes movement.
That's when change becomes inevitable.`,
        },
      ],
      "Communication Mastery": [
        {
          id: 1,
          title: "effective messaging",
          content: `Communication isn't just about speaking well.
It's about being understood completely.

I learned this during my first presentation.
I spoke confidently but delivered confusion.
My message was clear to me,
but unclear to everyone else.

Now I focus on clarity over cleverness:
Simple words over complex ones.
Stories over statistics.
Understanding over impressions.

The best communicators don't sound smart.
They make others feel smart.
They bridge gaps.
They create connections.

Your message isn't what you say.
It's what they hear and remember.`,
        },
        {
          id: 2,
          title: "active listening",
          content: `Most people listen to respond.
Not to understand.
They're preparing their comeback
while you're still talking.

I learned real listening in sales.
The customer tells you exactly
how to help them.
If you're actually listening.

Active listening has three levels:
Hear the words they're saying.
Understand the emotions behind them.
Feel the needs beneath those emotions.

When people feel truly heard,
they become genuinely open.
That's when real communication begins.`,
        },
        {
          id: 3,
          title: "presentation mastery",
          content: `Great presentations change minds.
Not just inform them.

I used to cram slides with information.
Every fact, every detail, every graph.
But overwhelmed audiences learn nothing.
Less is always more.

My presentation formula:
One clear message.
Three supporting points.
Stories that stick.
Actions they can take.

People forget facts quickly.
They remember stories forever.
They remember how you made them feel.

Focus on transformation, not information.`,
        },
      ],
      "Productivity Hacks": [
        {
          id: 1,
          title: "time mastery",
          content: `Time management is a myth.
You can't manage time.
You can only manage attention.

I used to fill calendars with meetings.
Back-to-back, all day long.
I was busy but not productive.
Active but not effective.

Now I protect attention like gold:
Deep work blocks for important tasks.
Buffer time between meetings.
No-meeting days for strategic thinking.
Phone-free hours for focus.

Master your attention.
Everything else becomes manageable.`,
        },
        {
          id: 2,
          title: "energy optimization",
          content: `Your energy matters more than time.
You can always make more money.
You can't make more energy.

I track energy like athletes track performance:
When am I most creative?
When do I make best decisions?
When do I need to recharge?

My energy audit revealed patterns:
Mornings for deep thinking.
Afternoons for meetings.
Evenings for planning.
Weekends for restoration.

Work with your rhythms, not against them.`,
        },
        {
          id: 3,
          title: "focus techniques",
          content: `Focus is the new superpower.
In a world of infinite distractions,
deep concentration gives unfair advantage.

My focus toolkit:
Pomodoro Technique for time boxing.
Noise-canceling for environment.
Phone in another room for elimination.
Single-tasking for depth.

Multitasking kills productivity.
Your brain switches rapidly between tasks.
Each switch costs mental energy.

Do one thing excellently.
Then move to the next.`,
        },
      ],
      "Career Growth": [
        {
          id: 1,
          title: "skill development",
          content: `Your career isn't a ladder.
It's a portfolio of skills and experiences.

I used to think growth meant
climbing the corporate hierarchy.
But the best opportunities come
to those with diverse skill sets.

My development strategy:
Core expertise in one area.
Basic competency in adjacent areas.
Emerging skills for future relevance.
Soft skills for human connection.

The half-life of skills is shrinking.
What got you here won't get you there.
Stay curious. Stay learning. Stay relevant.`,
        },
        {
          id: 2,
          title: "strategic networking",
          content: `Your network is career insurance.
But most people network only when desperate.
That's too late.

I network continuously, not transactionally:
Industry events for visibility.
One-on-ones for depth.
Social media for reach.
Mentorship for wisdom.

The best opportunities are never posted.
They're shared in conversations.
Between people who trust each other.

Build relationships before you need them.
Give value before asking for it.`,
        },
        {
          id: 3,
          title: "opportunity creation",
          content: `Don't wait for opportunities.
Create them.

Most people wait for perfect timing.
The ideal job posting.
The right promotion.
But careers are built by those
who make their own luck.

I create opportunities by:
Solving problems before being asked.
Proposing solutions, not just reporting issues.
Taking on projects others avoid.
Building bridges between departments.

Act like an owner, not just an employee.
Think like a problem-solver.`,
        },
      ],
    }),
    []
  );

  // Enhanced scroll handler with better reset logic
  useEffect(() => {
    const handleScroll = () => {
      if (!selectedTopic || !cardsContainerRef.current || !showCards) return;

      const cardsContainer = cardsContainerRef.current;
      const rect = cardsContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if we're in the cards section
      const isInCardsSection = rect.top <= 0 && rect.bottom > windowHeight;

      if (isInCardsSection) {
        // Calculate scroll progress within the cards section
        const sectionHeight = cardsContainer.offsetHeight - windowHeight;
        const scrolled = Math.abs(rect.top);
        const progress = Math.min(Math.max(scrolled / sectionHeight, 0), 1);
        setScrollProgress(progress);
      } else if (rect.top > 0) {
        // Before cards section
        setScrollProgress(0);
      } else if (rect.bottom <= windowHeight) {
        // After cards section
        setScrollProgress(1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedTopic, showCards, topicChangeKey]); // Added topicChangeKey as dependency

  // Get current cards based on selected topic
  const getCurrentCards = useCallback(() => {
    if (!selectedTopic || !topicContent[selectedTopic]) {
      return [];
    }
    return topicContent[selectedTopic];
  }, [selectedTopic, topicContent]);

  const cards = getCurrentCards();

  // Enhanced card progress calculation with more varied animations
  const getCardProgress = useCallback(
    (index) => {
      if (cards.length === 0)
        return {
          progress: 0,
          translateX: 0,
          translateY: 0,
          scale: 1,
          opacity: 0,
          zIndex: 0,
          rotation: 0,
        };

      const totalProgress = scrollProgress;

      // Higher index = higher z-index (newer cards appear in front)
      const zIndex = 1000 + index;

      // First card (index 0) is always fully visible when cards are shown
      if (index === 0) {
        return {
          progress: 1,
          translateX: 0,
          translateY: 0,
          scale: 1,
          opacity: 1,
          zIndex,
          rotation: 0,
        };
      }

      // Enhanced initial position function with more dynamic variety
      const getInitialPosition = (cardIndex) => {
        const patterns = [
          { x: -140, y: -60, rotation: -18 }, // Top-left with strong rotation
          { x: 140, y: -40, rotation: 20 }, // Top-right with rotation
          { x: -120, y: 80, rotation: -12 }, // Left-center with tilt
          { x: 120, y: 60, rotation: 15 }, // Right-center with tilt
          { x: 0, y: 140, rotation: 8 }, // Bottom-center with slight rotation
          { x: -110, y: 120, rotation: -25 }, // Bottom-left with strong tilt
          { x: 110, y: 110, rotation: 22 }, // Bottom-right with tilt
          { x: 0, y: -120, rotation: -8 }, // Top-center with reverse tilt
          { x: -90, y: -100, rotation: 30 }, // Diagonal top-left with strong rotation
          { x: 90, y: -90, rotation: -28 }, // Diagonal top-right with strong rotation
        ];
        return patterns[cardIndex % patterns.length];
      };

      const initialPos = getInitialPosition(index);

      // Each card appears at specific scroll points with better timing
      const cardAppearPoint = (index - 1) * 0.12 + 0.04; // Smoother, faster progression
      const cardFullyVisiblePoint = cardAppearPoint + 0.06; // Quicker transition

      if (totalProgress < cardAppearPoint) {
        // Card hasn't started appearing yet
        return {
          progress: 0,
          translateX: initialPos.x,
          translateY: initialPos.y,
          scale: 0.5, // Start smaller for more dramatic entrance
          opacity: 0,
          zIndex,
          rotation: initialPos.rotation,
        };
      }

      if (totalProgress >= cardFullyVisiblePoint) {
        // Card is fully visible with subtle floating animation
        const settledProgress = Math.min(
          (totalProgress - cardFullyVisiblePoint) * 0.8,
          1
        );
        const floatX = Math.cos(settledProgress * Math.PI * 0.4) * 1.5;
        const floatY = Math.sin(settledProgress * Math.PI * 0.6) * 2;

        return {
          progress: 1,
          translateX: floatX,
          translateY: floatY,
          scale: Math.max(1 - settledProgress * 0.02, 0.98), // Subtle scale variation
          opacity: Math.max(1 - settledProgress * 0.1, 0.9), // Maintain high opacity
          zIndex,
          rotation: initialPos.rotation * (1 - settledProgress) * 0.1, // Gentle rotation settle
        };
      }

      // Card is appearing with enhanced fluid motion
      const localProgress = (totalProgress - cardAppearPoint) / 0.06;
      const easeProgress = 1 - Math.pow(1 - localProgress, 2.5); // Smoother ease with bounce feel

      // Add curved motion path
      const curveX = Math.sin(easeProgress * Math.PI * 0.5) * 8;
      const curveY = Math.cos(easeProgress * Math.PI * 0.3) * 5;

      return {
        progress: localProgress,
        translateX: initialPos.x - easeProgress * initialPos.x + curveX,
        translateY: initialPos.y - easeProgress * initialPos.y + curveY,
        scale: 0.5 + easeProgress * 0.5, // Scale from 0.5 to 1.0
        opacity: easeProgress * easeProgress, // Smooth opacity fade-in
        zIndex,
        rotation: initialPos.rotation * (1 - easeProgress), // Rotation settles smoothly
      };
    },
    [cards.length, scrollProgress]
  );

  // Modified effect to trigger confetti for the first card immediately
  useEffect(() => {
    if (!showCards || cards.length === 0 || firstCardConfettiTriggered) return;

    // Trigger confetti immediately for the first card since it's always visible
    setFirstCardConfettiTriggered(true);
    setTimeout(() => {
      triggerConfetti(0);
    }, 200); // Faster confetti trigger
  }, [
    showCards,
    cards,
    firstCardConfettiTriggered,
    triggerConfetti,
    topicChangeKey,
  ]);

  const [cardSectionInView, setCardSectionInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardsContainerRef.current || !showCards) return;

      const rect = cardsContainerRef.current.getBoundingClientRect();
      const inView = rect.top <= 0 && rect.bottom >= window.innerHeight;

      setCardSectionInView(inView);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showCards, topicChangeKey]); // Added topicChangeKey as dependency

  return (
    <div className="w-full">
      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.6);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.8);
        }
      `}</style>

      {/* Topic Selection Section */}
      <div className="w-full relative min-h-screen flex items-center bg-[url('/dot-grid.svg')] bg-repeat z-0">
        <div
          ref={sectionRef}
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8"
        >
          {/* Intro Text */}
          <div className="text-right mb-12">
            <p className="text-sm md:text-base font-space font-light text-gray-600 mb-4">
              Simply put, by the end of the course, you'll learn to
            </p>

            {/* Main Heading */}
            <h2 className="text-right text-3xl sm:text-5xl lg:text-6xl font-light leading-snug">
              <span className="font-cursive">capitalize on </span>
              <span className="rethink-sans-700 font-bold text-black">
                trends{" "}
              </span>
              <span className="font-cursive">without sounding</span>
              <br />
              <span className="font-cursive">like everyone else.</span>
            </h2>

            {/* Small note */}
            <p className="text-sm text-gray-500 mt-4 font-space font-light">
              (see it in action below)
            </p>
          </div>

          {/* Arrow pointer image */}
          <div className="flex justify-end md:justify-center mb-10">
            <motion.div
              animate={{
                y: [0, -20, 0],
                x: [0, 20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img src={arrow1} alt="Pointer" className="w-28 md:w-32 h-auto" />
            </motion.div>
          </div>

          {/* Keyword/Trend Selection CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center mb-8">
            <span className="text-gray-700 text-lg sm:text-xl font-space font-light">
              pick any
            </span>
            <span className="ml-2 text-xl sm:text-2xl font-bold font-rethink text-black">
              keyword / trend / topic :
            </span>
          </div>

          {/* Topic Buttons */}
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto font-cursive">
            {topics.map((topic, index) => (
              <motion.button
                key={`${topic}-${topicChangeKey}`} // Force re-render with key change
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleTopicSelect(topic)}
                className={`px-6 py-3 rounded-full border-2 transition-all duration-200 font-script font-medium text-xl ${
                  selectedTopic === topic
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-900 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {topic}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards Section with Enhanced Animations */}
      <AnimatePresence key={topicChangeKey}>
        {selectedTopic && showCards && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{
              duration: 0.5,
              ease: [0.23, 1, 0.32, 1], // Smoother easing
            }}
            ref={cardsContainerRef}
            className="w-full relative"
            style={{
              minHeight: `${Math.max(cards.length * 100, 400)}vh`, // Reduced height for tighter spacing
            }}
          >
            {cardSectionInView && cards.length > 0 && (
              <div className="fixed inset-0 w-full h-screen overflow-hidden z-40">
                {/* Fixed container for cards */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {cards.map((card, index) => {
                    const {
                      translateX,
                      translateY,
                      scale,
                      opacity,
                      zIndex,
                      rotation,
                    } = getCardProgress(index);
                    const paperBg =
                      paperBackgrounds[index % paperBackgrounds.length];
                    const baseTilt = -2 + ((index * 3) % 8);

                    return (
                      <div
                        key={`${card.id}-${topicChangeKey}`} // Force re-render with key change
                        className="absolute md:mt-10 inset-0 w-full h-full flex items-center justify-center px-2 sm:px-4 lg:px-8"
                        style={{
                          zIndex,
                          pointerEvents: opacity > 0.5 ? "auto" : "none",
                        }}
                      >
                        <motion.div
                          className="flex items-center justify-center"
                          style={{
                            opacity,
                            transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale}) rotateZ(${
                              baseTilt + rotation
                            }deg)`,
                            willChange: "transform, opacity",
                          }}
                          transition={{
                            type: "spring",
                            damping: 40,
                            stiffness: 150,
                            mass: 0.6,
                          }}
                        >
                          {/* Main card - removed extra div wrapper */}
                          <div
                            className="relative p-8 mx-auto rounded-lg flex flex-col text-white"
                            style={{
                              width: isDesktop
                                ? "min(470px, 100vw)" // Desktop
                                : "min(420px, 92vw)", // Mobile
                              height: isDesktop
                                ? "min(650px, 100vh)" // Desktop
                                : "min(600px, 96vh)", // Mobile
                              backgroundImage: `url(${paperBg})`,
                              backgroundSize: "100% 100%",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",
                              filter:
                                opacity > 0.9 ? "none" : "brightness(0.85)",
                            }}
                          >
                            <div className="relative z-10 h-full flex flex-col">
                              {/* Title with better responsive design */}
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  delay: index * 0.03,
                                  duration: 0.5,
                                }}
                                className="mb-3 sm:mb-4 lg:mb-5 xl:mb-6 flex-shrink-0 px-1"
                              >
                                <h2 className="font-bold text-2xl font-script tracking-wide text-white">
                                  <span
                                    className="inline-block px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 xl:px-5 xl:py-2.5 font-extrabold font-cursive rounded-lg leading-tight"
                                    style={{
                                      background:
                                        index % 4 === 0
                                          ? "#7FFF00"
                                          : index % 4 === 1
                                          ? "#FF7F50"
                                          : index % 4 === 2
                                          ? "#87CEEB"
                                          : "#DDA0DD",
                                      opacity: 0.9,
                                      color: "#000",
                                      maxWidth: "100%",
                                      wordWrap: "break-word",
                                      hyphens: "auto",
                                      clipPath: `
 polygon(
 2% 0%, 98% 1%, 97% 6%, 99% 12%, 96% 20%, 99% 28%, 97% 40%, 99% 52%, 
 96% 64%, 99% 76%, 97% 84%, 99% 92%, 94% 98%, 88% 100%, 75% 99%, 
 60% 100%, 40% 99%, 25% 100%, 12% 99%, 6% 100%, 1% 94%, 3% 84%, 
 1% 76%, 4% 64%, 1% 52%, 3% 40%, 1% 28%, 4% 20%, 1% 12%, 3% 6%
 )
 `,
                                      filter:
                                        "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3))",
                                      textShadow:
                                        "0 1px 2px rgba(0, 0, 0, 0.5)",
                                    }}
                                  >
                                    {card.title}
                                  </span>
                                </h2>
                              </motion.div>

                              {/* Content with better spacing */}
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                  delay: index * 0.03 + 0.15,
                                  duration: 0.6,
                                }}
                                className="text-black leading-relaxed whitespace-pre-line flex-1 overflow-y-auto text-xs sm:text-sm lg:text-base xl:text-base px-1 pr-2 sm:pr-3 lg:pr-4 custom-scrollbar"
                                style={{
                                  maxHeight: "calc(100% - 80px)", // Better height calculation
                                  lineHeight: "1.6",
                                }}
                              >
                                {card.content}
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>

                {/* Scroll Down Arrow Indicator - Desktop Only */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="hidden lg:flex fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex-col items-center"
                >
                  {/* Scroll Down Text */}
                  <motion.div
                    animate={{
                      y: [0, 10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="writing-mode-vertical text-gray-400 text-sm font-space tracking-widest mb-4"
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                    }}
                  >
                    SCROLL DOWN
                  </motion.div>

                  {/* Animated Arrow */}
                  <motion.div
                    animate={{
                      y: [0, 15, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="relative"
                  >
                    {/* Arrow SVG */}
                    <svg
                      width="24"
                      height="40"
                      viewBox="0 0 24 40"
                      fill="none"
                      className="text-gray-400"
                    >
                      <path
                        d="M12 2 L12 35 M12 35 L7 30 M12 35 L17 30"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>

                  {/* Watermark Dots */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex flex-col gap-2 mt-4"
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.2,
                        }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Story;
