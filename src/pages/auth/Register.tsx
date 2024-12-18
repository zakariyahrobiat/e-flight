import {useState} from "react"
import BackgroundLayout from "../../Layout/BackgroundLayout"
import NavBar from "../../component/NavBar"
import Footer from "../../component/Footer"
import InputContent from "../../component/input/InputContent"
import { registerUser } from "../../component/authService/Auth"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"




const Register = () => {
  const Navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const {input, setIsAuthenticated, setInput, handleGoogleAuth}= useAuth()
    const {email, password }= input

  const handleRegister =async(e:React.FormEvent)=>{
    e.preventDefault()
    if (!email || !password) {
      console.error("Email or password is missing");
      return;
  }
  setIsLoading(true);

try{
const user = await registerUser({email, password})
console.log("User registered:", user);
if (user){
  setInput ({...input, email: "", password: "" })
  setIsAuthenticated(true)
 Navigate ("/flights")

}

  }
  catch(error){
    console.error(error)
  }
}
  return (
    <BackgroundLayout>
<NavBar/>
<div className="mt-20 mx-5 md:w-1/2 md:mx-auto bg-neutral-150 shadow-3xl rounded p-5">
<form onSubmit={handleRegister}>
<InputContent heading="Sign up" button={isLoading ? "Signing up..." : "Sign up"} option="Register with your Google Account" onClick={handleGoogleAuth} discription="Already have an account?" link="/login" text="Sign in here"  isLoading={isLoading}/>
</form>
</div>
<Footer/>
    </BackgroundLayout>
  )
}

export default Register