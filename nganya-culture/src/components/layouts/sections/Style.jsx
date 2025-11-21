import { motion } from "framer-motion";

// Correct WEBP images
import interiorImg from "../../../assets/images/interior.webp";
import lightsImg from "../../../assets/images/lights.webp";
import soundImg from "../../../assets/images/sound.webp";
import rimsImg from "../../../assets/images/rims.webp";

export default function Style() {
  const items = [
    {
      title: "Custom Interiors",
      desc: "LED ceilings, leather seats, themed cabins — every nganya interior is a masterpiece of Nairobi creativity.",
      img: interiorImg,
    },
    {
      title: "Street Lights",
      desc: "Flashing RGB LEDs, strobe bars, UV lights, and neon strips bring the streets alive at night.",
      img: lightsImg,
    },
    {
      title: "Heavy Sound System",
      desc: "Massive subwoofers, tweeters, amps, and mixers — sound is the heartbeat of nganya culture.",
      img: soundImg,
    },
    {
      title: "Chrome Rims",
      desc: "Shiny alloys and deep-dish rims give every nganya a unique road presence and attitude.",
      img: rimsImg,
    },
  ];

  return (
    <section
      id="style"
      className="min-h-screen bg-gray-900 text-white px-6 py-20 text-center"
    >
      <h2 className="font-street text-yellow-400 text-4xl sm:text-5xl lg:text-6xl mb-8 drop-shadow-lg">
        Street Style & Vibes
      </h2>

      <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-white/80 mb-16 leading-relaxed">
        Nganya style is a full visual experience. From body kits to booming
        systems, every element is tuned for vibe, presence, and Nairobi street identity.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-black/40 rounded-xl p-4 shadow-lg border border-white/10 hover:border-yellow-400 transition cursor-pointer"
          >
            <div className="w-full h-48 sm:h-56 lg:h-40 overflow-hidden rounded-lg mb-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-bold text-yellow-300">
              {item.title}
            </h3>

            <p className="mt-2 text-white/70 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
