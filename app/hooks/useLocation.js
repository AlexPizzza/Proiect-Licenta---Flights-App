import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default () => {
  const [location, setLocation] = useState(null);
  const [locationText, setLocationText] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };

      let cityLocation = await Location.reverseGeocodeAsync(coords);
      setLocation(cityLocation);

      const city = JSON.stringify(cityLocation[0].city).replace(
        /^"(.+(?="$))"$/,
        "$1"
      );
      const isoCountryCode = JSON.stringify(
        cityLocation[0].isoCountryCode
      ).replace(/^"(.+(?="$))"$/, "$1");

      setLocationText(city + ", " + isoCountryCode);
    })();
  }, []);

  return [locationText];
};
