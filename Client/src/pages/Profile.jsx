import Calendar from "./../components/Calendar"
import UserContext from "../context/UserContext"
import { use, useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import SkillChart from "../components/Chart/SkillChart"
import CourseChart from "../components/Chart/CourseChart"
import axios from "axios"
import Client from "../services/api"

const Profile = () => {
  const { contextUser } = useContext(UserContext)
  const navigator = useNavigate()
  const [ userInfo, setUserInfo ] = useState(null)

  useEffect(() => {
    const getUserInfo = async () => {
      const res = await Client.get(`/auth/68984fc52604088a279dfa5e`)
      setUserInfo(res.data)
    }
    getUserInfo()
  }, [])
  
  console.log(userInfo)
  if (contextUser && userInfo) {
  return (
    <>
      <div className="profile-page">
        <div className="about-user">
          <div className="user-data">
            <div className="profile-pic-container">
              <img src="asd" alt="" />
              <h1>1</h1>
            </div>
            <div className="courses-count">
              <div>
                <p>Previous</p>
                <h3>{userInfo.previousCourses.length}</h3>
              </div>
              <div>
                <p>Current</p>
                <h3>{userInfo.currentCourses.length}</h3>
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
          <div className="skills-charts chart">
            <SkillChart />
          </div>
          <div className="courses-charts chart">
            <CourseChart />
          </div>
        </div>
      </div>
    </>
  )
  } else {
    
    navigator("/SignIn")
  return (<><h1>Opps</h1></>)
  }
}

export default Profile
