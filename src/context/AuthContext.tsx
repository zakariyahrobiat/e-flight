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
previous:()=> void
}
export const AppContext = createContext<AppContextType>({
   dates:[],
   flightDetail:[],
   currentItems:[],
   next:()=>{},
   previous:()=> {},
})
export const Context =(props:PropsWithChildren)=>{
   const [dates, setDate] = useState <Date[]>([])
   const [flightDetail, setflightDetail] = useState <flightCard[]>([])
  const [currentPage, setCurrentPage]= useState(0)
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
      previous:previous
   }}>{props.children}</AppContext.Provider> 
}
