interface inputProps{
    label: string,
    placeholder: string,
    type?: string,
    
    variant?: "input" | "select",
    options?: {value:string, label:string}[]
}

const BookingInput = (props:inputProps) => {
  const {label, placeholder, type, variant,options} = props
  return (
    <div className="w-full text-left">
      <label className="w-full text-sm font-bold" htmlFor="input-data">{label}</label> 
      {variant === "input" ?(
      <input className="w-full my-1 md:my-3 py-1 px-2 md:px-5 bg-neutral-200 font-normal text-sm rounded-xl" type={type ? type : "text"} name="" id="input-data" placeholder={placeholder} /> 
      ):(
        <select name="" className="w-full my-1 md:my-3 py-1 px-2 md:px-5 bg-neutral-200 font-normal text-sm rounded-xl" id="input-data" >
          {options?.map((option,index)=>{
            const {value, label} = option
            return(
              <option key={index} value={value}>{label}</option>
            )
          }
          
          )}
        </select>
      )
}
    </div>
  )
}

export default BookingInput