import { useEffect, useRef } from 'react'
import { Chart } from 'chart.js/auto'

const SkillChart = ({ userInfo, courseInfo}) => {
  const canvasRef = useRef(null)


    console.log('------------------------------------------------')
    console.log('userInfo', userInfo)


  let arts= 0
  let strategic = 0
  let tech = 0
  let communication = 0
  let handCrafts = 0
  let logicalThinking = 0



  for(let i =0 ; i< userInfo.currentCourses.length; i++){
    let course = userInfo.currentCourses[i].course
    let courseHours = Number(userInfo.currentCourses[i].hours)
    
    for(let j=0 ; j<userInfo.currentCourses[i].course.skills.length;j++){
      const skillName = course.skills[j].name


      switch (skillName) {
        case 'Arts':
          arts += courseHours
          break
        case 'Strategic':
          strategic += courseHours
          break
        case 'Tech':
          tech += courseHours
          break
        case 'Communication':
          communication += courseHours
          break
        case 'Hand Crafts':
          handCrafts += courseHours
          break
        case 'Logical Thinking':
          logicalThinking += courseHours
          break
      }
    }

  }

   for(let i =0 ; i< userInfo.previousCourses.length; i++){
    let course = userInfo.previousCourses[i].course
    let courseHours = Number(userInfo.previousCourses[i].hours)
    
    for(let j=0 ; j<userInfo.previousCourses[i].course.skills.length;j++){
      const skillName = course.skills[j].name


      switch (skillName) {
        case 'Arts':
          arts += courseHours
          break
        case 'Strategic':
          strategic += courseHours
          break
        case 'Tech':
          tech += courseHours
          break
        case 'Communication':
          communication += courseHours
          break
        case 'Hand Crafts':
          handCrafts += courseHours
          break
        case 'Logical Thinking':
          logicalThinking += courseHours
          break
      }
    }

  }

  console.log("Arts:", arts)
console.log("Strategic:", strategic)
console.log("Tech:", tech)
console.log("Communication:", communication)
console.log("Hand Crafts:", handCrafts)
console.log("Logical Thinking:", logicalThinking)

useEffect(() => {

    const getSkillInfo = async () => {
      const Skill = userInfo.skills
      console.log("Skill",Skill)

    }
    getSkillInfo()


    const ctx = canvasRef.current.getContext('2d')

    const chartInstance = new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: [
          'Arts',
          'Strategic',
          'Tech',
          'Communication',
          'Hand Crafts',
          'Logical Thinking'
        ],
        datasets: [
          {
            label: 'Hours',
            data: [arts,strategic,tech,communication,handCrafts,logicalThinking],
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
  }, )

  return <canvas ref={canvasRef}> </canvas>
}

export default SkillChart
