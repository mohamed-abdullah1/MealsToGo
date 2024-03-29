import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import Restaurant from "../../features/resturents/screens/Restaurant.screen";
import RestaurantDetails from "../../features/resturents/screens/RestaurantDetails.screen";

//constants .....
const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
        cardOverlayEnabled: false,
      }}
    >
      <RestaurantStack.Screen name="Restaurants" component={Restaurant} />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
      />
    </RestaurantStack.Navigator>
  );
};
