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
  const [userInfo, setUserInfo] = useState(null)
  const [courseInfo, setCourseInfo] = useState(null)

  useEffect(() => {
    const getUserInfo = async () => {
      const res = await Client.get(`/auth/${contextUser.id}`)
      setUserInfo(res.data)
    }

    const getCourseInfo = async () => {
      const res = await Client.get(`/course`)
      setCourseInfo(res.data)
      console.log("courseInfo",courseInfo)
    }




    getUserInfo()
    getCourseInfo()
  }, [contextUser, userInfo !== null])
  

  if (contextUser && userInfo) {

    
    let allCourses = {}
    let courseKey = []
    let courseValue = []
    let currentCourses = {}
    let previousCourses = {}

    const getCurrentCourses = () => {
      userInfo.currentCourses.forEach((selectedCourse) => {
        currentCourses[selectedCourse.course._id] = selectedCourse.course.name
      })

    }

    const getPreviousCourses = () => {
      userInfo.previousCourses.forEach((selectedCourse) => {
        previousCourses[selectedCourse.course._id] = selectedCourse.course.name
      })

      allCourses={...currentCourses,...previousCourses}

      console.log("allCourses",allCourses)
      console.log("currentCourses",currentCourses)
      console.log("previousCourses",previousCourses)
     

      
    }
      getCurrentCourses()
      getPreviousCourses()

    console.log("userInfo",userInfo)
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

                  
                {Object.entries(currentCourses).map(([id,name]) => (
                  <Link to={`/course/${id}`} >
                    <div className="course">
                      <p>{name}</p>
                      <p>Active</p>
                    </div>
                  </Link>
                ))}

                 {Object.entries(previousCourses).map(([id,name]) => (
                  <Link to={`/course/${id}`} >
                    <div className="course">
                      <p>{name}</p>
                      <p>Complete</p>
                    </div>
                  </Link>
                ))}


       
             
                
              </div>
            </div>
            <div className="calender-container">
              <Calendar />
            </div>
          </div>
          <h1 className="statistics-header">Statistics</h1>
          <div className="statistics">
            <div className="skills-charts chart">
              {/* <SkillChart /> */}
            </div>
            <div className="courses-charts chart">
              <CourseChart userInfo={userInfo} />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Profile
