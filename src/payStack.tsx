import { useAuth } from "./hooks/useAuth"
const PayWithPaystack =()=>{
    const {detail, input}= useAuth()
    const {email}= input
    const publicKey ="pk_test_edd0a3b47a1b2ed9e43f84fbcaad730a531dfb22"
    const handlePayment=()=>{
        const handler =(window as any).paystackpop.setup({
            key: publicKey,
            email:email,
            amount: detail?.price,
            currency:"USD",
            callback:(response:any)=>{
                alert(`Payment successful! Reference: ${response.reference}`);   
            },
            onClose: () => {
                alert("Transaction was not completed. Try again.");
              },
            });
        
            handler.openIframe();

        
    }
    return(
        <div>
        <button
          onClick={handlePayment}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Pay Now
        </button>
      </div>  
    )
}
export default PayWithPaystack