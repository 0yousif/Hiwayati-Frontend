import { NavLink } from "react-router-dom"
import logo from "./../assets/logo.svg"
import { useContext } from "react"
import UserContext from "../context/UserContext"

const Nav = ({ setUser, user }) => {
  const { setContextUser } = useContext(UserContext)
  const SignOut = () => {
    localStorage.removeItem("user")
    setUser(null)
    setContextUser(null)
  }

  return (
    <>
      <nav className="navigation-bar">
        <img className="logo" src={logo} />
        <div className="links">
          {user ? (
            <>
              <NavLink onClick={SignOut}>Sign out</NavLink>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/profile">Profile</NavLink>
              <NavLink to="/course">Course</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/signIn">Sign in</NavLink>
              <NavLink to="/signUp">Sign up</NavLink>
            </>
          )}
        </div>
      </nav>
    </>
  )
}

export default Nav
