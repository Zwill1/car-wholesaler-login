/* eslint-disable react/prop-types */

import { Pie } from "@nivo/pie";

export const MyPie = ({ data }) => (
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
);
