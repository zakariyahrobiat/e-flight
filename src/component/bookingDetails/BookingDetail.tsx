
import FlightBooking from "./flightBooking"
import FlightPrice from "./flightPrice"
const BookingDetail = () => {
 
  return (
    <div className="text-left px-4 w-full">
    
      <p className="mt-16 font-bold text-2xl text-neutral-900">My booking</p>
      
      <div className="flex w-full gap-10">
        <FlightBooking/>
        <FlightPrice/>

      </div>
  
    </div>
  )
}

export default BookingDetail