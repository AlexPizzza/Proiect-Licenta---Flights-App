import randomIntFromInterval from "./generateNumberFromInterval";

const generateAdditionalPriceBasedOnDaysLeftTillFlight = (
  noOfDaysTillFlight
) => {
  switch (true) {
    case noOfDaysTillFlight < 3:
      return randomIntFromInterval(100, 150);
    case noOfDaysTillFlight < 7:
      return randomIntFromInterval(50, 100);
    case noOfDaysTillFlight < 14:
      return randomIntFromInterval(10, 50);
    default:
      return 0;
  }
};

export default generateAdditionalPriceBasedOnDaysLeftTillFlight;
