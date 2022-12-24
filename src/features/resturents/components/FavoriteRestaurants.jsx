import React, { useContext } from "react";
import { ScrollView, Text, View } from "react-native";
import styled from "styled-components/native";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import MiniRestaurantCard from "../../../components/MiniRestaurantCard";
const Container = styled(ScrollView)`
  height: 150px;
  flex-direction: row;
  padding: 16px 0;
`;

const FavoriteRestaurants = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <View>
      <Container horizontal={true}>
        {favorites.length > 0 ? (
          favorites.map((fav) => (
            <MiniRestaurantCard key={fav.name} restaurant={fav} />
          ))
        ) : (
          <Text>Nothing...</Text>
        )}
      </Container>
    </View>
  );
};

export default FavoriteRestaurants;
