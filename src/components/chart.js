import React from "react";
import { Chart, Line, Point, Tooltip, getTheme } from "bizcharts";
// console.log(getTheme());

function ChartTermalStatistik(props) {
  const { dataChart } = props;

  return (
    <>
    <Chart
    appendPadding={[10, 0, 0, 10]}
    autoFit
    height={500}
    data={dataChart}
    onLineClick={console.log}
    scale={{
      value: { min: 0, alias: "", type: "linear-strict" },
      year: { range: [0, 1] },
    }}
  >
    <Line position="month*value" color={"#DC241F"} />
    <Point position="month*value" color={"#DC241F"} />
    {/* <Tooltip showCrosshairs follow={false} /> */}
  </Chart>
    </>
  );
}

export default ChartTermalStatistik;
