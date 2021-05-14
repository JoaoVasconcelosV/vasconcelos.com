import {Link as Scroll} from 'react-scroll'

type HeaderProps = {
  toggle: () => void;
}

const Header = ({toggle}: HeaderProps) => {
  return (
    <header className="z-10 flex justify-between items-center bg-backgroundColor h-16 fixed w-screen pl-3 lg:px-24 py-10">
      <div className="flex justify-center items-center">
        <Scroll to="main" smooth={true} duration={500}>
          <img src="/logo.svg" alt="Logo"/>
        </Scroll>
      </div>

      <button onClick={toggle} className="md:hidden cursor-pointer px-4 text-white">
        <img width="40px" src="/menu.svg" alt=""/>
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
      </div>
    </header>
  )
}

export default Header