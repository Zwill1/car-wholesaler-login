/* eslint-disable react/prop-types */

import PieChart from "../components/charts/PieChart";
import {
  FullWidth,
  Column1of2,
  Column2of2,
} from "../admin/layout/Columns.styled";

export default function Dashboard() {
  return (
    <>
      <FullWidth>
        <Column1of2 />
        <Column2of2>
          <PieChart />
        </Column2of2>
      </FullWidth>
    </>
  );
}
