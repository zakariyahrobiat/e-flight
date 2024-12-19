import NavBar from "../../component/NavBar"
import BackgroundLayout from "../../Layout/BackgroundLayout"
// import hero from "../../assets/hero.png"
import Footer from "../../component/Footer"
import { Link } from "react-router-dom"
import image from "../../assets/image.jpg"
import image1 from "../../assets/image1.jpg"
import image2 from "../../assets/image2.jpg"
import { FaArrowRight } from "react-icons/fa6"
const LandingPage = () => {
  return (
    <BackgroundLayout>
        <NavBar/>
       <div className="hero-bg h-96 mt-16 md:mt-20 flex justify-between items-center gap-10">
        <div className="w-full text-center md:w-1/2 md:text-left px-5 md:px-10">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900">Book Your Flight Ticket in Just a Few Clicks</h1>
        <p className="text-xl py-5 text-primary-600 font-medium">We make booking your flight simple and fast, offering a wide range of options tailored to your preferences. Find the perfect flight with ease and efficiency.</p>
        <Link to="/register"><button className="bg-primary-700 py-3 text-white font-bold text-xl px-5 rounded-xl">Explore Now</button></Link>
        </div>
       </div>
       <div>
        <div className="flex justify-between items-center bg-neutral-150 m-10 p-5">
          <h1>Find your next adventure with these flight deals</h1>
          <span className="flex justify-center items-center"><h1>All</h1><FaArrowRight/></span>
        </div>
       </div>
      
      <div className="py-5">
      <h1 className="text-3xl font-bold text-neutral-900" >What's new?</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 text-left">
      
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