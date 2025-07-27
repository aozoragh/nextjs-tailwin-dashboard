import React from "react";

// @material-tailwind/react
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

// react-apexcharts
import Chart from "react-apexcharts";

type PropTypes = {
  chart: {};
  title: React.ReactNode;
  description: React.ReactNode;
  todayData?: React.ReactNode;
  footer: React.ReactNode;
  color?:
    | "white"
    | "blue-gray"
    | "gray"
    | "brown"
    | "deep-orange"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "light-green"
    | "green"
    | "teal"
    | "cyan"
    | "light-blue"
    | "blue"
    | "indigo"
    | "deep-purple"
    | "purple"
    | "pink"
    | "red";
};

export function StatisticsChart({
  color = "blue",
  chart,
  title,
  description,
  todayData,
  footer = null,
}: PropTypes) {
  return (
    <Card className="tw-border tw-border-blue-gray-100 tw-shadow-sm">
      <CardHeader
        variant="gradient"
        color={color}
        floated={false}
        shadow={false}
      >
        <Chart {...chart} />
      </CardHeader>
      <CardBody className="tw-px-6 !tw-pt-0">
        <Typography variant="h6" color="blue-gray">
          {title}
        </Typography>
        <Typography
          variant="small"
          className="tw-font-normal tw-text-blue-gray-600"
        >
          {description}
        </Typography>
        {/* {todayData && (
          <Typography
            variant="small"
            className="tw-font-normal tw-text-blue-gray-600"
          >
            {todayData}
          </Typography>
        )} */}
        {todayData && <div className="tw-mt-2">{todayData}</div>}
      </CardBody>
      {footer && (
        <CardFooter className="tw-border-t tw-border-blue-gray-50">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}

export default StatisticsChart;
