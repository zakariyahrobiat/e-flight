interface inputProps{
    label: string,
    // name: string,
    placeholder: string,
    type?: string
}

const CustomInput = (props:inputProps) => {
  return (
    <div className="w-full text-left">
      <label className="w-full font-semibold text-lg" htmlFor="input-data">{props.label}</label> 
      <input className="w-full my-3 py-1 px-5" type={`{$props.type == null ? "text" : props.type}`} name="" id="input-data" placeholder={props.placeholder} /> 
    </div>
  )
}

export default CustomInput