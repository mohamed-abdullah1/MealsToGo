import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Wrapper = styled(View)``;

const MealCard = styled(Card)`
  padding: ${(props) => props.theme.sizes[1]};
`;
const MealCover = styled(Card.Cover)`
  border-radius: ${(props) => props.theme.sizes[2]};
`;
const MealTitle = styled(Card.Title)``;
const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Pizza 😀",
    photos = [
      "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000",
    ],
    address = "100 SOME Random Street",
    isOpeningNow = true,
    rating = 4,
    icon = "",
  } = restaurant;
  return (
    <Wrapper>
      <MealCard elevation={5} mode="elevated">
        <MealTitle title={name} />
        <MealCover elevation={5} source={{ uri: photos[0] }} />
      </MealCard>
    </Wrapper>
  );
};

export default RestaurantInfo;
