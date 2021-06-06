import createDataContext from "./createDataContext";
import { db } from "../config/firebase";

import generatePrice from "../functions/generatePrice";
import sorter from "../functions/sorter";

const flightsReducer = (state, action) => {
  switch (action.type) {
    case "add_recommended_countries":
      return {
        ...state,
        recommendedCountries: action.payload,
      };
    case "add_popular_destinations_countries":
      return {
        ...state,
        popularDestinations: action.payload,
      };
    case "add_quick_getaways_countries":
      return {
        ...state,
        quickGetaways: action.payload,
      };
    case "add_longer_trips_countries":
      return {
        ...state,
        longerTrips: action.payload,
      };
    case "add_last_minute_countries":
      return {
        ...state,
        lastMinute: action.payload,
      };
    case "add_plan_ahead_countries":
      return {
        ...state,
        planAhead: action.payload,
      };
    case "add_cities":
      return {
        ...state,
        cities: action.payload,
      };
    case "clear_cities":
      return {
        ...state,
        cities: action.payload,
      };
    case "add_locations":
      return {
        ...state,
        locations: action.payload,
      };
    case "clear_locations":
      return {
        ...state,
        locations: action.payload,
      };
    case "add_user_coords":
      return {
        ...state,
        userCoords: action.payload,
      };
    case "add_user_date":
      return {
        ...state,
        date: action.payload,
      };
    default:
      return state;
  }
};

const getRecommendedCountries = (dispatch) => async () => {
  try {
    let list = [];
    const snapshot = await db.collection("flights_recommended").get();

    snapshot.forEach((doc) => {
      list.push({ id: doc.id, data: doc.data() });
    });

    dispatch({ type: "add_recommended_countries", payload: list });
  } catch (error) {
    console.log(error);
  }
};

const getCountriesBySearchType = (dispatch) => async () => {
  try {
    let list = [];
    let snapshot = await db.collection("flights_popular_destinations").get();
    snapshot.forEach((doc) => {
      list.push({ id: doc.id, data: doc.data() });
    });
    dispatch({ type: "add_popular_destinations_countries", payload: list });

    list = [];
    snapshot = await db.collection("flights_quick_getaways").get();
    snapshot.forEach((doc) => {
      list.push({ id: doc.id, data: doc.data() });
    });
    dispatch({ type: "add_quick_getaways_countries", payload: list });

    list = [];
    snapshot = await db.collection("flights_longer_trips").get();
    snapshot.forEach((doc) => {
      list.push({ id: doc.id, data: doc.data() });
    });
    dispatch({ type: "add_longer_trips_countries", payload: list });

    list = [];
    snapshot = await db.collection("flights_last_minute").get();
    snapshot.forEach((doc) => {
      list.push({ id: doc.id, data: doc.data() });
    });
    dispatch({ type: "add_last_minute_countries", payload: list });

    list = [];
    snapshot = await db.collection("flights_plan_ahead").get();
    snapshot.forEach((doc) => {
      list.push({ id: doc.id, data: doc.data() });
    });
    dispatch({ type: "add_plan_ahead_countries", payload: list });
  } catch (error) {
    console.log(error);
  }
};

const addPriceToCountries =
  (dispatch) =>
  (
    recommendedCountries,
    popularDestinations,
    quickGetaways,
    longerTrips,
    lastMinute,
    planAhead,
    userCoords
  ) => {
    recommendedCountries.forEach((element) => {
      element.data.price = generatePrice(
        30,
        userCoords.latitude,
        userCoords.longitude,
        element.data.latitude,
        element.data.longitude
      );
    });
    recommendedCountries.sort(sorter);
    dispatch({
      type: "add_recommended_countries",
      payload: recommendedCountries,
    });

    popularDestinations.forEach((element) => {
      element.data.price = generatePrice(
        30,
        userCoords.latitude,
        userCoords.longitude,
        element.data.latitude,
        element.data.longitude
      );
    });
    popularDestinations.sort(sorter);
    dispatch({
      type: "add_popular_destinations_countries",
      payload: popularDestinations,
    });

    quickGetaways.forEach((element) => {
      element.data.price = generatePrice(
        30,
        userCoords.latitude,
        userCoords.longitude,
        element.data.latitude,
        element.data.longitude
      );
    });
    quickGetaways.sort(sorter);
    dispatch({ type: "add_quick_getaways_countries", payload: quickGetaways });

    longerTrips.forEach((element) => {
      element.data.price = generatePrice(
        30,
        userCoords.latitude,
        userCoords.longitude,
        element.data.latitude,
        element.data.longitude
      );
    });
    longerTrips.sort(sorter);
    dispatch({ type: "add_longer_trips_countries", payload: longerTrips });

    lastMinute.forEach((element) => {
      element.data.price = generatePrice(
        30,
        userCoords.latitude,
        userCoords.longitude,
        element.data.latitude,
        element.data.longitude
      );
    });
    lastMinute.sort(sorter);
    dispatch({ type: "add_last_minute_countries", payload: lastMinute });

    planAhead.forEach((element) => {
      element.data.price = generatePrice(
        30,
        userCoords.latitude,
        userCoords.longitude,
        element.data.latitude,
        element.data.longitude
      );
    });
    planAhead.sort(sorter);
    dispatch({ type: "add_plan_ahead_countries", payload: planAhead });
  };

