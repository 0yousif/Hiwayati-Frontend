import { Link } from "react-router-dom"


const CourseCard = ({object}) => {
  return (
    <>
        <div className="course-card">
          <div className="course-image-cotainer"></div>
          <h3>{object.name}</h3>
          <p>{object.description}</p>
          <div className="course-buttons">
            <button><Link to={`/course/${object._id}`}>More</Link></button>
            <button>Enroll</button>
          </div>
        </div>
    </>
  )
}

export default CourseCard
