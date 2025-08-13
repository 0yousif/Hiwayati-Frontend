import { Link } from 'react-router-dom'
import Calendar from './../components/Calendar'
import SkillChart from '../components/Chart/SkillChart'
import CourseChart from '../components/Chart/CourseChart'

const Teacher = ({userInfo,courseInfo }) => {

  let allCourses = userInfo.courses.map((course) => ({
    id: course._id,
    name: course.name
  }))

  return(
   <>
      <div className="profile-page">
        <div className="about-user">
          <div className="user-data">
            <div className="profile-pic-container">
              <img src="asd" alt="" />
              <h1>Teacher</h1>
            </div>
            <div className="courses-count">
              <div>
                <p>Current</p>
                <h3>{userInfo.courses.length}</h3>
              </div>
            </div>

            <div className="courses-list">

               {allCourses.map((course) => (
                <Link to={`/course/${course.id}`}>
                  <div className="course">
                    <p>{course.name}</p>
                    <p>Active</p>
                  </div>
                </Link>
              ))}
          
            </div>
          </div>
          <div className="calender-container">
            <Calendar />
          </div>
        </div>
        <h1 className="statistics-header">Statistics</h1>
        <div className="statistics">
          <div className="skills-charts chart">
            {/* <SkillChart userInfo={userInfo} /> */}
          </div>
          <div className="courses-charts chart">
            {/* <CourseChart userInfo={userInfo} courseInfo={courseInfo} /> */}
          </div>
        </div>
      </div>
    </>
  )

}

export default Teacher