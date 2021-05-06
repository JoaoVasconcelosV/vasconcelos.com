import { useState, useEffect } from 'react'
import Head from 'next/head'
import Typed from 'react-typed'
import {Link as Scroll} from 'react-scroll'

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
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <div id='main' className='bk-image text-white flex items-center justify-center flex-col h-screen'>
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
        
        <Scroll className="mt-20 animate-bounce" to="about" smooth={true} duration={500}>
          <button>
            <img src="/arrow-down.svg" alt="arrow down"/>
          </button>
        </Scroll>
      </div>
      <div id='about' className='min-h-screen flex flex-col items-center pt-20 text-center'>
        <h1>About</h1>
        <div className="flex inline flex-col xl:flex-row sm:justify-center sm:items-center m-auto md:mx-20 2xl:mx-96 flex-1">
          <img width="500rem" src="/word_laptop.svg" alt="Estudante" className="mr-3"/>
          <p className="text-white text-left md:text-2xl xl:text-xl ml-3">
            Sou desenvolvedor Júnior, tenho mais domínio na parte do Front-end mas já desenvolvi algumas aplicações em
            NodeJs. Atualmente estou focado em me aprofundar mais em ReactJs e pretendo quando já tiver um bom
            conhecimento consolidado, estudar React Native e me aprofundar em NodeJs, assim dominarei uma excelente
            stack JavaScript. Estou em busca de uma vaga para aprender com a empresa e também poder contribuir para o
            desenvolvimento ou manutenção de alguma aplicação!
          </p>
        </div>
      </div>
      <div id='projects' className='min-h-screen bg-backgroundColor2 flex flex-col items-center pt-20 text-center'>
        <h1>Projects</h1>
        <div className='flex flex-1 flex-wrap xl:mx-20 items-center justify-center'>
          <Card title="Portifolio" image="/img-portifolio.svg" githubLink="https://github.com/JoaoVasconcelosV/vasconcelos.com" liveLink="https://vasconcelos-com.vercel.app/"/>
          <Card title="Rick and Morty" image="/img-rick_and_morty.svg" githubLink="https://github.com/JoaoVasconcelosV/rick-and-morty" liveLink="https://rick-and-morty-joao.netlify.app/"/>
          <Card title="Podcastr" image="/img-podcastr.svg" githubLink="https://github.com/JoaoVasconcelosV/podcastr" liveLink="https://vasconcelos-com.vercel.app/"/>
          <Card title="Proffy" image="/img-proffy.svg" githubLink="https://github.com/JoaoVasconcelosV/proffy-nlw2" liveLink="podcastr-three-gold.vercel.app" />
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
