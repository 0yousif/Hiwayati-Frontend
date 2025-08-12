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

   let Courses ={}
   let courseKey = []
   let courseValue =[]


   let userCurrentCourse = []
   let userPreviousCourse = []


  useEffect(() => {


    const getUserInfo = async () => {
      const res = await Client.get(`/auth/${contextUser.id}`)
      setUserInfo(res.data)
      console.log("contextUser.id",contextUser.id)
      console.log("userInfo",userInfo)
    }

    const getCourseInfo = async () => {
      const res = await Client.get(`/Course`)
      setCourseInfo(res.data)
      console.log("courseInfo",courseInfo)
    }

const loooop = () => {
    for(let i=0;i<courseInfo.length;i++){
      const course = courseInfo[i]
      Courses[course._id] = course.name
  
    }
   

    for(let i=0;i<userInfo.currentCourses.length;i++){
      const selectedCourse = userInfo.currentCourses[i]
      console.log("selectedCourse",selectedCourse)
      courseKey.push(Courses[selectedCourse.course])
      userCurrentCourse.push(Courses[selectedCourse.course])
      courseValue.push(selectedCourse.hours)
    }

    for(let i=0;i<userInfo.previousCourses.length;i++){
      const selectedCourse = userInfo.previousCourses[i]
      console.log("selectedCourse",selectedCourse)
      courseKey.push(Courses[selectedCourse.course])
      userPreviousCourse.push(Courses[selectedCourse.course])
      courseValue.push(selectedCourse.hours)
    }


    console.log(userCurrentCourse,'dfshhhhhhhhhhhhhhhhhhhhhhhl')
    console.log(userPreviousCourse,"fdjskal;;;;;;;;;;;;;;;")
  }

  


    getUserInfo()
    getCourseInfo()
    if(userInfo !== null ) {loooop()}
    
    console.log("userCurrentCourse",userCurrentCourse)
  }, [contextUser,userInfo !== null,courseInfo !==null])

  
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
{userCurrentCourse.map((currentCourse)=>(

  
     <div className="course">
       <p>{currentCourse}</p>
       <p>Current</p>
     </div>


))}


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
              <SkillChart userInfo={userInfo} courseInfo={courseInfo} />
            </div>  
            <div className="courses-charts chart">
              <CourseChart userInfo={userInfo} courseInfo={courseInfo}/>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Profile
