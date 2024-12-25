import paypal from "../../assets/paypal.svg"
import amex from "../../assets/amex.svg"
import visa from "../../assets/visa.svg" 
import verve from "../../assets/verve.svg"
import BookingInput from "../input/BookingInput"
import { useAuth } from "../../hooks/useAuth"
import PayWithPaystack from "../../payStack"
import PayWithPayPal from "../../Paypal"
import { useState } from "react"
const FlightPurchase = () => {
  const { country, input, handleInputs, detail, setBookingTab, updateProgress, error, setError} = useAuth()
  const {email, cardNumber, cvv, expiration, phoneNumber, surname} = input
  const [paymentMethod, setPaymentMethod] = useState<string>("paystack");
  const handlePaymentMethodChange = (method:string) => {
    setPaymentMethod(method);
  };
  const publicKey ="pk_test_edd0a3b47a1b2ed9e43f84fbcaad730a531dfb22";
  const amount = detail?.price
  console.log(amount)
  const phone = phoneNumber
  const name = surname
  const handleSuccess = () => {
    setBookingTab("flightTicket");
    updateProgress()
  };

  const handleClose = () => {
    setError("Transaction closed. Please try again.");
  };

  return (
    <div>
      {error && <div className="bg-red-600 text-white p-2 fixed top-16 z-20 w-2/3 md:w-1/3 left-1/2 transform -translate-x-1/2 text-lg font-semibold rounded-lg">{error}</div>}
       <p className="font-semibold text-xl text-blue-900">Passenger details</p>
       <div className="flex w-full py-3 gap-5 md:gap-10 justify-between items-center">
       <div className="flex w-1/2 bg-primary-100 border border-primary-500 rounded py-2 px-1 md:px-5 gap-2 md:gap-5 items-center" onClick={() => handlePaymentMethodChange("card")}>
        <input type="radio" name="" id="payment-method" checked={paymentMethod === "card"}/>
        <label htmlFor="payment-method" className="flex">
          <img src={visa} alt="visa card" srcSet="" />
          <img src={verve} alt="verve" srcSet="" />
          <img src={amex} alt="amex" srcSet="" />
        </label>
       </div>
       <div className="w-1/2 flex bg-primary-100 border border-primary-500 rounded py-2 px-1 md:px-5 gap-2 md:gap-5 items-center" onClick={() => handlePaymentMethodChange("paypal")} >
        <input type="radio" name="" id="method" checked={paymentMethod === "paypal"}  />
        <label htmlFor="method">
          <img src={paypal} alt="" srcSet="" />
        </label>
       </div>
       </div>
       <form onSubmit={(e) => {
    e.preventDefault(); // Prevents the default form submission behavior
  }}>
        <div className="grid grid-cols-2 gap-5">
        <BookingInput variant="input" name="email" value={email} onChange={handleInputs} label="Name on card" placeholder="Enter name on card"/>
        <BookingInput variant="input" label="Card number" name="cardNumber" value={cardNumber} onChange={handleInputs} placeholder="Enter card number"/>
        </div>
        <div className="grid grid-cols-2 gap-5">
        <BookingInput variant="input" name="expiration" value={expiration} onChange={handleInputs} type="date" label="Expiration date" placeholder="MM/YY"/>
        <BookingInput variant="input" name="cvv" value={cvv} onChange={handleInputs} label="CVV" placeholder="Enter CVV"/>
        </div>
        <div className="flex gap-2 mb-3 items-center">
      <input type="checkbox" name="" id="address" />
      <label htmlFor="address" className="text-xs font-normal text-neutral-900">Use same address as billing info</label>
        </div>
        <div>
        <div className="">
        <BookingInput variant="input" label="Address" placeholder="Add address"/>
      
        </div>
        <div className="grid grid-cols-2 gap-5">
        <BookingInput variant="input" label="Zip/Postal code" placeholder="Input code"/>
        <BookingInput variant="select" label="Nationality" placeholder="Select" options={country.map((c) => ({
                value: c.name.common,
                label: c.name.common,
              }))}/>
        </div> 
        </div>
        <div>
          <p className="text-xs font-normal text-neutral-900">By selecting the button below, I agree to the Property Rules, Terms and Conditions, and Privacy Policy </p>
        </div>
        
        {paymentMethod === "card" && <PayWithPaystack email={email} amount={amount || 0} publicKey={publicKey} onSuccess={handleSuccess} name={name} phone={phone}  onClose={handleClose} />}
      {paymentMethod === "paypal" && <PayWithPayPal/>}
        </form>
        
    </div>
  )
}

export default FlightPurchase