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
          className="text-white sm:hidden block"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden sm:block">
          <Navigation
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="sm:hidden mt-3 bg-gray-800 rounded-lg py-3 px-4">
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
