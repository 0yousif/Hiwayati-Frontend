import { Link, useNavigate } from "react-router-dom"
import Client from "../services/api"

const CourseCard = ({ object, isTeacher, user }) => {
  const navigator = useNavigate()
  const courseEnroll = async () => {
    await Client.post(`/course/${object._id}/enroll`)
    navigator(`/course/${object._id}`)
  }

  return (
    <>
      <div className="course-card light-shadow-box">
        <div className="course-image-cotainer"><img src={object.image} alt="" /></div>
        <h3>{object.name}</h3>
        <p>{object.description}</p>
        <div className="course-buttons">
          <button>
            <Link to={`/course/${object._id}`}>More</Link>
          </button>
          {isTeacher?null:<button onClick={courseEnroll}>Enroll</button> }
        </div>
      </div>
    </>
  )
}

export default CourseCard
