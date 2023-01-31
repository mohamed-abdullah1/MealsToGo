import React, { useCallback } from "react";
import { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext({
  loading: false,
  error: null,
  onSearch: () => {},
  location: "",
  viewport: null,
});
export const LocationProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const onSearch = useCallback((key) => {
    setKeyword(key);
  }, []);
  const [viewport, setViewport] = useState(null);
  useEffect(() => {
    if (!keyword) {
      return;
    } //do nothing
    setLoading(true);
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then(({ lng, lat, viewport }) => {
        const formattedLoc = `${lat},${lng}`;
        setLocation(formattedLoc);
        setViewport(viewport);
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
        keyword,
        loading,
        error,
        onSearch,
        location,
        viewport,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
