/* eslint-disable react/prop-types */

import { Pie } from "@nivo/pie";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const data = [
  {
    id: "css",
    label: "CSS",
    value: 410,
    color: "hsl(19, 70%, 50%)",
  },
  {
    id: "sass",
    label: "SASS",
    value: 175,
    color: "hsl(213, 70%, 50%)",
  },
  {
    id: "javascript",
    label: "JS",
    value: 128,
    color: "hsl(58, 70%, 50%)",
  },
];
const MyPieChart = () => (
  <div style={styles}>
    <Pie
      data={data}
      margin={{
        bottom: 80,
        right: 80,
        left: 80,
      }}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          itemWidth: 100,
          itemHeight: 18,
          translateY: 60,
        },
      ]}
      width={400}
      height={400}
    />
  </div>
);

export default MyPieChart;
