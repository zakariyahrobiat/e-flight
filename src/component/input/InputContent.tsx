import CustomInput from "./CustomInput"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
interface props{
   heading: string,
   button: string,
   option: string,
   discription: string,
   link: string, 
   text:string,
   onClick:()=>void,
}
const InputContent = ({heading, button, option, discription, link, text, onClick}:props) => {
  const {input, handleInputs} = useAuth()
  return (
    <div>
        <h1 className="text-2xl font-bold">{heading}</h1>
       
        <button onClick={onClick} className="bg-white border border-primary-500 px-3 py-3 my-3 w-full rounded text-primary-500 text-2xl font-medium">{option}</button>
        <div className="flex justify-between items-center my-3">
    <hr className="w-full" />
    <p>or</p>
    <hr className="w-full"/>
</div>
<CustomInput label="Username" placeholder="Mark" name="email" value={input.email} onChange={handleInputs}/>
<CustomInput label="Password" type="password" placeholder="********" name="password" value={input.password} onChange={handleInputs}/>
<button className="bg-primary-500 px-3 py-1 rounded text-white text-base font-bold">{button}</button>


<div className="text-left pt-5">
<p>{discription} <Link to={link}><span className="text-primary-600 underline text-base font-semibold">{text}</span></Link> </p>
</div>
    </div>
  )
}

export default InputContent