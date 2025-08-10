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
import { useState,useEffect } from "react"



const App = () => {
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }



  useEffect(() => {
    const token = localStorage.getItem("token")
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <>
      <Nav setUser={setUser} user={user}></Nav>
      <h1>user{user ? user.username : ""}</h1>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signIn" element={<SignIn setUser={setUser} />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/course" element={<Course />} />
        </Routes>
      </main>
    </>
  )
}

export default App
