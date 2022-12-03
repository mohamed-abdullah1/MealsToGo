import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star.js";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/Space.js";
import {
  Wrapper,
  MealCard,
  MealTitle,
  MealCover,
  Address,
  StarsContainer,
  SvgContainer,
  OpenContainer,
} from "./restaurant-info.styles";
const RestaurantInfo = ({ restaurant = {} }) => {
  const { name, photos, address, isOpeningNow, rating, icon, isClosedTemp } =
    restaurant;
  console.log("👉", { restaurant });
  console.log("👉", rating);
  const starts = Array.from(new Array(Math.round(rating)));
  return (
    <Wrapper>
      <MealCard elevation={5} mode="elevated">
        <MealCover elevation={5} source={{ uri: photos[0] }} />
        <Card.Content>
          <MealTitle>{name}</MealTitle>
          <SvgContainer>
            <StarsContainer>
              {starts.map((s, i) => (
                <SvgXml key={i} width="20" height="20" xml={star} />
              ))}
            </StarsContainer>
            <OpenContainer>
              {isClosedTemp && (
                <Text
                  style={{
                    color: "red",
                    fontSize: 16,
                    fontFamily: "Lato_400Regular",
                  }}
                >
                  Is Closed Temp
                </Text>
              )}
              {isOpeningNow && (
                <Spacer position="left" size="small">
                  <SvgXml xml={open} width={20} height={20} />
                </Spacer>
              )}
              <Spacer position="left" size="small">
                <Image
                  style={{ width: 20, height: 20 }}
                  source={{ uri: icon }}
                />
              </Spacer>
            </OpenContainer>
          </SvgContainer>
          <Address>{address}</Address>
        </Card.Content>
      </MealCard>
    </Wrapper>
  );
};

export default RestaurantInfo;
