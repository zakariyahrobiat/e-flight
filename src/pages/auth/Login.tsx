import Footer from "../../component/Footer"
import NavBar from "../../component/NavBar"
import BackgroundLayout from "../../Layout/BackgroundLayout"
import InputContent from "../../component/input/InputContent"

import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { googleUser } from "../../component/authService/Auth"
const Login = () => {
  const navigate = useNavigate()
  const {input, login}= useAuth()
    const {email,password} = input
  
    const handleGoogleLogin = async () => {
      try {
        const user = await googleUser();
        if (user) {
          navigate("/flights");
        }
      } catch (error) {
        console.error("Google login failed", error);
      }
    };
const handleLogin = async(e:React.FormEvent)=>{
  e.preventDefault()
  if(!email || !password){
    console.error("Email or password is missing");
    return;
  }
  try{
await login(email, password)
navigate("/flights")
  } catch(error){
    console.error("Login failed", error)
  }

  
  
   

}
  
  return (
    <BackgroundLayout>
      <NavBar/>
      <div className="mt-24 mx-5 md:w-1/2 md:mx-auto bg-neutral-150 shadow-3xl rounded p-5">
      <form onSubmit={handleLogin}>
      <InputContent heading="Sign in" button="Sign in" option="Login with your Google Account" discription="Need an account?" link="/register" text="Sign up here" onClick={handleGoogleLogin}/>
      </form>
      </div>
      <Footer/>
    </BackgroundLayout>
  )
}

export default Login