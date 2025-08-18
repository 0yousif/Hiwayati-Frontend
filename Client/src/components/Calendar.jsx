import CalendarTool from "react-calendar"
import { useState } from "react"
import "react-calendar/dist/Calendar.css"

const Calendar = ({ userInfo }) => {
  const events = {}

  if (!userInfo.courses) {
    userInfo.currentCourses.forEach((currentCourse) => {
      currentCourse.course?.events?.forEach((event) => {
        const eventKey = new Date(event.date).toISOString().split("T")[0]
        events[eventKey] = { name: event.name, time: event.time }
      })
    })
  } else {
    userInfo.courses.forEach((course) => {
      course.events?.forEach((event) => {
        const eventKey = new Date(event.date).toISOString().split("T")[0]
        events[eventKey] = { name: event.name, time: event.time }
      })
    })
  }

  const [date, setDate] = useState(new Date())

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const key = date.toISOString().split("T")[0]
      if (events[key]) {
        return (
          <div style={{ fontSize: "0.7em", color: "green" }}>
            <div>{events[key].name}</div>
            <div>{events[key].time}</div>
          </div>
        )
      }
    }
    return null
  }

  return (
    <div>
      <CalendarTool onChange={setDate} value={date} tileContent={tileContent} />
    </div>
  )
}

export default Calendar
