import { useAuth } from "../../hooks/useAuth"
import { useRef, useEffect } from "react"
import logo from "../../assets/logo.png"
import JsBarcode from "jsbarcode"
interface BarcodeProps {
  value: string;       
  format?: string;     
  width?: number;      
  height?: number;     
  displayValue?: boolean; 
  lineColor?: string;
  fontSize?: number   
}


export const FlightTicketProps = ({value,
  format = "CODE128",
  width = 1,
  height = 40,
  displayValue = true,
  lineColor = "#000",
fontSize = 8}:BarcodeProps) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const svgRef2 = useRef<SVGSVGElement>(null);
    
    useEffect(() => {
      if (svgRef.current) {
        JsBarcode(svgRef.current, value, {
          format,
          width:0.8,
          height,
          displayValue,
          lineColor,
          fontSize
        });
      }
      if (svgRef2.current) {
        JsBarcode(svgRef2.current, value, {
          format,
          width,
          height,
          displayValue,
          fontSize,
          lineColor: "#6D31EDFF" , // Apply newColor to the second barcode
        });
      }
    }, [value, format, width, height, displayValue, lineColor]);
  
   
  const {detail, input}= useAuth()
  const {start, travelClass, number, end, name, surname, title} = input
  return (
    <div className="w-full">
     
      <div className="flex justify-between gap-2 md:gap-10 bg-slate-100 pl-2 md:pl-10 my-2 md:my-5 rounded-xl">
        <div className="flex justify-between items-center py-2 md:py-5  w-2/3">
        <div className="w-7/12">
        <p className="text-sm font-semibold text-neutral-700">{detail?.name}</p>
        <p className="py-1 md:py-2 text-xs md:text-sm font-normal text-neutral-500">Passenger:  <b className="text-xs md:text-base text-neutral-900 uppercase">{title} {name} {surname}</b></p>
        <p className="text-sm font-normal text-tertiary2-750 md:pb-2">{travelClass}</p>
        <div className="flex justify-between items-center py-1 md:py-2">
          <div>
            <p className=" text-xl md:text-3xl text-secondary-500 font-medium">23:15</p>
            <p className="text-xs md:text-sm font-medium text-neutral-900">{start}</p>
            <p className="text-xs md:text-sm font-normal text-neutral-500">9 Feb, 2023</p>
          </div>
          <div>
            <p className="text-xl md:text-3xl text-secondary-500 font-medium">1:25</p>
            <p className="text-xs md:text-sm font-medium text-neutral-900">{end}</p>
            <p className="text-xs md:text-sm font-normal text-neutral-500">10 Feb, 2023</p>
          </div>
        </div>
        <hr className="border-secondary-500 mx-2 md:mx-5" />
        <div className="text-center">
        <p className="text-sm font-normal text-neutral-900 py-2">2h10m</p>
        </div>
        <p className="text-sm font-normal text-neutral-900">Check-in: <b>9th Feb 2023 at 21:20</b></p>
        </div>
        <div className=" flex flex-col h-full justify-between items-end text-right w-5/12">
          <p className="rounded-xl p-1 text-xs font-normal bg-neutral-300">{number}x23kg</p>
          <div className="-rotate-90 -mr-9 md:-mr-14">
        <svg ref={svgRef}></svg>
        </div>
          <p className="text-xs md:text-sm text-neutral-550 font-normal">*All time displayed are local</p>
        </div>
        </div>
        <div className="bg-primary-700 w-1/3 rounded-xl pt-2 md:py-5 px-2 md:p-5">
        <div className="flex justify-center gap-5 items-center"> 
          <img src={logo} alt="" srcSet="" className="w-[10%]" />
        <p className="font-semibold text-xl text-white">E-flight</p>
        </div>
        <div className="py-1 md:py-2">
        <p className="text-sm py-1 text-neutral-550 font-medium">Booking ID</p>
        <p className="text-xl md:text-2xl text-neutral-550 font-medium">65980165 </p>
        </div>
        <div>
          <p className="text-sm text-neutral-550 font-medium">Airline Booking Code</p>
          <p className="text-xl md:text-2xl text-neutral-550 font-medium">CA-6018</p>
        </div>
        <div className="flex justify-center mt-1 md:mt-5">
        <svg ref={svgRef2}></svg>
       </div>
      </div>
      </div>
    </div>
  )
}
const FlightTicket =()=>{
  const {input} = useAuth()
  const {tripType} = input
  return(
    <div>
       <p className="font-semibold text-xl text-secondary-500">Your flight is booked sucessflly!</p>
       <p className="text-sm font-normal text-neutral-600">Present E-ticket and valid indentification at check-in</p>
      <FlightTicketProps value="EFLIGHT12345" />
      {tripType === "two-ways" && <FlightTicketProps value="EFLIGHT12345"/>}
    </div>
  )

}

export default FlightTicket