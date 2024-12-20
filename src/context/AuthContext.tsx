import { createContext, useState, useEffect} from "react";
import { PropsWithChildren } from "react";
import { registerUser, loginUser } from "../component/authService/Auth";

   const data = [
      { id: 1, name: "Naija Skies Airways", flightNumber: "NS123", departure: "10:00AM", arrival: "12:30PM", duration: "2 hr 30 min", stops: "direct", price: 150.00, weight: 25, departureCity: "Lagos", departureAirport: "Murtala Muhammed International Airport", arrivalCity: "Abuja", arrivalAirport: "Nnamdi Azikiwe International Airport", transit: null, stopInfo: "direct" },
      { id: 2, name: "SkyNaija Airlines", flightNumber: "SN456", departure: "12:00PM", arrival: "2:15PM", duration: "2 hr 15 min", stops: "1 stop", price: 180.00, weight: 20, departureCity: "Lagos", departureAirport: "Murtala Muhammed International Airport", arrivalCity: "Calabar", arrivalAirport: "Margaret Ekpo International Airport", transit: "Enugu", stopInfo: "transit" },
      { id: 3, name: "AeroNaija", flightNumber: "AN789", departure: "1:30PM", arrival: "3:45PM", duration: "2 hr 15 min", stops: "direct", price: 220.00, weight: 25, departureCity: "Abuja", departureAirport: "Nnamdi Azikiwe International Airport", arrivalCity: "Port Harcourt", arrivalAirport: "Port Harcourt International Airport", transit: null, stopInfo: "direct" },
      { id: 4, name: "AfroWings Airlines", flightNumber: "AW101", departure: "3:00PM", arrival: "4:40PM", duration: "1 hr 40 min", stops: "direct", price: 175.00, weight: 30, departureCity: "Lagos", departureAirport: "Murtala Muhammed International Airport", arrivalCity: "Enugu", arrivalAirport: "Akanu Ibiam International Airport", transit: null, stopInfo: "direct" },
      { id: 5, name: "NigeriaSky Airways", flightNumber: "NS102", departure: "4:00PM", arrival: "6:10PM", duration: "2 hr 10 min", stops: "1 stop", price: 190.00, weight: 20, departureCity: "Lagos", departureAirport: "Murtala Muhammed International Airport", arrivalCity: "Kaduna", arrivalAirport: "Kaduna International Airport", transit: "Kaduna", stopInfo: "transit" },
      { id: 6, name: "Naija Air", flightNumber: "NA303", departure: "6:00PM", arrival: "7:30PM", duration: "1 hr 30 min", stops: "direct", price: 160.00, weight: 25, departureCity: "Abuja", departureAirport: "Nnamdi Azikiwe International Airport", arrivalCity: "Lagos", arrivalAirport: "Murtala Muhammed International Airport", transit: null, stopInfo: "direct" },
      { id: 7, name: "JetNigeria", flightNumber: "JN404", departure: "7:00PM", arrival: "9:00PM", duration: "2 hr", stops: "direct", price: 210.00, weight: 25, departureCity: "Port Harcourt", departureAirport: "Port Harcourt International Airport", arrivalCity: "Abuja", arrivalAirport: "Nnamdi Azikiwe International Airport", transit: null, stopInfo: "direct" },
      { id: 8, name: "LagosFlight Airways", flightNumber: "LF505", departure: "8:00AM", arrival: "9:40AM", duration: "1 hr 40 min", stops: "direct", price: 250.00, weight: 20, departureCity: "Lagos", departureAirport: "Murtala Muhammed International Airport", arrivalCity: "Calabar", arrivalAirport: "Margaret Ekpo International Airport", transit: null, stopInfo: "direct" },
      { id: 9, name: "Naija Skies Airways", flightNumber: "NS506", departure: "9:00AM", arrival: "11:20AM", duration: "2 hr 20 min", stops: "1 stop", price: 160.00, weight: 20, departureCity: "Lagos", departureAirport: "Murtala Muhammed International Airport", arrivalCity: "Port Harcourt", arrivalAirport: "Port Harcourt International Airport", transit: "Enugu", stopInfo: "transit" },
      { id: 10, name: "SkyNaija Airlines", flightNumber: "SN607", departure: "10:30AM", arrival: "12:00PM", duration: "1 hr 30 min", stops: "direct", price: 180.00, weight: 25, departureCity: "Abuja", departureAirport: "Nnamdi Azikiwe International Airport", arrivalCity: "Lagos", arrivalAirport: "Murtala Muhammed International Airport", transit: null, stopInfo: "direct" },
      { id: 11, name: "AeroNaija", flightNumber: "AN708", departure: "11:00AM", arrival: "1:30PM", duration: "2 hr 30 min", stops: "direct", price: 200.00, weight: 25, departureCity: "Abuja", departureAirport: "Nnamdi Azikiwe International Airport", arrivalCity: "Enugu", arrivalAirport: "Akanu Ibiam International Airport", transit: null, stopInfo: "direct" },
      { id: 12, name: "AfroWings Airlines", flightNumber: "AW809", departure: "12:00PM", arrival: "1:30PM", duration: "1 hr 30 min", stops: "direct", price: 170.00, weight: 30, departureCity: "Lagos", departureAirport: "Murtala Muhammed International Airport", arrivalCity: "Abuja", arrivalAirport: "Nnamdi Azikiwe International Airport", transit: null, stopInfo: "direct" },
      { id: 13, name: "NigeriaSky Airways", flightNumber: "NS910", departure: "1:30PM", arrival: "4:00PM", duration: "2 hr 30 min", stops: "2 stops", price: 240.00, weight: 25, departureCity: "Abuja", departureAirport: "Nnamdi Azikiwe International Airport", arrivalCity: "Lagos", arrivalAirport: "Murtala Muhammed International Airport", transit: "Kaduna, Calabar", stopInfo: "transit" },
      { id: 14, name: "Naija Air", flightNumber: "NA102", departure: "2:00PM", arrival: "4:30PM", duration: "2 hr 30 min", stops: "direct", price: 190.00, weight: 25, departureCity: "Port Harcourt", departureAirport: "Port Harcourt International Airport", arrivalCity: "Lagos", arrivalAirport: "Murtala Muhammed International Airport", transit: null, stopInfo: "direct" },
      { id: 15, name: "JetNigeria", flightNumber: "JN203", departure: "3:30PM", arrival: "5:15PM", duration: "1 hr 45 min", stops: "1 stop", price: 210.00, weight: 20, departureCity: "Abuja", departureAirport: "Nnamdi Azikiwe International Airport", arrivalCity: "Port Harcourt", arrivalAirport: "Port Harcourt International Airport", transit: "Kaduna", stopInfo: "transit" },
      { id: 16, name: "LagosFlight Airways", flightNumber: "LF314", departure: "4:15PM", arrival: "6:45PM", duration: "2 hr 30 min", stops: "direct", price: 250.00, weight: 20, departureCity: "Calabar", departureAirport: "Margaret Ekpo International Airport", arrivalCity: "Abuja", arrivalAirport: "Nnamdi Azikiwe International Airport", transit: null, stopInfo: "direct" },
      { id: 17, name: "Naija Skies Airways", flightNumber: "NS415", departure: "5:00PM", arrival: "7:00PM", duration: "2 hr", stops: "direct", price: 175.00, weight: 20, departureCity: "Abuja", departureAirport: "Nnamdi Azikiwe International Airport", arrivalCity: "Enugu", arrivalAirport: "Akanu Ibiam International Airport", transit: null, stopInfo: "direct" },
      { id: 18, name: "SkyNaija Airlines", flightNumber: "SN516", departure: "6:00PM", arrival: "7:45PM", duration: "1 hr 45 min", stops: "direct", price: 180.00, weight: 25, departureCity: "Lagos", departureAirport: "Murtala Muhammed International Airport", arrivalCity: "Kaduna", arrivalAirport: "Kaduna International Airport", transit: null, stopInfo: "direct" },
      { id: 19, name: "AeroNaija", flightNumber: "AN617", departure: "7:00PM", arrival: "8:30PM", duration: "1 hr 30 min", stops: "direct", price: 200.00, weight: 25, departureCity: "Port Harcourt", departureAirport: "Port Harcourt International Airport", arrivalCity: "Lagos", arrivalAirport: "Murtala Muhammed International Airport", transit: null, stopInfo: "direct" },
      { id: 20, name: "AfroWings Airlines", flightNumber: "AW718", departure: "8:00PM", arrival: "9:30PM", duration: "1 hr 30 min", stops: "1 stop", price: 170.00, weight: 30, departureCity: "Lagos", departureAirport: "Murtala Muhammed International Airport", arrivalCity: "Enugu", arrivalAirport: "Akanu Ibiam International Airport", transit: "Abuja", stopInfo: "transit" }
   ];
   
   
 
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
    phoneNumber: string,
    startDate:string,
    endDate:string,
    password:string,
  }
   export interface flightCard{
      id: number; 
      name: string; 
      flightNumber: string;
       departure: string; 
       arrival: string; 
       duration: string; 
       stops: string; 
       price: number; 
       weight: number; 
       departureCity: string;
        departureAirport: string;
         arrivalCity: string; 
         arrivalAirport: string; 
      transit:null| string;
      stopInfo:string ;
   }
