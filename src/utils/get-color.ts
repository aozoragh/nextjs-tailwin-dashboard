const statusColorMap: Record<string, string> = {
  PENDING: "#fbbf24", // yellow
  SEASON: "#fbbf24", // yellow
  PROCESSING: "#3b82f6", // blue
  "TIMED-ENTRY": "#3b82f6", // blue
  COMPLETED: "#22c55e", // green
  REGULAR: "#22c55e", // green
  NORMAL: "#22c55e", // green
  FAILED: "#ef4444", // red
  BANNED: "#ef4444", // red
  CANCELLED: "#a3a3a3", // gray
  REJECTED: "#f87171", // light red
};

export const formatColor = (color: string) => {
  return statusColorMap[color.toUpperCase()] || "#d1d5db"; // default: gray-300
};
