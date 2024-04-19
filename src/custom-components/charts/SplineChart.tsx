import { SplineChartProps } from "@/types/Props";
import { useState, useRef, useEffect, useMemo } from "react";
import {
  registerables,
  ChartConfiguration,
  ScriptableContext,
  Chart,
} from "chart.js";

Chart.register(...registerables);

function Calculation(data: SplineChartProps["data"]): {
  Months: string[];
  Values: number[];
} {
  const Months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  data.sort(
    (currentItem, nextItem) => currentItem.monthIndex - nextItem.monthIndex
  );
  const Values: number[] = data.map((item, index, items) => item.value);
  return { Months, Values };
}

function SplineChart({
  label,
  data,
  background_colors,
  border_color,
}: SplineChartProps) {
  const [chartInstance, setChartInstance] = useState<null | Chart<"line">>(
    null
  );
  const chartRef = useRef<null | HTMLCanvasElement>(null);
  const { Months, Values }: { Months: string[]; Values: number[] } = useMemo<{
    Months: string[];
    Values: number[];
  }>(() => Calculation(data), [data]);
  useEffect(() => {
    let newChartInstance: null | Chart<"line"> = null;
    if (chartRef.current) {
      if (chartInstance) {
        chartInstance.destroy();
      }
      const chartContext = chartRef.current.getContext("2d");
      if (chartContext) {
        const chartConfiguration: ChartConfiguration<"line"> = {
          type: "line",
          data: {
            labels: Months,
            datasets: [
              {
                label: label,
                data: Values,
                fill: true,
                backgroundColor: (context: ScriptableContext<"line">) => {
                  if (!context.chart.chartArea) {
                    return;
                  }
                  const {
                    ctx,
                    data,
                    chartArea: { top, bottom },
                  } = context.chart;
                  const gradientBackground = ctx.createLinearGradient(
                    0,
                    top,
                    0,
                    bottom
                  );
                  gradientBackground.addColorStop(0, background_colors[0]);
                  gradientBackground.addColorStop(0.5, background_colors[1]);
                  gradientBackground.addColorStop(1, background_colors[2]);
                  return gradientBackground;
                },
                borderCapStyle: "round",
                borderColor: border_color,
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "round",
                borderWidth: 1,
                order: 1,
                pointBackgroundColor: "rgba(0, 0, 0, 0)",
                pointBorderColor: "rgba(0, 0, 0, 0)",
                pointBorderWidth: 1,
                pointHitRadius: 4,
                pointHoverRadius: 4,
                pointRadius: 1,
                pointStyle: "line",
                tension: 0.5,
              },
            ],
          },
          options: {
            scales: {
              x: {
                display: false,
                grid: {
                  display: false,
                },
              },
              y: {
                display: false,
                grid: {
                  display: false,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
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
  }, [label, data, background_colors, border_color]);
  return (
    <div className="w-full">
      <canvas ref={chartRef} />
    </div>
  );
}

export default SplineChart;
