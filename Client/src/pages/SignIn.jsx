import axios from "axios"
import { useState } from "react"

const SignIn = ({ setUser }) => {
  const initialValues = {
    email: "",
    password: "",
    isTeacher: false,
  }
  const [formValues, setFormValues] = useState({})

  const handleChange = (e) => {
    if (e.target.name !== "isTeacher") {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
    } else {
      setFormValues({ ...formValues, [e.target.name]: e.target.checked })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/signIn",
        formValues
      )
      setUser(response.data.user)
      localStorage.setItem("token", response.data.token)
      console.log(response.data)
    } catch (error) {
      throw error
    }
  }

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
}

export default SignIn
