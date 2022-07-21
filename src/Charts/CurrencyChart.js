import React, {useState, useEffect} from 'react';
import { Chart as ChartJS,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  } from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  );



function CurrencyChart() {

    const [currency, setCurrency] = useState([]);
    const date = new Date();
    
    const baseUrl = 'https://api.coinbase.com/v2/prices/BTC-USD/spot';

    const getCurrency = async () => {
        const options = {
            method: 'GET',
            headers: {Accept: 'application/json'}
          };
          
           fetch(`${baseUrl}`, options)
          .then(response => response.json())
          .then(res => {
            setCurrency(res.data.amount)
          })
          .then(response => console.log(response)) 
          .catch(err => console.error(err));
    }

    useEffect(() => {
        getCurrency();
    }, [currency])
    
    

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let data = {
        labels: [`${month}--${day}--${year}`],
        datasets: [{
            label: 'Bitcoin Price',
            data: {currency},
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }

    let options = {
        maintainAspectRation: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels: {
                fontSize: 26
            }
        }
    }
    return (
        <div>
            <Line 
            data={data}
            height={400}
            width={400}
            options={options}
            />
        </div>
    );
}  


export default CurrencyChart  