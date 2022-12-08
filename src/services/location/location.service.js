import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchQuery = "antwerp") => {
  return new Promise((resolve, reject) => {
    const location = locations[searchQuery];
    if (!location) {
      reject("Not Found!");
    }
    resolve(location);
  });
};
export const locationTransform = (location) => {
  const formattedLocation = camelize(location);
  const { geometry } = formattedLocation.results[0];
  const { lng, lat } = geometry.location;
  return { lng, lat };
};
