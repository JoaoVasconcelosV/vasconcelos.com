import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const LoadingBar = ({title, image, concluded, animation}) => {
  useEffect(()=> {
    Aos.init({ duration: 1300 })
  }, [])

  const val = concluded + "%"

  return (
    <div data-aos={animation} className="md:mx-20">
      <div className="flex">
        <img src={image} alt="title"/>
        <h1 className="text-white dark:text-backgroundColor ml-2">{title}</h1>
      </div>
      <div className="shadow h-5 w-80 bg-white dark:bg-backgroundColor2 mt-2">
        <div className="bg-blue h-5 text-xs leading-none py-1 text-center text-black" style={{width: val}}></div>
      </div>
    </div>
  )
}

export default LoadingBar