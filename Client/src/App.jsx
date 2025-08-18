import "./App.css"
import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import { CheckSession } from "./services/auth"

// pages
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Course from "./pages/Course"
import { useState, useEffect, useContext } from "react"
import UserContext from "./context/UserContext"

const App = () => {
  const [user, setUser] = useState(null)
  const { setContextUser, contextUser } = useContext(UserContext)
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    setContextUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {      
      checkToken()
    }
  }, [])

  return (
    <>
      <Nav setUser={setUser} user={user}></Nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signIn" element={<SignIn setUser={setUser} />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/course/:id" element={<Course />} />
        </Routes>
      </main>
    </>
  )
}

export default App
