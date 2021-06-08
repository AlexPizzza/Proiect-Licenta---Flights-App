import randomIntFromInterval from "./generateNumberFromInterval";
import computeDistance from "./computeDistance";
import generatePriceBasedOnDistance from "./generatePriceBasedOnDistance";
import generateAdditionalPriceBasedOnDaysLeftTillFlight from "./generateAdditionalPriceBasedOnDaysLeftTillFlight";

const speed = 900;
const numberOfMinutesInADay = 1440;

const generatePriceForRoundTripFlights = (
  departureCity,
  arrivalCity,
  noOfDaysTillFlight,
  departureDate,
  arrivalDate
) => {
  const flightsList = [];

  const numberOfFlights = randomIntFromInterval(1, 5) + 1;

  const distance = computeDistance(
    [departureCity.latitude, departureCity.longitude],
    [arrivalCity.latitude, arrivalCity.longitude]
  );
  const time = Math.floor((distance / speed) * 60);

  for (let i = 0; i < numberOfFlights; i++) {
    const additionalPrice =
      generateAdditionalPriceBasedOnDaysLeftTillFlight(noOfDaysTillFlight);
    const priceBasedOnDistance = generatePriceBasedOnDistance(distance);

    const randomFlightTime =
      Math.floor((time + randomIntFromInterval(0, 15)) / 5) * 5;
    const randomFlightTimeInHrs = Math.floor(randomFlightTime / 60);
    const randomFlightTimeInHrsWithDecimals = (randomFlightTime / 60).toFixed(
      2
    );
    const decimal =
      randomFlightTimeInHrsWithDecimals -
      Math.floor(randomFlightTimeInHrsWithDecimals);
    const randomFlightTimeInMins = Math.round(decimal * 60);

    const { departureHours, departureMinutes, departureTotalMinutes } =
      randomTime();

    let arrivalHours;
    let arrivalHoursWithDecimals;
    let arrivalDecimal;
    let arrivalMinutes;
    if (departureTotalMinutes + randomFlightTime === numberOfMinutesInADay) {
      arrivalHours = 0;
      arrivalMinutes = 0;
    } else if (
      departureTotalMinutes + randomFlightTime >
      numberOfMinutesInADay
    ) {
      const minutesOver =
        departureTotalMinutes + randomFlightTime - numberOfMinutesInADay;
      if (minutesOver < 60) {
        arrivalHours = 0;
        arrivalMinutes = minutesOver;
      } else {
        arrivalHours = Math.floor(minutesOver / 60);
        arrivalHoursWithDecimals = (minutesOver / 60).toFixed(2);
        arrivalDecimal =
          arrivalHoursWithDecimals - Math.floor(arrivalHoursWithDecimals);
        arrivalMinutes = Math.round(arrivalDecimal * 60);
      }
    } else {
      const totalMinutes = departureTotalMinutes + randomFlightTime;
      arrivalHours = Math.floor(totalMinutes / 60);
      arrivalHoursWithDecimals = (totalMinutes / 60).toFixed(2);
      arrivalDecimal =
        arrivalHoursWithDecimals - Math.floor(arrivalHoursWithDecimals);
      arrivalMinutes = Math.round(arrivalDecimal * 60);
    }

    const flight = {
      departure_city: departureCity,
      arrival_city: arrivalCity,
      departure_date: departureDate,
      arrival_date: arrivalDate,
      ticket_price: priceBasedOnDistance + additionalPrice,
      flight_duration: {
        hours:
          randomFlightTimeInHrs < 10
            ? "0" + randomFlightTimeInHrs
            : randomFlightTimeInHrs + "",
        minutes:
          randomFlightTimeInMins < 10
            ? "0" + randomFlightTimeInMins
            : randomFlightTimeInMins + "",
      },
      departure_time: {
        hours: departureHours < 10 ? "0" + departureHours : departureHours + "",
        minutes:
          departureMinutes < 10
            ? "0" + departureMinutes
            : departureMinutes + "",
      },
      arrival_time: {
        hours: arrivalHours < 10 ? "0" + arrivalHours : arrivalHours + "",
        minutes:
          arrivalMinutes < 10 ? "0" + arrivalMinutes : arrivalMinutes + "",
      },
    };

    if (i % 2 !== 0) {
      flight.airline = departureCity.country_name + " Airline";
      // flightsList.push({
      //   departure_city: departureCity,
      //   arrival_city: arrivalCity,
      //   departure_date: departureDate,
      //   arrival_date: arrivalDate,
      //   ticket_price: priceBasedOnDistance + additionalPrice,
      //   airline: departureCity.country_name + " Airline",
      //   flight_duration: randomFlightTime,
      // });
    } else {
      // flightsList.push({
      //   departure_city: departureCity,
      //   arrival_city: arrivalCity,
      //   departure_date: departureDate,
      //   arrival_date: arrivalDate,
      //   ticket_price: priceBasedOnDistance + additionalPrice,
      //   airline: arrivalCity.country_name + " Airline",
      //   flight_duration: randomFlightTime,
      // });
      flight.airline = arrivalCity.country_name + " Airline";
    }

    flightsList.push(flight);
  }

  flightsList.sort((a, b) => a.ticket_price - b.ticket_price);

  return flightsList;
};

