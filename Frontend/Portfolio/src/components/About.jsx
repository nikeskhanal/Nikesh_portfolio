import { BadgeCheck } from "lucide-react";

const skills = [
  "React", "Node.js", "MongoDB", "Express.js", "SEO", "Marketing", "Ads", "Analytics"
];

export default function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto py-24 px-6">
      <h2 className="text-3xl font-bold mb-6 text-cyan-400">About Me</h2>
      <p className="text-gray-300 mb-8">
        I am a passionate Full Stack Developer (MERN) and Digital Marketer. I love building modern web applications and helping brands grow online through SEO, social media, and analytics.
      </p>
      <div className="flex flex-wrap gap-4">
        {skills.map(skill => (
          <span key={skill} className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded text-sm text-cyan-300">
            <BadgeCheck className="w-4 h-4 text-cyan-400" /> {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
