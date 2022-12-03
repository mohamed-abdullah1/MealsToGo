import { StyleSheet, Text, View, FlatList } from "react-native";
import styled from "styled-components/native";
import { useState } from "react";
import { Card, Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/restaurant-info.component";
import { Spacer } from "../../../components/Space";
import { SafeArea } from "../../../components/SafeArea";
const FlatListContainer = styled(FlatList)`
  /* padding: 16px; */
  /* border: solid red 1px; */
  background-color: white;
  height: auto;
  padding-bottom: 16px;
`;

const restaurant_items = [
  {
    id: 1,
    name: "pizza",
    photos: [
      "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000",
    ],
    address: "100 SOME Random Street",
    isOpeningNow: true,
    rating: 4.3,
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    isClosedTemp: true,
  },
  {
    id: 2,
    name: "pizza",
    photos: [
      "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000",
    ],
    address: "100 SOME Random Street",
    isOpeningNow: true,
    rating: 4.3,
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    isClosedTemp: true,
  },
  {
    id: 3,
    name: "pizza",
    photos: [
      "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000",
    ],
    address: "100 SOME Random Street",
    isOpeningNow: true,
    rating: 4.3,
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    isClosedTemp: true,
  },
];

const Restaurant = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [restaurants, setRestaurants] = useState(restaurant_items);
  return (
    <SafeArea style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          onIconPress={() => console.log("👉", "search icon pressed")}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
          loading={true}
          clearIcon="loading"
          style={{ margin: 4 }}
        />
      </View>
      <FlatListContainer
        data={restaurants}
        keyExtractor={(item, index) => item.id}
        renderItem={(itemData) => {
          return (
            <View style={styles.meals}>
              <RestaurantInfo restaurant={itemData.item} />
            </View>
          );
        }}
      />
    </SafeArea>
  );
};

export default Restaurant;
const styles = StyleSheet.create({
  search: {
    padding: 5,
    height: 60,
    marginBottom: 8,
  },
  meals: {
    backgroundColor: "white",
    padding: 16,
    flex: 8,
  },
  text: {
    color: "#ffffff",
  },
});
