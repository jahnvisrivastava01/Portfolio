import {useState} from 'react'
import { FiMenu, FiX } from "react-icons/fi"
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <nav className="fixed w-full top-0 left-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-md text-white border-b border-gray-800">

            <div className='flex justify-between items-center px-8 py-4'>

            <div className="flex items-center gap-4 text-xl">
                <a
                href="https://github.com/jahnvisrivastava01"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition">
                    <FaGithub />
                </a>
                
                <a
                href="https://linkedin.com/in/jahnvisrivastava20"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition">
                    <FaLinkedin />
                </a>
            </div>

                <ul className='hidden md:flex gap-8 items-center text-sm font-medium'>
                    <a href="#home" className="hover:text-purple-400 transition">
                        Home
                    </a>
                    <a href="#skills" className="hover:text-purple-400 transition">
                        Skills
                    </a>
                    <a href="#experience" className="hover:text-purple-400 transition">
                        Experience
                    </a>
                   

                    <a href="#projects" className="hover:text-purple-400 transition">
                       Project
                    </a>

                     <a href="#contact" className="hover:text-purple-400 transition">
                        Contact
                    </a>

                   <a
                   href="/Final_Resume.pdf"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-full transition">
                    Resume
                   </a>

                </ul>

                <div className='md:hidden text-2xl cursor-pointer' onClick={()=> setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX /> : <FiMenu />}
                </div>

                

            </div>
            {menuOpen && (
                <div className='md:hidden flex flex-col items-center gap-6 pb-6 bg-[#0f0f0f]/95 backdrop-blur-md'>
                    <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">
                        Home
                    </a>
                    <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">
                        Skills
                    </a>
                    <a href="#experience" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">
                         Experience
                    </a>

                    <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">
                        Projects
                    </a>
                    
                    <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">
                        Contact
                    </a>
                </div>
        )}

        </nav>
    )
}



