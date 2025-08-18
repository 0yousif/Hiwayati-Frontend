import { useEffect, useRef, useState } from "react"
import { Chart } from "chart.js/auto"

const CourseChart = ({ userInfo }) => {
  const canvasRef = useRef(null)

  let allCourses = []
  let courseKey = []
  let courseValue = []
  let currentCourses = []
  let previousCourses = []

  useEffect(() => {
    const getCurrentCourses = () => {
      let course = []
      for (let i = 0; i < userInfo.currentCourses.length; i++) {
        course.push(userInfo.currentCourses[i].course.name)
        courseKey.push(userInfo.currentCourses[i].course.name)
        courseValue.push(userInfo.currentCourses[i].hours)
      }

      currentCourses = [...course]
    }

    const getPreviousCourses = () => {
      let course = []
      for (let i = 0; i < userInfo.previousCourses.length; i++) {
        course.push(userInfo.previousCourses[i].course.name)
        courseKey.push(userInfo.previousCourses[i].course.name)
        courseValue.push(userInfo.previousCourses[i].hours)
      }
      previousCourses = [...course]
    }

    getCurrentCourses()
    getPreviousCourses()

    if (currentCourses) {
      const ctx = canvasRef.current.getContext("2d")

      const chartInstance = new Chart(ctx, {
        type: "bar",
        data: {
          labels: courseKey,
          datasets: [
            {
              label: "Hours",
              data: courseValue,
              backgroundColor: [
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(153, 102, 255, 0.6)",
              ],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: "top" },
          },
        },
      })

      return () => {
        chartInstance.destroy()
      }
    }
  }, [userInfo])

  return <canvas ref={canvasRef}> </canvas>
}

export default CourseChart
