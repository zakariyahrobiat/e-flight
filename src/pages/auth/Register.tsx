
import BackgroundLayout from "../../Layout/BackgroundLayout"
import NavBar from "../../component/NavBar"
import Footer from "../../component/Footer"
import InputContent from "../../component/input/InputContent"
import { googleUser } from "../../component/authService/Auth"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../../component/authService/Auth"


const Register = () => {
  const navigate = useNavigate()
  
 
  const {input, setIsAuthenticated,setError, error, setIsLoading, isLoading}= useAuth()
    const {email, password }= input
const handleGoogleRegistration = async () => {
  setIsLoading(true);
  // setError(null); // Reset error state
  try {
    const user = await googleUser();
    if (user) {
      setIsAuthenticated(true);
      navigate("/flights");
    }
  } catch (err) {
    console.error("Google registration failed:", err);
    // setError("Google registration failed. Please try again.");
  } finally {
    setIsLoading(false); // Reset loading state
  }
};
const handleRegister = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);
  if (!email || !password) {
    setError("Please enter both email and password.");
    return;
  }
  try {
    await registerUser(email, password);
    setError("User registered successfully!");
    navigate("/flights")
  } catch (error: any) {
    setError(error.message || "Registration failed.");
  }
};
//   const handleRegister =async(e:React.FormEvent)=>{
//     e.preventDefault()
//     if (!email || !password) {
//       console.error("Email or password is missing");
//       setError("Email and password are required.");
//       return;
//   }
//   if (password.length < 6) {
//     setError("Password must be at least 6 characters long.");
//     return;
//   }
//   const normalizedEmail = email.trim().toLowerCase();
//   setIsLoading(true);
//   setError(null)

// try{
//  await register(normalizedEmail, password)
 
//  setInput({...input, email:"", password:""})
//  navigate("/flights")

//   }
//   catch(error:any){
//     console.error("Error during registration:", error.message)
//     setError(error.message || "Registration failed. Please try again.");
//   }
//   finally {
//     setIsLoading(false); 
//   }
// }
  return (
    <BackgroundLayout>
<NavBar/>


<div className="mt-24 mx-5 md:w-1/2 md:mx-auto bg-neutral-150 shadow-3xl rounded p-5">
{error && <div className="bg-red-600 text-white p-2 fixed top-16 z-20 w-2/3 md:w-1/3 left-1/2 transform -translate-x-1/2 text-lg font-semibold rounded-lg">{error}</div>}
<form onSubmit={handleRegister}>
<InputContent heading="Sign up" button={isLoading ? "Signing up..." : "Sign up"} option="Register with your Google Account" onClick={handleGoogleRegistration} discription="Already have an account?" link="/login" text="Sign in here"/>
</form>
</div>
<Footer/>
    </BackgroundLayout>
  )
}

export default Register