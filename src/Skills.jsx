import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaNodeJs,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiSharp,
  SiPython,
  SiTailwindcss,
  SiExpress,
  SiDotnet,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiNetlify,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C", icon: <SiCplusplus className="text-blue-400" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
      { name: "C#", icon: <SiSharp className="text-purple-400" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "Python", icon: <SiPython className="text-yellow-300" /> },
    ],
  },

  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "ASP.NET Core", icon: <SiDotnet className="text-purple-500" /> },
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-sky-500" /> },
      { name: "SQL", icon: <FaDatabase className="text-blue-400" /> },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Netlify", icon: <SiNetlify className="text-cyan-400" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 px-6 py-20 text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          My <span className="text-purple-400">Skills</span>
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16 max-w-2xl mx-auto">
          Technologies and tools I use to build modern, scalable, and
          user-friendly web applications.
        </p>

        <div className="space-y-14">

          {skillCategories.map((category) => (
            <div key={category.title}>

              {/* Category Heading */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-20 bg-gray-700"></div>

                <h3 className="text-xl font-semibold text-purple-400">
                  {category.title}
                </h3>

                <div className="h-px w-20 bg-gray-700"></div>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap justify-center gap-4">

                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      flex items-center gap-3
                      px-5 py-3
                      rounded-full
                      bg-white/5
                      backdrop-blur-lg
                      border border-gray-700
                      hover:border-purple-500
                      hover:bg-purple-500/10
                      hover:scale-105
                      transition-all
                      duration-300
                      cursor-default
                    "
                  >
                    <span className="text-xl">
                      {skill.icon}
                    </span>

                    <span className="text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}