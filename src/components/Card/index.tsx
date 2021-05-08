import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Card = (props) => {
  useEffect(()=> {
    Aos.init({ duration: 1300 })
  }, [])

  return (
    <div data-aos={props.animation} className="m-10 relative">
      <h3 className="text-white text-left">{props.title}</h3>
      <img className="opacity-50 hover:opacity-100 transition duration-200 md:h-56 2xl:h-80" src={props.image} alt={props.title}/>          
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
  )
}

export default Card