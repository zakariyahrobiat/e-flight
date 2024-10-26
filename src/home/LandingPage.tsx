import NavBar from "../component/NavBar"
import BackgroundLayout from "../Layout/BackgroundLayout"
import dashboard from "../assets/dashboard.png"
import sort from "../assets/sort.png"
const LandingPage = () => {
  return (
    <BackgroundLayout>
        <NavBar/>
        <img src={dashboard} alt="" srcSet="" className="mt-16" />
        <div className="flex justify-between items-center">
          <div className="w-[20%]">
            <div className="flex items-center space-x-1">
<img src={sort} alt="" srcSet=""  className="w-5 "/>
<p className="font-semibold text-base">Sort by</p>
<hr />
</div>
          </div>
          <div></div>
        </div>
    </BackgroundLayout>
  )
}

export default LandingPage