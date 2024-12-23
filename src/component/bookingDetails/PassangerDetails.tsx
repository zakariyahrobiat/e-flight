import { FormEvent } from "react";
import { useAuth } from "../../hooks/useAuth"
import BookingInput from "../input/BookingInput";
const PassangerDetails = () => {
    const {setBookingTab, updateProgress, country, input, handleInputs, error, setError} = useAuth()
    const {name, surname, title, email, phoneNumber}= input
   
    const next =(e:FormEvent)=>{
e.preventDefault()
if(!email || !surname || !phoneNumber || !title || !name){
  setError("All fields are required. Please fill in the missing details.");
  return
}

setBookingTab("flightPurchase")
updateProgress()
    }
    //  setTimeout(next,100)
  return (
    <div className="pt-3 pb-20">
      {error && <div className="bg-red-600 text-white p-2 fixed top-16 z-20 w-2/3 md:w-1/3 left-1/2 transform -translate-x-1/2 text-lg font-semibold rounded-lg">{error}</div>}
     
      <p className="font-bold text-xl text-blue-900">Passenger details</p>
      <p className="text-sm font-normal text-blue-900">Name as on ID card/passport without title and punctuation</p>
      <form action="">
        <div className="grid grid-cols-2  gap-3 md:gap-5">
        <BookingInput variant="input" name="name" value={name} onChange={handleInputs} label="Name" placeholder="Input text"/>
        <BookingInput variant="input" name="surname" value={surname} onChange={handleInputs} label="Surname" placeholder="Input text"/>
        </div>
        <div className="grid grid-cols-3 gap-1 md:gap-5">
         <BookingInput variant="select" name="title" label="Title" placeholder="Input text" value={title} onChange={handleInputs} options={[{value:"mr", label:"Mr"}, {value:"miss", label:"Miss"},{value:"mrs", label:"Mrs"}]}/>
         <BookingInput variant="input" type="date" label="Birthday" placeholder="Input text"/>
         <BookingInput variant="select" label="Nationality" placeholder="Select" options={country.map((c)=>({value: c.name.common, label:c.name.common}))}/>
        </div>
     
      <div className="pt-3">
      <p className="font-bold text-xl text-blue-900 pb-3">Identity</p>
      <div className="bg-blue-50 p-2">
      <p className="font-semibold text-sm text-primary-700">Passport valid for at least 6 months from departure date is required for international travel or transit abroad

Make sure that the passenger's name is exactly as written in the government issued ID/Passport/Driving License. 
Avoid any mistake, because some airlines don't allow name corrections after booking.</p>
      
      </div>
      </div>
      
        <BookingInput variant="input" label="Passport number" placeholder="Input text"/>
        <div className="grid grid-cols-2 gap-3 md:gap-5">
        <BookingInput variant="input" label="Country of Issue" placeholder="Input text"/>
        <BookingInput variant="input" label="Passport Expiry Date" placeholder="Input text"/>
        </div>
     
      <div className="pt-3">
      <p className="font-bold text-xl text-blue-900">Contact details</p>
   
      <div className="grid grid-cols-2 gap-3 md:gap-5">
        <BookingInput variant="input" name="name" value={name} onChange={handleInputs} label="Name" placeholder="Input text"/>
        <BookingInput variant="input" label="Surname" name="surname"  value={surname} onChange={handleInputs} placeholder="Input text"/>
        </div>
        <div className="grid grid-cols-3 gap-1 md:gap-5">
         <BookingInput variant="select" name="title" value={title} onChange={handleInputs} label="Title" placeholder="Input text" options={[{value:"mr", label:"Mr"}, {value:"miss", label:"Miss"},{value:"mrs", label:"Mrs"}]}/>
         <BookingInput variant="input" type="email" name="email" value={email} onChange={handleInputs} label="Email" placeholder="Input text"/>
         <BookingInput variant="input" name="phoneNumber" value={phoneNumber} onChange={handleInputs} label="Phone number" placeholder="Input text"/>
        </div>
      
      </div>
      <button className="bg-blue-900 text-white font-bold text-base w-full mt-10 py-1" onClick={next}>Submit</button>
      </form>
       
    </div>
    
  )
}

export default PassangerDetails