
interface inputProps{
    label: string,
    placeholder: string,
    type?: string,
    name: string, 
    value: string
  onChange:(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>void
}

const CustomInput = (props:inputProps) => {
  
  const {label, placeholder, type, name, value, onChange} = props
 
  return (
    <div className="w-full text-left">
      <label className="w-full font-semibold text-lg" htmlFor="input-data">{label}</label> 
      <input className="w-full my-3 py-1 px-5" type={type ? type :"text"} name={name} value={value} id="input-data" placeholder={placeholder} onChange={onChange} /> 
    </div>
  )
}

export default CustomInput