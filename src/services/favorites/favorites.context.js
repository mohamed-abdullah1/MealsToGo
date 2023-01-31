import React, { createContext, useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const FavoritesContext = createContext({
  favorites: [],
  addFavorites: () => null,
  removeFavorites: () => null,
});

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const addFavorites = (restaurant) => {
    setFavorites((prev) => [...prev, restaurant]);
  };
  const removeFavorites = (restaurantRemoved) => {
    setFavorites((prev) =>
      prev.filter((restaurant) => restaurantRemoved.name !== restaurant.name)
    );
  };
  const getFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favorites");
      value != null ? setFavorites(JSON.parse(value)) : null;
    } catch (e) {
      console.error(e);
    }
  };
  const storeFavorites = useCallback(async () => {
    try {
      await AsyncStorage.setItem("@favorites", JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);
  useEffect(() => {
    getFavorites();
  }, []);
  useEffect(() => {
    storeFavorites();
  }, [favorites, storeFavorites]);
  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorites,
        removeFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
