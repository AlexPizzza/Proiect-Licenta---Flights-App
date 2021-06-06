import randomIntFromInterval from "./generateNumberFromInterval";
import computeDistance from "./computeDistance";

function generatePrice(noOfDaysTillFlight, prevLat, prevLong, lat, long) {
  const additionalPrice =
    generateAdditionalPriceBasedOnDaysLeftTillFlight(noOfDaysTillFlight);
  const priceBasedOnDistance = generatePriceBasedOnDistance(
    computeDistance([prevLat, prevLong], [lat, long])
  );

  return priceBasedOnDistance + additionalPrice;
}

function generateAdditionalPriceBasedOnDaysLeftTillFlight(noOfDaysTillFlight) {
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
}

function generatePriceBasedOnDistance(distance) {
  switch (true) {
    case distance < 3000:
      return Math.floor(50 + distance * 0.1);
    case distance < 6000:
      return Math.floor(100 + distance * 0.25);
    default:
      return Math.floor(200 + distance * 0.35);
  }
}

export default generatePrice;
