import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Timeline = () => {
  useEffect(()=> {
    Aos.init({ duration: 1300})
  }, [])

  return (
    <div data-aos="fade-up" className="relative w-1/2 m-20">
      <div className="border-r-2 border-blue absolute h-full top-0" style={{left: 15}} />
      <ul className="list-none m-0 p-0">
        <li className="mb-2 h-40">
          <div className="flex items-center mb-1">
            <img src="/rocket.svg" alt="rocket" className="z-10 relative right-1 bottom-1"/>
            <div className="flex-1 ml-4 text-white dark:text-backgroundColor font-bold">"Always evolving"</div>
          </div>          
        </li>
        <li className="mb-2 h-40">
          <div className="ml-12 text-white dark:text-backgroundColor font-extralight">
            Bacharelado Ciência da Computação
          </div>
          <div className="flex items-center mb-1">
            <div className="bg-blue rounded-full h-8 w-8"></div>
            <div className="flex-1 ml-4 text-white dark:text-backgroundColor font-bold">Instituto Federal de Educação, Ciência e Tecnologia do Ceará</div>
          </div>
          <div className="ml-12 text-white dark:text-backgroundColor font-extralight">
            2017 - Atual
          </div>
        </li>
        <li className="mb-2 h-40">
          <div className="ml-12 text-white dark:text-backgroundColor font-extralight">
            Ensino médio
          </div>
          <div className="flex items-center mb-1">
            <div className="bg-blue rounded-full h-8 w-8"></div>
            <div className="flex-1 ml-4 text-white dark:text-backgroundColor font-bold">Helenita Lopes Gurgel Valente</div>
          </div>
          <div className="ml-12 text-white dark:text-backgroundColor font-extralight">
            2014 - 2017
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Timeline