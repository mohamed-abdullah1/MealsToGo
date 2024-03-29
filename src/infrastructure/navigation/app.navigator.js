import React from "react";
import Restaurant from "../../features/resturents/screens/Restaurant.screen";

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "../../components/SafeArea";
import { Text } from "react-native";
import { RestaurantNavigator } from "./restaurant.navigator";
import MapScreen from "../../features/map/screens/map.screen";
// constants =======================//
const TABS_ICONS = {
  Restaurant: "pizza",
  Map: "map",
  Settings: "settings",
};

const Tab = createBottomTabNavigator();
const Setting = () => (
  <SafeArea>
    <Text>Setting</Text>
  </SafeArea>
);

const IconComponent = (route) => {
  return ({ color, size }) => (
    <Ionicons name={TABS_ICONS[route.name]} size={size} color={color} />
  );
};

export const AppNavigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: IconComponent(route),
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Restaurant" component={RestaurantNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={Setting} />
      </Tab.Navigator>
    </>
  );
};
