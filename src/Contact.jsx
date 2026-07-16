import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("");

   emailjs
  .sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form.current,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
  .then(() => {
    setStatus("success");
    form.current.reset();
  })
  .catch((error) => {
    console.error(error);
    setStatus("error");
  });
};

return (
  <section
    id="contact"
    className="scroll-mt-24 px-6 py-24 text-white"
  >
    <div className="max-w-5xl mx-auto">

      <h2 className="text-4xl font-bold text-center">
        Let's <span className="text-purple-400">Connect</span>
      </h2>

      <p className="text-gray-400 text-center mt-4 mb-12">
        Interested in collaborating, discussing an opportunity. Feel free to send me a message.
      </p>

      <div className="bg-white/5 backdrop-blur-lg border border-gray-700 rounded-2xl p-8">

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-5"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-lg bg-black/30 border border-gray-600 outline-none focus:border-purple-500"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-lg bg-black/30 border border-gray-600 outline-none focus:border-purple-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (Optional)"
            className="w-full p-4 rounded-lg bg-black/30 border border-gray-600 outline-none focus:border-purple-500"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Tell me about your project..."
            required
            className="w-full p-4 rounded-lg bg-black/30 border border-gray-600 outline-none focus:border-purple-500 resize-none"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-4 rounded-lg font-semibold hover:scale-[1.02] transition duration-300"
          >
            Send Message
          </button>

          {status === "success" && (
            <p className="text-green-400 text-center">
              Your message has been sent successfully. I'll get back to you
              as soon as possible.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-center">
              Failed to send the message. Please try again later.
            </p>
          )}

        </form>

      </div>
    </div>
  </section>
);
}