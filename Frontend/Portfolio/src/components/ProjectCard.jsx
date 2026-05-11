import { Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, tech }) {
  return (
    <motion.div
      className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800 hover:border-cyan-500 transition group"
      whileHover={{ scale: 1.03, y: -4 }}
    >
      <div className="flex items-center gap-3 mb-3">
        <Code2 className="w-5 h-5 text-cyan-400" />
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="bg-gray-800 text-cyan-300 px-3 py-1 rounded text-xs"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
