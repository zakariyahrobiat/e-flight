import { useAuth } from "../../hooks/useAuth"
const BookingHeader = () => {
    const {progress} = useAuth()
  return (
    <div className="md:w-1/2 text-center m-auto">
      <input type="range" name="" min="0" max="100" id="" value={progress} className="w-full" />
      <div className="flex justify-between items-center">
        <p className="text-sm font-medium text-primary-500">Booking</p>
        <p className="text-sm font-medium text-primary-500">Purchase</p>
        <p className="text-sm font-medium text-primary-500">Get your E-ticket</p>
      </div>
      </div>
  )
}

export default BookingHeader