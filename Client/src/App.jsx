import "./App.css"
import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"

// pages
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Hobby from "./pages/Hobby"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

const App = () => {
  return (
    <>
      <Nav></Nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Hobby" element={<Hobby />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </main>
    </>
  )
}

export default App
