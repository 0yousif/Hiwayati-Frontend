import Calendar from "./../components/Calendar"
import UserContext from "../context/UserContext"
import { use, useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import SkillChart from "../components/Chart/SkillChart"
import CourseChart from "../components/Chart/CourseChart"
import axios from "axios"
import Client from "../services/api"
import Participant from "./Participant"
import Teacher from "./Teacher"

const Profile = () => {
  const { contextUser } = useContext(UserContext)
  const navigator = useNavigate()
  const [userInfo, setUserInfo] = useState(null)
  const [courseInfo, setCourseInfo] = useState(null)

  useEffect(() => {
    const getUserInfo = async () => {
      if (contextUser) {
        const res = await Client.get(`/auth/${contextUser.id}`)
        setUserInfo(res.data)
      }
    }

    const getCourseInfo = async () => {
      const res = await Client.get(`/course`)
      setCourseInfo(res.data)
    }

    getUserInfo()
    getCourseInfo()
  }, [contextUser, userInfo !== null])

  if (contextUser && userInfo) {
    return (
      <>
        {userInfo.currentCourses ? (
          <Participant userInfo={userInfo} courseInfo={courseInfo} />
        ) : (
          <Teacher userInfo={userInfo} courseInfo={courseInfo} />
        )}
      </>
    )
  }
}

export default Profile
