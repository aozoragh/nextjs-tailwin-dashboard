import ExportButton from "@/widgets/button/export";
import { SearchInput } from "@/widgets/input/search";
import Filter from "@/widgets/select/filter";
import { FC } from "react";
import StatisticsCards from "./statistics-cards";
import StatisticChart from "./statistics-chart";
import ServerErrorScreen from "@/widgets/layout/server-error";
import PartLoading from "@/widgets/loading/part-loading";

const AnalyticsOverview: FC = () => {
  const chartData = {
    totalSales: {
      total: 458,
      today: 38,
      detail: [
        { date: "2023-10-01", total: 100 },
        { date: "2023-10-02", total: 120 },
        { date: "2023-10-03", total: 80 },
        { date: "2023-10-04", total: 158 },
        { date: "2023-10-05", total: 0 },
        { date: "2023-10-06", total: 0 },
        { date: "2023-10-07", total: 0 },
      ],
    },
    totalTickets: {
      total: 146,
      today: 35,
      detail: [
        { date: "2023-10-01", total: 20 },
        { date: "2023-10-02", total: 30 },
        { date: "2023-10-03", total: 25 },
        { date: "2023-10-04", total: 40 },
        { date: "2023-10-05", total: 31 },
        { date: "2023-10-06", total: 0 },
        { date: "2023-10-07", total: 0 },
      ],
    },
  };

  const statsData = {
    totalPaymentProcessingFee: {
      total: 300,
      today: 20,
    },
    totalFeesCollected: {
      total: 1500,
      today: 256,
    },
    totalOrganizers: {
      total: 3849,
      today: 76,
    },
    totalCustomers: {
      total: 9852,
      today: 38,
    },
    totalEventLive: {
      total: 345,
      today: 12,
    },
    totalEvents: {
      total: 5675,
      today: 345,
    },
    totalRefundQuantity: {
      total: 56756,
      today: 348,
    },
    totalRefundAmount: {
      total: 7435,
      today: 324,
    },
  };

  return (
    <div className="tw-p-4">
      <StatisticsCards stats={statsData} />
      <StatisticChart data={chartData} />
    </div>
  );
};

export default AnalyticsOverview;
