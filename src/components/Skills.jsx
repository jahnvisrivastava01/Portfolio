import { skills } from "../data";
import { Section } from "./ui";

export default function Skills() {
  return (
    <Section id="skills" index="03" title="Skills">
      <div className="reveal divide-y divide-line overflow-hidden rounded-xl border border-line">
        {skills.map((s) => (
          <div key={s.group} className="grid gap-3 px-5 py-4 sm:grid-cols-[180px_1fr] sm:gap-6 sm:px-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-faint sm:pt-1">{s.group}</h3>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[15px] text-ink">
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
