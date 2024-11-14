interface inputProps{
    label: string,
    placeholder: string,
    type?: string,
  
}

const CustomInput = (props:inputProps) => {
  const {label, placeholder, type} = props
  return (
    <div className="w-full text-left">
      <label className="w-full font-semibold text-lg" htmlFor="input-data">{label}</label> 
      <input className="w-full my-3 py-1 px-5" type={type ? type :"text"} name="" id="input-data" placeholder={placeholder} /> 
    </div>
  )
}

export default CustomInput