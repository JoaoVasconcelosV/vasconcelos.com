import { Link as Scroll } from 'react-scroll'

type DropdownProps = {
  isOpen: boolean,
  toggle: () => void,
}

const Dropdown = ({isOpen, toggle}: DropdownProps) => {
  return (
    <div className={isOpen 
      ? 
      "flex flex-col fixed text-center text-white bg-backgroundColor2 items-center rounded-lg h-screen w-screen mt-20 z-20" 
      : 
      "hidden"
    }>
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
        <a className="p-5 transform hover:scale-125" href="">
          <img className="w-11" src="/linkedin_icon.svg" alt="Linkedin"/>
        </a>
        <a className="p-5 transform hover:scale-125" href="">
          <img className="w-11" src="/instagram_icon.svg" alt="Instagram"/>
        </a>
        <a className="p-5 transform hover:scale-125" href="">
          <img className="w-11" src="/github_icon.svg" alt="Github"/>
        </a>
      </div>
    </div>
  )
}

export default Dropdown