import { useContext } from "react"
import { AppContext } from "../context/AuthContext"
export const useAuth = () => {
  return useContext(AppContext)
}
