import { StackedDoughnutChartProps } from "@/types/Props";
import { useState, useRef, useEffect, useMemo } from "react";
import {
  registerables,
  ChartDataset,
  ChartConfiguration,
  Chart,
} from "chart.js";

Chart.register(...registerables);

function Calculation(
  data: StackedDoughnutChartProps["data"],
  background_colors: StackedDoughnutChartProps["background_colors"],
  border_colors: StackedDoughnutChartProps["border_colors"]
): ChartDataset<"doughnut", number[]>[] {
  let maximumViews: number = Math.max(
    ...data.map((item, index, items) => item.views)
  );
  maximumViews =
    maximumViews - (maximumViews / 10) * 10 > maximumViews + 10 - maximumViews
      ? maximumViews + 10
      : (maximumViews / 10) * 10;
  let DataSets: ChartDataset<"doughnut", number[]>[] = [];
  for (let index = 0; index < data.length; index++) {
    DataSets.push({
      label: data[index].emailType,
      data: [data[index].views],
      backgroundColor: background_colors[index],
      borderAlign: "center",
      borderColor: border_colors[index],
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: "round",
      borderRadius: 16,
      borderWidth: 1,
      circumference: (data[index].views / maximumViews) * 360,
      offset: 0,
      weight: 0.5,
    });
  }
  return DataSets;
}

function StackedDoughnutChart({
  label,
  data,
  background_colors,
  border_colors,
}: StackedDoughnutChartProps) {
  const [chartInstance, setChartInstance] = useState<null | Chart<"doughnut">>(
    null
  );
  const chartRef = useRef<null | HTMLCanvasElement>(null);
  const DataSets: ChartDataset<"doughnut", number[]>[] = useMemo<
    ChartDataset<"doughnut", number[]>[]
  >(
    () => Calculation(data, background_colors, border_colors),
    [data, background_colors, border_colors]
  );
  useEffect(() => {
    let newChartInstance: null | Chart<"doughnut"> = null;
    if (chartRef.current) {
      if (chartInstance) {
        chartInstance.destroy();
      }
      const chartContext = chartRef.current.getContext("2d");
      if (chartContext) {
        const chartConfiguration: ChartConfiguration<"doughnut"> = {
          type: "doughnut",
          data: {
            labels: [label],
            datasets: DataSets,
          },
          options: {
            plugins: {
              legend: {
                display: false,
              },
            },
            animation: {
              animateRotate: true,
              animateScale: true,
            },
          },
        };
        newChartInstance = new Chart(chartContext, chartConfiguration);
        setChartInstance(newChartInstance);
      }
    }
    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, [label, data, background_colors, border_colors]);
  return (
    <div className="w-full">
      <canvas ref={chartRef} />
    </div>
  );
}

export default StackedDoughnutChart;
