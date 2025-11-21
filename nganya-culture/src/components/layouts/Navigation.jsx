import { motion } from "framer-motion";

export default function Navigation({ activeSection, setActiveSection, mobile }) {
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "culture", label: "Culture" },
    { id: "style", label: "Style" },
    { id: "contact", label: "Contact Us" },
  ];

  const handleClick = (id) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul
      className={`${
        mobile
          ? "flex flex-col gap-4 text-lg"
          : "flex gap-8 text-lg"
      } font-semibold`}
    >
      {links.map((link) => {
        const isActive = activeSection === link.id;

        return (
          <li key={link.id} className="relative">
            <motion.a
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.id);
              }}
              aria-current={isActive ? "page" : undefined}
              className={`transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded ${
                isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"
              }`}
            >
              {link.label}
            </motion.a>

            {/* SOLID UNDERLINE EFFECT */}
            {isActive && !mobile && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-1 h-[3px] bg-yellow-400 rounded"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}
