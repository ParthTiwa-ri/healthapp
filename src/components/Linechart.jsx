import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  //   CartesianGrid,
  Tooltip,
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

export default function LineChartComponent() {
  return (
    <LineChart
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
      {/* <CartesianGrid strokeDasharray="1 1" /> */}
      <XAxis dataKey="date" tickFormatter={(date) => date.slice(5, 10)} />
      <YAxis domain={[0, 150]} />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="weight"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}
