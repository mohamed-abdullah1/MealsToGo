import { createContext, useEffect, useState } from "react";
import {
  restaurantsRequest,
  restaurantsTransformation,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [temporaryRestaurants, setTemporaryRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const retrieveRestaurants = () => {
    setLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransformation)
        .then((res) => {
          setError("");
          console.log("👉", res);
          setRestaurants(res);
          setTemporaryRestaurants(res);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => setLoading(false));
    }, 2000);
  };
  const searchRestaurant = (query) => {
    setRestaurants(
      temporaryRestaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };
  useEffect(() => {
    retrieveRestaurants();
  }, []);
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        loading,
        error,
        searchRestaurant,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
