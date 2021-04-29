import { useState } from 'react'

const Header = () => {
  const [select, setSelect] = useState(0)

  return (
    <header className="container mx-auto relative flex flex-wrap items-center justify-between m-5">
      <div className="flex justify-center items-center">
        <a href="/">
          <img src="/logo.svg" alt="Logo"/>
        </a>
      </div>

      <div id="menu">
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
      <div className="space-x-2 flex flex-row">
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