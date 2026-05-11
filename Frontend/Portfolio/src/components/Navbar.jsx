import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const links = [
  { name: "About", to: "#about" },
  { name: "Projects", to: "#projects" },
  { name: "Marketing", to: "#marketing" },
  { name: "Contact", to: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/70 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-xl font-bold tracking-tight">YourName</span>
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.to} className="hover:text-cyan-400 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
