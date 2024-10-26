import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div className="bg-neutral-150 px-[10%] py-3 overflow-x-hidden mt-5">
    <div className="flex justify-between items-start text-left mb-5 ">
        <div>
        <div className="flex justify-start items-center space-x-2 mb-5">
            <img src={logo} alt="" srcSet="" className="w-7" />
            <p className="font-semibold text-xl text-secondary-500">E-flight</p>
            
        </div>
        <div className="text-left space-x-2">
            <input type="email" name="" id="" placeholder="Input your email" className="bg-white border-2 border-neutral-400 rounded-2xl text-sm font-normal px-2 py-1 " />
            <button className="bg-primary-500 text-sm font-normal text-white hover:bg-primary-600 active:bg-primary-700 rounded-2xl px-2 py-1">Subscribe</button>
            </div>
            </div>
            <div>
                <p className="text-xl font-bold text- neutral-900">About us</p>
                <p className="font-normal text-sm text- neutral-900 py-2">How to book</p>
                <p className="font-normal text-sm text- neutral-900">Help center</p>
            </div>
            <div>
                <p className="text-xl font-bold text- neutral-900">Flight</p>
                <p className="font-normal text-sm text- neutral-900 py-2">Booking easily</p>
                <p  className="font-normal text-sm text- neutral-900">Promotions</p>
            </div>
            <div>
                <p className="text-xl font-bold text- neutral-900">Contact us</p>
               
            </div>
    </div>
    <p className="text-neutral-500 font-normal text-sm">© design inspiration visily.ai</p>
    </div>
  )
}

export default Footer