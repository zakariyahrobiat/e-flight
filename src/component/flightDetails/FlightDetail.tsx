import { useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import { FaTimes } from "react-icons/fa"
import Details from "./Details"
import Benefit from "./Benefit"
import Refund from "./Refund"
import Reschedule from "./Reschedule"
import { Link } from "react-router-dom"

const FlightDetail = () => {
    const {detail, setShow, show} = useAuth()

   const [selectedTab, setSelectedTab]= useState<"flightDetails" | "benefit" | "refund" | "reschedule">("flightDetails")
    const tabContent ={
        flightDetails: <Details/>,
        benefit: <Benefit/>,
        refund: <Refund/>,
         reschedule: <Reschedule/>
    }
  return (
    <div >
       {detail && show && (
        <div className="fixed bg-white top-16 md:top-20 right-0 h-screen text-left w-full md:w-1/3">
        <div className="flex justify-between items-center w-full px-3 py-1">
        <p className="text-sm font-semibold">{detail.name}</p>
       <FaTimes onClick={()=>setShow(false)} className="text-sm font-thin"/>
       </div>
       <div className="flex gap-5 items-center text-sm font-normal px-3 pb-1">
        <button onClick={()=>setSelectedTab("flightDetails")}>Flight details</button>
        <button onClick={()=>setSelectedTab("benefit")}>Benefits</button>
        <button onClick={()=>setSelectedTab("refund")}>Refund</button>
        <button onClick={()=>setSelectedTab("reschedule")}>Reschedule</button>
       </div>
       <div className="h-[70%]">
       {tabContent[selectedTab]}
       </div>
       <div className="flex justify-between items-center px-3">
        <p className="text-3xl font-bold text-primary-700">${detail.price}</p>
       <Link to="/booking"><button className="bg-primary-700 text-white py-1 px-3 md:py-2 md:px-5 font-bold rounded-lg">Book now</button></Link>
       </div>
       </div>
       )}
    </div>
  )
}

export default FlightDetail