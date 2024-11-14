import BookingHeader from "./BookingHeader"
import FlightPurchase from "./FlightPurchase"
import FlightTicket from "./FlightTicket"
import PassangerDetails from "./PassangerDetails"
  import { useAuth } from "../../hooks/useAuth"  
const FlightBooking = () => {
  const {bookingTab} = useAuth()
 const tabContent = {
  passangerDetail:<PassangerDetails/>,
  flightPurchase:<FlightPurchase/>,
  flightTicket:<FlightTicket/>
 }


 
  return (
    <div className="w-full md:w-3/4">
       <BookingHeader/> 
       {tabContent[bookingTab as keyof typeof tabContent]}

      </div>
   
  )
}

export default FlightBooking