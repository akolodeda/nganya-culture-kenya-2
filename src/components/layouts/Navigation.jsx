
import { motion } from "framer-motion";

export default function Navigation({ mobile }) {
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "culture", label: "Culture" },
    { id: "style", label: "Style" },
    { id: "contact", label: "Contact Us" },
  ];

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul
      className={`${
        mobile ? "flex flex-col gap-4 text-lg" : "flex gap-8 text-lg"
      } font-semibold`}
    >
      {links.map((link) => (
        <li key={link.id} className="relative">
          <motion.a
            href={`#${link.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(link.id);
            }}
            className="transition-all duration-200 text-white hover:text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
          >
            {link.label}
          </motion.a>
        </li>
      ))}
    </ul>
  );
}

