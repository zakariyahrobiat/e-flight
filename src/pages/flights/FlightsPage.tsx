import NavBar from "../../component/NavBar"
import Footer from "../../component/Footer"
import BackgroundLayout from "../../Layout/BackgroundLayout"

import FlightListing from "../../component/flightListing/FlightListing"
const FlightsPage = () => {
  return (
    <BackgroundLayout>
        <NavBar/>
        <div className="hero-bg h-96 mt-16">
        <h1>Let's Discover your destination</h1>
        <p>We help you find flights easily and efficiently, we provide various flight recommendations that match what you want.</p>
       </div>
       <FlightListing/>
        <Footer/>
    </BackgroundLayout>
  )
}

export default FlightsPage