import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Layout components
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

// Section components (corrected paths)
import Hero from "./components/layouts/sections/Hero";
import AboutUs from "./components/layouts/sections/AboutUs";
import Culture from "./components/layouts/sections/Culture";
import Style from "./components/layouts/sections/Style";
import Contact from "./components/layouts/sections/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  // Handle screen resizing
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutUs breakpoint={windowWidth} />;

      case "culture":
        return <Culture breakpoint={windowWidth} />;

      case "style":
        return <Style breakpoint={windowWidth} />;

      case "contact":
        return <Contact breakpoint={windowWidth} />;

      default:
        return (
          <Hero
            activeSection={activeSection}
            breakpoint={windowWidth}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      
      {/* Fixed Header */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content */}
      <main className="flex-1" role="main" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.45, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              y: -15,
              transition: { duration: 0.35, ease: "easeIn" },
            }}
            style={{ willChange: "opacity, transform" }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
