import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { List } from "react-native-paper";
import RestaurantInfo from "../components/restaurant-info.component";
import Favorite from "../../../components/Favorite";

const ListIcon = (iconName) => {
  return (props) => <List.Icon icon={iconName} {...props} />;
};
const RestaurantDetails = ({ route }) => {
  const { restaurant } = route.params;
  const [expanded, setExpanded] = useState();
  return (
    <ScrollView>
      <RestaurantInfo restaurant={restaurant} />
      <List.Section>
        <List.Accordion title="Breakfast" left={ListIcon("bread-slice")}>
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={ListIcon("rice")}
          expanded={expanded}
          onPress={setExpanded}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={ListIcon("food-drumstick")}
          expanded={expanded}
          onPress={setExpanded}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
};

export default RestaurantDetails;
