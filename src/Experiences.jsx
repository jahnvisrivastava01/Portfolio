import React from "react";
    const experiences = [
        {
            company:"Staxtech",
            role:"Frontend Developer ",
            duration:"May 2025-June 2025",

        },

        {
            company:"Ibtidaa Tech",
            role:"Frontend Developer",
            duration:"July 2025-August 2025"

        },



        {
            company:"Ibtidaa Tech",
            role:"Graphic Design & Media Intern",
            duration:"July 2025-September 2025"
        }
    ];
    export default function Experiences() {


    return(

        <section id="experience" className="scroll-mt-24 px-6 py-20 text-white">
            <h2 className="text-3xl font-bold text-center mb-12">
                Internship <span className="text-purple-400">Experience</span>
            </h2>

            <div className="max-w-4xl mx-auto flex flex-col gap-8">
                {experiences.map((exp,index)=>(
                    <div key={index} className="bg-white/5 backdrop-blur-lg border border-gray-700 rounded-xl p-6 hover:scale-[1.02] transition">
                        <h3 className="text-xl font-semibold">
                            {exp.role}
                        </h3>

                        <p className="text-purple-400 text-sm mt-1">
                            {exp.company} | {exp.duration}
                        </p>

                       
                    </div>
                ))}
            </div>
        </section>
    )
}
