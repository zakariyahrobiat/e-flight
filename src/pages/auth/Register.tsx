import BackgroundLayout from "../../Layout/BackgroundLayout"
import NavBar from "../../component/NavBar"
import Footer from "../../component/Footer"
import InputContent from "../../component/input/InputContent"
const Register = () => {
  return (
    <BackgroundLayout>
<NavBar/>
<div className="mt-20 mx-5 md:w-1/2 md:mx-auto bg-neutral-150 shadow-3xl rounded p-5">
<InputContent heading="Sign up" button="Sign up" option="Register with your Google Account" discription="Already have an account?" link="/login" text="Sign in here"/>
</div>
<Footer/>
    </BackgroundLayout>
  )
}

export default Register