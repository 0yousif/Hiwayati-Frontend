import { useEffect, useRef } from 'react'
import { Chart } from 'chart.js/auto'



const SkillChart = ({userInfo, courseInfo}) => {
  const canvasRef = useRef(null)
 

  useEffect(() => {

    console.log('Is connect to chart')
    console.log(userInfo,userInfo)
  
  }, [])

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d')

    const chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Education',
          'Defense',
          'Healthcare',
          'Infrastructure',
          'Other'
        ],
        datasets: [
          {
            label: 'Government Spending (Billion $)',
            data: [120, 200, 150, 90, 50],
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