import CustomInput from "./CustomInput"
import { Link } from "react-router-dom"
interface props{
   heading: string,
   button: string,
   option: string,
   discription: string,
   link: string,
   text: string 
}
const InputContent = ({heading, button, option, discription, link, text}:props) => {
  return (
    <div>
        <h1 className="text-2xl font-bold">{heading}</h1>
<CustomInput label="Username" placeholder="Mark"/>
<CustomInput label="Password" type="password" placeholder="********"/>
<button className="bg-primary-500 px-3 py-1 rounded text-white text-base font-bold">{button}</button>
<div className="flex justify-between items-center my-3">
    <hr className="w-full" />
    <p>or</p>
    <hr className="w-full"/>
</div>
<button className="bg-primary-500 px-3 py-1 rounded text-white text-base font-bold">{option}</button>
<div className="text-left pt-5">
<p>{discription} <Link to={link}><span className="text-primary-600 underline text-base font-semibold"></span></Link> </p>
</div>
    </div>
  )
}

export default InputContent