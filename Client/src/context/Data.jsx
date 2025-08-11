import axios from "axios"
import { useState, useEffect } from "react"
import Client from "../services/api"
import { UserId } from "../services/auth"

const Data = ({ userId }) => {
  console.log(userId)

  const API_BASE = "http://localhost:3000"
  const USER_ENDPOINT = `/auth/${userId}`
  const COURSE_ENDPOINT = "/course"
  const TOKEN = localStorage.getItem("token")

  const api = axios.create({baseURL: API_BASE,headers: { Authorization: `Bearer ${TOKEN}` },})

  const [userData, setUserData] = useState(null)
  const [coursesData, setCoursesData] = useState(null)

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await api.get(`${USER_ENDPOINT}`)
        setUserData(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    const getCourseError = async () => {
      try {
        const response = await api.get(`${COURSE_ENDPOINT}`)
        setCoursesData(response.data)
      } catch (error) {}
    }

    getUserData()
    getCourseError()
  }, [])

  return (
    <>
      {console.log("DATA DATA DATA")}
      {console.log("UserData", userData)}
      {console.log("CoursesData", coursesData)}
    </>
  )
}

export default Data
