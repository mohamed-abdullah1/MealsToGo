import React, { useContext } from "react";
import { AuthContext } from "../../services/authentication/auth.context";
import { AppNavigation } from "./app.navigator";
import { View, Text } from "react-native";
export const Navigation = () => {
  const { user } = useContext(AuthContext);
  return user ? (
    <AppNavigation />
  ) : (
    <View>
      <Text style={{ textAlign: "center", top: "50%" }}>Nothing to do !!</Text>
    </View>
  );
};
