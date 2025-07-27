// @material-tailwind/react
import { Avatar, Typography } from "@material-tailwind/react";

// @heroicons/react
import {
  RectangleGroupIcon,
} from "@heroicons/react/24/solid";
import { BanknotesIcon, ChartBarIcon, Squares2X2Icon, TicketIcon, UsersIcon } from "@heroicons/react/24/outline";

const icon = {
  className: "tw-w-5 tw-h-5 tw-text-inherit",
};

const text = {
  color: "inherit",
  className: "tw-w-5 tw-grid place-items-center !tw-font-medium",
};

export const routes = [
  {
    name: "dashboard",
    icon: <RectangleGroupIcon {...icon} />,
    pages: [
      {
        icon: <ChartBarIcon className="tw-h-5 tw-w-5" />,
        name: "analytics",
        path: "/dashboard/analytics",
      },
      {
        icon: <BanknotesIcon className="tw-h-5 tw-w-5" />,
        name: "cash-out",
        path: "/dashboard/cash-out",
      },
      {
        icon: <UsersIcon className="tw-h-5 tw-w-5" />,
        name: "users",
        path: "/dashboard/users",
      },
      {
        icon: <TicketIcon className="tw-h-5 tw-w-5" />,
        name: "events",
        path: "/dashboard/events",
      },
      {
        icon: <Squares2X2Icon className="tw-h-5 tw-w-5" />,
        name: "organizer-dashboard",
        path: "/dashboard/organizer-dashboard",
      },
    ],
  }
];
export default routes;
