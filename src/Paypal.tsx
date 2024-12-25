import { PayPalButtons, PayPalButtonsComponentProps, PayPalScriptProvider, ReactPayPalScriptOptions } from '@paypal/react-paypal-js';
import { useAuth } from './hooks/useAuth';
// import { useState } from 'react';
export default function PayWithPayPal() {
    const {detail, setBookingTab, updateProgress}= useAuth()
    // const [orderId, setOrderId] = useState<string | null>(null);
    const initialOptions: ReactPayPalScriptOptions = {
        clientId: "AZz282s7q3SJE-XWARWfMQgi1lUMsfEm-xo-ECLtLK0UCk5vKvuVSi_yCQ7cNFYqoH3XAVfvu8JSxY4f",
currency: "USD", // Choose the currency
    };

    const styles: PayPalButtonsComponentProps["style"] = {
        shape: "rect",
        layout: "vertical",
           color:"blue",
           label:"paypal"
    }
    const createOrder = async (data: any, actions: any) => {
        // Create the order directly through PayPal
        try{
        const order = await actions.order.create({
          purchase_units: [
            {
              amount: {
                value: detail?.price, // Total amount for the order
                currency_code: "USD", // Currency code (can be changed)
              },
            },
          ],
        });
        console.log("Order created with ID:", order);
        // setOrderId(order); // Save the order ID for further reference
        return order; // Return the order ID to proceed with approval
      }
      catch (error) {
        console.error("Error creating PayPal order:", error);
      }
    };
      const onApprove = async (data:any, actions: any) => {
       try{
        const details = await actions.order.capture();
        console.log("Payment successful:", details);
        setBookingTab("flightTicket");
        updateProgress()
        // Handle post-payment logic, like updating UI or sending a confirmation
      }catch (error) {
      console.error("Error capturing PayPal order:", error);
    }
  };



    return (
        
            <PayPalScriptProvider options={initialOptions}>
              <PayPalButtons style={styles} createOrder={createOrder}
          onApprove={onApprove} />
            </PayPalScriptProvider>
    )
}
