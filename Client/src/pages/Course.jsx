import {useState,useEffect, useContext } from "react"
import UserContext from "../context/UserContext"
import { useNavigate, useParams } from "react-router-dom"
import { getCourse } from "../services/course"


const Course = () => {
  let {id} = useParams()
  const { contextUser } = useContext(UserContext)
  const navigator = useNavigate()
  const [course,setCourse] =useState(null)

  useEffect(()=>{
    const getCourseById = async()=>{
      const res =await getCourse('689a12be8a80051061ec0864')
      setCourse(res)
    }
    getCourseById()
  },[])
  if(!course){
    return <h1>...loding</h1>
  }
  
  if (contextUser) {
    return (
      <>
        <div className="course-page">
          <div className="course-info">
            <div className="course-image-container"><img src={course.image} /></div>
            <div className="written-datails">
              <h1 className="course-name">{course.name}</h1>
              <div className="written-datail">
                <h3>Description</h3>
                <p>
                  {course.name}
                </p>
              </div>
              <div className="written-datail">
                <h3>Location</h3>
                <p>Bahrain, Manama</p>
              </div>
              <div className="written-datail">
                <h3>Teacher</h3>
                <p>{course.teacher?.username}</p>
              </div>
            </div>
            <div className="course-skills">
              {course.skills.map((skill)=>(
                <div className="course-skill">{skill.name}</div>
              ))}
            </div>
          </div>
          <div className="course-live-chat">
            <div className="live-chat">
              <div className="messages"></div>
              <form action="">
                <input type="text" name="content" id="content" />
                <button type="submit">send</button>
              </form>
            </div>
            <div className="participants-list"></div>
          </div>
        </div>
      </>
    )
  }else {
    navigator("/signIn")
  }
}

export default Course
