import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "MERN Blog Platform",
    description: "A full-featured blog platform with authentication, comments, and admin dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "Portfolio Website",
    description: "A modern, animated portfolio site with dark mode and responsive design.",
    tech: ["React", "Tailwind", "Framer Motion"]
  },
  {
    title: "E-commerce API",
    description: "RESTful API for an e-commerce platform with JWT auth and payment integration.",
    tech: ["Node.js", "Express", "MongoDB"]
  },
  {
    title: "Chat App",
    description: "Real-time chat application with WebSocket and group chat support.",
    tech: ["React", "Node.js", "Socket.io"]
  },
  {
    title: "Analytics Dashboard",
    description: "Interactive dashboard for visualizing business metrics and KPIs.",
    tech: ["React", "Chart.js", "Node.js"]
  },
  {
    title: "Task Manager",
    description: "A productivity app to manage daily tasks and deadlines.",
    tech: ["React", "Redux", "Node.js"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-24 px-6">
      <h2 className="text-3xl font-bold mb-10 text-cyan-400">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}
