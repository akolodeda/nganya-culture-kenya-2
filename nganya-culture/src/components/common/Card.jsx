import { motion } from "framer-motion";

export default function Card({ image, title, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className="cursor-pointer rounded-xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-48 object-cover"
      />

      <div className="p-4 text-center">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
      </div>
    </motion.div>
  );
}
