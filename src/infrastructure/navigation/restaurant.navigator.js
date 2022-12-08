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
        ...TransitionPresets.ModalSlideFromBottomIOS,
        cardOverlayEnabled: false,
        cardStyle: { color: "red" },
        gestureEnabled: true,
      }}
    >
      <RestaurantStack.Screen name="Restaurant" component={Restaurant} />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
      />
    </RestaurantStack.Navigator>
  );
};