const getLocations = (dispatch) => async (text) => {
  const toTitleCase = (phrase) => {
    return phrase
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const newText = toTitleCase(text);

  const airportsRef = db.collection("flights_airports");
  const countriesRef = db.collection("flights_all_countries");

  const countries = await countriesRef
    .where("country_name", ">=", newText)
    .where("country_name", "<=", newText + "\uf8ff")
    .get();

  const airports = await airportsRef
    .where("airport_name", ">=", newText)
    .where("airport_name", "<=", newText + "\uf8ff")
    .get();
  const cities = await airportsRef
    .where("city_name", ">=", newText)
    .where("city_name", "<=", newText + "\uf8ff")
    .get();

  let list = [];
  airports.forEach((doc) => {
    list.push({
      id: doc.id,
      data: doc.data(),
    });
  });
  cities.forEach((doc) => {
    list.push({
      id: doc.id,
      data: doc.data(),
    });
  });
  countries.forEach((doc) => {
    list.push({ id: doc.id, data: doc.data() });
  });

  const seen = new Set();

  const locationsList = list.filter((el) => {
    const duplicate = seen.has(el.id);
    seen.add(el.id);
    return !duplicate;
  });

  console.log(locationsList);

  dispatch({ type: "add_locations", payload: locationsList });
};

const clearLocations = (dispatch) => () => {
  dispatch({ type: "clear_locations", payload: [] });
};

const addPriceToRecommendedCountries =
  (dispatch) => (countries, userLat, userLong) => {
    countries.forEach((element) => {
      element.data.price = generatePrice(
        30,
        userLat,
        userLong,
        element.data.latitude,
        element.data.longitude
      );
    });

    dispatch({ type: "add_recommended_countries", payload: countries });
  };

const addCities = (dispatch) => async (country_iso2, userCoords) => {
  let citiesList = [];

  const citiesRef = db.collection("flights_cities_" + country_iso2);
  const cities = await citiesRef.orderBy("image", "asc").get();
  cities.forEach((doc) => {
    citiesList.push({ id: doc.id, data: doc.data() });
  });

  citiesList.forEach((element) => {
    element.data.price = generatePrice(
      30,
      userCoords.latitude,
      userCoords.longitude,
      element.data.latitude,
      element.data.longitude
    );
  });

  citiesList.sort(sorter);
  dispatch({
    type: "add_cities",
    payload: citiesList,
  });
};

const clearCities = (dispatch) => () => {
  dispatch({ type: "clear_cities", payload: [] });
};

const addUserCoordinates = (dispatch) => (coords) => {
  dispatch({ type: "add_user_coords", payload: coords });
};

const getDate = (dispatch) => () => {
  const date = new Date().toString();
  console.log(date);
  dispatch({ type: "add_user_date", payload: date });
};

export const { Context, Provider } = createDataContext(
  flightsReducer,
  {
    addCities,
    clearCities,
    addPriceToCountries,
    addPriceToRecommendedCountries,
    addUserCoordinates,
    clearLocations,
    getDate,
    getCountriesBySearchType,
    getLocations,
    getRecommendedCountries,
  },
  {
    cities: {},
    date: null,
    userCoords: null,
    recommendedCountries: [],
    popularDestinations: [],
    quickGetaways: [],
    longerTrips: [],
    lastMinute: [],
    planAhead: [],
    exploreEverywhere: [],
    lastViewed: [],
    locations: [],
  }
);
