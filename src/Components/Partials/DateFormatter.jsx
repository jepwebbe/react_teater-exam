import React from "react";

const DateRange = ({ dateRange }) => {
  // I've found this component online
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const [startDateStr, endDateStr] = dateRange.split(" - ");
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  const formatter = new Intl.DateTimeFormat("default", options);
  const startFormatted = formatter.format(startDate);
  const endFormatted = formatter.format(endDate);

  const formattedDateRange = `${startFormatted.slice(
    0,
    -6
  )} - ${endFormatted.slice(0, -6)} ${endDate.getFullYear()}`;

  return <p>{formattedDateRange.toUpperCase()}</p>;
};

export default DateRange;
