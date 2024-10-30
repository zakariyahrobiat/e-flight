import FlightCard from "./FlightCard"
import FlightFilter from "./FlightFilter"
import  FlightSort  from "./flightSort"

export default function FlightListing() {
  return (
    <div className="flex justify-between items-start w-full mt-3 space-x-5">
     <FlightSort/>   
     <div className="w-3/4 text-left">
        <FlightFilter/>
        <FlightCard/>
     </div>
    </div>
  )
}
