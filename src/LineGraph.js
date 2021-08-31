import React, {useState, useEffect} from 'react'
import { Line } from "react-chartjs-2"


function LineGraph() {
    const [data, setData] = useState({})

    // https://disease.sh/v3/covid-19/historical/all?lastdays=120

    const buildChartData = (data, casesType = 'cases ') => {
        const chartData = [];
        let lastDataPoint;

        data[casesType].forEach(date =>{
            if (lastDataPoint){
                const newDataPoint = {
                    x: date,
                    y: data[casesType][date] - lastDataPoint
                }
                chartData.push(newDataPoint);
            }
            lastDataPoint = data[casesType][date];
        })
        return chartData
    }


    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
        .then(response => response.json())
        .then(data =>{

            console.log(data)

        })

    }, []);

    

    return (
        <div>
            {/* <Line data options /> */}
        </div>
    )
}

export default LineGraph
