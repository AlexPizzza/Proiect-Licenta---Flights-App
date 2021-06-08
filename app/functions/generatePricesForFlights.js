import randomIntFromInterval from "./generateNumberFromInterval";
import computeDistance from "./computeDistance";

function generatePriceForRoundTripFlights(
  departureCity,
  arrivalCity,
  noOfDaysTillFlight,
  departureDate,
  arrivalDate
) {
  const flightsList = [];

  const numberOfFlights = randomIntFromInterval(1, 5) + 1;

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
        departure_city: departureCity,
        arrival_city: arrivalCity,
        departure_date: departureDate,
        arrival_date: arrivalDate,
        ticket_price: priceBasedOnDistance + additionalPrice,
        airline: departureCity.country_name + " Airline",
      });
    } else {
      flightsList.push({
        departure_city: departureCity,
        arrival_city: arrivalCity,
        departure_date: departureDate,
        arrival_date: arrivalDate,
        ticket_price: priceBasedOnDistance + additionalPrice,
        airline: arrivalCity.country_name + " Airline",
      });
    }

    flightsList.sort((a, b) => a.ticket_price - b.ticket_price);
  }

  return flightsList;
}

function generatePriceForOneWayFlights(
  departureCity,
  arrivalCity,
  noOfDaysTillFlight,
  departureDate
) {
  const flightsList = [];

  const numberOfFlights = randomIntFromInterval(1, 5) + 1;

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
        departure_city: departureCity,
        arrival_city: arrivalCity,
        departure_date: departureDate,
        ticket_price: priceBasedOnDistance + additionalPrice,
        airline: departureCity.country_name + " Airline",
      });
    } else {
      flightsList.push({
        departure_city: departureCity,
        arrival_city: arrivalCity,
        departure_date: departureDate,
        ticket_price: priceBasedOnDistance + additionalPrice,
        airline: arrivalCity.country_name + " Airline",
      });
    }

    flightsList.sort((a, b) => a.ticket_price - b.ticket_price);
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

export { generatePriceForRoundTripFlights, generatePriceForOneWayFlights };
