import { createBrowserRouter } from 'react-router-dom'
import LandingPage from '../pages/home/LandingPage'
import FlightsPage from '../pages/flights/FlightsPage'
const Routes = createBrowserRouter([
    {
        path:"/",
        element:<LandingPage/>
    },
    {
        path:"/flights",
        element:<FlightsPage/>
    }
])

export default Routes