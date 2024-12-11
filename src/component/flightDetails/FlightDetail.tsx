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
        <div className="absolute bg-white top-16 right-0 h-screen text-left">
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
       <div className="flex justify-between items-center mt-1 px-3">
        <p className="text-xl font-semibold text-tertiary2-750">${detail.price}</p>
       <Link to="/booking"><button className="bg-primary-500 text-sm font-normal text-white py-1 px-2 rounded-2xl">Book now</button></Link>
       </div>
       </div>
       )}
    </div>
  )
}

export default FlightDetail