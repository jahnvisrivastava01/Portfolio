import gnnImg from "./assets/gnn.png";

const projects = [
  {
    title: "ResumeAnalyzer",
    desc: "An ML-based resume analyzer that extracts key skills and provides insights to improve job readiness.",
    tech: "React • Tailwind • Python • Machine Learning • NLP",
   
  },
{
  title: "Fashion Recommendation System (GNN)",
  desc: "An advanced fashion recommendation platform using Graph Neural Networks to suggest personalized outfits based on relationships between fashion items.",
  tech: "React • Tailwind • ML • GNN",
  image:gnnImg
  
  
},
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24 text-white">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-16">
        My <span className="text-purple-400">Projects</span>
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col gap-20">

        {projects.map((proj, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >

            {/* IMAGE PLACEHOLDER */}
            <div className="w-full md:w-1/2">
              {proj.image ? (
  <img
    src={proj.image}
    alt={proj.title}
    className="h-64 w-full object-cover rounded-xl border border-gray-700"
  />
) : (
  <div className="h-64 bg-white/5 border border-gray-700 rounded-xl flex items-center justify-center text-gray-500">
    Project Preview
  </div>
)}
            </div>

            {/* TEXT CONTENT */}
            <div className="md:w-1/2">

              <h3 className="text-2xl font-semibold">
                {proj.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {proj.desc}
              </p>

              <p className="text-purple-400 mt-3 text-sm">
                {proj.tech}
              </p>

              <div className="mt-5">
                <a
                  href={proj.github}
                  target="_blank"
                  className="text-sm underline hover:text-purple-400"
                >
                  View on GitHub →
                </a>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}