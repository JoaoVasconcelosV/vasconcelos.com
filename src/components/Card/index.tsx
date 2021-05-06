const Card = (props) => {
  return (
    <div className="m-10 relative">
      <h1 className="text-white text-left">{props.title}</h1>
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