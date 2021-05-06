type DropdownProps = {
  isOpen: boolean,
}

const Dropdown = ({isOpen}: DropdownProps) => {
  return (
    <div className={isOpen 
      ? 
      "flex flex-col fixed text-center text-white bg-backgroundColor2 items-center rounded-lg h-screen w-screen mt-20 z-20" 
      : 
      "hidden"
    }>
      <a className="p-5 hover:text-blue text-2xl" href="#about">About</a>
      <hr className="w-screen text-backgroundColor"/>
      <a className="p-5 hover:text-blue text-2xl" href="#projects">Projects</a>
      <hr className="w-screen text-backgroundColor"/>
      <a className="p-5 hover:text-blue text-2xl" href="#skills">Skills</a>      
      <hr className="w-screen text-backgroundColor"/>
      <a className="p-5 hover:text-blue text-2xl" href="#timeline">Timeline</a>
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