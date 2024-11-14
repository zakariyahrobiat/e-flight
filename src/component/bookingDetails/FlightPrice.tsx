import { useAuth } from "../../hooks/useAuth"
import { BenefitProps } from "../flightDetails/Benefit"
const FlightPrice = () => {
    const {input} = useAuth()
    const {tripType} = input
  return (
    <div className=" hidden md:block md:w-1/4">
          <p className="text-xl font-bold text-neutral-700">Price details</p>
          <hr  className="my-2"/>
         <div className="w-full">
        <table className="w-full">
                    <tbody>
                        <tr>
                            <td>
                                <div className="flex justify-between w-full pb-2">
                                    <span className="text-sm font-medium text-neutral-700">Adult basic fee</span>
                                    <span className="text-sm font-medium text-neutral-700">$150</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="flex justify-between w-full pb-2">
                                    <span className="text-sm font-medium text-neutral-700">Tax</span>
                                    <span className="text-sm font-medium text-neutral-700">Included</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="flex justify-between w-full pb-2">
                                    <span className="text-sm font-medium text-neutral-700">Regular total price</span>
                                    <span className="text-sm font-medium text-neutral-700">$150</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="flex justify-between w-full pb-2">
                                    <span className="text-sm font-semibold text-tertiary2-750">Save</span>
                                    <span className="text-sm font-semibold text-tertiary2-750">- $1.5</span>
                                </div>
                            </td>
                        </tr>
                        <hr />
                        <tr>
                        <td>
                                <div className="flex justify-between w-full pt-2">
                                    <span className="text-sm font-medium text-neutral-700">Total</span>
                                    <span className="text-base font-semibold text-primary-600">$150</span>
                                </div>
                                </td> 
                        </tr>
                    </tbody>
                </table>
        </div>
        <div className="" >
          <BenefitProps/>  
          {tripType === "two-ways" &&(<BenefitProps/>)}

        </div>
    </div>
  )
}

export default FlightPrice