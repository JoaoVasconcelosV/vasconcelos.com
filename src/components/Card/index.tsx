import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Card = (props) => {
  useEffect(()=> {
    Aos.init({ duration: 1300 })    
  }, [])

  return (
    <div data-aos={props.animation} id="card" className="md:h-56 2xl:h-72 m-10 relative">      
      <img className="opacity-90 md:h-56 2xl:h-72" src={props.image} alt={props.title}/>
      <div id="hover" className="
        bg-gradient-to-r 
        from-gray-900 
        via-gray-800 
        to-gray-700 
        h-full 
        w-full 
        absolute 
        duration-300
        opacity-0 
        transform
        translate-y-full                  
        bottom-0 
        text-white 
        flex 
        items-center
        justify-center"
      >
        <h2>{props.title}</h2>
        <div className="absolute bottom-2 left-2 flex">
          <a className="mx-1 transform hover:scale-150 transition duration-200" href={props.githubLink} target="_blank"> 
            <img src="/github_icon.svg" alt="github icon"/>
          </a>
          { props.liveLink ?
          <a className="mx-1 transform hover:scale-150 transition duration-200" href={props.liveLink} target="_blank">
            <img src="/link_icon.svg" alt="link icon"/>
          </a> 
          :
          ''
          }
        </div>
      </div>                         
    </div>
  )
}

export default Card