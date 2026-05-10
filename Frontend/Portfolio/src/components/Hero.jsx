import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Your Name
      </motion.h1>
      <motion.h2
        className="mt-4 text-xl md:text-2xl font-semibold text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        Full Stack Developer & Digital Marketer
      </motion.h2>
      <p className="mt-6 max-w-xl text-gray-400">
        I build modern web apps and drive digital growth through SEO, social media, and analytics.
      </p>
      <motion.a
        href="#contact"
        className="mt-8 inline-block px-8 py-3 rounded bg-cyan-500 hover:bg-cyan-600 text-white font-bold shadow-lg transition"
        whileHover={{ scale: 1.05 }}
      >
        Let’s Connect
      </motion.a>
    </section>
  );
}
