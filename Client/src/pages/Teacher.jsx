import { Link } from "react-router-dom"
import Calendar from "./../components/Calendar"
import SkillChart from "../components/Chart/SkillChart"
import CourseChart from "../components/Chart/CourseChart"
import { all } from "axios"
import { useEffect, useState } from "react"
import Client from "../services/api"
import { MultiSelect } from "primereact/multiselect"

const Teacher = ({ userInfo, courseInfo }) => {
  let allCourses = userInfo.courses.map((course) => ({
    id: course._id,
    name: course.name,
  }))

  const initialVlaues = {
    name: "",
    description: "",
    skills: { skills: [] },
  }

  const [skills, setSkills] = useState([])
  const [formValues, setFormValues] = useState(initialVlaues)
  const [selectedSkills, setSelectedSkills] = useState([])
  useEffect(() => {
    const getSkills = async () => {
      const res = await Client.get("/skill")
      setSkills(res.data)
    }
    getSkills()
  }, [])

  const changeHandler = (e) => {
    if (e.target.name === "skills") {
      setSelectedSkills(e.value)
      setFormValues({ ...formValues, [e.target.name]: selectedSkills })
      console.log(selectedSkills)
    } else {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
  }

  const submitNewCourseHandler = async (e) => {
    e.preventDefault()
    await Client.post(`/course`, formValues)
  }

  console.log(userInfo)
  return (
    <>
      <div className="profile-page">
        <form
          className="new-course-teacher-form"
          onSubmit={submitNewCourseHandler}
        >
          <label htmlFor="name">Name</label>
          <input onChange={changeHandler} type="text" name="name" id="name" />
          <label htmlFor="description">Description</label>
          <input
            onChange={changeHandler}
            type="text"
            name="description"
            id="description"
          />
          <label htmlFor="skills">Skills</label>
          <MultiSelect
            value={selectedSkills}
            onChange={changeHandler}
            options={skills}
            optionLabel="name"
            placeholder="Select Cities"
            name="skills"
            className="w-full md:w-20rem"
          />
          <button type="submit">Submit</button>
        </form>
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
            <Calendar userInfo={userInfo} />
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
