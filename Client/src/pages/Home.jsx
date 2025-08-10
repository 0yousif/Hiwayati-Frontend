import { useContext } from "react"
import UserContext from "../context/UserContext"
import { useNavigate } from "react-router-dom"


const Home = () => {
  const { contextUser } = useContext(UserContext)
  const navigator = useNavigate()
  if (contextUser) {
    return (
      <div className="home-page">
        <h1>Recommended For You</h1>
        <div className="courses-card">
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
