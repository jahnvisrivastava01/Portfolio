import { useState, useEffect } from "react";

export default function Hero() {
  const achievements = [
    "💼 Full Stack Developer Intern • State Bank of India (SBI)",
    "🌐 Technical Lead • Google Developer Groups On Campus (2024-25)",
    "🏆 HackCelestial 2.0 Hackathon Finalist",
    "📄 Paper Presentation • Energy Debt of AI"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % achievements.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-8 pt-24 text-white"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-16">


        <div className="flex flex-col items-start gap-4">

          <p className="text-sm font-semibold text-purple-400 uppercase tracking-[4px]">
            Achievement
          </p>

          <div className="w-60 h-60 bg-white/5 backdrop-blur-lg border border-gray-700 rounded-2xl flex items-center justify-center p-6 transition duration-300 hover:scale-105 hover:border-purple-500">

            <p className="text-center text-gray-300 text-sm leading-7">
              {achievements[index]}
            </p>

          </div>
        </div>


        <div className="md:w-3/4 text-center md:text-left">

          <p className="uppercase tracking-[5px] text-purple-400 text-sm mb-3">
            Welcome to my Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Jahnvi Srivastava
            </span>
            <span className="ml-2"></span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mt-6 font-medium">
            Full Stack Developer
            
          </h2>
          <p className="mt-2 text-purple-300 font-medium tracking-wide">
            MERN • ASP.NET Core • C# • SQL Server
          </p>

          <p className="mt-8 text-gray-400 leading-8 max-w-2xl">
            I'm a Computer Science undergraduate passionate about building
            scalable, responsive, and user-centric web applications. I enjoy
            solving real-world problems through clean code while continuously
            learning modern technologies and software development practices.
          </p>

          




          <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-10">


            <a href="#contact">
              <button className="border border-purple-500 px-8 py-3 rounded-full hover:bg-purple-500 transition duration-300">
                Let's Connect
              </button>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}