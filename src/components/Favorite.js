import React, { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { FavoritesContext } from "../services/favorites/favorites.context";

const Icon = styled(TouchableOpacity)`
  z-index: 9;
  position: absolute;
  top: 4px;
  right: 4px;
`;
const Favorite = ({ restaurant }) => {
  const { favorites, addFavorites, removeFavorites } =
    useContext(FavoritesContext);
  const isInFavorites = favorites.find((res) => res.name === restaurant.name);
  const handleClick = () => {
    if (isInFavorites) {
      removeFavorites(restaurant);
    } else {
      addFavorites(restaurant);
    }
  };
  return (
    <Icon onPress={handleClick}>
      <MaterialIcons
        name={isInFavorites ? "favorite" : "favorite-outline"}
        size={32}
        color={isInFavorites ? "red" : "white"}
      />
    </Icon>
  );
};

export default Favorite;
