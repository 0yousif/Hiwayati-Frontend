import { useEffect } from "react"
import Chart from "chart.js/auto"


const ChartCrater = ({labels,values,type,id}) => {

  
  useEffect(() => {
    
    const CreateCharter = () => {

      
      const ctx = document.getElementById(id)

      
       const existing = Chart.getChart(ctx)
       if (existing) existing.destroy()

      new Chart(ctx, {
        type: type,
        data: {
          labels,
          datasets: [
            {
              label: "Value",
              data: values,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          maintainAspectRatio: false,
        },
      })
    }

    CreateCharter()
  }, [labels, values, type, id])

  return (
    <>
      {/* here the contianere of chart, an example if you have div with specift hight and width, return <div id="the id"></div> */}
      <div style={{ height: 500 }}>
        <canvas id={`${id}`} ></canvas>
      </div>

    </>
  )
}

export default ChartCrater
