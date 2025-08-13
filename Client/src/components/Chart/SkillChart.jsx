import { useEffect, useRef } from 'react'
import { Chart } from 'chart.js/auto'

const SkillChart = ({ userInfo }) => {
  const canvasRef = useRef(null)

  let Courses = {}
  let courseKey = []
  let courseValue = []
    console.log('------------------------------------------------')
    console.log('userInfo', userInfo)
  let arts= 0
  let strategic = 0
  let tech = 0
  let communication = 0
  let handCrafts = 0
  let logicalThinking = 0

  useEffect(() => {

    const getSkillInfo = async () => {
      const Skill = userInfo.skills
      console.log("Skill",Skill)

    }
    getSkillInfo()


    const ctx = canvasRef.current.getContext('2d')

    const chartInstance = new Chart(ctx, {
      type: 'radar',
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

  return <canvas ref={canvasRef}> </canvas>
}

export default SkillChart
