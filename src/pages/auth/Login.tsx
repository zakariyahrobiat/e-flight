import Footer from "../../component/Footer"
import NavBar from "../../component/NavBar"
import BackgroundLayout from "../../Layout/BackgroundLayout"
import InputContent from "../../component/input/InputContent"

import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { googleUser } from "../../component/authService/Auth"
const Login = () => {
  const navigate = useNavigate()
  const {input, login, error, setError, setAuthStatus}= useAuth()
    const {email,password} = input
    const checkIfUserExists = async (email: string) => {
      try {
        const response = await fetch(`/api/check-user/${email}`); // Your API endpoint to check if user exists
        const data = await response.json();
        return data.exists; // Assuming your API returns { exists: true/false }
      } catch (error) {
        console.error("Error checking user", error);
        return false;
      }
    };
    const handleGoogleLogin = async () => {
      try {
        const response = await googleUser();
        if (response){
          const {token} = response
          setAuthStatus(token)
          navigate("/flights");
        }
        else {
          setError("Google login failed. Please try again.");
        }
     
      } catch (error) {
        console.error("Google login failed", error);
        setError("Google login failed. Please try again.");
      }
    };
const handleLogin = async(e:React.FormEvent)=>{
  e.preventDefault()
  if(!email || !password){
    setError("Email or password is missing");
    return;
  }
  try{
    const userExists = await checkIfUserExists(email); // Make an API call to check if the user is registered
    if (!userExists) {
      setError("User not registered. Please sign up.");
      return;
    }
await login(email, password)
navigate("/flights")
  } catch(error){
    console.error("Login failed", error)
    setError("Login failed. Please check your credentials.")
  }
   

}
  
  return (
    <BackgroundLayout>
      <NavBar/>
      <div className="mt-24 mx-5 md:w-1/2 md:mx-auto bg-neutral-150 shadow-3xl rounded p-5">
      {error && <div className="bg-red-600 text-white p-2 absolute top-16 z-20 w-2/3 md:w-1/3 left-1/2 transform -translate-x-1/2 text-lg font-semibold rounded-lg">{error}</div>}
      <form onSubmit={handleLogin}>
      <InputContent heading="Sign in" button="Sign in" option="Login with your Google Account" discription="Need an account?" link="/register" text="Sign up here" onClick={handleGoogleLogin}/>
      </form>
      </div>
      <Footer/>
    </BackgroundLayout>
  )
}

export default Login