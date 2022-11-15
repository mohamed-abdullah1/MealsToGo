import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import Restaurant from "./src/features/resturents/screens/Restaurant.screen";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/infrastructure/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Restaurant />
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
