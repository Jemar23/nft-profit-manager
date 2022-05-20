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

import { Bar } from 'react-chartjs-2';

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

const BarChart = () => {

    // const [chart, setChart] = useState([])

    // const baseUrl = 'https://api.opensea.io/api/v1/collections?asset_owner=0x9B4040a56888dD3BBBcF08d73aA9e0e07F29C0f1&offset=0&limit=300';
    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    // const apiKey = '3953aeb7eb99428fb5e561bc416e85ba';

    // useEffect(() => {
    //     const fetchNfts = async () => {
    //         await fetch(`${proxyUrl}${baseUrl}`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'X-API-KEY': `${apiKey}`,
    //                 'Access-Control-Allow-Origin': '*'
    //             }
    //         }).then((res) => {
    //             res.json().then((json) => {
    //                 console.log(json)
    //                 setChart(json.data)
    //             }) 
    //         })
    //         .catch(err => console.error(err));
    //     }
    //     fetchNfts()
    // }, [baseUrl, proxyUrl ,apiKey])

    // console.log("charts", chart);

    let data = {
        labels: ["Clay Friends", "HAPEBADGE", "The Ninja Hideout"],
        datasets: [{
            label: 'NFTs',
            data: [1,1,1],
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
            <Bar 
            data={data}
            height={400}
            width={400}
            options={options}
            />
        </div>
    );
}

export default BarChart