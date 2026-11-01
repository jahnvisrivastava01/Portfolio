import { experience } from "../data";
import { Section, Tag } from "./ui";

export default function Experience() {
  return (
    <Section id="experience" index="01" title="Experience">
      <ol className="relative border-l border-line">
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.role}`} className="reveal relative pb-12 pl-7 last:pb-0 sm:pl-9">
            <span
              className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-bg ${
                i === 0 ? "bg-rose" : "bg-faint"
              }`}
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="text-lg font-semibold">
                {job.role} <span className="font-normal text-muted">· {job.company}</span>
              </h3>
              <p className="shrink-0 font-mono text-xs text-faint">{job.period}</p>
            </div>
            <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-muted">
              {job.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-[11px] h-px w-3 shrink-0 bg-faint" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.stack.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
