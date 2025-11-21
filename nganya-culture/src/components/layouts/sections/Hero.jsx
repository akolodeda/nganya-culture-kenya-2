import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const toggleSound = () => setIsMuted(!isMuted);

  const catchyWords = [
    "Experience Nairobi's Nganya Era",
    "Book a Matatu for Your Event",
    "Feel the Street Pulse and Vibes",
    "Bold. Colorful. Unapologetic.",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

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

  return (
    <section
      className="relative flex flex-col justify-start pt-28 sm:pt-32 md:pt-36 pb-10 text-center px-4 sm:px-6 overflow-hidden"
      id="home"
      aria-label="Hero section introducing Nganya Culture"
    >
      {/* TOP CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto">
        
        {/* MAIN HEADING */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
          Nganya Culture
        </h1>

        {/* SUBTITLE */}
        <h2 className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-white font-medium">
          Bold. Vivid. Unapologetic. Dive into the rhythm, colors, and street soul of Nairobi.
        </h2>

        {/* TYPING EFFECT TEXT */}
        <h3
          className="text-sm sm:text-base md:text-lg text-blue-400 mb-6 sm:mb-10 h-6 sm:h-8 md:h-8 font-bold"
          aria-live="polite"
        >
          {displayedText}
          <span className="animate-blink" aria-hidden="true">|</span>
        </h3>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

          {/* EXPLORE BUTTON */}
          <motion.button
            whileHover={{ scale: 1.08, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert("Explore clicked")}
            className="px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-xl bg-green-900 hover:bg-blue-900 text-white flex items-center gap-2 text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Explore The Movement
            <span aria-hidden="true" className="text-2xl">👉</span>
          </motion.button>

          {/* MUSIC BUTTON */}
          <motion.button
            whileHover={{ scale: 1.08, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleSound}
            className="px-6 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-xl bg-green-900 hover:bg-blue-900 text-white flex items-center gap-2 text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            {isMuted ? "Play Music" : "Mute Music"}
            <span aria-hidden="true" className="text-2xl">🔊</span>
          </motion.button>

        </div>
      </div>

      {/* BACKGROUND VIDEO */}
      <div className="absolute bottom-0 w-full max-h-[30vh] sm:max-h-[35vh] md:max-h-[40vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
          src="/nganya-small.mp4"   // <-- Correct path
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
    </section>
  );
}
