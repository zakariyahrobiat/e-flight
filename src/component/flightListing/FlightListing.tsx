import FlightCard from "./FlightCard"
import FlightFilter from "./FlightFilter"
import FlightSort from "./FlightSort"
import FlightDetail from "./FlightDetail"

export default function FlightListing() {
  return (
    <div className="flex justify-between items-start w-full mt-3 md:space-x-5">
    <FlightSort/>
     <div className="w-full md:w-3/4 text-left">
        <FlightFilter/>
        <FlightCard/>
     </div>
     <FlightDetail></FlightDetail>
    </div>
  )
}
