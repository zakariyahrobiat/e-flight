import { useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import { FaTimes } from "react-icons/fa"

const FlightDetail = () => {
    const {detail, setShow, show} = useAuth()
   const [selectedTab, setSelectedTab]= useState<"flightDetails" | "benefit" | "refund" | "reschedule">("flightDetails")
    const tabContent ={
        flightDetails:(
        <div>{detail?.name}</div>
        ),
        benefit: <div><p>Benefit details of choosing {detail?.name} airline.</p></div>,
        refund: <div><p>Refund policies for {detail?.name}.</p></div>,
        reschedule: <div><p>Rescheduling options for {detail?.name}.</p></div>,
    }
  return (
    <div >
       {detail && show && (
        <div className="w-1/3 absolute bg-white top-16 right-0 h-screen text-left p-1">
        <div className="flex justify-between items-center w-full">
        <p className="text-sm font-semibold">{detail.name}</p>
       <FaTimes onClick={()=>setShow(false)} className="text-sm font-thin"/>
       </div>
       <div className="flex space-x-5 items-center">
        <button onClick={()=>setSelectedTab("flightDetails")}>Flight details</button>
        <button onClick={()=>setSelectedTab("benefit")}>Benefits</button>
        <button onClick={()=>setSelectedTab("refund")}>Refund</button>
        <button onClick={()=>setSelectedTab("reschedule")}>Reschedule</button>
       </div>
       {tabContent[selectedTab]}
       </div>
       )}
    </div>
  )
}

export default FlightDetail