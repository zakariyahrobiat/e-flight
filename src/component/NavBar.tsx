
import logo from "../assets/logo.png"
import notification from "../assets/notification.png"
import world from "../assets/world.png"
import person from "../assets/person.jpg"

const NavBar = () => {
  return (

        <nav className="flex justify-between items-center w-full bg-white shadow-3xl px-4 py-3 fixed left-0 top-0 z-10">
        <div className="flex justify-start items-center space-x-2">
            <img src={logo} alt="" srcSet="" className="w-[10%]" />
            <p className="font-semibold text-xl text-secondary-500">E-flight</p>
        </div>
        <div className="flex justify-end items-center space-x-5">
          <img src={world} alt="" srcSet="" className="w-[10%]"/>  
       <img src={notification} alt="" srcSet="" className="w-[10%]"/>
       <img src={person} alt="" srcSet="" className="w-[10%]"/>
        </div>
        </nav>

   
  )
}

export default NavBar