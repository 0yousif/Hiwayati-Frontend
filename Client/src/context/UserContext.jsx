import { createContext, useState } from "react"

const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
  const [contextUser, setContextUser] = useState(null)
  
  return (
    <UserContext.Provider value={{ contextUser, setContextUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext