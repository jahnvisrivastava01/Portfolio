import React from "react";

const experiences = [
  {
    company: "State Bank of India (SBI)",
    role: "Full Stack Developer Intern",
    duration: "June 2026 - August 2026",
    current: true,
    description:
      "Contributing to the development of enterprise web applications using ASP.NET Core MVC, C#, Entity Framework Core, and SQL Server. Implementing backend modules, integrating database operations, and collaborating on real-world business solutions.",
  },
  {
    company: "Ibtidaa Tech",
    role: "Graphic Design & Media Intern",
    duration: "July 2025 - September 2025",
  },
  {
    company: "Ibtidaa Tech",
    role: "Frontend Developer",
    duration: "July 2025 - August 2025",
  },
  {
    company: "Staxtech",
    role: "Frontend Developer",
    duration: "May 2025 - June 2025",
  },
];

export default function Experiences() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-20 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        Internship <span className="text-purple-400">Experience</span>
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative bg-white/5 backdrop-blur-lg border border-gray-700 rounded-xl p-6 hover:scale-[1.02] transition"
          >
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-xl font-semibold">{exp.role}</h3>

              {exp.current && (
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                  Current
                </span>
              )}
            </div>

            <p className="text-purple-400 text-sm mt-1">
              {exp.company} | {exp.duration}
            </p>

            {exp.description && (
              <p className="text-gray-400 text-sm mt-3 leading-6">
                {exp.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
