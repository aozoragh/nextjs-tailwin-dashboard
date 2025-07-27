import React from "react";

// @material-tailwind/react
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { color } from "@material-tailwind/react/types/components/card";

type PropTypes = {
  color?: color;
  icon: React.ReactNode;
  title: React.ReactNode;
  value: React.ReactNode;
  footer?: React.ReactNode;
};

export function StatisticsCard({
  color = "gray",
  icon,
  title,
  value,
  footer = null,
}: PropTypes) {
  return (
    <Card className="tw-border tw-border-blue-gray-100 tw-shadow-sm">
      <div className="tw-flex tw-justify-between">
        <CardHeader
          variant="gradient"
          color={color}
          floated={false}
          shadow={false}
          className="tw-absolute !tw-grid tw-h-12 tw-w-12 tw-place-items-center"
        >
          {icon}
        </CardHeader>
        <CardBody className="!tw-p-4 !tw-pl-0 tw-text-right">
          <Typography
            variant="small"
            className="!tw-font-normal tw-text-blue-gray-600"
          >
            {title}
          </Typography>
          <Typography variant="h4" color="blue-gray">
            {value}
          </Typography>
        </CardBody>
      </div>
      {footer && (
        <CardFooter className="tw-border-t tw-border-blue-gray-50 !tw-p-4">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}

export default StatisticsCard;
