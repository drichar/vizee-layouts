import { useEffect, useRef } from 'react'
import Chartjs from 'chart.js'

const chartConfig = {
  type: "line",
  data: {
    labels: [`Sep '20`,'','','',`Oct '20`,'','','',`Nov '20`,'','','',`Dec '20`],
    datasets: [
      {
        label: '',
        backgroundColor: "rgba(238, 50, 110, 0.1)",
        borderColor: "rgba(238, 50, 110, 1)",
        pointBackgroundColor: "rgba(255, 255, 255, 1)",
        data: [20.23,20.215,20.22,20.25,20.245,20.27,20.28,20.29,20.3,20.29,20.325,20.325,20.32],
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: "#71717a",
        },
        gridLines: {
          display: false,
        },
      }],
      xAxes: [{
        ticks: {
          fontColor: "#71717a",
        },
        gridLines: {
          color: "rgba(255, 255, 255, .2)",
          borderDash: [5, 5],
          zeroLineColor: "rgba(255, 255, 255, .2)",
          zeroLineBorderDash: [5, 5]
        },
      }]
    }
  }
}

export default function Chart({ labels, data }) {
  const chartRef = useRef(null)

  useEffect(() => {
    if (chartRef?.current) {
      new Chartjs(chartRef.current, {
        ...chartConfig,
        data: {
          ...chartConfig.data,
          labels: labels || chartConfig.data.labels,
          datasets: [
            {
              ...chartConfig.data.datasets[0],
              data: data || chartConfig.data.datasets[0].data
            }
          ]
        }
      })
    }
  }, [chartRef])

  return (
    <canvas ref={chartRef} class="p-5 w-full" />
  )
}
