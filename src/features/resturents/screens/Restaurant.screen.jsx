import React from "react";
import {
  StyleSheet,
  // Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Pressable,
} from "react-native";
import styled from "styled-components/native";
import { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/restaurant-info.component";
import { SafeArea } from "../../../components/SafeArea";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { LocationContext } from "../../../services/location/location.context";
const FlatListContainer = styled(FlatList)`
  background-color: white;
  height: auto;
  padding-bottom: 16px;
`;
const LoadingContainer = styled.View`
  height: 90%;
  justify-content: center;
  align-items: center;
`;
const Restaurant = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { restaurants, loading } = useContext(RestaurantsContext);
  const { onSearch, loading: loadingLoc } = useContext(LocationContext);
  useEffect(() => {
    let timeId = setTimeout(() => {
      onSearch(searchQuery);
    }, 2000);
    return () => {
      clearTimeout(timeId);
    };
  }, [searchQuery, onSearch]);
  return (
    <SafeArea style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          onIconPress={() => setSearchQuery("")}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
          loading={true}
          clearIcon="cross"
          style={{ margin: 4 }}
        />
      </View>
      {loading || loadingLoc ? (
        <LoadingContainer>
          <ActivityIndicator size={50} color="tomato" />
        </LoadingContainer>
      ) : (
        <FlatListContainer
          data={restaurants}
          keyExtractor={(item) => item.placeId}
          renderItem={(itemData) => {
            return (
              <Pressable
                android_ripple={{ color: "red" }} //for android
                style={(pressedData) => pressedData.pressed}
                onPress={() =>
                  navigation.navigate("RestaurantDetails", { ...itemData.item })
                }
              >
                <View style={styles.meals}>
                  <RestaurantInfo restaurant={itemData.item} />
                </View>
              </Pressable>
            );
          }}
        />
      )}
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
