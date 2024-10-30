import { createContext, useState, useEffect } from "react";
import { PropsWithChildren } from "react";
interface AppContextType{
dates:Date[]
}
export const AppContext = createContext<AppContextType>({
   dates:[]
})
export const Context =(props:PropsWithChildren)=>{
   const [dates, setDate] = useState <Date[]>([])
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
      dates:dates
   }}>{props.children}</AppContext.Provider> 
}
