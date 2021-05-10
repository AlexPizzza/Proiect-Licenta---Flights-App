import { useEffect, useState } from "react";
import { API_KEY } from "@env";
import { asCountries } from "../api/aviationStackApi";
import { db } from "../config/firebase";

// const descriptions = [
//   "Enjoy the unique diversity of France",
//   "Explore the beauty and magic of Greece",
//   "Plan your next vacation in Spain",
//   "Enjoy the mountains of Switzerland",
//   "Explore United Kingdom's architecture and history",
// ];

export default () => {
  useEffect(() => {
    searchCountriesApi();
  }, []);

  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  // const [asCountries, asCities] = aviationStackApi();

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
        const countryName = result.country_name;
        return (
          countryName === "France" ||
          countryName === "Greece" ||
          countryName === "Spain" ||
          countryName === "Switzerland" ||
          countryName === "United Kingdom"
        );
      });
      for (const element of filteredList) {
        if (element.country_name === "France") {
          // element.description = descriptions[0];
          for (const country of list) {
            if (country.name === "France") {
              element.image = country.image;
              element.description = country.description;
            }
          }
        } else if (element.country_name === "Greece") {
          // element.description = descriptions[1];
          for (const country of list) {
            if (country.name === "Greece") {
              element.image = country.image;
              element.description = country.description;
            }
          }
        } else if (element.country_name === "Spain") {
          // element.description = descriptions[2];
          for (const country of list) {
            if (country.name === "Spain") {
              element.image = country.image;
              element.description = country.description;
            }
          }
        } else if (element.country_name === "Switzerland") {
          // element.description = descriptions[3];
          for (const country of list) {
            if (country.name === "Switzerland") {
              element.image = country.image;
              element.description = country.description;
            }
          }
        } else if (element.country_name === "United Kingdom") {
          // element.description = descriptions[4];
          for (const country of list) {
            if (country.name === "United Kingdom") {
              element.image = country.image;
              element.description = country.description;
            }
          }
        }
      }

      console.log(filteredList);
      setResults(filteredList);
    } catch (error) {
      console.log(error);
      setErrorMessage("Something went wrong!");
    }
  };

  return [results, errorMessage];
};
