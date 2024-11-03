interface inputProps{
    label: string,
    // name: string,
    placeholder: string,
    type?: string
}

const CustomInput = (props:inputProps) => {
  return (
    <div className="w-full text-left">
      <label className="w-full" htmlFor="input-data">{props.label}</label> 
      <input className="w-full" type={`{$props.type == null ? "text" : props.type}`} name="" id="input-data" placeholder={props.placeholder} /> 
    </div>
  )
}

export default CustomInput