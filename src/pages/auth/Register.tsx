import BackgroundLayout from "../../Layout/BackgroundLayout"
import NavBar from "../../component/NavBar"
import Footer from "../../component/Footer"
import CustomInput from "../../component/input/CustomInput"
const Register = () => {
  return (
    <BackgroundLayout>
<NavBar/>
<div className="mt-16">
<CustomInput label="Username" placeholder="Mark"/>
<CustomInput label="Password" type="password" placeholder="********"/>
<button>Register</button>
</div>
<Footer/>
    </BackgroundLayout>
  )
}

export default Register