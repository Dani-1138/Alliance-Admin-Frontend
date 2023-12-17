import { Chart as chartjs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

chartjs.register(ArcElement, Tooltip, Legend);
const DoughnutChart = () => {
  const data = {
    labels: ['Deans list', 'Pass', 'Fail'],
    datasets: [
      {
        data: [23, 43, 12],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {};

  return (
    <div style={{ width: '80%', height: '80%' }}>
      {/* <h4 style={{ fontWeight: 'lighter', color: 'grey' }}>Student Status</h4> */}
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
