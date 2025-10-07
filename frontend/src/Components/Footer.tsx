
const Footer = () => {
  return (
    <div className="w-full h-auto absolute bottom-0 flex flex-row justify-around items-center p-1.5 bg-gradient-to-r from-15% from-blue-500 to-black">
    <div className="flex">
      <h1 className="font-bold text-base">Tracktual</h1>
    </div>
    /*todo:responsive footer */
    <div className="flex">
      <ul className="flex gap-3 text-sm">
      <li><a href="">Home</a></li>
      <li><a href="">Tarck</a></li>
      <li><a href="">Term & services</a></li>
      <li><a href="">About</a></li>
      </ul>
    </div>
    </div>
  )
}

export default Footer
