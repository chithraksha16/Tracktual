
const Footer = () => {
  return (
    <div className="w-full max-h-screen absolute bottom-0 flex flex-row justify-around items-center bg-gradient-to-r from-15% from-blue-500 to-black">
    <div className="flex">
      <h1 className="font-bold text-base">Tracktual</h1>
    </div>
    <div className="flex">
      <ul className="flex gap-3 text-sm sm:text-base">
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
