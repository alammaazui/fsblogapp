import { useContext } from "react"
import { userContext } from "../components/UserContext"

export default function useCurrentUser ()  {

    const {currentUser,setCurrentUser} =  useContext(userContext)

    return {currentUser,setCurrentUser}

}