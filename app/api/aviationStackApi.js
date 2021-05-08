import axios from "axios";

const asCountries = axios.create({
  baseURL: "http://api.aviationstack.com/v1/countries",
});

const asCities = axios.create({
  baseURL: "http://api.aviationstack.com/v1/cities",
});

export default () => {
  return [asCountries, asCities];
};
