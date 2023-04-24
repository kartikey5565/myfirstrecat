import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
    const valuesArr = props.dataPoints.map(dataPoint=>dataPoint.value)
    const totalMaximum = Math.max(...valuesArr)
  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMaximum}

        />
      )}
    </div>
  );
};
export default Chart;