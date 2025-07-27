// utils/format.ts

/**
 * Format a number with commas (e.g., 1500 => "1,500")
 */
export const formatNumber = (num: number | string): string => {
  return new Intl.NumberFormat("en-US").format(Number(num));
};

/**
 * Format a number as currency (e.g., 5600 => "$5,600.00")
 */
export const formatCurrency = (
  num: number | string,
  currency: string = "USD"
): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(Number(num));
};

/**
 * Format percentage (e.g., 0.123 => "12.3%")
 */
export const formatPercent = (value: number, fractionDigits = 1): string => {
  return `${(value * 100).toFixed(fractionDigits)}%`;
};
