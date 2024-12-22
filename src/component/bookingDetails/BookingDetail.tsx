
import FlightBooking from "./FlightBooking"
import FlightPrice from "./FlightPrice"
const BookingDetail = () => {
 
  return (
    <div className="text-left px-4 w-full hero-bg">
    
      <p className="mt-16 md:mt-20 font-bold text-2xl text-blue-900">My booking</p>
      
      <div className="flex w-full gap-10">
        <FlightBooking/>
        <FlightPrice/>

      </div>
  
    </div>
  )
}

export default BookingDetail