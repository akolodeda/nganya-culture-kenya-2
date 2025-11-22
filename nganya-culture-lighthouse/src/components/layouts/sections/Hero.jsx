import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Card from "../../common/Card";
import { nganyas } from "../../../data/nganyaData";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const [shuffledNganyas, setShuffledNganyas] = useState(nganyas);

  const catchyWords = [
    "Experience Nairobi's Nganya Era",
    "Book a Matatu for Your Event",
    "Feel the Street Pulse and Vibes",
    "Bold. Colorful. Unapologetic.",
  ];

  // Typing effect
  useEffect(() => {
    const currentWord = catchyWords[wordIndex];
    const timeout = setTimeout(() => {
      if (charIndex < currentWord.length) {
        setDisplayedText((prev) => prev + currentWord[charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setDisplayedText("");
          setCharIndex(0);
          setWordIndex((wordIndex + 1) % catchyWords.length);
        }, 1500);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex, wordIndex]);

  // Shuffle every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledNganyas((prev) => {
        const newOrder = [...prev].sort(() => Math.random() - 0.5);
        return newOrder;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col justify-start pt-32 pb-32 text-center px-4 sm:px-6"
    >
      {/* TOP CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto">

        {/* MAIN HEADING */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
          Nganya Culture
        </h1>

        {/* SUBTITLE */}
        <h2 className="text-lg md:text-xl mb-6 text-white font-medium">
          Bold. Vivid. Unapologetic. Dive into the rhythm, colors, and street soul of Nairobi.
        </h2>

        {/* TYPING EFFECT */}
        <h3 className="text-md md:text-lg text-blue-400 mb-10 h-8 font-bold">
          {displayedText}
          <span className="animate-blink">|</span>
        </h3>

        {/* BUTTON */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.08, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-xl bg-green-900 hover:bg-blue-900 text-white font-semibold"
          >
            Explore The Movement 👉
          </motion.button>
        </div>
      </div>

      {/* NGANYA CARDS */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto">
        <AnimatePresence>
          {shuffledNganyas.map((item) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <Card
                image={item.image}
                name={item.name}
                route={item.route}
                sound={item.sound}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
