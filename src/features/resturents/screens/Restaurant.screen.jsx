import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
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
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { ScrollView } from "react-native-gesture-handler";
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
  padding: 16px 16px 0 16px;
  flex: ${(props) => (props.viewFavList ? "3" : "0")};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9000;
  width: 100%;
  background-color: white;
`;
const RestaurantsWrapper = styled(ScrollView)`
  margin-top: 64px;
`;
const Restaurant = ({ navigation }) => {
  const [viewFavList, setViewList] = useState(false);
  const { restaurants, loading } = useContext(RestaurantsContext);
  const {
    onSearch,
    keyword,
    loading: loadingLoc,
  } = useContext(LocationContext);
  const { favorites } = useContext(FavoritesContext);
  useEffect(() => {
    let timeId = setTimeout(() => {
      onSearch(keyword);
    }, 2000);
    return () => {
      clearTimeout(timeId);
    };
  }, [keyword, onSearch]);
  const renderItem = (itemData) => {
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
  };
  const memoizedRenderItem = useMemo(() => renderItem, [restaurants]);
  useEffect(() => {
    if (favorites.length === 0) {
      setViewList(false);
    }
  }, [favorites]);
  return (
    <SafeArea style={styles.container}>
      <SearchContainer viewFavList={viewFavList}>
        <Searchbar
          placeholder="Search"
          value={keyword}
          onChangeText={onSearch}
          loading={true}
          // style={{ margin: 4 }}
          icon={favorites.length > 0 ? "heart" : "heart-outline"}
          onIconPress={() => setViewList((prev) => !prev)}
        />
        {viewFavList && <FavoriteRestaurants navigation={navigation} />}
      </SearchContainer>
      {loading || loadingLoc ? (
        <LoadingContainer>
          <ActivityIndicator size={50} color="tomato" />
        </LoadingContainer>
      ) : (
        <RestaurantsWrapper>
          {restaurants.map((res) => (
            <Pressable
              key={res.name}
              android_ripple={{ color: "red" }} //for android
              style={(pressedData) => pressedData.pressed}
              onPress={() =>
                navigation.navigate("RestaurantDetails", {
                  restaurant: res,
                })
              }
            >
              <View style={styles.meals}>
                <RestaurantInfo restaurant={res} />
              </View>
            </Pressable>
          ))}
        </RestaurantsWrapper>
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
    border: "solid red 1px",
  },
  text: {
    color: "#ffffff",
  },
});
