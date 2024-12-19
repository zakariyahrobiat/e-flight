import NavBar from "../../component/NavBar"
import Footer from "../../component/Footer"
import BackgroundLayout from "../../Layout/BackgroundLayout"

import FlightListing from "../../component/flightListing/FlightListing"
const FlightsPage = () => {
  return (
    <BackgroundLayout>
        <NavBar/>
        <div className="hero-bg mt-16 md:mt-24">
        <div className=" md:w-1/2 m-auto">
        <h1 className="text-4xl md:text-4xl font-bold text-blue-900">Let's Discover your destination</h1>
        <p className="text-xl py-5 text-blue-900 font-medium">We help you find flights easily and efficiently, we provide various flight recommendations that match what you want.</p>
       </div>
       <FlightListing/>
       </div>
        <Footer/>
    </BackgroundLayout>
  )
}

export default FlightsPage