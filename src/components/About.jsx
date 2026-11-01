import { achievements, certifications, education, leadership } from "../data";
import { Section } from "./ui";

function Card({ title, children }) {
  return (
    <div className="reveal rounded-xl border border-line bg-surface p-6">
      <h3 className="mb-5 font-mono text-xs uppercase tracking-wider text-faint">{title}</h3>
      {children}
    </div>
  );
}

export default function About() {
  return (
    <Section id="about" index="04" title="Education & Leadership">
      <div className="grid gap-5 md:grid-cols-2">
        <Card title="Education">
          <ul className="space-y-6">
            {education.map((e) => (
              <li key={e.school}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-semibold">{e.school}</p>
                  <p className="font-mono text-xs text-faint">{e.period}</p>
                </div>
                <p className="mt-1 text-sm text-muted">{e.degree}</p>
                <p className="mt-1 text-sm text-accent">{e.detail}</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Leadership">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-semibold">{leadership.title}</p>
            <p className="font-mono text-xs text-faint">{leadership.period}</p>
          </div>
          <p className="mt-1 text-sm text-muted">{leadership.org}</p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
            {leadership.points.map((p) => (
              <li key={p} className="flex gap-2.5">
                <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-faint" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Achievements">
          <ul className="space-y-3 text-sm text-muted">
            {achievements.map((a) => (
              <li key={a} className="flex gap-2.5">
                <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-rose" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Certifications">
          <ul className="space-y-3 text-sm">
            {certifications.map((c) => (
              <li key={c.name} className="flex items-baseline justify-between gap-4">
                <span className="text-muted">{c.name}</span>
                {c.issuer && <span className="shrink-0 font-mono text-xs text-faint">{c.issuer}</span>}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
