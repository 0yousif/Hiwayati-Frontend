import CourseCard from "./CourseCard"
const CoursesList = ({ objectsList }) => {
  return (
    <>
      <div className="courses-card">
        {objectsList.map((courseObject) => (
          <CourseCard object={courseObject}/>
        ))}
      </div>
    </>
  )
}

export default CoursesList
