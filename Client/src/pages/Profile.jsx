import Calendar from "./../components/Calendar"
import UserContext from "../context/UserContext"
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
const Profile = () => {
  const { contextUser } = useContext(UserContext)
  const navigator = useNavigate()
  if (contextUser) {
    return (
      <>
        <div className="profile-page">
          <div className="about-user">
            <div className="user-data">
              <div className="profile-pic-container">
                <img src="asd" alt="" />
                <h1>{UserContext.username}</h1>
              </div>
              <div className="courses-count">
                <div>
                  <p>Previous</p>
                  <h3>12</h3>
                </div>
                <div>
                  <p>Current</p>
                  <h3>12</h3>
                </div>
              </div>
              <div className="courses-list">
                <div className="course">
                  <p>course name</p>
                  <p>status</p>
                </div>
                <div className="course">
                  <p>course name</p>
                  <p>status</p>
                </div>
                <div className="course">
                  <p>course name</p>
                  <p>status</p>
                </div>
                <div className="course">
                  <p>course name</p>
                  <p>status</p>
                </div>
                <div className="course">
                  <p>course name</p>
                  <p>status</p>
                </div>
                <div className="course">
                  <p>course name</p>
                  <p>status</p>
                </div>
                <div className="course">
                  <p>course name</p>
                  <p>status</p>
                </div>
                <div className="course">
                  <p>course name</p>
                  <p>status</p>
                </div>
                <div className="course">
                  <p>course name</p>
                  <p>status</p>
                </div>
                <div className="course">
                  <p>course name</p>
                  <p>status</p>
                </div>
                <div className="course">
                  <p>course name</p>
                  <p>status</p>
                </div>
                <div className="course">
                  <p>course name</p>
                  <p>status</p>
                </div>
                <div className="course">
                  <p>course name</p>
                  <p>status</p>
                </div>
                <div className="course">
                  <p>course name</p>
                  <p>status</p>
                </div>
                <div className="course">
                  <p>course name</p>
                  <p>status</p>
                </div>
                <div className="course">
                  <p>course name</p>
                  <p>status</p>
                </div>
                <div className="course">
                  <p>course name</p>
                  <p>status</p>
                </div>
                <div className="course">
                  <p>course name</p>
                  <p>status</p>
                </div>
                <div className="course">
                  <p>course name</p>
                  <p>status</p>
                </div>
                <div className="course">
                  <p>course name</p>
                  <p>status</p>
                </div>
              </div>
            </div>
            <div className="calender-container">
              <Calendar />
            </div>
          </div>
          <h1 className="statistics-header">Statistics</h1>
          <div className="statistics">
            <div className="skills-charts chart">skills-charts</div>
            <div className="courses-charts chart">skills-charts</div>
          </div>
        </div>
      </>
    )
  } else {
    navigator("/SignIn")
  }
}

export default Profile
