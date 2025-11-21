import React from "react";
import transportImg from "../../../assets/images/mood.webp";
import merchandiseImg from "../../../assets/images/shirt-merchandise.webp";

export default function AboutUs() {
  return (
    <div
      id="about"
      className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 space-y-12 md:space-y-16"
    >

      {/* Header */}
      <section aria-labelledby="about-title" className="text-center">
        <h2
          id="about-title"
          className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white"
        >
          About Nganya Culture
        </h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg">
          Celebrating Nairobi’s vibrant matatu culture while providing reliable transport
          services for events and daily commutes.
        </p>
      </section>

      {/* Services Section */}
      <section
        aria-labelledby="services-title"
        className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 items-center"
      >
        <img
          src={transportImg}
          alt="A decorated Nganya matatu used for transport services"
          loading="lazy"
          className="rounded-lg shadow-lg w-full md:w-1/2 object-cover"
        />
        <div className="w-full md:w-1/2">
          <h3
            id="services-title"
            className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white"
          >
            Our Services
          </h3>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
            <li>Book matatus for weddings, funerals, and events.</li>
            <li>Browse all matatu routes and their respective Nganya names.</li>
            <li>Buy exclusive branded shirts featuring iconic Nganya designs.</li>
            <li>Submit complaints or compliments via email or phone.</li>
          </ul>
        </div>
      </section>

      {/* Contact Info */}
      <section
        aria-labelledby="contact-info-title"
        className="bg-gray-800 p-6 sm:p-8 md:p-10 rounded-lg shadow-md space-y-3 sm:space-y-4"
      >
        <h3
          id="contact-info-title"
          className="text-xl sm:text-2xl font-semibold text-white"
        >
          Contact Us
        </h3>

        <p className="text-sm sm:text-base text-gray-300">
          Email (official):{" "}
          <a href="mailto:nganyaculture@gmail.com" className="text-blue-400 hover:underline">
            nganyaculture@gmail.com
          </a>
        </p>

        <p className="text-sm sm:text-base text-gray-300">
          Alternate Email:{" "}
          <a href="mailto:akolomichael3@gmail.com" className="text-blue-400 hover:underline">
            akolomichael3@gmail.com
          </a>
        </p>

        <p className="text-sm sm:text-base text-gray-300">
          Phone:{" "}
          <a href="tel:+254798990428" className="text-blue-400 hover:underline">
            0798 990 428
          </a>
        </p>

        <p className="text-sm sm:text-base text-gray-300">
          Office Location: Nairobi, Kenya
        </p>
      </section>

      {/* Merchandise Section */}
      <section
        aria-labelledby="merch-title"
        className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 items-center"
      >
        <img
          src={merchandiseImg}
          alt="Nganya-themed merchandise including branded shirts"
          loading="lazy"
          className="rounded-lg shadow-lg w-full md:w-1/2 object-cover"
        />
        <div className="w-full md:w-1/2">
          <h3
            id="merch-title"
            className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-white"
          >
            Merchandise
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-2">
            Grab exclusive Nganya t-shirts featuring iconic Nairobi matatu artwork.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
            <li>Printed with popular Nganya names and artwork</li>
            <li>Available in multiple sizes and colors</li>
            <li>Perfect for events or casual wear</li>
          </ul>
        </div>
      </section>

      {/* Operational Details */}
      <section
        aria-labelledby="operations-title"
        className="bg-gray-800 p-6 sm:px-8 md:px-10 rounded-lg shadow-md space-y-2"
      >
        <h3
          id="operations-title"
          className="text-xl sm:text-2xl font-semibold text-white"
        >
          Operational Details
        </h3>
        <p className="text-sm sm:text-base text-gray-300">Days of Operation: Monday – Sunday</p>
        <p className="text-sm sm:text-base text-gray-300">Hours: 6:00 AM – 11:00 PM</p>
      </section>
    </div>
  );
}
