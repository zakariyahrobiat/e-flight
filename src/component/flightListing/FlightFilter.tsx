import { useState } from 'react';
import { FaCalendarAlt, FaSearch } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';
const FlightFilter = () => {
    
  const [showInputs, setShowInputs] = useState(false);
  const {input, handleInputs, searchCity}= useAuth()

  const toggleInputs = () => setShowInputs(!showInputs);
  return (
    <div className="w-full">
    <div className=" flex justify-start items-center gap-3 pb-2  ">
        <select name="tripType" id="" value={input.tripType} onChange={handleInputs} className="bg-transparent border-2 border-blue-900 rounded-md text-sm font-normal p-1 w-1/5">
            <option value="one-way">One way</option>
            <option value="two-ways">two ways</option>
        </select>
        <input type="number" name="number" placeholder="1" id="" value={input.number} onChange={handleInputs}  className="bg-transparent border-2 border-blue-900 rounded-md w-1/5 text-sm font-normal p-1"/>
        <select name="travelClass" id="" value={input.travelClass} onChange={handleInputs} className="bg-transparent border-2 border-blue-900 rounded-md w-1/5 text-sm font-normal p-1">
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First-class">First class</option>
        </select>
    </div>
    <div className='flex items-center space-x-2 w-full md:space-x-5 justify-between relative'>
        <input type="text" name="start" id="" value={input.start} onChange={handleInputs} className="border-2 border-blue-900 rounded-md p-1 text-sm font-normal w-1/3" placeholder='Houston (HOU)                         ' />
        <input type="text" name="end" id="" value={input.end} onChange={handleInputs} className="border-2 border-blue-900 rounded-md p-1 text-sm font-normal w-1/3" placeholder='Los Angeles (LAX)                  ' />
      
   
    <div className="flex flex-col space-y-4 w-1/3 md:relative">
      <div className="flex items-center space-x-2 border-2 border-blue-900 rounded-md p-1 text-sm font-normal">
       
        <FaCalendarAlt 
          onClick={toggleInputs} 
          className="cursor-pointer text-blue-900 text-xl"
        />

      
        <span className="text-gray-700">
          {input.startDate && input.endDate ? `${input.startDate} - ${input.endDate}` : 'Select date'}
        </span>
      </div>

      {showInputs && (
        <div className="flex space-x-4 absolute top-4 left-1/4 md:left-0">
          <div className="flex flex-col">
            <label htmlFor="start-date" className="text-sm">Start Date</label>
            <input
              type="date"
              id="start-date"
              name="startDate"
              value={input.startDate}
              onChange={handleInputs}
              className="border rounded px-3 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="end-date" className="text-sm">End Date</label>
            <input
              type="date"
              id="end-date"
              name='endDate'
              value={input.endDate}
              onChange={handleInputs}
              className="border rounded px-3 py-1"
            />
          </div>
        </div>
        
      )}
       </div>
       <div className="bg-blue-900 rounded-3xl p-2">
       <FaSearch className='text-white' onClick={()=>searchCity()} />
    </div>
    </div>
    </div>
  )
}

export default FlightFilter