import NavBar from "../../component/NavBar"
import Footer from "../../component/Footer"
import BackgroundLayout from "../../Layout/BackgroundLayout"
import dashboard from "../../assets/dashboard.png"
import FlightListing from "../../component/flightListing/FlightListing"
const FlightsPage = () => {
  return (
    <BackgroundLayout>
        <NavBar/>
        <img src={dashboard} alt="" srcSet="" className="mt-16" />
       <FlightListing/>
        <Footer/>
    </BackgroundLayout>
  )
}

export default FlightsPage