import { createBrowserRouter } from 'react-router-dom'
import LandingPage from '../home/LandingPage'
const Routes = createBrowserRouter([
    {
        path:"/",
        element:<LandingPage/>
    }
])

export default Routes