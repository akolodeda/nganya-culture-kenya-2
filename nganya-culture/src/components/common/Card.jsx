import { motion } from "framer-motion";
import { useRef } from "react";

export default function Card({ image, name, route, sound }) {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <motion.div
      onMouseEnter={playSound}
      className="cursor-pointer rounded-xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="w-full h-48 object-cover"
      />

      <div className="p-4 text-center">
        <h3 className="text-white text-lg font-semibold">{name}</h3>
        <p className="text-white/70 text-sm">{route}</p>
      </div>

      {/* Hidden audio element */}
      <audio ref={audioRef} src={sound} preload="auto" />
    </motion.div>
  );
}
