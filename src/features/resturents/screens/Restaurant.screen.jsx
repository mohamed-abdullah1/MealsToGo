import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { useState } from "react";
import { Card, Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/RestaurantInfo.component";

const Restaurant = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          onIconPress={() => console.log("👉", "search icon pressed")}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
          loading={true}
          clearIcon="loading"
        />
      </View>
      <View style={styles.meals}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

export default Restaurant;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  search: {
    // backgroundColor: "#5e0acc",
    padding: 5,
    height: 60,
  },
  meals: {
    // backgroundColor: "#5e0acc",
    backgroundColor: "white",
    padding: 16,
    flex: 8,
  },
  text: {
    color: "#ffffff",
  },
});
