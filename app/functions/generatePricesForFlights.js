import randomIntFromInterval from "./generateNumberFromInterval";
import computeDistance from "./computeDistance";

function generatePriceForFlights(
  departureCity,
  arrivalCity,
  noOfDaysTillFlight
) {
  const flightsList = [];

  let oneOrZero;
  if (
    noOfDaysTillFlight < 8 &&
    computeDistance(
      [departureCity.latitude, departureCity.longitude],
      [arrivalCity.latitude, arrivalCity.longitude]
    ) < 3000
  ) {
    oneOrZero = Math.random() + 0.15 >= 0.5 ? 1 : 0;
  } else if (
    noOfDaysTillFlight < 8 &&
    computeDistance(
      [departureCity.latitude, departureCity.longitude],
      [arrivalCity.latitude, arrivalCity.longitude]
    ) > 3000
  ) {
    oneOrZero = Math.random() >= 0.6 ? 1 : 0;
  } else if (
    noOfDaysTillFlight > 7 &&
    computeDistance(
      [departureCity.latitude, departureCity.longitude],
      [arrivalCity.latitude, arrivalCity.longitude]
    ) < 3000
  ) {
    oneOrZero = Math.random() + 0.25 >= 0.5 ? 1 : 0;
  } else if (
    ifnoOfDaysTillFlight > 7 &&
    computeDistance(
      [departureCity.latitude, departureCity.longitude],
      [arrivalCity.latitude, arrivalCity.longitude]
    ) > 3000
  ) {
    oneOrZero = Math.random() + 0.15 >= 0.5 ? 1 : 0;
  } else {
    oneOrZero = Math.random() >= 0.25 ? 1 : 0;
  }

  if (oneOrZero) {
    const numberOfFlights = randomIntFromInterval(0, 4) + 1;

    for (let i = 0; i < numberOfFlights; i++) {
      const additionalPrice =
        generateAdditionalPriceBasedOnDaysLeftTillFlight(noOfDaysTillFlight);
      const priceBasedOnDistance = generatePriceBasedOnDistance(
        computeDistance(
          [departureCity.latitude, departureCity.longitude],
          [arrivalCity.latitude, arrivalCity.longitude]
        )
      );
      if (i % 2 !== 0) {
        flightsList.push({
          departure: departureCity,
          arrival: arrivalCity,
          ticket_price: priceBasedOnDistance + additionalPrice,
          airline: departureCity.country_name + " Airline",
        });
      } else {
        flightsList.push({
          departure: departureCity,
          arrival: arrivalCity,
          ticket_price: priceBasedOnDistance + additionalPrice,
          airline: arrivalCity.country_name + " Airline",
        });
      }

      flightsList.sort((a, b) => a.ticket_price - b.ticket_price);
    }
  }
  return flightsList;
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
      return Math.floor(50 + distance * 0.1 + randomIntFromInterval(100, 200));
    case distance < 6000:
      return Math.floor(
        100 + distance * 0.25 + randomIntFromInterval(200, 300)
      );
    default:
      return Math.floor(
        200 + distance * 0.35 + randomIntFromInterval(300, 500)
      );
  }
}

export default generatePriceForFlights;
