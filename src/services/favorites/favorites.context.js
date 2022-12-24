import React, { createContext, useState } from "react";

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
