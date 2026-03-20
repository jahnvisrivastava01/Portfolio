import { useState, useEffect } from "react";

export default function Hero() {
  const achievements = [
    "HackCelestial 2.0 Hackathon (Selected among 72 participants)",
    "Paper Presentation: Energy Debt of AI – Measuring & Mitigating Carbon Footprints"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % achievements.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-8 pt-24 text-white">

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* 🟪 LEFT - ACHIEVEMENTS (SMALL WIDGET) */}
        <div className="flex flex-col items-start gap-3">

          {/* Heading */}
          <p className="text-bold text-purple-400 tracking-widest uppercase">
            Achievements
          </p>

          {/* Square Box */}
          <div className="w-48 aspect-square bg-white/5 backdrop-blur-lg border border-gray-700 rounded-xl flex items-center justify-center p-4 text-center hover:scale-105 transition">

            <p className="text-gray-300 text-xs leading-5">
              {achievements[index]}
            </p>

          </div>

        </div>

        {/* 🔥 RIGHT - HERO MAIN */}
        <div className="md:w-2/3 text-center md:text-left">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Jahnvi
            </span>{" "}
            👋
          </h1>

          <h2 className="text-xl md:text-2xl mt-4 text-gray-300">
            Frontend Developer
          </h2>

          <p className="mt-6 text-gray-400 leading-7 max-w-xl">
            Welcome to my digital portfolio! <br></br>

            I build modern, responsive, and user-friendly web applications using React and Tailwind CSS. Love to explore new technologies and build modern
            web aplications.
          </p>

          <p className="mt-6 text-gray-400 leading-7 max-w-xl">
            Passionate about tackling complex problems and creating seamless user experiences.<br></br> Always eager to learn and grow in the ever-evolving world of web development.
          </p>

         <a href="#contact">
          <button className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full hover:scale-105 transition">
            Let’s Connect
            </button>
         </a>

        </div>

      </div>

    </section>
  );
}