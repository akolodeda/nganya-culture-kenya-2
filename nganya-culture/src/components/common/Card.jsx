import { motion } from "framer-motion";
import { useRef, useState, useMemo } from "react";

// Color theme per crew
const crewColors = {
  Kixx: "from-purple-500 to-pink-500",
  Godfather: "from-red-600 to-orange-500",
  Mood: "from-blue-600 to-cyan-400",
  Opposite: "from-green-500 to-lime-400",
};

// Global audio controller
let globalAudio = null;

export default function Card({ image, name, route, sound }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Precompute waveform delay values (prevents rerender cost)
  const barDelays = useMemo(() => [0, 0.07, 0.14, 0.21, 0.28, 0.35], []);

  const playSound = () => {
    if (!audioRef.current) return;

    // Prevent spam-hover triggering multiple plays
    if (isPlaying) return;

    // Stop any other card actively playing
    if (globalAudio && globalAudio !== audioRef.current) {
      globalAudio.pause();
      globalAudio.currentTime = 0;
    }

    globalAudio = audioRef.current;

    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});

    setIsPlaying(true);

    // Stop automatically after 3 seconds
    setTimeout(() => stopSound(), 3000);
  };

  const stopSound = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <motion.div
      onMouseEnter={playSound}
      onMouseLeave={stopSound}
      className={`relative cursor-pointer rounded-xl overflow-hidden shadow-xl 
      bg-gradient-to-br ${crewColors[name] || "from-gray-700 to-gray-900"} 
      backdrop-blur-xl border border-white/10`}
      style={{ perspective: 800 }}

      // ★ Replaced jittery rotateX/rotateY with low-cost tilt →
      whileHover={{
        scale: 1.05,
        rotate: 0.5,
      }}

      transition={{
        type: "spring",
        stiffness: 140,
        damping: 12,
      }}

      // ★ Beat bounce (lightweight)
      animate={
        isPlaying
          ? { scale: [1, 1.03, 1] }
          : { scale: 1 }
      }
    >
      {/* NOW PLAYING */}
      {isPlaying && (
        <div className="absolute top-2 right-2 bg-black/70 text-xs text-white px-2 py-1 rounded-md shadow-md">
          Now Playing 🎧
        </div>
      )}

      {/* IMAGE */}
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="w-full h-48 object-cover opacity-90"
      />

      <div className="p-4 text-center">

        <h3 className="text-white text-xl font-bold drop-shadow">{name}</h3>

        {/* Animated route */}
        <motion.p
          className="text-white/80 text-sm mt-1"
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          {route}
        </motion.p>

        {/* Waveform visualizer (optimized with transform) */}
        <div className="flex justify-center mt-3 gap-1 h-5">
          {barDelays.map((delay, i) => (
            <motion.div
              key={i}
              animate={
                isPlaying
                  ? { scaleY: [0.4, 1.25, 0.6] }
                  : { scaleY: 0.4 }
              }
              transition={{
                duration: 0.35,
                repeat: isPlaying ? Infinity : 0,
                delay,
              }}
              className="w-1 bg-white rounded-full origin-bottom"
            />
          ))}
        </div>
      </div>

      {/* AUDIO */}
      <audio ref={audioRef} src={sound} preload="auto" />
    </motion.div>
  );
}
