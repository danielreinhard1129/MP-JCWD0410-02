import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/cardd";
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Mock data
const monthlyData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Events',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

const dailyData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Tickets Sold',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const Statistics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Monthly Events</CardTitle>
        </CardHeader>
        <CardContent>
          <Bar data={monthlyData} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Daily Ticket Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <Line data={dailyData} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Statistics;