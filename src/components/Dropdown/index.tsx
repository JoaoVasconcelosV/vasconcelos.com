import { useState, useEffect } from 'react'
import { Link as Scroll } from 'react-scroll'

type DropdownProps = {
  isOpen: boolean,
  toggle: () => void,
}

const Dropdown = ({isOpen, toggle}: DropdownProps) => {
  const [light, setLight] = useState(true);

  useEffect(() => {
    const html = document.querySelector('html');
    if(light == false){
      html.classList.add('dark');
    }else {      
      html.classList.remove('dark');
    }
  }, [light])

  const toogleLight = () => {
    setLight(!light);
  }

  let i = 0;
  useEffect(() => {    
    if(isOpen) {
      //document.getElementById('test').classList.remove('bg-backgroundColor2');
      document.getElementById('test').classList.add('-translate-x-full');      
    } else {
      document.getElementById('test').classList.remove('-translate-x-full');      
    }     
  }, [isOpen])

  return (
    <div id="test" className={"flex flex-col fixed text-center text-white bg-backgroundColor2 items-center rounded-lg h-screen w-screen mt-20 z-20 transition duration-700 ease transform left-full"}>
      <Scroll onClick={toggle} className="p-5 hover:text-blue text-2xl" to="about" smooth={true} duration={500}>
        About
      </Scroll>
      <hr className="w-screen text-backgroundColor"/>
      <Scroll onClick={toggle} className="p-5 hover:text-blue text-2xl" to="projects" smooth={true} duration={500}>
        Projects
      </Scroll>
      <hr className="w-screen text-backgroundColor"/>
      <Scroll onClick={toggle} className="p-5 hover:text-blue text-2xl" to="skills" smooth={true} duration={500}>
        Skills
      </Scroll>      
      <hr className="w-screen text-backgroundColor"/>
      <Scroll onClick={toggle} className="p-5 hover:text-blue text-2xl" to="timeline" smooth={true} duration={500}>
        Timeline
      </Scroll>
      <hr className="w-screen text-backgroundColor"/>
      <div className="flex p-2">
        <a className="p-5 transform hover:scale-125" href="https://www.linkedin.com/in/joao-vasconcelos11" target="_blank">
          <img className="w-11" src="/linkedin_icon.svg" alt="Linkedin"/>
        </a>
        <a className="p-5 transform hover:scale-125" href="https://www.instagram.com/joao_11vasconcelos" target="_blank">
          <img className="w-11" src="/instagram_icon.svg" alt="Instagram"/>
        </a>
        <a className="p-5 transform hover:scale-125" href="https://github.com/JoaoVasconcelosV" target="_blank">
          <img className="w-11" src="/github_icon.svg" alt="Github"/>
        </a>
        <button onClick={toogleLight} className="p-5 transform hover:scale-125">
          {light ? <img src="/light-off.svg" alt="Tema claro"/> : <img src="/light-on.svg" alt="Tema escuro"/>}
        </button>
      </div>
    </div>
  )
}

export default Dropdown