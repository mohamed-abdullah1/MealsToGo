import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { LocationContext } from "../location/location.context";
import {
  restaurantsRequest,
  restaurantsTransformation,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { location } = useContext(LocationContext);
  const retrieveRestaurants = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      restaurantsRequest(location)
        .then(restaurantsTransformation)
        .then((res) => {
          setError("");
          setRestaurants(res);
        })
        .catch((err) => {
          console.error("👉", err);
          setError(err);
        })
        .finally(() => setLoading(false));
    }, 2000);
  }, [location]);

  useEffect(() => {
    retrieveRestaurants();
  }, [location, retrieveRestaurants]);
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        loading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
