import { useEffect, useRef } from 'react'
import { Chart } from 'chart.js/auto'



const SkillChart = ({userInfo, courseInfo}) => {
  const canvasRef = useRef(null)
 
   let Courses ={}
   let courseKey = []
   let courseValue =[]

   

    console.log('Is connect to chart')
    console.log("userInfo",userInfo)
    console.log("courseInfo",courseInfo)

   
  
    for(let i=0;i<courseInfo.length;i++){
      const course = courseInfo[i]
      Courses[course._id] = course.name
  
    }
   

    for(let i=0;i<userInfo.currentCourses.length;i++){
      const selectedCourse = userInfo.currentCourses[i]
      console.log("selectedCourse",selectedCourse)
      courseKey.push(Courses[selectedCourse.course])
      courseValue.push(selectedCourse.hours)
    }

    console.log("------------------------ back ---------------------")
    console.log("courseKey",courseKey)
    console.log("courseValue",courseValue)

      for(let i=0;i<userInfo.previousCourses.length;i++){
      const selectedCourse = userInfo.previousCourses[i]
      console.log("selectedCourse",selectedCourse)
      courseKey.push(Courses[selectedCourse.course])
      courseValue.push(selectedCourse.hours)
    }

 console.log("------------------------ after ---------------------")
    console.log("courseKey",courseKey)
    console.log("courseValue",courseValue)

    console.log("Courses",Courses)

  

   
  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d')

    const chartInstance = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: courseKey
        ,
        datasets: [
          {
            label: 'Hours',
            data: courseValue,
            backgroundColor: [
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(153, 102, 255, 0.6)'
            ]
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' }
        }
      }
    })

    return () => {
      chartInstance.destroy()
    }
  }, [])

  return (<canvas ref={canvasRef}> </canvas>)
}

export default SkillChart