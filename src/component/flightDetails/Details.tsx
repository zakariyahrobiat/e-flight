import { useAuth } from "../../hooks/useAuth"
interface props{
    startLocation:string, endLocation: string,
    departureport:string | undefined,
    arrivalport:string | undefined,
}
export const Flight = ({startLocation, endLocation, arrivalport, departureport}:props) => {
    const {input, detail} = useAuth()

    const {travelClass, number} =input

  return (
    <div className="h-[42%] bg-blue-50 pl-3 py-0 w-full">
        <div className="flex justify-start h-full items-start gap-1"> 
            <div className="flex flex-col justify-between h-full">
                <p className="font-medium text-base text-primary-700">{detail?.departure}</p>
                <p className="text-sm font-normal text-neutral-900">{detail?.duration}"</p>
                <p className="font-medium text-base text-primary-700">{detail?.arrival}</p>
            </div>
            <div className="border h-full border-secondary-500"></div>
            <div>
            <p className="text-base font-medium text-neutral-900">{startLocation}</p>
        <p className="text-sm font-normal text-neutral-600">{departureport}</p>
        <div className="flex items-center gap-3 text-sm font-normal text-blue-900 pt-2 pb-0">
        <p>{detail?.flightNumber}</p>
        <p>{travelClass}</p>
        </div>
        <div className="flex gap-2 justify-between items-center w-full">
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
        <p className="text-base font-medium text-neutral-900 pt-1">{endLocation}</p>
        <p className="text-sm font-normal text-neutral-600">{arrivalport}</p>
        </div>
        </div>
        
       
               
        </div>
  )}



export  default function Details() {
    const {input, detail} = useAuth()
    const {tripType, start, end,} =input
    
  return (
    <div className="h-full">
  <Flight startLocation={start} departureport={detail?.departureAirport} arrivalport={detail?.arrivalAirport}
            endLocation={end} />
  {tripType === "two-ways" && (
    <div className="h-full">
        <div className="flex justify-between items-center bg-blue-50 py-1 px-5 rounded-2xl my-2">
            <p className="text-sm font-normal text-neutral-900">Stop to change planes {detail?.arrivalCity}</p>
            <p className="text-sm font-medium text-neutral-900">{detail?.arrival}</p>
      
        </div>
    <Flight startLocation={end} 
            endLocation={start} departureport={detail?.arrivalAirport} arrivalport={detail?.departureAirport}/>
    </div>
    )}
  </div>
   )
}




   
 