/* eslint-disable react/prop-types */

import data from "../data/PieData";
import Pie from "../components/charts/PieChart";
// import { MyResponsivePieCanvas } from "../components/charts/PieChart.js";

export default function Dashboard() {
  return (
    <>
      <div>Dashboardggggggg</div>
      <Pie data={data} />
      {/* <MyResponsivePieCanvas data={data} /> */}
    </>
  );
}
