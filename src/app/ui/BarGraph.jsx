import {
  Chart as chartjs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

chartjs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const BarChart = () => {
  const data = {
    labels: [2011, 2012, 2013, 2014, 2015, 2016, 2017],
    datasets: [
      {
        label: '',
        data: [20, 32, 43, 54, 23, 29.19],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {};

  return (
    <div style={{ width: '80%', height: '80%' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
