import createDataContext from "./createDataContext";
import { db } from "../config/firebase";

const flightsReducer = (state, action) => {
  switch (action.type) {
    case "add_recommended_countries":
      return {
        ...state,
        recommendedCountries: action.payload,
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

export const { Context, Provider } = createDataContext(
  flightsReducer,
  { getRecommendedCountries },
  {
    date: null,
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
