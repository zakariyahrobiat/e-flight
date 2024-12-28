import NavBar from "../../component/nav/NavBar"
import BackgroundLayout from "../../Layout/BackgroundLayout"
// import hero from "../../assets/hero.png"
import Footer from "../../component/Footer"
import { Link } from "react-router-dom"
import image from "../../assets/image.jpg"
import image1 from "../../assets/image1.jpg"
import image2 from "../../assets/image2.jpg"
import image3 from "../../assets/image.png"
import image4 from "../../assets/image1.png"
import image5 from "../../assets/image2.png"
import { FaArrowRight } from "react-icons/fa6"
import jet from "../../assets/jet.png"
const LandingPage = () => {
  return (
    <BackgroundLayout>
        <NavBar/>
       <div className="hero-bg h-96 mt-16 md:mt-20 md:grid grid-cols-2 justify-between items-center gap-10">
        <div className="w-full text-center md:text-left px-5 md:px-10">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900">Book Your Flight Ticket in Just a Few Clicks</h1>
        <p className="text-xl py-5 text-blue-900 font-medium">We make booking your flight simple and fast, offering a wide range of options tailored to your preferences. Find the perfect flight with ease and efficiency.</p>
        <Link to="/register"><button className="bg-primary-700 py-3 text-white font-bold text-xl px-5 rounded-xl">Explore Now</button></Link>
        </div>
        <div className="hidden md:block">
<img src={jet} alt="" srcSet="" />
        </div>
       </div>
       <div className="bg-neutral-150 p-5 md:p-10">
        <div className="flex justify-between items-center pb-5 text-left">
          <h1 className=" text-xs md:text-lg font-semibold">Find your next adventure with these flight deals</h1>
          <Link to="/flights" className="flex justify-center items-center"><h1>All</h1><FaArrowRight/></Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
          <div className="bg-white shadow-3xl rounded-b-xl" >
            <img src={image4} alt="" srcSet="" className="w-full bg-contain" />
            <div className="flex justify-between items-start p-2">
              <span>
                <p className="text-lg font-semibold">Tarkwa Bay Beach</p>
                <p className="text-sm">Secluded beach for relaxation and water sports.</p>
              </span>
              <p className="text-lg font-semibold">$100</p>
            </div>
          </div>
          <div className="bg-white shadow-3xl rounded-b-xl">
            <img src={image3} alt="" srcSet="" className="w-full bg-contain" />
            <div className="flex justify-between items-start px-2">
              <span><p className="text-lg font-semibold">Millennium Park</p>
              <p className="text-sm">Serene park for picnics and leisure walks.</p>
              </span>
              <p className="text-lg font-semibold">$100</p>
            </div>
          </div>
          <div className="bg-white shadow-3xl rounded-b-xl">
            <img src={image5} alt="" srcSet="" className="w-full bg-contain" />
            <div className="flex justify-between items-start px-2">
              <span>
                <p className="text-lg font-semibold">Obudu Mountain Resort</p>
                <p className="text-sm">Scenic resort with cable cars and cool climate.</p>
              </span>
              <p className="text-lg font-semibold">$100</p>
            </div>
          </div>
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
          <p className="text-primary-700 text-base font-normal">Do consectetur</p>
          <p className="text-2xl font-bold text-neutral-900">Explore and live your best life.</p>
          <p className="flex justify-between py-2">
          <span className="text-sm font-normal text-neutral-500">Dec 24, 2022</span>
          <span className="bg-neutral-200 text-xs rounded-md py-1 px-2">5 mins read</span>
        </p>
        </div>
        <div>
          <img src={image2} alt="" srcSet="" />
          <p className="text-primary-700 text-base font-normal">Do consectetur</p>
          <p className="text-2xl font-bold text-neutral-900">Save money on your trip with 5 easy steps.</p>
          <p className="flex justify-between py-2">
          <span className="text-sm font-normal text-neutral-500">Dec 24, 2022</span>
          <span className="bg-neutral-200 text-xs rounded-md py-1 px-2">5 mins read</span>
        </p>
        </div>
      </div>
      <button className="bg-primary-700 text-white px-5 py-3 rounded-xl text-xl font-bold ">Read more articles</button>
      </div>
       <Footer/>
      
    </BackgroundLayout>
  )
}

export default LandingPage