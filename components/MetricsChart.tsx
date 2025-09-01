'use client';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function MetricsChart({ data }: { data: Array<{id:string, pesoKg?:number, data?: any}> }) {
  const labels = data.slice().reverse().map(d => d.id);
  const values = data.slice().reverse().map(d => d.pesoKg || 0);
  return (
    <Line
      data={{
        labels,
        datasets: [{
          label: 'Peso (kg)',
          data: values,
        }]
      }}
      options={{ responsive: true, maintainAspectRatio: false }}
    />
  );
}
