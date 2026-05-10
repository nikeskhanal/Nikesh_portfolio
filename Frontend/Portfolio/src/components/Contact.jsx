const contacts = [
  {
    label: "Email", link: "mailto:your@email.com"
  },
  {
    label: "GitHub", link: "https://github.com/yourusername"
  },
  {
    label: "LinkedIn", link: "https://linkedin.com/in/yourusername"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-xl mx-auto py-24 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8 text-cyan-400">Contact</h2>
      <div className="flex justify-center gap-8 mb-6">
        {contacts.map(({ label, link }) => (
          <a
            key={label}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition text-lg font-semibold"
            aria-label={label}
          >
            {label}
          </a>
        ))}
      </div>
      <p className="text-gray-400">Let's build something great together!</p>
    </section>
  );
}
