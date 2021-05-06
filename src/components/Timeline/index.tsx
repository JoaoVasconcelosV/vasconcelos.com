const Timeline = () => {
  return (
    <div className="relative w-1/2 m-20">
      <div className="border-r-2 border-blue absolute h-full top-0" style={{left: 15}}></div>
      <ul className="list-none m-0 p-0">
        <li className="mb-2 h-40">
          <div className="flex items-center mb-1">
            <div className="bg-blue rounded-full h-8 w-8"></div>
            <div className="flex-1 ml-4 text-white font-bold">"“Always evolving”</div>
          </div>          
        </li>
        <li className="mb-2 h-40">
          <div className="flex items-center mb-1">
            <div className="bg-blue rounded-full h-8 w-8"></div>
            <div className="flex-1 ml-4 text-white font-bold">Instituto Federal de Educação, Ciência e Tecnologia do Ceará</div>
          </div>
          <div className="ml-12 text-white font-extralight">
            2017 - Atual
          </div>
        </li>
        <li className="mb-2 h-40">
          <div className="flex items-center mb-1">
            <div className="bg-blue rounded-full h-8 w-8"></div>
            <div className="flex-1 ml-4 text-white font-bold">Helenita Lopes Gurgel Valente</div>
          </div>
          <div className="ml-12 text-white font-extralight">
            2014 - 2017
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Timeline