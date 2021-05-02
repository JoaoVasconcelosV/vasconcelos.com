import { useState } from 'react'

type HeaderProps = {
  toggle: () => void;
}

const Header = ({toggle}: HeaderProps) => {
  const [select, setSelect] = useState(0)

  return (
    <header className="flex justify-between items-center bg-backgroundColor h-16 fixed w-screen lg:px-24 py-10">
      <div className="flex justify-center items-center">
        <a href="/">
          <img src="/logo.svg" alt="Logo"/>
        </a>
      </div>

      <button onClick={toggle} className="md:hidden cursor-pointer px-4 text-white">
        <img width="40px" src="/menu.svg" alt=""/>
      </button>

      <div className="md:block hidden"> 
        <ul className="pl-4 space-x-2 flex flex-row text-white font-extralight">
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#about">
            <li>Projects</li>
          </a>
          <a href="#about">
            <li>Timeline</li>
          </a>
          <a href="#about">
            <li>Skills</li>
          </a>
        </ul>
      </div>
      <div className="space-x-2 md:flex flex-row hidden">
        <a href="">
          <img src="/linkedin_icon.svg" alt="Linkedin"/>
        </a>
        <a href="">
          <img src="/instagram_icon.svg" alt="Instagram"/>
        </a>
        <a href="">
          <img src="/github_icon.svg" alt="Github"/>
        </a>
      </div>
    </header>
  )
}

export default Header