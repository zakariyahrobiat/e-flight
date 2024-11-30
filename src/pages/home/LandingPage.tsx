import NavBar from "../../component/NavBar"
import BackgroundLayout from "../../Layout/BackgroundLayout"
import dashboard from "../../assets/dashboard.png"
import Footer from "../../component/Footer"
import { Link } from "react-router-dom"
const LandingPage = () => {
  return (
    <BackgroundLayout>
        <NavBar/>
        <img src={dashboard} alt="" srcSet="" className="mt-16" />
      <Link to="/flights"> <button className="bg-secondary-500 text-white mt-5 font-bold px-5 py-3 rounded-xl">Get Stared</button></Link>
      
       <Footer/>
      
    </BackgroundLayout>
  )
}

export default LandingPage