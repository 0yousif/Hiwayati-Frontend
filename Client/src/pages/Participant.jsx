import { Link } from "react-router-dom"
import Calendar from "./../components/Calendar"
import SkillChart from "../components/Chart/SkillChart"
import CourseChart from "../components/Chart/CourseChart"
import { use } from "react"

const Participant = ({ userInfo, courseInfo }) => {
  const currentCourses = {}
  const previousCourses = {}

  if (userInfo.currentCourses) {
    userInfo.currentCourses.forEach((selectedCourse) => {
      currentCourses[selectedCourse.course._id] = selectedCourse.course.name
    })
  }

  if (userInfo.previousCourses) {
    userInfo.previousCourses.forEach((selectedCourse) => {
      previousCourses[selectedCourse.course._id] = selectedCourse.course.name
    })
  }

  return (
    <>
      <div className="profile-page">
        <div className="about-user">
          <div className="user-data">
            <div className="profile-pic-container">
              <img src={userInfo.image} alt="" />
            </div>
            <div className="courses-count">
              <div className="light-shadow-box">
                <p>Previous</p>
                <h3>{userInfo.previousCourses.length}</h3>
              </div>
              <div className="light-shadow-box">
                <p>Current</p>
                <h3>{userInfo.currentCourses.length}</h3>
              </div>
            </div>

            <div className="courses-list light-shadow-box">
              {Object.entries(currentCourses).map(([id, name]) => (
                <Link to={`/course/${id}`}>
                  <div className="course">
                    <p>{name}</p>
                    <p>Active</p>
                  </div>
                </Link>
              ))}

              {Object.entries(previousCourses).map(([id, name]) => (
                <Link to={`/course/${id}`}>
                  <div className="course">
                    <p>{name}</p>
                    <p>Complete</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="calender-container">
            <Calendar userInfo={userInfo} />
          </div>
        </div>
        <h1 className="statistics-header">Statistics</h1>
        <div className="statistics">
          <div className="skills-charts chart light-shadow-box light-shadow-box">
            <SkillChart userInfo={userInfo} />
          </div>
          <div className="courses-charts chart light-shadow-box light-shadow-box">
            <CourseChart userInfo={userInfo} courseInfo={courseInfo} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Participant
