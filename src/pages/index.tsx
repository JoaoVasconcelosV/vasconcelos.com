import { useState, useEffect } from 'react'
import Head from 'next/head'
import Typed from 'react-typed'

import { Header, Dropdown, Card, LoadingBar, Timeline } from '../components'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
  }, [isOpen])

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
      <Head>
        <title>Home | Vasconcelos</title>
      </Head>

      <Header toggle={toggle}/>
      <Dropdown isOpen={isOpen}/>
      <div className='bk-image text-white flex items-center justify-center flex-col h-screen'>
        <img src="/perfil.svg" alt="Perfil"/>     
        <span className='sm:text-xl lg:text-5xl mt-5'>
            I am <Typed 
              className='text-blue font-bold' 
              strings={["João Vasconcelos.", "Front-end developer.", "Student."]} 
              typeSpeed={100} 
              backSpeed={80} 
              loop 
            />
        </span>
        <a href="http://drive.google.com/uc?export=download&id=1O9g2tjeEjeKYCi_tf6YYJhDNeSGC6vpp">
          <button className='bg-black m-3 p-2 rounded-lg hover:bg-backgroundColor2 hover:text-blue'>
            Download CV
          </button>
        </a>
      </div>
      <div id='about' className='min-h-screen flex flex-col items-center pt-20 text-center'>
        <h1>About</h1>
        <div className="flex inline flex-col xl:flex-row sm:justify-center sm:items-center m-auto md:mx-20 2xl:mx-96 flex-1">
          <img width="500rem" src="/word_laptop.svg" alt="Estudante" className="mr-3"/>
          <p className="text-white text-left md:text-2xl xl:text-xl ml-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </p>
        </div>
      </div>
      <div id='projects' className='min-h-screen bg-backgroundColor2 flex flex-col items-center pt-20 text-center'>
        <h1>Projects</h1>
        <div className='flex flex-1 flex-wrap mx-20 2xl:mx-80 justify-center'>
          <Card title="Rick and Morty" image="/word_laptop.svg"/>
          <Card title="Projeto2" image="/word_laptop.svg"/>
          <Card title="Projeto3" image="/word_laptop.svg"/>
          <Card title="Projeto4" image="/word_laptop.svg"/>
        </div>
      </div>
      <div id='skills' className='h-screen flex flex-col items-center pt-20 text-center'>
        <h1>Skills</h1>
        <div className='flex flex-1 flex-wrap mx-20 2xl:mx-80 items-center justify-center'>
          <LoadingBar title="HTML" image="/html_icon.svg" concluded={80}/>
          <LoadingBar title="CSS" image="/css_icon.svg" concluded={75}/>
          <LoadingBar title="JavaScript" image="/js_icon.svg" concluded={70}/>
          <LoadingBar title="ReactJS" image="/react_icon.svg" concluded={50}/>
        </div>
      </div>
      <div id='timeline' className='h-screen bg-backgroundColor2 flex flex-col items-center pt-20'>
        <h1>Timeline</h1>
        <Timeline />
      </div>
    </div>
  )
}
