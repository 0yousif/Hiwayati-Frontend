import { useContext } from "react"
import UserContext from "../context/UserContext"
import { useNavigate } from "react-router-dom"
import CoursesList from "../components/CoursesList"
import { useState, useEffect } from "react"
import Client from "../services/api"
const Home = () => {
  const { contextUser } = useContext(UserContext)
  const navigator = useNavigate()
  const [objectsList, setObjectsList] = useState(null)

  if (contextUser && !objectsList) {
    const getObjectsList = async () => {
      const res = await Client.get(`/course`)
      setObjectsList(res.data)
      console.log(objectsList)
    }
    getObjectsList()
  }
  if (contextUser && objectsList) {
    return (
      <div className="home-page">
        <h1>Recommended For You</h1>
        <CoursesList objectsList={objectsList} />
      </div>
    )
  } else {
    navigator("/signIn")
  }
}

export default Home
