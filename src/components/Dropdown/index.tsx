type DropdownProps = {
  isOpen: boolean,
}

const Dropdown = ({isOpen}: DropdownProps) => {
  return (
    <div className={isOpen 
      ? 
      "flex flex-col fixed text-center text-white bg-backgroundColor2 items-center rounded-lg w-screen mt-20" 
      : 
      "hidden"
    }>
      <a className="p-2" href="/">About</a>
      <a className="p-2" href="/">Projects</a>
      <a className="p-2" href="/">Timeline</a>
      <a className="p-2" href="/">Skills</a>
      <div className="flex p-2">
        <a className="p-1" href="">
          <img src="/linkedin_icon.svg" alt="Linkedin"/>
        </a>
        <a className="p-1" href="">
          <img src="/instagram_icon.svg" alt="Instagram"/>
        </a>
        <a className="p-1" href="">
          <img src="/github_icon.svg" alt="Github"/>
        </a>
      </div>
    </div>
  )
}

export default Dropdown