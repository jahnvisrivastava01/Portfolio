import { FiArrowRight, FiDownload, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { education, experience, profile, stats } from "../data";
import { Button } from "./ui";

export default function Hero() {
  const latest = experience[0];
  const uni = education[0];

  const facts = [
    { label: "Most recent", value: latest.role, sub: `${latest.company} · ${latest.period}` },
    { label: "Education", value: uni.degree, sub: `${uni.school} · ${uni.period}` },
    { label: "Focus", value: "Full-stack web & mobile", sub: "React · FastAPI · Flutter" },
  ];

  return (
    <section id="top" className="mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 md:pb-28 md:pt-40 lg:px-12">
      <div className="grid items-center gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
        <div className="reveal">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-rose" />
            Open to full-time & internship roles
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-3 text-xl text-accent sm:text-2xl">{profile.role}</p>

          <p className="mt-6 leading-relaxed text-muted sm:text-lg">{profile.summary}</p>

          <p className="mt-5 flex items-center gap-2 font-mono text-xs text-faint">
            <FiMapPin /> {profile.location}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#projects">
              View projects <FiArrowRight />
            </Button>
            <Button href={profile.resume} variant="secondary" download>
              <FiDownload /> Download resume
            </Button>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-lg p-2.5 text-xl text-muted transition-colors hover:text-accent"
              >
                <FaGithub />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg p-2.5 text-xl text-muted transition-colors hover:text-accent"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <aside className="reveal rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-7">
          <p className="font-mono text-xs uppercase tracking-wider text-faint">At a glance</p>

          <ul className="mt-5 space-y-5">
            {facts.map((f) => (
              <li key={f.label} className="border-l-2 border-accent/40 pl-4">
                <p className="text-xs text-faint">{f.label}</p>
                <p className="mt-0.5 font-medium text-ink">{f.value}</p>
                <p className="mt-0.5 text-sm text-muted">{f.sub}</p>
              </li>
            ))}
          </ul>

          <dl className="mt-7 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse justify-end bg-surface px-3 py-4">
                <dt className="mt-1 text-xs text-faint">{s.label}</dt>
                <dd className="text-xl font-semibold text-ink">{s.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}