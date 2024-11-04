import BackgroundLayout from "../../Layout/BackgroundLayout"
import NavBar from "../../component/NavBar"
import Footer from "../../component/Footer"
import CustomInput from "../../component/input/CustomInput"
import { Link } from "react-router-dom"
const Register = () => {
  return (
    <BackgroundLayout>
<NavBar/>
<div className="mt-20 mx-2 md:w-1/2 md:mx-auto bg-neutral-150 shadow-3xl rounded p-5">
<h1 className="text-2xl font-bold">Sign Up</h1>
<CustomInput label="Username" placeholder="Mark"/>
<CustomInput label="Password" type="password" placeholder="********"/>
<button className="bg-primary-500 px-3 py-1 rounded text-white text-base font-bold">Register</button>
<div className="flex justify-between items-center my-3">
    <hr className="w-full" />
    <p>or</p>
    <hr className="w-full"/>
</div>
<button className="bg-primary-500 px-3 py-1 rounded text-white text-base font-bold">Register with Google Account</button>
<div className="text-left pt-5">
<p>Already have and account? <Link to="/login"><span className="text-primary-600 underline">Sign in here</span></Link> </p>
</div>
</div>
<Footer/>
    </BackgroundLayout>
  )
}

export default Register