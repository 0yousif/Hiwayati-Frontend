import { useEffect, useState } from "react"
import data from "../../seeding/data.json"
import data2 from '../../seeding/data2.json'
import CreateChart from "./CreateChart"

const SkillChart = () => {
  const [labels, setLabels] = useState([])
  const [values, setValues] = useState([])

  useEffect(() => {
    setLabels(data.map((item) => (item.name)))
    setValues(data.map((item) => Number(item.value)))
    
  }, [])

  return (
  
  <>

<CreateChart labels={labels} values={values} type={"line"} id={'123'} />
<CreateChart labels={labels} values={values} type={"pie"} id={'123'} />

  </>
  
  )
}

export default SkillChart
