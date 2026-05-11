export default function Contact() {
  return (
    <section id="contact" className="max-w-xl mx-auto py-24 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8 text-cyan-400">Contact</h2>
      <form className="bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-800 flex flex-col gap-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="bg-gray-800 text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="bg-gray-800 text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          className="bg-gray-800 text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400 resize-none"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-700 text-white font-bold py-3 rounded shadow-lg transition text-lg"
        >
          Send Message
        </button>
      </form>
      <p className="text-gray-400 mt-8">Or connect with me:</p>
      <div className="flex justify-center gap-8 mt-4">
        <a
          href="mailto:your@email.com"
          className="hover:text-cyan-400 transition text-lg font-semibold"
        >
          Email
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition text-lg font-semibold"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition text-lg font-semibold"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
