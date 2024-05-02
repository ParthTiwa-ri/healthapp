import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  //   Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    date: "2023-04-01",
    weight: 40,
  },
  {
    date: "2023-04-07",
    weight: 60,
  },
  {
    date: "2023-04-09",
    weight: 50,
  },
];

export default function BarChartComponent() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="date" />
      <YAxis domain={[0, 150]} />
      {/* <Tooltip /> */}
      <Legend />
      <Bar dataKey="weight" fill="#8884d8" />
    </BarChart>
  );
}
