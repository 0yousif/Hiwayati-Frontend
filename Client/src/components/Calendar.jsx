import CalendarTool from 'react-calendar'
import { useState } from 'react'
import 'react-calendar/dist/Calendar.css';
const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const onChange = date => {
    setDate(date)
  }
  return (
    <div>
      <CalendarTool onChange={onChange} value={date}/>
      {console.log(date)}
    </div>
  )
}

export default Calendar