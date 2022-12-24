import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import Favorite from "./Favorite";

const Wrapper = styled.View`
  margin-left: 16px;
`;
const Img = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;
const Name = styled.Text`
  text-align: center;
`;

const MiniRestaurantCard = ({ restaurant }) => {
  return (
    <Wrapper>
      <Favorite restaurant={restaurant} />
      <Img source={{ uri: restaurant.photos[0] }} />
      <Name>{restaurant.name.substring(0, 10)}</Name>
    </Wrapper>
  );
};

export default MiniRestaurantCard;
