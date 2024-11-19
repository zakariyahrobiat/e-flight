import { createContext, useState, useEffect, useMemo } from "react";
import { PropsWithChildren } from "react";
const data =[
   {
     id:1,
     name:"HorizonJet",
   weight:25,
     time:"10:25PM - 7:06AM",
     hours:"10 hr 41 min",
     price:275.5,
     type:"1 stop"
   },
   {
     id:2,
     name:"Altitude Airways",
     weight:25,
     time:"6:30AM - 7:55AM",
     hours:"3 hr 25 min",
     price:206,
     type:"1 stop"
   },
   {
     id:3,
     name:"Cloudy Airlines",
     weight:25,
     time:"6:30AM - 7:55AM",
     hours:"3 hr 25 min",
     price:206,
     type:"1 stop"
   }
   ,
   {
     id:4,
     name:"Altitude Airways",
     weight:25,
     time:"6:30AM - 7:55AM",
     hours:"3 hr 25 min",
     price:206,
     type:"1 stop"
   }
   ,
   {
     id:5,
     name:"Altitude Airways",
     weight:25,
     time:"6:30AM - 7:55AM",
     hours:"3 hr 25 min",
     price:206,
     type:"1 stop"
   }
   ,
   {
     id:6,
     name:"Altitude Airways",
     weight:25,
     time:"6:30AM - 7:55AM",
     hours:"3 hr 25 min",
     price:206,
     type:"1 stop"
   }
   ,
   {
     id:7,
     name:"Altitude Airways",
     weight:25,
     time:"6:30AM - 7:55AM",
     hours:"3 hr 25 min",
     price:206,
     type:"1 stop"
   }
   ,
   {
     id:8,
     name:"Altitude Airways",
     weight:25,
     time:"6:30AM - 7:55AM",
     hours:"3 hr 25 min",
     price:206,
     type:"1 stop"
   },
   {
      id:9,
      name:"Altitude Airways",
    weight:25,
      time:"10:25PM - 7:06AM",
      hours:"10 hr 41 min",
      price:275.5,
      type:"1 stop"
    },
    {
      id:10,
      name:"HorizonJet",
      weight:25,
      time:"6:30AM - 7:55AM",
      hours:"3 hr 25 min",
      price:206,
      type:"1 stop"
    },
    {
      id:11,
      name:"HorizonJet",
      weight:25,
      time:"6:30AM - 7:55AM",
      hours:"3 hr 25 min",
      price:206,
      type:"1 stop"
    }
    ,
    {
      id:12,
      name:"Altitude Airways",
      weight:25,
      time:"6:30AM - 7:55AM",
      hours:"3 hr 25 min",
      price:206,
      type:"1 stop"
    }
    ,
    {
      id:13,
      name:"Altitude Airways",
      weight:25,
      time:"6:30AM - 7:55AM",
      hours:"3 hr 25 min",
      price:206,
      type:"1 stop"
    }
    ,
    {
      id:14,
      name:"Altitude Airways",
      weight:25,
      time:"6:30AM - 7:55AM",
      hours:"3 hr 25 min",
      price:206,
      type:"1 stop"
    }
    ,
    {
      id:15,
      name:"Altitude Airways",
      weight:25,
      time:"6:30AM - 7:55AM",
      hours:"3 hr 25 min",
      price:206,
      type:"1 stop"
    }
    ,
    {
      id:16,
      name:"Altitude Airways",
      weight:25,
      time:"6:30AM - 7:55AM",
      hours:"3 hr 25 min",
      price:206,
      type:"1 stop"
    }
   ]
   interface Country{
    name:{
      common: string
    }
  }
   interface inputFields {
    start: string;
    end: string;
    tripType: string;
    travelClass: string;
    number: number;
  }
   export interface flightCard{
      id: number;
      name: string;
      weight: number;
      time: string;
      hours: string;
      price: number;
      type: string;  
   }
