import createDataContext from "./createDataContext";

const flightsReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const { Context, Provider } = createDataContext(
  flightsReducer,
  {},
  {
    date: null,
    recommendedDestinations: [],
    exploreEverywhere: [],
    lastViewed: [],
  }
);
