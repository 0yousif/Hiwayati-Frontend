import Calendar from "./../components/Calendar"
import UserContext from "../context/UserContext"
import { use, useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import SkillChart from "../components/Chart/SkillChart"
import CourseChart from "../components/Chart/CourseChart"
import axios from "axios"
import Client from "../services/api"
import Participant from "./Participant"

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
      { userInfo.currentCourses? 
      <Participant userInfo={userInfo} courseInfo={courseInfo} currentCourses={currentCourses} previousCourses={previousCourses} />
      :
      <div>555</div>
      }

   
        
      
      </>
    )
  }
}

export default Profile
