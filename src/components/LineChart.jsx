import React from 'react';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Typography  } from 'antd';
import {  Box, Text} from '@chakra-ui/react';

const LineChart = ({ coinHistory, currentPrice, coinName }) => {

    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
    }

    //for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
   // coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp * 1000).toLocaleDateString());
   // }

   for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    var t = new Date(coinHistory?.data?.history[i].timestamp * 1000);
    var formatted = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(t);
    coinTimestamp.push(formatted);
    //console.log(formatted);
  }

const data = {
        labels: coinTimestamp,
        datasets: [
            {
            label: 'Price In USD',
            data: coinPrice,
            fill: false,
            backgroundColor: '#3c4564',
            borderColor: '#3c4564',
            },
        ],
      };

const options = {
  scales: {
        yAxes: [
        {
        ticks: {
        beginAtZero: true,
        },
        },
        ],
  },
  };
  ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend);

    return (
      <Box  alignItems="center" margin={10}>

        <Text fontSize={30} style={{ color :"#2d3553"}} fontWeight= 'bold' justifyContent="center" className="chart-title">{coinName} Price Chart </Text>

        <Text level={5} className="price-change">Change: {coinHistory?.data?.change}%</Text>
        <Text level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Text>

        <Line data={data} options={options} />

        </ Box>
);
};

export default LineChart;