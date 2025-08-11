import axios from "axios"
import { useState, useContext } from "react"
import UserContext from "../context/UserContext"
import { useNavigate } from "react-router-dom"
import Client from "../services/api"
const SignIn = ({ setUser }) => {
  const initialValues = {
    email: "",
    password: "",
    isTeacher: false,
  }
  const [formValues, setFormValues] = useState({})
  const navigator = useNavigate()
  const handleChange = (e) => {
    if (e.target.name !== "isTeacher") {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
    } else {
      setFormValues({ ...formValues, [e.target.name]: e.target.checked })
    }
  }
  const { setContextUser } = useContext(UserContext)
  const {contextUser} =  useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await Client.post(
        "/auth/signIn",
        formValues
      )
      setUser(response.data.user)
      localStorage.setItem("token", response.data.token)
      setContextUser(response.data.user)
    } catch (error) {
      throw error
    }
  }

  if (!contextUser){
    return (
      <>
        <div className="sing-in-form-container">
          <form action="" className="sing-in-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Email</label>
            <input type="text" name="email" id="email" onChange={handleChange} />
            <label htmlFor="Password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              onChange={handleChange}
            />
            <label htmlFor="isTeacher" className="is-teacher-label">
              Are you a teacher?
              <input
                type="checkbox"
                name="isTeacher"
                id="isTeacher"
                onChange={handleChange}
              />
            </label>
            <button type="submit">Sign In</button>
          </form>
        </div>
      </>
    )
  }else {
    navigator("/profile")
  }
}

export default SignIn