interface AppContextType{
dates:Date[],
flightDetail:flightCard[],
filteredFlight:flightCard[],
currentItems:()=>flightCard[],
currentFlightTransit:flightCard[],
next:()=>void,
previous:()=> void,
detail: flightCard | null
handleFlightDetail:(id:number)=> void
show: boolean,
setShow:(show:boolean)=>void
input: inputFields,
setInput:(input:inputFields)=>void,
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
  selectedFilter:string,
  searchCity:()=>void,
  token:null|string,
  setAuthStatus:(token:string)=>void
  isAuthenticated: boolean,
  setIsAuthenticated:(isAuthenticated:boolean)=>void
  login:(email: string, password: string)=>void,
  register:(email: string, password: string)=>void,
  error:string | null,
  setError:(error:string|null)=>void
}
export const AppContext = createContext<AppContextType>({
   dates:[],
   flightDetail:[],
   filteredFlight:[],
   currentItems:()=>[],
   currentFlightTransit:[],
   next:()=>{},
   previous:()=> {},
   detail: null,
   handleFlightDetail:()=>{},
   show:false,
   setShow:()=>{},
    input:{start:"", end:"",tripType:"" ,travelClass:"", number:0, name:"", surname:"", title:"", email:"", phoneNumber:"",startDate:"", endDate:"", password:""}, 
    setInput:()=>{},
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
    selectedFilter:"",
    searchCity:()=>{},
    token:null,
    setAuthStatus:()=>{},
    isAuthenticated:false,
     setIsAuthenticated:()=>{},
     login:()=>{},
     register:()=>{},
     error:null,
     setError:()=>{}
})
export const Context =(props:PropsWithChildren)=>{
   const [dates, setDate] = useState <Date[]>([])
   const [flightDetail, setflightDetail] = useState <flightCard[]>([])
  const [currentPage, setCurrentPage]= useState(0)
  const [detail, setDetail]= useState<flightCard | null>(null)
  const [show, setShow] = useState(false)
  const [input, setInput]= useState<inputFields>({start:"", end:"",tripType:"" ,travelClass:"", number:0, name:"", surname:"", title:"", email:"", phoneNumber:"", startDate:"", endDate:"", password:""})
  const [progress, setProgress]= useState(0)
  const [bookingTab, setBookingTab] = useState<"passangerDetail" | "flightPurchase" | "flightTicket">("passangerDetail");
  const [country, setCountry] = useState<Country[]>([])
  const [isAscendingChecked, setisAscendingChecked] = useState(false)
  const [isDecreasingChecked, setIsDecreasingChecked] = useState(false) 
const [filteredFlight, setFilteredFlights] = useState<flightCard[]>([]);
const [selectedFilter, setSelectedFilter] = useState<string>("");
const [filteredFlightsBase, setfilteredFlightsBase] = useState<flightCard[]>([])
const [currentFlightTransit, setCurrentTransit] = useState<flightCard[]>([])
const [token, setToken] = useState<string | null>(localStorage.getItem("token"))
const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!token)
const [error, setError] = useState<string | null>(null)
const setAuthStatus=(token:string)=>{
  localStorage.setItem("token",token)
  setToken(token)
  setIsAuthenticated(true) 
}
const login = async (email: string, password: string) => {
  try {
    const token = await loginUser({ email, password });
    if (token) {
      setAuthStatus(token);
    }
  } catch (error) {
    console.error("Login failed", error);
  }
};

