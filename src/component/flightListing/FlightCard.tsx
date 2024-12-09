import { FaGreaterThan, FaLessThan } from "react-icons/fa"
import { useAuth } from "../../hooks/useAuth"
const FlightCard = () => {
 const {dates, currentItems,previous, next, handleFlightDetail}= useAuth()
  return (
<div className="mt-5">
  <div className="flex justify-between items-center bg-primary-600 md:px-2">
  {dates.map((item, index)=>{
    return(
      <div key={index} className="text-white p-2 active:bg-white active:text-primary-600 active:rounded-t-md text-sm font-medium mt-2"><button > {item.toDateString()}</button></div>
    )
   
})}
  </div>
<div>
  {currentItems().map((item)=>{
    const {id, name, time, hours, price, type, weight} = item
    return(
     <div className="" key={id}>
      <div  className="flex py-2 w-full justify-between items-center">
<div className="w-2/5">
<p >{name}</p>
<p>{weight}kg</p>
</div>

<div className="w-2/5"><p>{time}</p> <p>{hours}</p></div>
<p className="w-1/5">{type}</p>
<p className="w-1/5 hidden md:block">{price}USD</p>
<button className="w-1/5 hidden md:block bg-primary-600 p-1 rounded text-white" onClick={()=>handleFlightDetail(id)}>choose</button>
<div className="w-1/5 md:hidden">
<p className="">{price}USD</p>
<button className=" bg-primary-600 p-1 rounded text-white" onClick={()=>handleFlightDetail(id)}>choose</button> 
</div>

      </div>
      <hr className="w-full"/>
      </div>

    )
  })}

</div>

<div className="flex justify-end items-center space-x-3">
<FaLessThan className ="bg-primary-500 p-1 text-xl text-white" onClick={previous}/>
<FaGreaterThan className="bg-primary-500 p-1 text-xl text-white" onClick={next}/>
</div>
</div>

  )
}

export default FlightCard