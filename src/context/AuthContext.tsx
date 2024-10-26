import { createContext, useContext } from "react";
import { PropsWithChildren } from "react";
interface AppContextType{

}
const AppContext = createContext<AppContextType>({})
export const Context =(props:PropsWithChildren)=>{
   return  <AppContext.Provider value={{}}>{props.children}</AppContext.Provider> 
}
export const useAuth =()=>{
   return useContext(AppContext)
}