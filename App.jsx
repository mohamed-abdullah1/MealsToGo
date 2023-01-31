//imports
import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";
import theme from "./src/infrastructure/theme";
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
import { RestaurantsProvider } from "./src/services/restaurants/restaurants.context";
import { LocationProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation";
import { FavoritesProvider } from "./src/services/favorites/favorites.context";
import useAuth from "./src/services/firebase/useAuth";

//main App ====================================//
export default function App() {
  const { isAuth } = useAuth("email@test.com", "1234566");
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
  console.log("👉", isAuth);
  // if (isAuth) {
  //   console.log("👉", "AUTHENTICATED ✅");
  // } else {
  //   console.log("👉", "not");
  // }
  return (
    <LocationProvider>
      <FavoritesProvider>
        <RestaurantsProvider>
          <ThemeProvider theme={theme}>
            <Navigation />
            <ExpoStatusBar style="auto" />
          </ThemeProvider>
        </RestaurantsProvider>
      </FavoritesProvider>
    </LocationProvider>
  );
}
