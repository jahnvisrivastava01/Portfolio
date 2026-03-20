import {FaReact,FaHtml5, FaCss3Alt, FaJs, FaGitAlt} from 'react-icons/fa';
import { SiTailwindcss, SiPython } from "react-icons/si";

const skills=[
    {
        name:"React" , icon:<FaReact className="text-blue-400" />

    },
    { name: "JavaScript", icon: <FaJs  className="text-yellow-400" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500"/> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "Python", icon: <SiPython  className="text-yellow-300"/> }
];

export default function Skills(){
    return (
        <section id="skills" className="scroll-mt-24 px-6 py-20 text-white">
            <h2 className='text-3xl font-bold text-center mb-12'>
               <span className='text-purple-400'>Skills</span>
            </h2>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto'>
                {skills.map((skill,index)=>(
                    <div key={index} className='bg-white/5 backdrop-blur-lg border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:scale-110 hover:border-purple-500 transition duration-300 cursor-pointer'>
                        <div className="text-4xl text-white">{skill.icon}</div>
                        <p className='text-gray-300 text-sm mt-2'>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}