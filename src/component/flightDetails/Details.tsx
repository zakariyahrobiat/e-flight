import { useAuth } from "../../hooks/useAuth"

export const Flight = () => {
    const {input, detail} = useAuth()

    const {start, travelClass, number, end} =input

  return (
    <div className="h-[42%] bg-neutral-100 px-3 py-0">
        <div className="flex justify-start h-full items-start space-x-3"> 
            <div className="flex flex-col justify-between h-full">
                <p className="font-medium text-base text-secondary-500">{detail?.departure}</p>
                <p className="text-sm font-normal text-neutral-900">{detail?.duration}"</p>
                <p className="font-medium text-base text-secondary-500">{detail?.arrival}</p>
            </div>
            <div className="border h-full border-secondary-500"></div>
            <div>
            <p className="text-base font-medium text-neutral-900">{start}</p>
        <p className="text-sm font-normal text-neutral-600">{detail?.departureAirport}</p>
        <div className="flex items-center space-x-3 text-sm font-normal text-primary-600 pt-2 pb-1">
        <p>{detail?.flightNumber}</p>
        <p>{travelClass}</p>
        </div>
        <div className="flex space-x-3">
            <div>
            <p className="text-sm text-primary-600 font-normal">Baggage <span className="text-neutral-700">{number} x 25kg</span></p>
            <p className="text-sm text-primary-600 font-normal">Cabin Baggage <span className="text-neutral-700">1 x 7 kg</span></p>
            </div>
            <div>
                <p className="text-sm text-primary-600 font-normal">Airbus <span className="text-sm text-neutral-700 font-normal">A320</span></p>
                <p className="text-sm text-neutral-600 font-normal">3-3 seat layout</p>
                <p className="text-xs text-neutral-600 font-medium">29 inches Seat pitch (standard)</p>
            </div>
        </div>
        <p className="text-base font-medium text-neutral-900 pt-1">{end}</p>
        <p className="text-sm font-normal text-neutral-600">{detail?.arrivalAirport}</p>
        </div>
        </div>
        
       
               
        </div>
  )}



export  default function Details() {
    const {input, detail} = useAuth()
    const {tripType} =input
  return (
    <div className="h-full">
  <Flight/>
  {tripType === "two-ways" && (
    <div className="h-full">
        <div className="flex justify-between items-center bg-neutral-200 py-1 px-5 rounded-2xl my-2">
            <p className="text-sm font-normal text-neutral-900">Stop to change planes {detail?.arrivalCity}</p>
            <p className="text-sm font-medium text-neutral-900">{detail?.arrival}</p>
      
        </div>
    <Flight />
    </div>
    )}
  </div>
   )
}




   
 