interface AppContextType{
dates:Date[],
flightDetail:flightCard[],
currentItems:flightCard[],
next:()=>void,
previous:()=> void,
detail: flightCard | null
handleFlightDetail:(id:number)=> void
show: boolean,
setShow:(show:boolean)=>void
input: inputFields
handleInputs:(e:React.ChangeEvent<HTMLInputElement| HTMLSelectElement>)=>void,
progress:number,
updateProgress:()=>void,
bookingTab: "passangerDetail" | "flightPurchase" | "flightTicket",
setBookingTab:(bookingTab:"passangerDetail" | "flightPurchase" | "flightTicket")=>void,
country:Country[]
}
export const AppContext = createContext<AppContextType>({
   dates:[],
   flightDetail:[],
   currentItems:[],
   next:()=>{},
   previous:()=> {},
   detail: null,
   handleFlightDetail:()=>{},
   show:false,
   setShow:()=>{}, input:{start:"", end:"",tripType:"" ,travelClass:"", number:0}, handleInputs:()=>{},
   progress:0,
   updateProgress:()=>{},
   bookingTab:"passangerDetail", 
   setBookingTab:()=>{},
   country:[]
})
export const Context =(props:PropsWithChildren)=>{
   const [dates, setDate] = useState <Date[]>([])
   const [flightDetail, setflightDetail] = useState <flightCard[]>([])
  const [currentPage, setCurrentPage]= useState(0)
  const [detail, setDetail]= useState<flightCard | null>(null)
  const [show, setShow] = useState(false)
  const [input, setInput]= useState<inputFields>({start:"", end:"",tripType:"" ,travelClass:"", number:0 })
  const [progress, setProgress]= useState(0)
  const [bookingTab, setBookingTab] = useState<"passangerDetail" | "flightPurchase" | "flightTicket">("passangerDetail");
  const [country, setCountry] = useState<Country[]>([])
  const fetchApi = async()=>{
const url="https://restcountries.com/v3.1/all"
const fetchUrl = await fetch(url) 
const data = await fetchUrl.json()
const sortedData = data.sort((a: Country, b: Country) => 
  a.name.common.localeCompare(b.name.common)
);

setCountry(sortedData)

  }
  useEffect(()=>{
    fetchApi()
  },[])
  const updateProgress=()=>{
    setProgress(progress=>(progress < 100 ? progress + 50 : 0))
  }
const handleInputs =(e:React.ChangeEvent<HTMLInputElement| HTMLSelectElement>)=>{
const {value, name} = e.target
setInput((input)=>({...input, [name]:value}))
}
  const handleFlightDetail=(id:number)=>{
    const flight = flightDetail.find((item)=> item.id === id)
   if (flight) {
    
  setDetail(flight) 
  setShow(true)
  console.log(flight);
   
  }
}
  const perPage = 8;

   const currentItems = useMemo(() => {
    const startPage = perPage * currentPage;
    const endPage = startPage + perPage;
    return flightDetail.slice(startPage, endPage);
  }, [currentPage, flightDetail]);

  const next = () => {
    if ((currentPage + 1) * perPage < flightDetail.length) {
      setCurrentPage(currentPage + 1)
    }
  };

  const previous = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage-1);
    }
  };


   const generateDates = (): Date[]=>{
     const dates: Date[]=[]
     const today = new Date()
     for (let i =0; i<5; i++){
       const newDate = new Date(today);
 newDate.setDate(today.getDate() + i);
 dates.push(newDate)
     }
     return dates
   }
 
   useEffect(()=>{
     setDate(generateDates())
     setflightDetail(data)
   },[])
  
   return  <AppContext.Provider value={{
      dates:dates,
      flightDetail:flightDetail,
      currentItems:currentItems,
      next:next,
      previous:previous,
      detail:detail,
      handleFlightDetail: handleFlightDetail,
      show:show,
       setShow:setShow, input:input, handleInputs:handleInputs,
       progress:progress, updateProgress:updateProgress,
       bookingTab:bookingTab,
       setBookingTab:setBookingTab,
       country:country
   }}>{props.children}</AppContext.Provider> 
}
