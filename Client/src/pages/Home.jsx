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
yousif/signing-features
        <CoursesList objectsList={objectsList} />
        
        <div className="courses-card">
          <div className="course-card">
            <div className="course-image-cotainer"></div>
            <h3>Course Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              nobis ducimus accusamus quaerat.
            </p>
            <div className="course-buttons">
              <button onClick={()=>{navigator(`course/689a12be8a80051061ec0864`)}}>More</button>
              <button>Enroll</button>
            </div>
          </div>
          <div className="course-card">
            <div className="course-image-cotainer"></div>
            <h3>Course Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              nobis ducimus accusamus quaerat.
            </p>
            <div className="course-buttons">
              <button>More</button>
              <button>Enroll</button>
            </div>
          </div>
          <div className="course-card">
            <div className="course-image-cotainer"></div>
            <h3>Course Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              nobis ducimus accusamus quaerat.
            </p>
            <div className="course-buttons">
              <button>More</button>
              <button>Enroll</button>
            </div>
          </div>
          <div className="course-card">
            <div className="course-image-cotainer"></div>
            <h3>Course Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              nobis ducimus accusamus quaerat.
            </p>
            <div className="course-buttons">
              <button>More</button>
              <button>Enroll</button>
            </div>
          </div>
          <div className="course-card">
            <div className="course-image-cotainer"></div>
            <h3>Course Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              nobis ducimus accusamus quaerat.
            </p>
            <div className="course-buttons">
              <button>More</button>
              <button>Enroll</button>
            </div>
          </div>
          <div className="course-card">
            <div className="course-image-cotainer"></div>
            <h3>Course Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              nobis ducimus accusamus quaerat.
            </p>
            <div className="course-buttons">
              <button>More</button>
              <button>Enroll</button>
            </div>
          </div>
          <div className="course-card">
            <div className="course-image-cotainer"></div>
            <h3>Course Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              nobis ducimus accusamus quaerat.
            </p>
            <div className="course-buttons">
              <button>More</button>
              <button>Enroll</button>
            </div>
          </div>
          <div className="course-card">
            <div className="course-image-cotainer"></div>
            <h3>Course Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              nobis ducimus accusamus quaerat.
            </p>
            <div className="course-buttons">
              <button>More</button>
              <button>Enroll</button>
            </div>
          </div>
          <div className="course-card">
            <div className="course-image-cotainer"></div>
            <h3>Course Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              nobis ducimus accusamus quaerat.
            </p>
            <div className="course-buttons">
              <button>More</button>
              <button>Enroll</button>
            </div>
          </div>
          <div className="course-card">
            <div className="course-image-cotainer"></div>
            <h3>Course Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              nobis ducimus accusamus quaerat.
            </p>
            <div className="course-buttons">
              <button>More</button>
              <button>Enroll</button>
            </div>
          </div>
          <div className="course-card">
            <div className="course-image-cotainer"></div>
            <h3>Course Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              nobis ducimus accusamus quaerat.
            </p>
            <div className="course-buttons">
              <button>More</button>
              <button>Enroll</button>
            </div>
          </div>
          <div className="course-card">
            <div className="course-image-cotainer"></div>
            <h3>Course Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              nobis ducimus accusamus quaerat.
            </p>
            <div className="course-buttons">
              <button>More</button>
              <button>Enroll</button>
            </div>
          </div>
          <div className="course-card">
            <div className="course-image-cotainer"></div>
            <h3>Course Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              nobis ducimus accusamus quaerat.
            </p>
            <div className="course-buttons">
              <button>More</button>
              <button>Enroll</button>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    navigator("/signIn")
  }
}

export default Home
