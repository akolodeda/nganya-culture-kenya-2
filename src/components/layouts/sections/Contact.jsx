import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-16"
    >
      <h2 className="font-street text-yellow-400 text-4xl sm:text-5xl lg:text-6xl mb-6 text-center drop-shadow-lg">
        Contact Us
      </h2>

      <p className="max-w-3xl text-base sm:text-lg lg:text-xl text-white/80 mb-10 text-center leading-relaxed">
        Want to collaborate, feature your Nganya, or share your Nairobi story?
        Connect with us and keep the culture alive!
      </p>

      {/* Contact Details */}
      <div className="mb-12 flex flex-col sm:flex-row flex-wrap gap-10 justify-center text-center sm:text-left max-w-4xl">
        <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Email</h3>
          <p>
            Official:{" "}
            <a
              href="mailto:nganyaculture@gmail.com"
              className="text-blue-400 hover:underline"
            >
              nganyaculture@gmail.com
            </a>
          </p>
          <p>
            Alternate:{" "}
            <a
              href="mailto:akolomichael3@gmail.com"
              className="text-blue-400 hover:underline"
            >
              akolomichael3@gmail.com
            </a>
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Phone</h3>
          <p>
            <a
              href="tel:+254798990428"
              className="text-blue-400 hover:underline"
            >
              +254 798 990 428
            </a>
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
            Location
          </h3>
          <p>Nairobi, Kenya</p>
        </motion.div>
      </div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-gray-900 p-6 sm:p-8 rounded-xl shadow-lg space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-yellow-400 transition"
          required
        />

        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-yellow-400 transition"
          required
        />

        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-yellow-400 transition"
          required
        />

        <button
          type="submit"
          className="w-full sm:w-auto bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          Send Message
        </button>

        {submitted && (
          <p className="text-green-400 text-sm pt-2">
            Message sent successfully!
          </p>
        )}
      </motion.form>

      {/* Social Links */}
      <motion.div
        className="mt-10 flex gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a
          href="https://facebook.com"
          aria-label="Visit our Facebook page"
          className="text-blue-500 hover:text-blue-400 transition"
        >
          Facebook
        </a>

        <a
          href="https://twitter.com"
          aria-label="Visit our Twitter page"
          className="text-blue-400 hover:text-blue-300 transition"
        >
          Twitter
        </a>

        <a
          href="https://instagram.com"
          aria-label="Visit our Instagram page"
          className="text-pink-500 hover:text-pink-400 transition"
        >
          Instagram
        </a>
      </motion.div>
    </section>
  );
}
