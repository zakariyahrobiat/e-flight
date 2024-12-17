import { PropsWithChildren } from "react"
import { useAuth } from "../hooks/useAuth"
import { Navigate } from "react-router-dom"
const ProtectedRoute = (props:PropsWithChildren) => {
    const {isAuthenticated}= useAuth()
    if(isAuthenticated=== false){
        return <Navigate to="/"></Navigate>
    }
  return <>{props.children}</>
}

export default ProtectedRoute