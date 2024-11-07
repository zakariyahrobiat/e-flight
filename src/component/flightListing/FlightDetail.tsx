import { useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import { FaTimes } from "react-icons/fa"

const FlightDetail = () => {
    const {detail, setShow, show, input} = useAuth()
    const {start, travelClass, number, end, tripType} =input
   const [selectedTab, setSelectedTab]= useState<"flightDetails" | "benefit" | "refund" | "reschedule">("flightDetails")
    const tabContent ={
        flightDetails:(
            <div className="h-full bg-neutral-100 px-3 py-1">
        <div className="flex justify-start h-[42%] items-start space-x-3"> 
            <div className="flex flex-col justify-between h-full">
                <p className="font-medium text-base text-secondary-500">23:15</p>
                <p className="text-sm font-normal text-neutral-900">2h10"</p>
                <p className="font-medium text-base text-secondary-500">1:25</p>
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
        
        {tripType === "two-ways" && (
            <div className="h-[42%]"><div className="flex justify-between items-center bg-neutral-200 py-1 px-5 rounded-2xl my-2">
            <p className="text-sm font-normal text-neutral-900">Stop to change planes in Las Vegas</p>
            <p className="text-sm font-medium text-neutral-900">22:55</p>
        </div>
                    <div className="flex justify-start items-start space-x-3 h-full">
                        
                        <div className="flex flex-col justify-between h-full">
                            <p className="font-medium text-base text-secondary-500">14:30</p>
                            <p className="text-sm font-normal text-neutral-900">2h05"</p>
                            <p className="font-medium text-base text-secondary-500">16:35</p>
                        </div>
                        <div className="border h-full border-secondary-500"></div>
                        <div>
                            <p className="text-base font-medium text-neutral-900">{end}</p>
                            <p className="text-sm font-normal text-neutral-600">McCarran International Airport, Las Vegas</p>
                            <div className="flex items-center space-x-3 text-sm font-normal text-primary-600 pt-2 pb-1">
                                <p>CA-6020</p>
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
                            <p className="text-base font-medium text-neutral-900 pt-2">{start}</p>
                            <p className="text-sm font-normal text-neutral-600">George Bush Intercontinental Airport, Houston</p>
                        </div>
                    </div>
                    </div>
                )}
               
        </div>
        ),
        benefit: <div><p>Benefit details of choosing {detail?.name} airline.</p></div>,
        refund: <div><p>Refund policies for {detail?.name}.</p></div>,
        reschedule: <div><p>Rescheduling options for {detail?.name}.</p></div>,
    }
  return (
    <div >
       {detail && show && (
        <div className="md:w-1/3 absolute bg-white top-16 right-0 h-screen text-left">
        <div className="flex justify-between items-center w-full px-3 py-1">
        <p className="text-sm font-semibold">{detail.name}</p>
       <FaTimes onClick={()=>setShow(false)} className="text-sm font-thin"/>
       </div>
       <div className="flex space-x-5 items-center text-sm font-normal px-3 pb-1">
        <button onClick={()=>setSelectedTab("flightDetails")}>Flight details</button>
        <button onClick={()=>setSelectedTab("benefit")}>Benefits</button>
        <button onClick={()=>setSelectedTab("refund")}>Refund</button>
        <button onClick={()=>setSelectedTab("reschedule")}>Reschedule</button>
       </div>
       <div className="h-3/4">
       {tabContent[selectedTab]}
       
       </div>
       <div className="flex justify-between items-center mt-1">
        <p className="text-xl font-semibold text-tertiary2-750">${detail.price}</p>
        <button className="bg-primary-500 text-sm font-normal text-white py-1 px-2 rounded-2xl">Book now</button>
       </div>
       </div>
       )}
    </div>
  )
}

export default FlightDetail