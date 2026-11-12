import React from 'react'
import {createContext, useState} from 'react'
export const  AppContext = createContext() 
export function AppProvider({children}) {
const [ cartItems, setCartItems ] = useState([])

  return (
    <AppContext.Provider value={{cartItems, setCartItems}} >
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider