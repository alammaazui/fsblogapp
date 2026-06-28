import React, { createContext, useState } from 'react'

export const userContext = createContext()

export default function UserContext({children}) {

    const [currentUser ,setCurrentUser] = useState({authToken : '' ,role :'admin' , status :true})

  return (
    <userContext.Provider value={{currentUser,setCurrentUser}}>{children}</userContext.Provider>
  )
}
