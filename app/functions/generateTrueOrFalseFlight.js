import computeDistance from "./computeDistance";

const generateTrueOrFalseFlight = (
  departureCity,
  arrivalCity,
  noOfDaysTillFlight
) => {
  let isTrue;
  if (
    noOfDaysTillFlight < 8 &&
    computeDistance(
      [departureCity.latitude, departureCity.longitude],
      [arrivalCity.latitude, arrivalCity.longitude]
    ) < 3000
  ) {
    isTrue = Math.random() >= 0.35 ? true : false;
  } else if (
    noOfDaysTillFlight < 8 &&
    computeDistance(
      [departureCity.latitude, departureCity.longitude],
      [arrivalCity.latitude, arrivalCity.longitude]
    ) > 3000
  ) {
    isTrue = Math.random() >= 0.7 ? true : false;
  } else if (
    noOfDaysTillFlight > 7 &&
    computeDistance(
      [departureCity.latitude, departureCity.longitude],
      [arrivalCity.latitude, arrivalCity.longitude]
    ) < 3000
  ) {
    isTrue = Math.random() >= 0.1 ? true : false;
  } else if (
    ifnoOfDaysTillFlight > 7 &&
    computeDistance(
      [departureCity.latitude, departureCity.longitude],
      [arrivalCity.latitude, arrivalCity.longitude]
    ) > 3000
  ) {
    isTrue = Math.random() >= 0.25 ? true : false;
  }

  return isTrue;
};

export default generateTrueOrFalseFlight;
