import { BarChart3, Search, Users, TrendingUp, Megaphone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const typeIcon = {
  SEO: <Search className="w-5 h-5 text-cyan-400" />,
  Ads: <Megaphone className="w-5 h-5 text-cyan-400" />,
  "Social Media": <Users className="w-5 h-5 text-cyan-400" />,
  Analytics: <BarChart3 className="w-5 h-5 text-cyan-400" />,
  Content: <TrendingUp className="w-5 h-5 text-cyan-400" />,
  "Lead Gen": <Mail className="w-5 h-5 text-cyan-400" />,
};

export default function MarketingCard({ title, description, type, stats }) {
  return (
    <motion.div
      className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800 hover:border-cyan-500 transition group"
      whileHover={{ scale: 1.03, y: -4 }}
    >
      <div className="flex items-center gap-3 mb-3">
        {typeIcon[type]}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <span className="inline-block bg-cyan-900/40 text-cyan-300 px-3 py-1 rounded text-xs font-semibold">
        {stats}
      </span>
    </motion.div>
  );
}
