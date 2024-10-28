"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Prizes() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: (custom: number) => ({
      x: custom === 0 ? 0 : custom === -1 ? -100 : 100,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const firstPrizeVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: 0 },
    visible: {
      opacity: 1,
      scale: 1.1,
      rotate: 360,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const participationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: 0.4,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="py-16 bg-gradient-to-b from-primary/10 to-primary/5"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        <h2 className="md:text-[12rem] font-bebas text-6xl text-pink font-bold mb-[4rem] md:mb-[6rem] text-center">
          Prize Pool
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16">
          <motion.div
            custom={-1}
            variants={cardVariants}
            className="w-full md:w-1/4"
          >
            <PrizeCard
              title="2nd Prize"
              amount="$3,000"
              position="left"
              icon="🥈"
            />
          </motion.div>
          <motion.div
            variants={firstPrizeVariants}
            className="w-full md:w-1/3 order-first md:order-none"
          >
            <PrizeCard
              title="1st Prize"
              amount="$5,000"
              position="center"
              icon="🏆"
              isFirst={true}
            />
          </motion.div>
          <motion.div
            custom={1}
            variants={cardVariants}
            className="w-full md:w-1/4"
          >
            <PrizeCard
              title="3rd Prize"
              amount="$1,000"
              position="right"
              icon="🥉"
            />
          </motion.div>
        </div>
        <motion.div
          variants={participationVariants}
          className="w-full max-w-2xl mx-auto"
        >
          <ParticipationCard />
        </motion.div>
      </div>
    </motion.section>
  );
}

function PrizeCard({
  title,
  amount,
  position,
  icon,
  isFirst = false,
}: {
  title: string;
  amount: string;
  position: "left" | "center" | "right";
  icon: string;
  isFirst?: boolean;
}) {
  return (
    <div
      className={`
        bg-zinc-900 rounded-3xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-2xl
        ${isFirst ? "border-4 border-purple shadow-xl" : ""}
        ${position === "center" ? "md:-mt-8" : ""}
      `}
    >
      <div
        className={`
          text-5xl mb-6 mx-auto w-20 h-20 flex items-center justify-center rounded-full
          ${isFirst ? "bg-primary text-white" : "bg-accent/10 text-primary"}
        `}
      >
        {icon}
      </div>
      <h3
        className={`text-2xl font-bold mb-3 ${
          isFirst ? "text-white" : "text-white"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-4xl font-extrabold mb-6 ${
          isFirst ? "text-white" : "text-white"
        }`}
      >
        {amount}
      </p>
      <div
        className={`mt-4 ${
          position === "left"
            ? "text-left"
            : position === "right"
            ? "text-right"
            : "text-center"
        }`}
      >
        <span
          className={`
            inline-block text-sm px-4 py-2 rounded-full font-semibold
            ${isFirst ? "bg-primary text-pink" : "bg-primary text-pink"}
          `}
        >
          {position === "left"
            ? "Silver"
            : position === "right"
            ? "Bronze"
            : "Gold"}
        </span>
      </div>
    </div>
  );
}

function ParticipationCard() {
  return (
    <div className="bg-zinc-900 rounded-3xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-2xl border-2 border-primary/30">
      <div className="text-5xl mb-6 mx-auto w-20 h-20 flex items-center justify-center rounded-full text-primary">
        🎉
      </div>
      <h3 className="text-2xl font-bold mb-3 text-pink">Don't Worry!</h3>
      <p className="text-lg mb-4 text-white">
      Even if you didn't win, your experience is invaluable.
      </p>
      <p className="text-xl font-semibold mb-6 text-white">
      Every participant will receive a Certificate of Participation as a token of achievement!
      </p>
      <div className="mt-4">
        <span className="inline-block text-sm px-4 py-2 rounded-full font-semibold bg-primary text-pink">
          Participation Award
        </span>
      </div>
    </div>
  );
}
