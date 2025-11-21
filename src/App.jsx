import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

// Sections
import Hero from "./components/layouts/sections/Hero";
import AboutUs from "./components/layouts/sections/AboutUs";
import Culture from "./components/layouts/sections/Culture";
import Style from "./components/layouts/sections/Style";
import Contact from "./components/layouts/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">

      {/* FIXED HEADER */}
      <Header />

      {/* PAGE CONTENT — ALL SECTIONS EXIST IN ONE PAGE */}
      <main className="flex-1" role="main">
        <Hero />
        <AboutUs />
        <Culture />
        <Style />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
