import { useState, useEffect } from 'react'
import {Link as Scroll} from 'react-scroll'

type HeaderProps = {
  isOpen: boolean,
  toggle: () => void;
}

const Header = ({isOpen, toggle}: HeaderProps) => {  
  const [light, setLight] = useState(true);

  useEffect(() => {
    const html = document.querySelector('html');
    if(light == true){
      html.classList.remove('dark');      
    }else {      
      html.classList.add('dark');
    }
  }, [light])

  const toogleLight = () => {
    setLight(!light);
  }

  useEffect(() => {
    const bar1 = document.querySelector('#bar1');
    const bar2 = document.querySelector('#bar2');
    if(isOpen) {
      bar1.classList.add('rotate-225', '::before', 'top-7');
      bar2.classList.add('-rotate-225', 'top-7', 'w-10');
    } else {
      bar1.classList.remove('rotate-225', 'top-7');
      bar2.classList.remove('-rotate-225', 'top-7', 'w-10');
    }
    
  }, [isOpen])
  
  return (
    <header className="z-10 flex justify-between items-center h-16 fixed w-screen pl-3 lg:px-24 py-10">
      <div className="flex justify-center items-center">
        <Scroll to="main" smooth={true} duration={500}>
          <img src="/logo.svg" alt="Logo"/>
        </Scroll>
      </div>

      <button onClick={toggle} className="md:hidden w-16 h-16 bg-gray-900 rounded-xl relative">
        <div id="bar1" className="absolute w-10 h-2 bg-gray-200 rounded-lg top-5 right-3 transition duration-700 transform" />
        <div id="bar2" className="absolute w-7 h-2 bg-gray-200 rounded-lg bottom-5 right-3 transition duration-700 transform" />
      </button>

      <div className="md:block hidden"> 
        <ul className="pl-4 space-x-2 flex flex-row text-white font-extralight">
          <Scroll to="about" smooth={true} duration={500}> 
            <li className="hover:text-blue hover:underline">About</li>
          </Scroll>
          <Scroll to="projects" smooth={true} duration={500}> 
            <li className="hover:text-blue hover:underline">Projects</li>
          </Scroll>
          <Scroll to="skills" smooth={true} duration={500}> 
            <li className="hover:text-blue hover:underline">Skills</li>
          </Scroll>
          <Scroll to="timeline" smooth={true} duration={500}> 
            <li className="hover:text-blue hover:underline">Timeline</li>
          </Scroll>          
        </ul>
      </div>
      <div className="space-x-2 md:flex flex-row hidden">
        <a className="transform duration-300 hover:scale-125" href="https://www.linkedin.com/in/joao-vasconcelos11" target="_blank">
          <img src="/linkedin_icon.svg" alt="Linkedin"/>
        </a>
        <a className="transform duration-300 hover:scale-125" href="https://www.instagram.com/joao_11vasconcelos" target="_blank">
          <img src="/instagram_icon.svg" alt="Instagram"/>
        </a>
        <a className="transform duration-300 hover:scale-125" href="https://github.com/JoaoVasconcelosV" target="_blank">
          <img src="/github_icon.svg" alt="Github"/>
        </a>
        <button onClick={toogleLight} className="transform duration-300 hover:scale-125">
          {light ? <img src="/light-off.svg" alt="Tema claro"/> : <img src="/light-on.svg" alt="Tema escuro"/>}
        </button>
      </div>
    </header>
  )
}

export default Header