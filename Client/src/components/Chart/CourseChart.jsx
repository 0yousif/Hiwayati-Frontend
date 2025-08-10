import { useEffect, useState } from "react"
import data from "../../data.json"
import CreateChart from "./CreateChart"

const CourseChart = () => {
  const [labels, setLabels] = useState([])
  const [values, setValues] = useState([])

  useEffect(() => {
    setLabels(data.map((item) => (item.name)))
    setValues(data.map((item) => Number(item.value)))
    
  }, [])

  return (
  
  <>

<CreateChart labels={labels} values={values} type={"line"} id={'1123'} />
<CreateChart labels={labels} values={values} type={"pie"} id={'11123'} />

  </>

  )
}

export default CourseChart
