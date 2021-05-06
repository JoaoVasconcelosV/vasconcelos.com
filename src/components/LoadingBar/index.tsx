const LoadingBar = ({title, image, concluded}) => {
  const val = concluded + "%"

  return (
    <div className="md:mx-20">
      <div className="flex">
        <img src={image} alt="title"/>
        <h1 className="text-white ml-2">{title}</h1>
      </div>
      <div className="shadow h-5 w-80 bg-white mt-2">
        <div className="bg-blue h-5 text-xs leading-none py-1 text-center text-black" style={{width: val}}></div>
      </div>
    </div>
  )
}

export default LoadingBar