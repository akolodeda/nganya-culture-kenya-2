<<<<<<< HEAD

=======
>>>>>>> dd13ad5 (Add old project files excluding temp_backup)
import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-black text-gray-300 pt-14 pb-10 px-6 mt-20 border-t border-gray-800 relative overflow-hidden"
<<<<<<< HEAD
      role="contentinfo"
    >
      {/* Background glow (optional: reduce motion if Lighthouse flags performance) */}
=======
    >
      {/* Background glow (reduced CPU load) */}
>>>>>>> dd13ad5 (Add old project files excluding temp_backup)
      <motion.div
        className="absolute inset-0 opacity-15 blur-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-400"
        animate={{ opacity: [0.15, 0.22, 0.18] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
<<<<<<< HEAD
        aria-hidden="true"
=======
>>>>>>> dd13ad5 (Add old project files excluding temp_backup)
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 relative z-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-wide text-white">
            NGANYA CULTURE
          </h2>
          <p className="mt-3 text-sm text-gray-300 leading-relaxed">
<<<<<<< HEAD
            Bold. Vivid. Unapologetic. We showcase the heartbeat of Kenyan
            matatu street culture — the art, the lights, the movement, the vibe.
=======
            Bold. Vivid. Unapologetic.
            We showcase the heartbeat of Kenyan matatu street culture —
            the art, the lights, the movement, the vibe.
>>>>>>> dd13ad5 (Add old project files excluding temp_backup)
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer Navigation">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "Culture", "Styles", "Contact"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.05, x: 4 }}
                className="cursor-pointer hover:text-white transition"
              >
<<<<<<< HEAD
                <a
                  href={`#${item.toLowerCase()}`}
                  className="focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
                >
=======
                <a href="#" className="focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded">
>>>>>>> dd13ad5 (Add old project files excluding temp_backup)
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Contact + Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>

          <address className="not-italic text-sm text-gray-300 space-y-1">
            <p>Nairobi, Kenya</p>
            <p>
<<<<<<< HEAD
              <a
                href="mailto:info@nganyaculture.com"
                className="hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
              >
=======
              <a href="mailto:info@nganyaculture.com" className="hover:text-white">
>>>>>>> dd13ad5 (Add old project files excluding temp_backup)
                info@nganyaculture.com
              </a>
            </p>
            <p>
<<<<<<< HEAD
              <a
                href="tel:+254700000000"
                className="hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
              >
=======
              <a href="tel:+254700000000" className="hover:text-white">
>>>>>>> dd13ad5 (Add old project files excluding temp_backup)
                +254 798 990 428
              </a>
            </p>
          </address>

          {/* Socials */}
          <div className="flex space-x-6 mt-6">
            {[
              { icon: <Facebook />, label: "Facebook", rotate: 10 },
              { icon: <Instagram />, label: "Instagram", rotate: -12 },
              { icon: <Youtube />, label: "YouTube", rotate: 15 },
            ].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                aria-label={item.label}
                whileHover={{
                  scale: 1.25,
                  rotate: item.rotate,
                  y: -4,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-3 rounded-full bg-gray-900 relative group focus:ring-2 focus:ring-yellow-400"
              >
<<<<<<< HEAD
                <span
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 blur-sm transition"
                  aria-hidden="true"
                ></span>
=======
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 blur-sm transition"></span>
>>>>>>> dd13ad5 (Add old project files excluding temp_backup)

                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                  className="relative text-gray-300 group-hover:text-white transition"
                >
                  {item.icon}
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-12 border-t border-gray-800 pt-5 relative z-10">
        © {new Date().getFullYear()} Nganya Culture — Powered by Street Art Energy.
      </div>
    </motion.footer>
  );
}
