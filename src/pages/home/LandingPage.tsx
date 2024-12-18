import NavBar from "../../component/NavBar"
import BackgroundLayout from "../../Layout/BackgroundLayout"
import dashboard from "../../assets/dashboard.png"
import Footer from "../../component/Footer"
import { Link } from "react-router-dom"
import image from "../../assets/image.jpg"
import image1 from "../../assets/image1.jpg"
import image2 from "../../assets/image2.jpg"
const LandingPage = () => {
  return (
    <BackgroundLayout>
        <NavBar/>
        <img src={dashboard} alt="" srcSet="" className="mt-16" />
      <Link to="/register"> <button className="bg-secondary-500 text-white mt-5 font-bold px-5 py-3 rounded-xl">Get Stared</button></Link>
      <div className="py-10">
      <h1 className="text-3xl font-bold text-neutral-900" >What's new?</h1>
      <div className="grid grid-cols-3 gap-5 p-5 text-left">
      
        <div >
          <img src={image} alt="" srcSet="" />
          <p className="text-primary-500 text-base font-normal">Do consectetur</p>
          <p className="text-2xl font-bold text-neutral-900">US flights delayed due to FAA system outage.</p>
          <p className="flex justify-between py-2">
          <span className="text-sm font-normal text-neutral-500">Dec 24, 2022</span>
          <span className="bg-neutral-200 text-xs rounded-md py-1 px-2">5 mins read</span>
        </p>
        </div>
        <div>
          <img src={image1} alt="" srcSet="" />
          <p className="text-primary-500 text-base font-normal">Do consectetur</p>
          <p className="text-2xl font-bold text-neutral-900">US flights delayed due to FAA system outage.</p>
          <p className="flex justify-between py-2">
          <span className="text-sm font-normal text-neutral-500">Dec 24, 2022</span>
          <span className="bg-neutral-200 text-xs rounded-md py-1 px-2">5 mins read</span>
        </p>
        </div>
        <div>
          <img src={image2} alt="" srcSet="" />
          <p className="text-primary-500 text-base font-normal">Do consectetur</p>
          <p className="text-2xl font-bold text-neutral-900">US flights delayed due to FAA system outage.</p>
          <p className="flex justify-between py-2">
          <span className="text-sm font-normal text-neutral-500">Dec 24, 2022</span>
          <span className="bg-neutral-200 text-xs rounded-md py-1 px-2">5 mins read</span>
        </p>
        </div>
      </div>
      <button className="bg-primary-600 text-white px-2 py-1 rounded-3xl text-base ">Read more articles</button>
      </div>
       <Footer/>
      
    </BackgroundLayout>
  )
}

export default LandingPage