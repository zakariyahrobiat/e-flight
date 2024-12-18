import { createBrowserRouter } from 'react-router-dom'
import LandingPage from '../pages/home/LandingPage'
import FlightsPage from '../pages/flights/FlightsPage'
import Register from '../pages/auth/Register'
import Login from '../pages/auth/Login'
import BookingPage from '../pages/booking/BookingPage'
import ProtectedRoute from './ProtectedRoute'
const Routes = createBrowserRouter([
    {
        path:"/",
        element:<LandingPage/>
    },
    {
        path:"/flights",
        element:(
            <ProtectedRoute>
                 <FlightsPage/>
                </ProtectedRoute>
        )
       
    }, 
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/booking",
        element:<BookingPage/>
    }
])

export default Routes