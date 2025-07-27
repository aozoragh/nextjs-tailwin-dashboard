export function formatDate(input?: string | Date, includeDate = true): string {
  const date = input ? new Date(input) : new Date(0);
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string");
  }

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayOfWeek = days[date.getDay()];
  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();
  return `${
    includeDate ? `${dayOfWeek}, ` : ""
  }${month} ${dayOfMonth}, ${year}`;
}
