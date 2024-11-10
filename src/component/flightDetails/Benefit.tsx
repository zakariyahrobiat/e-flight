import { useAuth } from "../../hooks/useAuth"
const BenefitProps=()=>{
    const {detail, input} = useAuth()
    const {start, end, travelClass} = input
return(
<div className="bg-white p-2">
                <p className="text-sm font-semibold text-neutral-700">{detail?.name}</p>
                <p className="text-sm font-normal text-neutral-500">{start}-{end}</p>
                <p className="text-sm font-normal text-tertiary2-750">{travelClass}</p>
                <p className="text-sm font-medium text-primary-600">Refundable</p>
                <p className="text-sm font-medium text-primary-600">Reschedule Available</p>
            </div>
)
}
const Baggage=()=>{
    const {detail, input} = useAuth()
    const {start, end} = input
    return(
<div className="bg-white p-2">
                <p className="text-sm font-semibold text-neutral-700">{detail?.name}</p>
                <p className="text-sm font-normal text-neutral-500">{start}-{end}</p>
               </div>
    )
}
function Benefit() {
    const { input} = useAuth()
    const {tripType} = input
  return (
    <div className="bg-neutral-150 p-3">
        <p className="text-base font-semibold text-neutral-900">Conditions</p>
        <div className="grid grid-cols-2 space-x-3 items-center my-1" >
          <BenefitProps/>  
          {tripType === "two-ways" &&(<BenefitProps/>)}

        </div>
        <p className="text-base font-semibold text-neutral-900">Price details</p>
        <div className="bg-white p-2 w-full">
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
        <p className="text-base font-semibold text-neutral-900">Baggage price</p>
        <div className="grid grid-cols-2 space-x-3 items-center my-1">
        <Baggage/>
        {tripType === "two-ways" && (<Baggage/>)}</div>
    </div>
  )
}

export default Benefit