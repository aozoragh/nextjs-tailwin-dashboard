"use client";
import dynamic from "next/dynamic";

// @material-tailwind/react
import { Typography } from "@material-tailwind/react";

import { chartsConfig } from "@/configs";

// @heroicons/react
import { ClockIcon } from "@heroicons/react/24/outline";
import { formatCurrency, formatNumber } from "@/utils/format";
import { Stat } from "./statistics-cards";

const StatisticsChart = dynamic(
  () => import("../../../widgets/charts/statistics-chart"),
  {
    ssr: false,
  }
);

const websiteViewsChart = (
  details: Array<{ date: string; total: number }>
) => ({
  type: "bar",
  height: 320,
  series: [
    {
      name: "Views",
      data: details.map((item) => item.total),
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#388e3c",
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 1,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: details.map((item) => item.date),
    },
  },
});

interface Props {
  data: {
    totalSales: Stat;
    totalTickets: Stat;
  };
}

export default function StatisticChart({ data }: Props) {
  const statisticsChartsData = [
    {
      color: "white",
      title: "Total Sales",
      description: formatCurrency(data.totalSales.total),
      todayData: (
        <div className="tw-flex tw-items-center tw-gap-2 tw-mt-4">
          <Typography
            variant="small"
            className="tw-font-normal tw-text-[#00A884]"
          >
            {formatCurrency(data.totalSales.today)}
          </Typography>
          <Typography variant="small" className="tw-font-normal">
            new today
          </Typography>
        </div>
      ),
      footer: "7 days",
      chart: websiteViewsChart(data.totalSales.detail ?? []),
    },
    {
      color: "white",
      title: "Total Tickets Sold",
      description: formatNumber(data.totalTickets.total),
      todayData: (
        <div className="tw-flex tw-items-center tw-gap-2 tw-mt-4">
          <Typography
            variant="small"
            className="tw-font-normal tw-text-[#00A884]"
          >
            {formatNumber(data.totalTickets.today)}
          </Typography>
          <Typography variant="small" className="tw-font-normal">
            new today
          </Typography>
        </div>
      ),
      footer: "7 days",
      chart: websiteViewsChart(data.totalTickets.detail ?? []),
    },
  ];
  return (
    <div className="tw-grid tw-grid-cols-1 tw-gap-6 md:tw-grid-cols-2">
      {statisticsChartsData.map((props) => (
        <StatisticsChart
          key={props.title}
          {...props}
          color={props.color as any}
          footer={
            <Typography
              variant="small"
              className="tw-flex tw-items-center !tw-font-normal tw-text-blue-gray-600"
            >
              <ClockIcon
                strokeWidth={2}
                className="tw-h-4 tw-w-4 tw-text-blue-gray-400"
              />
              &nbsp;{props.footer}
            </Typography>
          }
        />
      ))}
    </div>
  );
}
