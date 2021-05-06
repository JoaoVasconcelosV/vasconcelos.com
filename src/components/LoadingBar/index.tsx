const LoadingBar = ({title, image, concluded}) => {
  return (
    <div className="md:mx-20">
      <div className="flex">
        <img src={image} alt="title"/>
        <h1>{title}</h1>
      </div>
      <div className="shadow w-80 bg-white mt-2">
        <div className="bg-blue text-xs leading-none py-1 text-center text-black" style={{width: concluded}}></div>
      </div>
    </div>
  )
}

export default LoadingBar