// Handle register
const register = async (email: string, password: string) => {
  try {
    await registerUser({ email, password });
    // Optionally log the user in automatically after registration
    await login(email, password);
  } catch (error) {
    console.error("Registration failed", error);
  }
};


useEffect(() => {
  // Check if the token exists when the app loads
  if (token) {
    setIsAuthenticated(true);
  } else {
    setIsAuthenticated(false);
  }
}, [token])

const searchCity =()=>{
  const startCity = input.start.toLowerCase()
  const endCity = input.end.toLowerCase()
 let filteredCity = filteredFlightsBase.filter((item)=> item.departureCity.toLowerCase() === startCity && item.arrivalCity.toLowerCase() ===endCity)
 if (filteredCity.length === 0) {
  filteredCity = filteredFlightsBase;
}
if (selectedFilter) {
  filteredCity = filteredCity.filter((item) => item.stopInfo === selectedFilter);
}
setFilteredFlights(filteredCity);
setCurrentTransit(filteredCity);
}
  


const handleTransit = (type: string) => {
  if (selectedFilter === type) {
   
    setSelectedFilter("");
  } else {
    setSelectedFilter(type)
  
  }

 
};
useEffect(() => {
  searchCity();
}, [selectedFilter]);

useEffect(() => {
  setflightDetail(data);
  setFilteredFlights(data);
  setfilteredFlightsBase(data);
  setCurrentTransit(data)
}, [data]);

  const handlePriceInAscendingOrder = () => { 
    const sortFlightInAscendingOrder = [...filteredFlight].sort((a, b) => a.price - b.price);
    setFilteredFlights(sortFlightInAscendingOrder);
    setfilteredFlightsBase(sortFlightInAscendingOrder);
    setCurrentTransit(sortFlightInAscendingOrder)
    setisAscendingChecked(true);
    setIsDecreasingChecked(false);
  };
  
  const handlePriceInDecreasingOrder = () => { 
    const sortFlightInDescendingOrder = [...filteredFlight].sort((a, b) => b.price - a.price);
    setFilteredFlights(sortFlightInDescendingOrder);
    setfilteredFlightsBase(sortFlightInDescendingOrder);
    setCurrentTransit(sortFlightInDescendingOrder)
    setisAscendingChecked(false);
    setIsDecreasingChecked(true);
  };
  
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
  e.preventDefault()
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
    if ((currentPage + 1) * perPage < filteredFlight.length) {
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
        selectedFilter:selectedFilter,
        searchCity:searchCity,
         token:token,
         setAuthStatus:setAuthStatus,
         isAuthenticated:isAuthenticated,
         setIsAuthenticated:setIsAuthenticated,
         setInput:setInput,
         login:login,
         register:register,
         currentFlightTransit:currentFlightTransit,
         error:error,
         setError:setError
   }}>{props.children}</AppContext.Provider> 
}
