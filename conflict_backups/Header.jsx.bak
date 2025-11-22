import Navigation from "./Navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full bg-gray-900 px-4 sm:px-6 py-4 z-50 shadow-md"
      role="banner"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Brand / Logo */}
        <a
          href="#home"
          className="text-xl sm:text-2xl font-extrabold text-white tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
        >
          Nganya Culture
        </a>

        {/* Mobile Menu Button */}
        <button
<<<<<<< HEAD
          className="text-white sm:hidden block focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen ? "true" : "false"}
          aria-controls="mobile-menu"
=======
          className="text-white sm:hidden block"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
>>>>>>> dd13ad5 (Add old project files excluding temp_backup)
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
<<<<<<< HEAD
        <nav className="hidden sm:block" aria-label="Primary navigation">
=======
        <nav className="hidden sm:block">
>>>>>>> dd13ad5 (Add old project files excluding temp_backup)
          <Navigation
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
<<<<<<< HEAD
        <nav
          id="mobile-menu"
          className="sm:hidden mt-3 bg-gray-800 rounded-lg py-3 px-4"
          aria-label="Mobile navigation"
        >
=======
        <nav className="sm:hidden mt-3 bg-gray-800 rounded-lg py-3 px-4">
>>>>>>> dd13ad5 (Add old project files excluding temp_backup)
          <Navigation
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            mobile
          />
        </nav>
      )}
    </header>
  );
}
