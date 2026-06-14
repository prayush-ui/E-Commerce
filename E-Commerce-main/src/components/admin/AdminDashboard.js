import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar} from 'react-chartjs-2';
import { Card } from 'antd';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [300,200,100,400,200,500,600],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [300,200,100,400,200,500,600],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const AdminDashboard = () => {
  return(
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-6 flex justify-center">
      <Card title="Colection">
      <Bar options={options} data={data} />;
    </Card>
      </div>
    </div>
  )
}

export default AdminDashboard