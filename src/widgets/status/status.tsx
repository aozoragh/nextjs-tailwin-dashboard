import { CashOutStatus } from "@/app/dashboard/cash-out/_components/cashout-table";
import { TicketType } from "@/types/analytics/live-events.type";
import { TransactionStatus } from "@/types/analytics/sales.type";
import { formatColor } from "@/utils/get-color";
import { FC } from "react";

export enum BanStatus {
  BANNED = "BANNED",
  NORMAL = "NORMAL",
}

interface StatusProps {
  status: CashOutStatus | BanStatus | TicketType | TransactionStatus;
}

export const Status: FC<StatusProps> = ({ status }) => (
  <span style={{ color: formatColor(status) }}>{status}</span>
);
