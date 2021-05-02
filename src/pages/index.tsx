import { useState, useEffect } from 'react'

import { Header, Dropdown } from '../components'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', hideMenu)   
  },)

  return (
    <div> 
      <Header toggle={toggle}/>
      <Dropdown isOpen={isOpen}/>
      <div className='text-white flex items-center justify-center flex-col h-screen'>
        <img src="/perfil.svg" alt="Perfil"/>     
        <span className='sm:text-xl lg:text-5xl mt-5'>I am <span className='text-blue font-bold'>João Vasconcelos.</span></span>
        <button className='bg-black p-2 rounded-lg'>Download CV</button>
      </div>
      <div className='h-screen'>
        
      </div>
      <div className='h-screen bg-backgroundColor2'>
        
      </div>
      <div className='h-screen'>
        
      </div>
      <div className='h-screen bg-backgroundColor2'>
        
      </div>
    </div>
  )
}
