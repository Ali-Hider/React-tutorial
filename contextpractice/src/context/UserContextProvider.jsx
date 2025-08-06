import React, { useState } from 'react'
import UserContext from './userContext'
import { Children } from 'react'

const UserContextProvider = ({children}) =>{
const [user,setuser] = useState(null)
return(
    <UserContext.Provider value={{user,setuser}}>
          {children}
        </UserContext.Provider>
)
}

export default UserContextProvider
