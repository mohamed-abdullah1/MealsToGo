import { StyleSheet, Text, View, FlatList } from "react-native";
import styled from "styled-components/native";
import { useContext, useEffect, useState } from "react";
import { Card, Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/restaurant-info.component";
import { Spacer } from "../../../components/Space";
import { SafeArea } from "../../../components/SafeArea";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
const FlatListContainer = styled(FlatList)`
  background-color: white;
  height: auto;
  padding-bottom: 16px;
`;

const Restaurant = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { restaurants, loading, error, searchRestaurant } =
    useContext(RestaurantsContext);
  useEffect(() => {
    searchRestaurant(searchQuery);
  }, [searchQuery]);
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
        keyExtractor={(item, index) => item.placeId}
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
