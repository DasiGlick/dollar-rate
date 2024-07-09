import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { getAllData } from '../service';

const months = [];
const averages = [];

async function getXAxis() {
  const data = await getAllData();
  data.foreach(function(month) {
    months.push(month.month);
  })
  return months;
}

async function getYAxis() {
  const data = await getAllData();
  data.foreach(function(month) {
    averages.push(month.average);
  })
  return averages;
}

const xLabels = getXAxis();
const yLabels = getYAxis();

export default function BasicLineChart() {

  return (
    <LineChart
      xAxis={[{ data: xLabels }]}
      series={[{ data: yLabels }]}
      width={500}
      height={300}
    />
  );
}
