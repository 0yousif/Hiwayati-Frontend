import { NavLink } from "react-router-dom"
import logo from "./../assets/logo.svg"
const Nav = () => {
  return (
    <>
      <nav className="navigation-bar">
        <img className="logo" src={logo} />
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/course">Course</NavLink>
          <NavLink to="/signIn">Sign in</NavLink>
          <NavLink to="/signUp">Sign up</NavLink>
        </div>
      </nav>
    </>
  )
}

export default Nav
