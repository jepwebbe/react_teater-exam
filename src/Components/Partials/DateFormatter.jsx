import React from "react";

const DateRange = ({ dateRange }) => {
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
    // This component splits the date string (that I have joined)

  const [startDateStr, endDateStr] = dateRange.split(" - ");
    // new Date formats them to a date object

  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  // finally formats them according to the options specified above
  const formatter = new Intl.DateTimeFormat("default", options);
  const startFormatted = formatter.format(startDate);
  const endFormatted = formatter.format(endDate);

  // Slices away the time and adds the year, and finally concatenates
  const formattedDateRange = `${startFormatted.slice(
    0,
    -6
  )} - ${endFormatted.slice(0, -6)} ${endDate.getFullYear()}`;

  return <p>{formattedDateRange.toUpperCase()}</p>;
};

export default DateRange;
