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
import FavoriteRestaurants from "../components/FavoriteRestaurants";
const FlatListContainer = styled(FlatList)`
  background-color: white;
  padding-bottom: 16px;
  flex: 12;
`;
const LoadingContainer = styled.View`
  height: 90%;
  justify-content: center;
  align-items: center;
`;
const SearchContainer = styled.View`
  padding: 5px;
  margin-bottom: 8px;
  flex: ${(props) => (props.viewFavList ? "6" : "1")};
`;
const Restaurant = ({ navigation }) => {
  const [viewFavList, setViewList] = useState(false);
  const { restaurants, loading } = useContext(RestaurantsContext);
  const {
    onSearch,
    keyword,
    loading: loadingLoc,
  } = useContext(LocationContext);
  useEffect(() => {
    let timeId = setTimeout(() => {
      onSearch(keyword);
    }, 2000);
    return () => {
      clearTimeout(timeId);
    };
  }, [keyword, onSearch]);
  return (
    <SafeArea style={styles.container}>
      <SearchContainer viewFavList={viewFavList}>
        <Searchbar
          placeholder="Search"
          value={keyword}
          onChangeText={onSearch}
          loading={true}
          style={{ margin: 4 }}
          icon="heart"
          onIconPress={() => setViewList((prev) => !prev)}
        />
        <FavoriteRestaurants />
      </SearchContainer>
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
                  navigation.navigate("RestaurantDetails", {
                    restaurant: itemData.item,
                  })
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
  search: {},
  meals: {
    backgroundColor: "white",
    padding: 16,
    flex: 8,
  },
  text: {
    color: "#ffffff",
  },
});