const generatePriceForOneWayFlights = (
  departureCity,
  arrivalCity,
  noOfDaysTillFlight,
  departureDate
) => {
  const flightsList = [];

  const numberOfFlights = randomIntFromInterval(1, 5) + 1;

  const distance = computeDistance(
    [departureCity.latitude, departureCity.longitude],
    [arrivalCity.latitude, arrivalCity.longitude]
  );
  const time = Math.floor((distance / speed) * 60);

  for (let i = 0; i < numberOfFlights; i++) {
    const additionalPrice =
      generateAdditionalPriceBasedOnDaysLeftTillFlight(noOfDaysTillFlight);
    const priceBasedOnDistance = generatePriceBasedOnDistance(distance);
    const randomFlightTime =
      Math.floor((time + randomIntFromInterval(0, 15)) / 5) * 5;

    const randomFlightTimeInHrs = Math.floor(randomFlightTime / 60);
    const randomFlightTimeInHrsWithDecimals = (randomFlightTime / 60).toFixed(
      2
    );
    const decimal =
      randomFlightTimeInHrsWithDecimals -
      Math.floor(randomFlightTimeInHrsWithDecimals);
    const randomFlightTimeInMins = Math.round(decimal * 60);

    const { departureHours, departureMinutes, departureTotalMinutes } =
      randomTime();

    let arrivalHours;
    let arrivalHoursWithDecimals;
    let arrivalDecimal;
    let arrivalMinutes;
    if (departureTotalMinutes + randomFlightTime === numberOfMinutesInADay) {
      arrivalHours = 0;
      arrivalMinutes = 0;
    } else if (
      departureTotalMinutes + randomFlightTime >
      numberOfMinutesInADay
    ) {
      const minutesOver =
        departureTotalMinutes + randomFlightTime - numberOfMinutesInADay;
      if (minutesOver < 60) {
        arrivalHours = 0;
        arrivalMinutes = minutesOver;
      } else {
        arrivalHours = Math.floor(minutesOver / 60);
        arrivalHoursWithDecimals = (minutesOver / 60).toFixed(2);
        arrivalDecimal =
          arrivalHoursWithDecimals - Math.floor(arrivalHoursWithDecimals);
        arrivalMinutes = Math.round(arrivalDecimal * 60);
      }
    } else {
      const totalMinutes = departureTotalMinutes + randomFlightTime;
      arrivalHours = Math.floor(totalMinutes / 60);
      arrivalHoursWithDecimals = (totalMinutes / 60).toFixed(2);
      arrivalDecimal =
        arrivalHoursWithDecimals - Math.floor(arrivalHoursWithDecimals);
      arrivalMinutes = Math.round(arrivalDecimal * 60);
    }

    const flight = {
      departure_city: departureCity,
      arrival_city: arrivalCity,
      departure_date: departureDate,
      ticket_price: priceBasedOnDistance + additionalPrice,
      flight_duration: {
        hours:
          randomFlightTimeInHrs < 10
            ? "0" + randomFlightTimeInHrs
            : randomFlightTimeInHrs + "",
        minutes:
          randomFlightTimeInMins < 10
            ? "0" + randomFlightTimeInMins
            : randomFlightTimeInMins + "",
      },
      departure_time: {
        hours: departureHours < 10 ? "0" + departureHours : departureHours + "",
        minutes:
          departureMinutes < 10
            ? "0" + departureMinutes
            : departureMinutes + "",
      },
      arrival_time: {
        hours: arrivalHours < 10 ? "0" + arrivalHours : arrivalHours + "",
        minutes:
          arrivalMinutes < 10 ? "0" + arrivalMinutes : arrivalMinutes + "",
      },
    };

    if (i % 2 !== 0) {
      // flightsList.push({
      //   departure_city: departureCity,
      //   arrival_city: arrivalCity,
      //   departure_date: departureDate,
      //   ticket_price: priceBasedOnDistance + additionalPrice,
      //   airline: departureCity.country_name + " Airline",
      //   flight_duration: randomFlightTime,
      // });
      flight.airline = departureCity.country_name + " Airline";
    } else {
      // flightsList.push({
      //   departure_city: departureCity,
      //   arrival_city: arrivalCity,
      //   departure_date: departureDate,
      //   ticket_price: priceBasedOnDistance + additionalPrice,
      //   airline: arrivalCity.country_name + " Airline",
      //   flight_duration: randomFlightTime,
      // });
      flight.airline = arrivalCity.country_name + " Airline";
    }

    flightsList.push(flight);
  }

  flightsList.sort((a, b) => a.ticket_price - b.ticket_price);

  return flightsList;
};

// Nr total de minute intr-o zi - 1440
const randomTime = () => {
  hrs = Math.round(Math.random() * 24);
  mins = Math.round(Math.random() * 60);

  hrsToMins = hrs * 60;

  totalMins = hrsToMins + mins;

  return { hrs, mins, totalMins };
};

export { generatePriceForRoundTripFlights, generatePriceForOneWayFlights };
