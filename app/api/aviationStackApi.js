import axios from "axios";

// Aviation stack no. of countries: 252, with limit of 100 per search
// 0-99; 100-199; 200-252
const asCountries = axios.create({
  baseURL: "http://api.aviationstack.com/v1/countries",
});

// Aviation stack no. of cities: 9368, with limit of 100 per search
const asCities = axios.create({
  baseURL: "http://api.aviationstack.com/v1/cities",
});

export { asCities, asCountries };

// export default () => {
//   return [asCountries, asCities];
// };
