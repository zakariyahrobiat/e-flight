import FlightCard from "./FlightCard"
import FlightFilter from "./FlightFilter"
import { FlightSort } from "./flightSort"

export default function FlightListing() {
  return (
    <div className="flex justify-between items-center w-screen mt-3">
     <FlightSort/>   
     <div>
        <FlightFilter/>
        <FlightCard/>
     </div>
    </div>
  )
}
