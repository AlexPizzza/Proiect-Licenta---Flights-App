import { useEffect, useState } from "react";
import { API_KEY } from "@env";
import aviationStackApi from "../api/aviationStackApi";
import { db } from "../config/firebase";

const descriptions = [
  "Enjoy the unique diversity of France",
  "Explore the beauty and magic of Greece",
  "Plan your next vacation in Spain",
  "Enjoy the mountains of Switzerland",
  "Explore United Kingdom's architecture and history",
];

export default () => {
  useEffect(() => {
    searchCountriesApi();
  }, []);

  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [asCountries, asCities] = aviationStackApi();

  const searchCountriesApi = async () => {
    try {
      const params = {
        access_key: `${API_KEY}`,
      };

      let list = [];
      const snapshot = await db.collection("flights_countries").get();

      snapshot.forEach((doc) => {
        list.push(doc.data());
      });

      const response = await asCountries.get("", { params });
      const filteredList = response.data.data.filter((result) => {
        const country = result.country_name;
        return (
          country === "France" ||
          country === "Greece" ||
          country === "Spain" ||
          country === "Switzerland" ||
          country === "United Kingdom"
        );
      });
      for (const element of filteredList) {
        if (element.country_name === "France") {
          element.description = descriptions[0];
          for (const countryImage of list) {
            if (countryImage.name === "France")
              element.image = countryImage.image;
          }
        } else if (element.country_name === "Greece") {
          element.description = descriptions[1];
          for (const countryImage of list) {
            if (countryImage.name === "Greece")
              element.image = countryImage.image;
          }
        } else if (element.country_name === "Spain") {
          element.description = descriptions[2];
          for (const countryImage of list) {
            if (countryImage.name === "Spain")
              element.image = countryImage.image;
          }
        } else if (element.country_name === "Switzerland") {
          element.description = descriptions[3];
          for (const countryImage of list) {
            if (countryImage.name === "Switzerland")
              element.image = countryImage.image;
          }
        } else if (element.country_name === "United Kingdom") {
          element.description = descriptions[4];
          for (const countryImage of list) {
            if (countryImage.name === "United Kingdom")
              element.image = countryImage.image;
          }
        }
      }

      console.log(filteredList);
      setResults(filteredList);
    } catch (error) {
      setErrorMessage("Something went wrong!");
    }
  };

  return [results, errorMessage];
};
