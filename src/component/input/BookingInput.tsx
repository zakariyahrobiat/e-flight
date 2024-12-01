interface inputProps{
    label: string,
    placeholder: string,
    type?: string,
    value?: string,
    name?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>void,
    variant?: "input" | "select",
    options?: {value:string, label:string}[]
}

const BookingInput = (props:inputProps) => {
  const {label, placeholder, type, variant,options, value, onChange, name} = props
  return (
    <div className="w-full text-left">
      <label className="w-full text-sm font-bold" htmlFor="input-data">{label}</label> 
      {variant === "input" ?(
      <input className="w-full my-1 md:my-3 py-1 px-2 md:px-5 bg-neutral-200 font-normal text-sm rounded-xl" value={value} onChange={onChange} type={type ? type : "text"} name={name} id="input-data" placeholder={placeholder} /> 
      ):(
        <select className="w-full my-1 md:my-3 py-1 px-2 md:px-5 bg-neutral-200 font-normal text-sm rounded-xl" value={value} name={name} onChange={onChange} id="input-data" >
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