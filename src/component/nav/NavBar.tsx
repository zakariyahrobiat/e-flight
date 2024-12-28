import logo from "../../assets/logo.png"

import { Link } from "react-router-dom"

const NavBar = () => {
  return (

        <nav className="grid grid-cols-2 justify-between items-center w-full bg-white shadow-3xl px-4 py-3 fixed left-0 top-0 z-10">
           <Link to="/" className="flex justify-start items-center gap-2 ">
            <img src={logo} alt="" srcSet="" className="w-[10%]" />
            <p className="font-semibold text-xl text-secondary-500">E-flight</p>
        </Link>
        <div className="text-right">
               <Link to="/register">
       <button className="bg-primary-700 text-white py-1 px-3 md:py-2 md:px-5 font-bold rounded-lg">Get Started</button>
      
        </Link>
        </div>
        </nav>

   
  )
}

export default NavBar