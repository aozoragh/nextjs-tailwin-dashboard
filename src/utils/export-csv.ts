export type ExportHeaderField = {
  title: string;
  value: string;
};

export const getCSVHeaders = (fields: ExportHeaderField[]): string[] => {
  return fields.map((field) => field.title);
};

export const getCSVRows = (
  rows: Record<string, any>[],
  fields: ExportHeaderField[]
): string[][] => {
  return rows.map((row) =>
    fields.map(({ value }) => {
      const cell = row[value];
      if (typeof cell === "object" && cell !== null) {
        return JSON.stringify(cell);
      }
      return cell != null ? String(cell) : "";
    })
  );
};

export const exportToCSV = (
  filename: string,
  data: string[][],
  columns: string[] // FIXED: Use the correct type
) => {
  // Create header row: No. + all column headers
  const headers = ["No.", ...columns];

  // Create rows
  const csvRows = data.map((row, index) => {
    return [index + 1, ...row].join(",");
  });

  // Join rows and create downloadable CSV
  const csvContent = [headers.join(","), ...csvRows].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${filename}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
