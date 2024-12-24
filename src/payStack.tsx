
import { PaystackButton } from "react-paystack";

interface PaystackProps {
  email: string;
  name:string,
  phone:string,
  amount: number; // Amount in kobo (e.g., 10000 = 100 Naira)
  publicKey: string;
  onSuccess: () => void;
  onClose: () => void;
 
}
const PayWithPaystack = ({email, amount,name, phone, publicKey, onSuccess, onClose}: PaystackProps) => {
  const componentProps = {
    email,
    amount,
      metadata: {
      custom_fields: [
        {
          display_name: "Name",
          variable_name: "name",
          value: name,
        },
        {
          display_name: "Phone Number",
          variable_name: "phone",
          value: phone,
        },
      ],
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      onSuccess(); // Pass the reference to the parent function
    },
    onClose: () => {
      onClose(); // Call the parent function when the modal is closed
    },
  };
  return(
    <PaystackButton className="bg-primary-500 text-white font-normal text-base w-full mt-10 py-1" {...componentProps}/>
  )
}
export default PayWithPaystack;