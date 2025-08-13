import CourseCard from "./CourseCard"
import UserContext from "../context/UserContext"
import { useContext } from "react"
import { useEffect } from "react"
import Client from "../services/api"
import { useState } from "react"
const CoursesList = ({ objectsList }) => {
  const { contextUser } = useContext(UserContext)
  const [isTeacher, setIsTeacher] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      await Client.get(`/auth/${contextUser.id}`).then((res) => {
        setUser(res.data)
        console.log(res.data)
        if (res.data.courses) {
          setIsTeacher(true)
        } else {
          setIsTeacher(false)
        }
      })
    }
    getUser()
  }, [])

  if (contextUser && isTeacher !== null) {
    console.log("isTeacher", isTeacher)
    return (
      <>
        <div className="courses-card">
          {objectsList.map((courseObject) => (
            <CourseCard  object={courseObject} isTeacher={isTeacher} />
          ))}
        </div>
      </>
    )
  } else {
    return (
      <>
        <h3>Loading...</h3>
      </>
    )
  }
}

export default CoursesList
