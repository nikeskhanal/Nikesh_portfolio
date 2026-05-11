import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black"
    >
      {/* Modern blurred gradient background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500 opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-700 opacity-20 rounded-full blur-3xl animate-pulse" />
      </div>
      <motion.h1
        className="relative z-10 text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-lg tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Your Name
      </motion.h1>
      <motion.h2
        className="relative z-10 mt-4 text-2xl md:text-3xl font-semibold text-gray-300 tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        Full Stack Developer{" "}
        <span className="text-cyan-400">&</span> Digital Marketer
      </motion.h2>
      <motion.p
        className="relative z-10 mt-6 max-w-2xl text-lg md:text-xl text-gray-400 mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        I craft modern web experiences and drive digital growth through SEO, social
        media, and analytics. Let’s build something impactful together.
      </motion.p>
      <motion.a
        href="#contact"
        className="relative z-10 mt-10 inline-block px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-700 text-white font-bold shadow-xl transition text-lg md:text-xl"
        whileHover={{ scale: 1.07 }}
      >
        Let’s Connect
      </motion.a>
    </section>
  );
}
