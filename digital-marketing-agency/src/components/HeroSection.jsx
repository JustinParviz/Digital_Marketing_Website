import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HeroSection = () => (
  <section className="bg-gradient-to-br from-blue-950 via-blue-600 to-blue-900 text-white min-h-[70vh] flex items-center justify-center px-4 font-sans">
    <motion.div
      className="max-w-3xl w-full text-center space-y-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        className="font-montserrat text-4xl md:text-6xl leading-tight drop-shadow-lg"
        variants={item}
      >
        Elevate Your Brand with{" "}
        <span className="text-orange-500">Viral Video Content</span>
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl font-medium text-blue-100"
        variants={item}
      >
        We help companies and brands grow their audience with stunning Instagram
        Reels and short-form video content that captivates and converts.
      </motion.p>
      <motion.a
        href="#contact"
        className="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full shadow-lg transition duration-200 text-lg"
        variants={item}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Get Started Today
      </motion.a>
    </motion.div>
  </section>
);

export default HeroSection;