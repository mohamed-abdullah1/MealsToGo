import React, { useContext } from "react";
import { AuthContext } from "../../services/authentication/auth.context";
import { AppNavigation } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";
import { NavigationContainer } from "@react-navigation/native";
export const Navigation = () => {
  const { user } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {user ? <AppNavigation /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
