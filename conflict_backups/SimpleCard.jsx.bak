import { motion } from "framer-motion";

export default function SimpleCard({ image, title, onClick }) {
  return (
    <motion.div
<<<<<<< HEAD
      role="button"
      tabIndex={0}
      aria-label={`View ${title}`}
      onClick={onClick}
      onKeyDown={(e) => { if(e.key === "Enter") onClick(); }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer rounded-xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-md border border-white/20 transition-transform focus:outline-none focus:ring-2 focus:ring-yellow-400"
=======
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="cursor-pointer rounded-xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-md border border-white/20 transition-transform"
>>>>>>> dd13ad5 (Add old project files excluding temp_backup)
    >
      {/* Image */}
      <img
        src={image}
<<<<<<< HEAD
        alt={`Nganya ${title}`}
=======
        alt={title}
>>>>>>> dd13ad5 (Add old project files excluding temp_backup)
        loading="lazy"
        className="w-full h-48 object-cover"
      />

      {/* Title */}
      <div className="p-4 text-center">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
      </div>
    </motion.div>
  );
}
