import { FaGreaterThan, FaLessThan } from "react-icons/fa"
import { useAuth } from "../../hooks/useAuth"
const FlightCard = () => {
 const {dates, currentItems,previous, next, handleFlightDetail}= useAuth()
  return (
<div className="mt-5">
  <div className="flex justify-between items-center bg-primary-700 md:px-2">
  {dates.map((item, index)=>{
    return(
      <div key={index} className="text-white p-2 active:bg-white active:text-primary-700 active:rounded-t-md text-sm font-medium mt-2"><button > {item.toDateString()}</button></div>
    )
   
})}
  </div>
<div className="mt-5 md:mt-0">
  {currentItems().map((item)=>{
    const {id, name, arrival, departure, duration, price, stops, weight} = item
    return(
     <div className="" key={id}>
      <div className="md:hidden mx-5 mb-3 p-5 shadow-3xl rounded-xl">
        <div className="flex justify-between items-center">
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-lg font-semibold">{price}USD</p> 
      </div>
      <div className="flex justify-between items-center"><p>{arrival}-{departure}</p> <p className="text-lg font-semibold">{duration}</p></div>
      <div className="flex justify-between items-center">
      <p className="text-lg font-semibold">{stops}</p>
      <button className="bg-primary-700 px-4 py-2 font-semibold rounded text-white" onClick={()=>handleFlightDetail(id)}>choose</button>
      </div>
      </div>
      <div  className="hidden md:flex py-2 w-full justify-between items-center">
<div className="w-2/5">
<p className="text-lg font-semibold">{name}</p>
<p className="font-semibold">{weight}kg</p>
</div>

<div className="w-2/5"><p className="text-lg font-semibold">{arrival}-{departure}</p> <p>{duration}</p></div>
<p className="w-1/5 text-lg font-semibold">{stops}</p>
<p className="w-1/5 text-lg font-semibold">{price}USD</p>
<button className="w-1/5 hidden md:block bg-primary-700 px-4 py-2 font-semibold rounded text-white" onClick={()=>handleFlightDetail(id)}>choose</button>
      </div>
      <hr className="w-full"/>
      </div>

    )
  })}

</div>

<div className="flex justify-center items-center space-x-3">
<FaLessThan className ="bg-primary-700 p-1 text-xl text-white" onClick={previous}/>
<FaGreaterThan className="bg-primary-700 p-1 text-xl text-white" onClick={next}/>
</div>
</div>

  )
}

export default FlightCard