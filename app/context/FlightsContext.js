import createDataContext from "./createDataContext";
import { db } from "../config/firebase";

import generatePrice from "../functions/generatePrice";

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
    case "add_user_coords":
      return {
        ...state,
        userCoords: action.payload,
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

const getPopularDestinationsCountries = (dispatch) => async () => {
  try {
    let list = [];
    const snapshot = await db.collection("flights_popular_destinations").get();

    snapshot.forEach((doc) => {
      list.push({ id: doc.id, data: doc.data() });
    });

    dispatch({ type: "add_popular_destinations_countries", payload: list });
  } catch (error) {
    console.log(error);
  }
};

const getQuickGetawaysCountries = (dispatch) => async () => {
  try {
    let list = [];
    const snapshot = await db.collection("flights_quick_getaways").get();

    snapshot.forEach((doc) => {
      list.push({ id: doc.id, data: doc.data() });
    });

    dispatch({ type: "add_quick_getaways_countries", payload: list });
  } catch (error) {
    console.log(error);
  }
};

const getLongerTripsCountries = (dispatch) => async () => {
  try {
    let list = [];
    const snapshot = await db.collection("flights_longer_trips").get();

    snapshot.forEach((doc) => {
      list.push({ id: doc.id, data: doc.data() });
    });

    dispatch({ type: "add_longer_trips_countries", payload: list });
  } catch (error) {
    console.log(error);
  }
};

const getLastMinuteCountries = (dispatch) => async () => {
  try {
    let list = [];
    const snapshot = await db.collection("flights_last_minute").get();

    snapshot.forEach((doc) => {
      list.push({ id: doc.id, data: doc.data() });
    });

    dispatch({ type: "add_last_minute_countries", payload: list });
  } catch (error) {
    console.log(error);
  }
};

const getPlanAheadCountries = (dispatch) => async () => {
  try {
    let list = [];
    const snapshot = await db.collection("flights_plan_ahead").get();

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
    // popularDestinations,
    // quickGetaways,
    // longerTrips,
    // lastMinute,
    // planAhead,
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
    dispatch({
      type: "add_recommended_countries",
      payload: recommendedCountries,
    });

    // popularDestinations.forEach((element) => {
    //   element.data.price = generatePrice(
    //     30,
    //     userCoords.latitude,
    //     userCoords.longitude,
    //     element.data.latitude,
    //     element.data.longitude
    //   );
    // });
    // dispatch({
    //   type: "add_popular_destinations_countries",
    //   payload: popularDestinations,
    // });

    // quickGetaways.forEach((element) => {
    //   element.data.price = generatePrice(
    //     30,
    //     userCoords.latitude,
    //     userCoords.longitude,
    //     element.data.latitude,
    //     element.data.longitude
    //   );
    // });
    // dispatch({ type: "add_quick_getaways_countries", payload: quickGetaways });

    // longerTrips.forEach((element) => {
    //   element.data.price = generatePrice(
    //     30,
    //     userCoords.latitude,
    //     userCoords.longitude,
    //     element.data.latitude,
    //     element.data.longitude
    //   );
    // });
    // dispatch({ type: "add_longer_trips_countries", payload: longerTrips });

    // lastMinute.forEach((element) => {
    //   element.data.price = generatePrice(
    //     30,
    //     userCoords.latitude,
    //     userCoords.longitude,
    //     element.data.latitude,
    //     element.data.longitude
    //   );
    // });
    // dispatch({ type: "add_last_minute_countries", payload: lastMinute });

    // planAhead.forEach((element) => {
    //   element.data.price = generatePrice(
    //     30,
    //     userCoords.latitude,
    //     userCoords.longitude,
    //     element.data.latitude,
    //     element.data.longitude
    //   );
    // });
    // dispatch({ type: "add_plan_ahead_countries", payload: planAhead });
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

const addUserCoordinates = (dispatch) => (coords) => {
  dispatch({ type: "add_user_coords", payload: coords });
};

export const { Context, Provider } = createDataContext(
  flightsReducer,
  {
    getRecommendedCountries,
    getPopularDestinationsCountries,
    getQuickGetawaysCountries,
    getLongerTripsCountries,
    getLastMinuteCountries,
    getPlanAheadCountries,
    addPriceToCountries,
    addPriceToRecommendedCountries,
    addUserCoordinates,
  },
  {
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
  }
);
