
import { useAuth } from "../../hooks/useAuth"
// const data =[
// {
//   id:1,
//   name:"HorizonJet",
//   time:"10:25PM - 7:06AM",
//   hours:"10 hr 41 min",
//   price:275.5,
//   type:"1 stop"
// },
// {
//   id:2,
//   name:"Altitude Airways",
//   time:"6:30AM - 7:55AM",
//   hours:"3 hr 25 min",
//   price:206,
//   type:"1 stop"
// },
// {
//   id:3,
//   name:"Cloudy Airlines",
//   time:"6:30AM - 7:55AM",
//   hours:"3 hr 25 min",
//   price:206,
//   type:"1 stop"
// }
// ,
// {
//   id:4,
//   name:"Altitude Airways",
//   time:"6:30AM - 7:55AM",
//   hours:"3 hr 25 min",
//   price:206,
//   type:"1 stop"
// }
// ,
// {
//   id:5,
//   name:"Altitude Airways",
//   time:"6:30AM - 7:55AM",
//   hours:"3 hr 25 min",
//   price:206,
//   type:"1 stop"
// }
// ,
// {
//   id:6,
//   name:"Altitude Airways",
//   time:"6:30AM - 7:55AM",
//   hours:"3 hr 25 min",
//   price:206,
//   type:"1 stop"
// }
// ,
// {
//   id:7,
//   name:"Altitude Airways",
//   time:"6:30AM - 7:55AM",
//   hours:"3 hr 25 min",
//   price:206,
//   type:"1 stop"
// }
// ,
// {
//   id:8,
//   name:"Altitude Airways",
//   time:"6:30AM - 7:55AM",
//   hours:"3 hr 25 min",
//   price:206,
//   type:"1 stop"
// }
// ]
const FlightCard = () => {
 const {dates}= useAuth()
  return (
<div className="mt-5">
  <div className="flex justify-between items-center bg-primary-600 px-2">
  {dates.map((item)=>{
    return(
      <div className="text-white p-2 active:bg-white active:text-primary-600 active:rounded-t-md text-sm font-medium mt-2"><button > {item.toDateString()}</button></div>
    )
   
})}
  </div>
</div>
  )
}

export default FlightCard