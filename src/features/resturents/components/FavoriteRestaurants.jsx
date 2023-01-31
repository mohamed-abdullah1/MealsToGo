import React, { useContext } from "react";
import { ScrollView, Text, View } from "react-native";
import styled from "styled-components/native";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import MiniRestaurantCard from "../../../components/MiniRestaurantCard";
const Container = styled(ScrollView)`
  height: 130px;
  flex-direction: row;
  padding: 8px 0;
`;
const Title = styled.Text`
  padding: 8px 0 0 16px;
`;
const FavoriteRestaurants = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);
  if (favorites.length === 0) {
    return;
  }
  return (
    <View>
      <Title>Favorites</Title>
      <Container horizontal={true} showHorizontalScrollIndicator={false}>
        {favorites.length > 0 &&
          favorites.map((fav) => (
            <MiniRestaurantCard
              navigation={navigation}
              key={fav.name}
              restaurant={fav}
            />
          ))}
      </Container>
    </View>
  );
};

export default FavoriteRestaurants;
