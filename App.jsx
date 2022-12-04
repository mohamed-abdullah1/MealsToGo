//imports
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Restaurant from "./src/features/resturents/screens/Restaurant.screen";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/infrastructure/theme";
import { Text } from "react-native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { SafeArea } from "./src/components/SafeArea";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsProvider } from "./src/services/restaurants/restaurants.context";
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
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
    Oswald_700Bold,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });
  if (!latoLoaded || !oswaldLoaded) {
    return null;
  }
  return (
    <RestaurantsProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <>
            {/* <Tab.Navigator> */}
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  return (
                    <Ionicons
                      name={TABS_ICONS[route.name]}
                      size={size}
                      color={color}
                    />
                  );
                },
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
              })}
            >
              <Tab.Screen name="Restaurant" component={Restaurant} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Settings" component={Setting} />
            </Tab.Navigator>
          </>
        </NavigationContainer>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </RestaurantsProvider>
  );
}
