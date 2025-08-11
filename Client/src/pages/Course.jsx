import { useContext } from "react"
import UserContext from "../context/UserContext"
import { useNavigate } from "react-router-dom"

const Course = ({courseId}) => {
  const { contextUser } = useContext(UserContext)
  const navigator = useNavigate()
  
  
  if (contextUser) {
    return (
      <>
        <div className="course-page">
          <div className="course-info">
            <div className="course-image-container"></div>
            <div className="written-datails">
              <h1 className="course-name">Course Name</h1>
              <div className="written-datail">
                <h3>Description</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                  ab assumenda nihil velit.
                </p>
              </div>
              <div className="written-datail">
                <h3>Location</h3>
                <p>Bahrain, Manama</p>
              </div>
              <div className="written-datail">
                <h3>Teacher</h3>
                <p>Mr. Zainab</p>
              </div>
            </div>
            <div className="course-skills">
              <div className="course-skill">Skill</div>
              <div className="course-skill">Skill</div>
              <div className="course-skill">Skill</div>
              <div className="course-skill">Skill</div>
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
