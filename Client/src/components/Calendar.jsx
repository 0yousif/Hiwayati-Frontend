import CalendarTool from 'react-calendar'
import { useState } from 'react'
import Data from '../services/api'
import 'react-calendar/dist/Calendar.css';

// Example data: key is date string, value is object with name and time


const Calendar = () => {
  const events = {
  '2025-08-12': { name: '', time: '10:00 AM' },
  '2025-08-15': { name: 'Doctor', time: '2:00 PM' },
};

// grab all events from database
// use axios call to backend 
// save events as state
  const [date, setDate] = useState(new Date());
  const onChange = date => {
    setDate(date)
  }

  // Render custom content below day number
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const key = date.toISOString().split('T')[0];
      if (events[key]) {
        return (
          <div style={{ fontSize: '0.7em', color: 'green' }}>
            <div>{events[key].name}</div>
            <div>{events[key].time}</div>
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div>
      <CalendarTool
        onChange={onChange}
        value={date}
        tileContent={tileContent}
      />
    </div>
  )
}

export default Calendar