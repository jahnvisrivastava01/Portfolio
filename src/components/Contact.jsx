import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { profile } from "../data";
import { Section } from "./ui";

const field =
  "w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-faint outline-none transition-colors focus:border-accent";

export default function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      form.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const channels = [
    { icon: <FiMail />, label: profile.email, href: `mailto:${profile.email}` },
    { icon: <FaLinkedin />, label: "linkedin.com/in/jahnvisrivastava20", href: profile.linkedin },
    { icon: <FaGithub />, label: "github.com/jahnvisrivastava01", href: profile.github },
  ];

  return (
    <Section id="contact" index="05" title="Contact">
      <div className="grid gap-10 md:grid-cols-[1fr_1.3fr]">
        <div className="reveal">
          <p className="leading-relaxed text-muted">
            I'm looking for full-stack and software development roles. If you have an opportunity or just want to talk
            about a project, send a message or reach me directly.
          </p>
          <ul className="mt-8 space-y-4">
            {channels.map((c) => (
              <li key={c.href}>
                <a
                  href={c.href}
                  target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm text-muted transition-colors hover:text-accent"
                >
                  <span className="text-lg text-faint group-hover:text-accent">{c.icon}</span>
                  <span className="break-all">{c.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="reveal space-y-4 rounded-xl border border-line bg-surface p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-xs text-faint">Name</span>
              <input type="text" name="user_name" required className={field} placeholder="Your name" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs text-faint">Email</span>
              <input type="email" name="user_email" required className={field} placeholder="you@company.com" />
            </label>
          </div>
          <label className="block">
            <span className="mb-1.5 block text-xs text-faint">Message</span>
            <textarea
              name="message"
              rows="5"
              required
              className={`${field} resize-none`}
              placeholder="What would you like to discuss?"
            />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-lg bg-accent py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90 dark:text-bg disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          <p aria-live="polite" className="min-h-5 text-center text-sm">
            {status === "success" && <span className="text-accent">Thanks — your message was sent. I'll reply soon.</span>}
            {status === "error" && (
              <span className="text-red-400">
                Couldn't send right now. Please email me at{" "}
                <a href={`mailto:${profile.email}`} className="underline">
                  {profile.email}
                </a>
                .
              </span>
            )}
          </p>
        </form>
      </div>
    </Section>
  );
}
