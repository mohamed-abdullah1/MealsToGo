import camelize from "camelize";
import { mockImages, mocks } from "./mock";

export const restaurantsRequest = (location = "43.653225,-79.383186") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Not Found");
    }
    resolve(mock);
  });
};

export const restaurantsTransformation = ({ results }) => {
  const mappedRestaurants = results.map((restaurant) => {
    restaurant.photos = [
      mockImages[Math.floor(Math.random() * mockImages.length)],
    ];
    return {
      ...restaurant,
      isClosedTemp: !(restaurant.business_status === "OPERATIONAL"),
      isOpeningNow:
        restaurant.opening_hours && restaurant.opening_hours.open_now,
      address: restaurant.vicinity,
    };
  });
  return camelize(mappedRestaurants);
};
