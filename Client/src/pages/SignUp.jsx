import { useState, useContext } from "react"
import { RegisterUser } from "../services/auth"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import UserContext from "../context/UserContext"

const SignUp = () => {
  const initialValues = {
    username: "",
    isTeacher: false,
    email: "",
    bio: "",
    image: "",
  }
  const [formValues, setformValues] = useState(initialValues)
  const { setContextUser } = useContext(UserContext)
  const { contextUser } = useContext(UserContext)
  const navigator = useNavigate()

  const handleChange = (e) => {
    if (e.target.name !== "isTeacher") {
      setformValues({ ...formValues, [e.target.name]: e.target.value })
    } else if (e.target.name === "isTeacher") {
      setformValues({ ...formValues, [e.target.name]: e.target.checked })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log({
      username: formValues.username,
      isTeacher: formValues.isTeacher,
      email: formValues.email,
      password: formValues.password,
      confirmPassword: formValues.confirmPassword,
      bio: formValues.bio,
      image: formValues.image,
    })
    await axios.post("http://127.0.0.1:3000/auth/signUp", {
      username: formValues.username,
      isTeacher: formValues.isTeacher,
      email: formValues.email,
      password: formValues.password,
      confirmPassword: formValues.confirmPassword,
      bio: formValues.bio,
      image: formValues.image,
    })
    navigator("/signIn")
  }
  if (!contextUser) {
    if (formValues.isTeacher) {
      return (
        <>
          <div className=" sing-in-form-container ">
            <form
              className="sing-in-form light-shadow-box"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={handleChange}
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
              />

              <label htmlFor="bio">Bio</label>
              <textarea
                name="bio"
                id="bio"
                onChange={handleChange}
                rows={3}
              ></textarea>
                <label htmlFor="image">Profile Pic</label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  onChange={handleChange}
                />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
              />

              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="text"
                name="confirmPassword"
                id="confirmPassword"
                onChange={handleChange}
              />

              <label htmlFor="isTeacher" className="is-teacher-label">
                Are you a teacher?
                <input
                  type="checkbox"
                  name="isTeacher"
                  id="isTeacher"
                  checked
                  onChange={handleChange}
                />
              </label>
              <button type="submit">Sign up</button>
            </form>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="sing-in-form-container ">
            <form
              action=""
              className="sing-in-form light-shadow-box"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={handleChange}
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
              />

              <label htmlFor="bio">Bio</label>
              <textarea
                name="bio"
                id="bio"
                onChange={handleChange}
                rows={3}
              ></textarea>
              <label htmlFor="image">Profile Pic</label>
              <input
                type="text"
                name="image"
                id="image"
                onChange={handleChange}
              />

              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                id="password"
                onChange={handleChange}
              />

              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="text"
                name="confirmPassword"
                id="confirmPassword"
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
              <button type="submit">Sign up</button>
            </form>
          </div>
        </>
      )
    }
  } else {
    ;<>
      <h1>Opps looks like you are not supposed to be here!</h1>
    </>
  }
}

export default SignUp
