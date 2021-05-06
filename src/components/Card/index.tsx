const Card = ({title, image}) => {
  return (
    <div className="mx-20">
      <h1 className="text-white">{title}</h1>
      <img src={image} alt="back"/>
    </div>
  )
}

export default Card