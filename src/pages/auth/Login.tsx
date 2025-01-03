import Footer from "../../component/Footer"
import NavBar from "../../component/nav/NavBar"
import BackgroundLayout from "../../Layout/BackgroundLayout"
import InputContent from "../../component/input/InputContent"
import { loginUser } from "../../component/authService/Auth"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { googleUser } from "../../component/authService/Auth"
const Login = () => {
  const navigate = useNavigate()
  const {input, error, setError, setAuthStatus}= useAuth()
    const {email,password} = input

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
     
      } catch (error: any) {
        setError("Google login failed. Please try again.");
      }
    };
    const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
      if (!email || !password) {
        setError("Please enter both email and password.");
        return;
      }
    
      try {
        const token = await loginUser(email, password);
        console.log("User logged in with token:", token);
        setAuthStatus(token);
        navigate("/flights")
        setError("Login successful!");
      } catch (error: any) {
        setError(error.message || "Login failed.");
      }
    };
  
  return (
    <BackgroundLayout>
      <NavBar/>
      <div className="mt-24 mx-5 md:w-1/2 md:mx-auto bg-neutral-150 shadow-3xl rounded p-5">
      {error && <div className="bg-red-600 text-white p-2 fixed top-16 z-20 w-2/3 md:w-1/3 left-1/2 transform -translate-x-1/2 text-lg font-semibold rounded-lg">{error}</div>}
      <form onSubmit={handleLogin}>
      <InputContent heading="Sign in" button="Sign in" option="Login with your Google Account" discription="Need an account?" link="/register" text="Sign up here" onClick={handleGoogleLogin}/>
      </form>
      </div>
      <Footer/>
    </BackgroundLayout>
  )
}

export default Login