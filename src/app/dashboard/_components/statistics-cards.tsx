"use client";
import React from "react";

// @material-tailwind/react
import { Typography } from "@material-tailwind/react";

// widgets
import { StatisticsCard } from "@/widgets/cards/statistics-card";
import {
  BanknotesIcon,
  ChartBarIcon,
  HomeModernIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { formatCurrency, formatNumber } from "@/utils/format";
import {
  CurrencyDollarIcon,
  ReceiptRefundIcon,
  TicketIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export type Stat = {
  total: number;
  today: number;
  detail?: Array<{ date: string; total: number }>;
};

interface Props {
  stats: {
    totalPaymentProcessingFee: Stat;
    totalFeesCollected: Stat;
    totalOrganizers: Stat;
    totalCustomers: Stat;
    totalEventLive: Stat;
    totalEvents: Stat;
    totalRefundQuantity: Stat;
    totalRefundAmount: Stat;
  };
}

export default function StatisticsCards({ stats }: Props) {
  // @data
  const statisticsCardsData = [
    {
      color: "gray",
      icon: UserGroupIcon,
      title: "Total Organisers",
      value: formatNumber(stats.totalOrganizers.total),
      footer: {
        color: "tw-text-green-500",
        value: formatNumber(stats.totalOrganizers.today),
        label: "new today",
      },
    },
    {
      color: "gray",
      icon: UserGroupIcon,
      title: "Total Customers",
      value: formatNumber(stats.totalCustomers.total),
      footer: {
        color: "tw-text-green-500",
        value: formatNumber(stats.totalCustomers.today),
        label: "new today",
      },
    },
    {
      color: "gray",
      icon: TicketIcon,
      title: "Total Event Live",
      value: formatNumber(stats.totalEventLive.total),
      footer: {
        color: "tw-text-green-500",
        value: formatNumber(stats.totalEventLive.today),
        label: "new today",
      },
    },
    {
      color: "gray",
      icon: TicketIcon,
      title: "Total Events (Past and Live)",
      value: formatNumber(stats.totalEvents.total),
      footer: {
        color: "tw-text-green-500",
        value: formatNumber(stats.totalEvents.today),
        label: " new today",
      },
    },
    {
      color: "gray",
      icon: ReceiptRefundIcon,
      title: "Total Refund (Quantity)",
      value: formatNumber(stats.totalRefundQuantity.total),
      footer: {
        color: "tw-text-green-500",
        value: formatNumber(stats.totalRefundQuantity.today),
        label: " new today",
      },
    },
    {
      color: "gray",
      icon: ReceiptRefundIcon,
      title: "Total Refund Amount",
      value: formatCurrency(stats.totalRefundAmount.total),
      footer: {
        color: "tw-text-green-500",
        value: formatCurrency(stats.totalRefundAmount.today),
        label: "today",
      },
    },
    {
      color: "gray",
      icon: CurrencyDollarIcon,
      title: "Total Payment Processing Fee",
      value: formatCurrency(stats.totalPaymentProcessingFee.total),
      footer: {
        color: "tw-text-green-500",
        value: formatCurrency(stats.totalPaymentProcessingFee.today),
        label: "new today",
      },
    },
    {
      color: "gray",
      icon: CurrencyDollarIcon,
      title: "Total Fees Collected",
      value: formatCurrency(stats.totalFeesCollected.total),
      footer: {
        color: "tw-text-green-500",
        value: formatCurrency(stats.totalFeesCollected.today),
        label: "new today",
      },
    },
  ];

  return (
    <Swiper
      className="tw-my-6 tw-grid tw-gap-6 md:tw-grid-cols-2 xl:tw-grid-cols-4"
      modules={[Autoplay]}
      spaceBetween={16}
      slidesPerView={1}
      breakpoints={{
        680: { slidesPerView: 2 },
        1304: { slidesPerView: 3 },
        1608: { slidesPerView: 4 },
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
        <SwiperSlide key={title}>
          <StatisticsCard
            {...rest}
            title={title}
            color={rest.color as any}
            icon={React.createElement(icon, {
              className: "tw-w-6 tw-h-6 tw-text-white",
            })}
            footer={
              <Typography className="!tw-font-normal tw-text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
