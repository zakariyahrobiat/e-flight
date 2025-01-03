import sort from "../../assets/sort.png"
import filter from "../../assets/filter.png"
import { useAuth } from "../../hooks/useAuth"
const FlightSort = () => {
    const {handlePriceInAscendingOrder, handlePriceInDecreasingOrder, isAscendingChecked, isDecreasingChecked, handleTransit, selectedFilter, detail} = useAuth()
    return (
        <div className="w-1/4 text-left hidden md:block ">
     
            <div className="flex justify-start items-center w-full space-x-1 pb-1">
                <img src={sort} alt="" srcSet="" className="w-5" />
                <p className="text-lg font-semibold text-neutral-700">Sort by</p>
            </div>
            <hr className="w-full "/>
            <div className="pt-1 pb-5">
                <p className="text-base font-semibold">Price</p>
                <div>
                    <div className="flex space-x-2 items-center py-2 ">
                    <input type="radio" name="low" id="low" onChange={handlePriceInAscendingOrder} checked={isAscendingChecked} />
                    <label htmlFor="low" className="text-sm font-normal text-neutral-900">Lowest price</label>
                    </div>
                    <div className="flex space-x-2 items-center">
                    <input type="radio" name="high" id="high" onChange={handlePriceInDecreasingOrder}checked={isDecreasingChecked} />
                    <label htmlFor="high" className="text-sm font-normal text-neutral-900">Highest price</label>
                    </div>
                </div>
            </div>
            <div className="flex justify-start items-center w-full space-x-1 pb-1">
                <img src={filter} alt="" srcSet="" className="w-5"/>
                <p>Filters</p>
            </div>
            <hr className="w-full"/>
            <div className="pt-1">
                <p className="text-base font-semibold">No. of transit</p>
                <div className="pb-1">
                    <div className="flex space-x-2 items-center py-2">
                    <input type="checkbox" name="direct" id="" checked={selectedFilter === "direct"} onChange={()=>handleTransit("direct")} />
                    <label htmlFor="direct"className="text-sm font-normal text-neutral-900">Direct</label>
                    </div>
                    <div className="flex space-x-2 items-center">
                    <input type="checkbox" name="transit" id="" checked={selectedFilter=== "transit"} onChange={()=>handleTransit("transit")} />
                    <label htmlFor="transit" className="text-sm font-normal text-neutral-900">Transit</label>
                    </div>
                </div>
                <hr className="w-full"/>
                </div>
               
                    {detail && detail.transit &&(
                        <div>
                         <div className="pt-1">
                <p className="text-base font-semibold">Transit point</p>
                <div className="pb-1">
                    <div className="flex space-x-2 items-center py-2">
                
                    
                    <input type="checkbox" name="pointA" id="" />
                   
                    <label htmlFor="pointA" className="text-sm font-normal text-neutral-900">{detail.transit.split(",")[0]}</label>
                    </div>
                    {detail.stops === "2 stops" &&(
                    <div className="flex space-x-2 items-center">
                    <input type="checkbox" name="pointB" id="" />
                    <label htmlFor="pointB" className="text-sm font-normal text-neutral-900">{detail.transit.split(",")[1]}</label>
                    </div>
                    )}
                </div>
                <hr className="w-full"/>
                </div>
                 <div className="pt-1">
                 <p className="text-base font-semibold">Transit duration</p>
                 <div>
                     <input type="range" name="" id="" className="w-full" />
                 </div>
             </div>
             </div>
                    )}
               
               
    </div>
      )
    }

export default FlightSort


  