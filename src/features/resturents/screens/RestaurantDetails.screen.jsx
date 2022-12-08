import React from "react";
import { Card, Paragraph, Title, Button } from "react-native-paper";
import { Wrapper } from "../components/RestaurantDetails.styles";
const RestaurantDetails = ({ route }) => {
  const { address, icon, photos, rating, name } = route.params;
  return (
    <Wrapper>
      <Card elevation={5}>
        <Card.Cover source={{ uri: photos[0] }} />
      </Card>
    </Wrapper>
  );
};

export default RestaurantDetails;
