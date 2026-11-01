import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "../data";
import { Section, Tag } from "./ui";

export default function Projects() {
  return (
    <Section id="projects" index="02" title="Projects">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="reveal flex flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent/50"
          >
            <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
            <p className="mt-1 text-sm text-accent">{p.tagline}</p>

            <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-muted">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-2.5">
                  <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-faint" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-5 border-t border-line pt-4 text-sm">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
                >
                  <FaGithub /> Code
                </a>
              )}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
                >
                  <FiExternalLink /> Live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <p className="reveal mt-8 text-sm text-faint">
        More on{" "}
        <a
          href="https://github.com/jahnvisrivastava01"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted underline decoration-line underline-offset-4 hover:text-accent"
        >
          GitHub
        </a>
        .
      </p>
    </Section>
  );
}
