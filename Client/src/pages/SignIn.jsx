const SignIn = () => {
  const handleChange = (e) => {
    console.log(e.target.checked)
  }




  
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log("submitted")
  }
  return (
    <>
      <div className="sing-in-form-container">
        <form action="" className="sing-in-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
          />
          <label htmlFor="Password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            onChange={handleChange}
          />
          <label htmlFor="isTeacher" className="is-teacher-label">Are you a teacher?

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
