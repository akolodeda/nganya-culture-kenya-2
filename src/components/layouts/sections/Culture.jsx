import { useState } from "react";
import { motion } from "framer-motion";

// Use SimpleCard instead of animated/sound Card
import SimpleCard from "../../common/SimpleCard.jsx";

// Correct asset paths (.webp)
import defaultBg from "../../../assets/images/background.webp";
import moodImg from "../../../assets/images/mood.webp";
import diceImg from "../../../assets/images/dice.webp";
import matatuImg from "../../../assets/images/matatu.webp";

export default function Culture() {
  const [bgImage, setBgImage] = useState(defaultBg);

  const images = [
    { id: 1, src: moodImg, title: "Matatu Mood" },
    { id: 2, src: diceImg, title: "Street Dice Vibes" },
    { id: 3, src: matatuImg, title: "Nganya Art" },
  ];

  return (
    <section
      id="culture"
      aria-labelledby="culture-title"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 text-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        key={bgImage}
        role="img"
        aria-label="Culture background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
          willChange: "opacity",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2
          id="culture-title"
          className="font-street text-yellow-400 text-4xl sm:text-5xl lg:text-6xl mb-6 drop-shadow-xl"
        >
          Street Culture On Wheels
        </h2>

        <p className="mx-auto text-white/80 text-base sm:text-lg lg:text-xl max-w-3xl mb-12 leading-relaxed">
          Nganya Culture is more than transport. It is rhythm, color, identity,
          and the raw pulse of Nairobi streets. Every route has a story. Every matatu
          has a voice. Every ride is a vibe.
        </p>

        {/* Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img) => (
            <SimpleCard
              key={img.id}
              image={img.src}
              title={img.title}
              onClick={() => setBgImage(img.src)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
