import { useState } from "react"

const SignUp = () => {
  const initialValues = {
    username: "",
    isTeacher: null,
    email: "",
    bio: "",
  }
  const [formValues, setformValues] = useState(initialValues)

    console.log(formValues)
  const handleChange = (e) => {
    if (e.target.name !== "image" && e.target.name !== "isTeacher" ){

      setformValues({...formValues, [e.target.name]:e.target.value})
    }else if (e.target.name === "isTeacher"){
      setformValues({...formValues, [e.target.name]:e.target.checked} )
      console.log(formValues)
    }else if (e.target.name === "isTeacher"){

    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted")
  }

  if (formValues.isTeacher) {
    return (
      <>
        <div className="sing-in-form-container">
          <form
            action=""
            className="sing-in-form"
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
            <label htmlFor="image">Profile Pic</label>
            <input type="file" name="image" id="image" />
            <button type="submit">Sign In</button>
          </form>
        </div>
      </>
    )
  }else {
      return (
      <>
        <div className="sing-in-form-container">
          <form
            action=""
            className="sing-in-form"
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
            <label htmlFor="image">Profile Pic</label>
            <input type="file" name="image" id="image" />
            <button type="submit">Sign In</button>
          </form>
        </div>
      </>
    )
  
  }
}

export default SignUp
