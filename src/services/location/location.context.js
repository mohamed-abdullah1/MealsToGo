import React from "react";
import { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext({
  loading: false,
  error: null,
  onSearch: () => {},
  location: "",
});
export const LocationProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const onSearch = (key) => {
    setKeyword(key);
  };

  useEffect(() => {
    if (!keyword) {
      setLocation(""); //TODO DELETE IT
      return;
    } //do nothing
    setLoading(true);
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then(({ lng, lat }) => {
        const formattedLoc = `${lat},${lng}`;
        setLocation(formattedLoc);
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [keyword]);
  return (
    <LocationContext.Provider
      value={{
        loading,
        error,
        onSearch,
        location,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
