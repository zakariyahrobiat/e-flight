import { useAuth } from "../../hooks/useAuth"
interface props{
    startDate:string,
    endDate: string,
    hours: string,
}

export const Flight = ({startDate, endDate, hours}:props) => {
    const {input} = useAuth()
    const {start, travelClass, number, end} =input

  return (
    <div className="h-[42%] bg-neutral-100 px-3 py-1">
        <div className="flex justify-start h-full items-start space-x-3"> 
            <div className="flex flex-col justify-between h-full">
                <p className="font-medium text-base text-secondary-500">{startDate}</p>
                <p className="text-sm font-normal text-neutral-900">{endDate}"</p>
                <p className="font-medium text-base text-secondary-500">{hours}</p>
            </div>
            <div className="border h-full border-secondary-500"></div>
            <div>
            <p className="text-base font-medium text-neutral-900">{start}</p>
        <p className="text-sm font-normal text-neutral-600">George Bush Intercontinental Airport, Houston</p>
        <div className="flex items-center space-x-3 text-sm font-normal text-primary-600 pt-2 pb-1">
        <p>CA-6018</p>
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
        <p className="text-sm font-normal text-neutral-600">McCarran International Airport, Las Vegas</p>
        </div>
        </div>
        
       
               
        </div>
  )}



export  default function Details() {
    const {input} = useAuth()
    const {tripType} =input
  return (
    <div className="h-full">
  <Flight startDate="23:15" endDate="2h10" hours="1:25"/>
  {tripType === "two-ways" && (
    <div className="h-full">
        <div className="flex justify-between items-center bg-neutral-200 py-1 px-5 rounded-2xl my-2">
            <p className="text-sm font-normal text-neutral-900">Stop to change planes in Las Vegas</p>
            <p className="text-sm font-medium text-neutral-900">22:55</p>
      
        </div>
    <Flight startDate="14:30" endDate="2h10" hours="1:25"/>
    </div>
    )}
  </div>
   )
}




   
 