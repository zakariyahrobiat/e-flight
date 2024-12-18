import Footer from "../../component/Footer"
import NavBar from "../../component/NavBar"
import BackgroundLayout from "../../Layout/BackgroundLayout"
import InputContent from "../../component/input/InputContent"
import { useAuth } from "../../hooks/useAuth"
const Login = () => {
  const {handleGoogleAuth} = useAuth()
  return (
    <BackgroundLayout>
      <NavBar/>
      <div className="mt-20 mx-5 md:w-1/2 md:mx-auto bg-neutral-150 shadow-3xl rounded p-5">
      <InputContent heading="Sign in" button="Sign in" option="Login with your Google Account" discription="Need an account?" link="/register" text="Sign up here" onClick={handleGoogleAuth}/>
      </div>
      <Footer/>
    </BackgroundLayout>
  )
}

export default Login