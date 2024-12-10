import { createContext, useState, useEffect} from "react";
import { PropsWithChildren } from "react";
import FlightDetail from "../component/flightDetails/FlightDetail";
import FlightCard from "../component/flightListing/FlightCard";

const data =[
   {
     id:1,
     name:"HorizonJet",
   weight:25,
     time:"10:25PM - 7:06AM",
     hours:"10 hr 41 min",
     price:275.5,
     type:"direct"
   },
   {
     id:2,
     name:"Altitude Airways",
     weight:25,
     time:"6:30AM - 7:55AM",
     hours:"3 hr 25 min",
     price:296,
     type:"1 stop"
   },
   {
     id:3,
     name:"Cloudy Airlines",
     weight:25,
     time:"6:30AM - 7:55AM",
     hours:"3 hr 25 min",
     price:236,
     type:"2 stop"
   }
   ,
   {
     id:4,
     name:"Altitude Airways",
     weight:25,
     time:"6:30AM - 7:55AM",
     hours:"3 hr 25 min",
     price:217,
     type:"direct"
   }
   ,
   {
     id:5,
     name:"Altitude Airways",
     weight:25,
     time:"6:30AM - 7:55AM",
     hours:"3 hr 25 min",
     price:256,
     type:"1 stop"
   }
   ,
   {
     id:6,
     name:"Altitude Airways",
     weight:25,
     time:"6:30AM - 7:55AM",
     hours:"3 hr 25 min",
     price:213,
     type:"2 stop"
   }
   ,
   {
     id:7,
     name:"Altitude Airways",
     weight:25,
     time:"6:30AM - 7:55AM",
     hours:"3 hr 25 min",
     price:219,
     type:"direct"
   }
   ,
   {
     id:8,
     name:"Altitude Airways",
     weight:25,
     time:"6:30AM - 7:55AM",
     hours:"3 hr 25 min",
     price:268,
     type:"1 stop"
   },
   {
      id:9,
      name:"Altitude Airways",
    weight:25,
      time:"10:25PM - 7:06AM",
      hours:"10 hr 41 min",
      price:299.5,
      type:"2 stop"
    },
    {
      id:10,
      name:"HorizonJet",
      weight:25,
      time:"6:30AM - 7:55AM",
      hours:"3 hr 25 min",
      price:276,
      type:"direct"
    },
    {
      id:11,
      name:"HorizonJet",
      weight:25,
      time:"6:30AM - 7:55AM",
      hours:"3 hr 25 min",
      price:226,
      type:"1 stop"
    }
    ,
    {
      id:12,
      name:"Altitude Airways",
      weight:25,
      time:"6:30AM - 7:55AM",
      hours:"3 hr 25 min",
      price:214,
      type:"2 stop"
    }
    ,
    {
      id:13,
      name:"Altitude Airways",
      weight:25,
      time:"6:30AM - 7:55AM",
      hours:"3 hr 25 min",
      price:208,
      type:"direct"
    }
    ,
    {
      id:14,
      name:"Altitude Airways",
      weight:25,
      time:"6:30AM - 7:55AM",
      hours:"3 hr 25 min",
      price:296,
      type:"1 stop"
    }
    ,
    {
      id:15,
      name:"Altitude Airways",
      weight:25,
      time:"6:30AM - 7:55AM",
      hours:"3 hr 25 min",
      price:263,
      type:"2 stop"
    }
    ,
    {
      id:16,
      name:"Altitude Airways",
      weight:25,
      time:"6:30AM - 7:55AM",
      hours:"3 hr 25 min",
      price:272,
      type:"direct"
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
    name: string,
    surname: string,
    title: string,
    email: string,
    phoneNumber: string
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
filteredFlight:flightCard[],
currentItems:()=>flightCard[],
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
country:Country[],
handlePriceInAscendingOrder:()=>void,
handlePriceInDecreasingOrder:()=>void,
isAscendingChecked:boolean,
  isDecreasingChecked:boolean,
  handleTransit:(type:string)=>void, 
  selectedFilter:string
}
export const AppContext = createContext<AppContextType>({
   dates:[],
   flightDetail:[],
   filteredFlight:[],
   currentItems:()=>[],
   next:()=>{},
   previous:()=> {},
   detail: null,
   handleFlightDetail:()=>{},
   show:false,
   setShow:()=>{},
    input:{start:"", end:"",tripType:"" ,travelClass:"", number:0, name:"", surname:"", title:"", email:"", phoneNumber:""}, 
   handleInputs:()=>{},
   progress:0,
   updateProgress:()=>{},
   bookingTab:"passangerDetail", 
   setBookingTab:()=>{},
   country:[],
   handlePriceInAscendingOrder:()=>{},
   handlePriceInDecreasingOrder:()=> {},
   isAscendingChecked:false,
    isDecreasingChecked: false,
    handleTransit:()=>{},
    selectedFilter:""
})
export const Context =(props:PropsWithChildren)=>{
   const [dates, setDate] = useState <Date[]>([])
   const [flightDetail, setflightDetail] = useState <flightCard[]>([])
  const [currentPage, setCurrentPage]= useState(0)
  const [detail, setDetail]= useState<flightCard | null>(null)
  const [show, setShow] = useState(false)
  const [input, setInput]= useState<inputFields>({start:"", end:"",tripType:"" ,travelClass:"", number:0, name:"", surname:"", title:"", email:"", phoneNumber:"" })
  const [progress, setProgress]= useState(0)
  const [bookingTab, setBookingTab] = useState<"passangerDetail" | "flightPurchase" | "flightTicket">("passangerDetail");
  const [country, setCountry] = useState<Country[]>([])
  const [isAscendingChecked, setisAscendingChecked] = useState(false)
  const [isDecreasingChecked, setIsDecreasingChecked] = useState(false) 
const [filteredFlight, setFilteredFlights] = useState<flightCard[]>([]);
const [selectedFilter, setSelectedFilter] = useState<string>("");
const handleTransit = (type: string) => {
  if (selectedFilter === type){
    setSelectedFilter("")
    setFilteredFlights(flightDetail)
  }
  else{
    setSelectedFilter(type)
    const filteredItem = flightDetail.filter((item)=>item.type === type)
    setFilteredFlights(filteredItem)
  }

 
};
useEffect(() => {
  setflightDetail(data);
  setFilteredFlights(data);
}, []);

  const handlePriceInAscendingOrder =()=>{  
const sortFlightInAscendingOrder = [...flightDetail].sort((a, b)=> a.price-b.price)
setflightDetail(sortFlightInAscendingOrder)
setisAscendingChecked(true)
setIsDecreasingChecked(false)
  }
  const handlePriceInDecreasingOrder=()=>{
const sortFlightInDecreasingOrder = [...flightDetail].sort((a,b)=>b.price-a.price)
setflightDetail(sortFlightInDecreasingOrder)
setisAscendingChecked(false)
setIsDecreasingChecked(true)
  }
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
  const currentItems =():flightCard[]=>{
   const startIndex = currentPage * perPage
  return filteredFlight.slice(startIndex,  startIndex + perPage)
  }

 

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
       country:country,
       handlePriceInAscendingOrder:handlePriceInAscendingOrder,
       handlePriceInDecreasingOrder:handlePriceInDecreasingOrder,
       isAscendingChecked:isAscendingChecked,
        isDecreasingChecked:isDecreasingChecked,
        handleTransit:handleTransit,
        filteredFlight:filteredFlight,
        selectedFilter:selectedFilter
   }}>{props.children}</AppContext.Provider> 
}
