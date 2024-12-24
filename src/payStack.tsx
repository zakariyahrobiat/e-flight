
import { PaystackButton } from "react-paystack";

interface PaystackProps {
  email: string;
  name:string,
  phone:string,
  amount: number; // Amount in kobo (e.g., 10000 = 100 Naira)
  publicKey: string;
  onSuccess: (reference: string) => void;
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
    onSuccess: (reference: any) => {
      onSuccess(reference.reference); // Pass the reference to the parent function
    },
    onClose: () => {
      onClose(); // Call the parent function when the modal is closed
    },
  };
  return(
    <PaystackButton className="bg-green-500 text-white px-4 py-2 rounded" {...componentProps}/>
  )
}
export default PayWithPaystack;