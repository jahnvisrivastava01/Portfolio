import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState(null); // null | "success" | "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }

    // No backend wired up yet — mailto is a simple stand-in until one exists.
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;

    setStatus("success");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 text-white">

      <h2 className="text-3xl font-bold text-center mb-12">
        Let's <span className="text-purple-400">Connect</span>
      </h2>

      <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-lg border border-gray-700 rounded-xl p-8">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-3 rounded-lg bg-black/40 border border-gray-600 outline-none focus:border-purple-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded-lg bg-black/40 border border-gray-600 outline-none focus:border-purple-400"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="p-3 rounded-lg bg-black/40 border border-gray-600 outline-none focus:border-purple-400"
          />

          <textarea
            name="message"
            placeholder="What kind of work required?"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="p-3 rounded-lg bg-black/40 border border-gray-600 outline-none focus:border-purple-400"
          />

          <button
            type="submit"
            className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition font-medium"
          >
            Send Message
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm text-center">
              Thanks! Your email client should have opened — send it to reach me.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              Please fill in your name, email, and message.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}