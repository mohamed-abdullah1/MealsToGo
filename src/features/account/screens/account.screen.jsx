import React from "react";
import BgComponent from "../components/bg.component";
import {
  Container,
  Header,
  WaterMillion,
  Box,
  BtnBox,
} from "../components/styles.component";

const AccountScreen = ({ navigation }) => {
  const handlePress = (dest) => navigation.navigate(dest);
  return (
    <BgComponent>
      <Container>
        <WaterMillion></WaterMillion>
        <Header>Meals To Go </Header>
        <Box>
          <BtnBox
            icon="lock-open-outline"
            mode="contained"
            onPress={() => handlePress("Login")}
          >
            Login
          </BtnBox>
          <BtnBox
            icon="apple-keyboard-command"
            mode="contained"
            onPress={() => handlePress("Register")}
          >
            Register
          </BtnBox>
        </Box>
      </Container>
    </BgComponent>
  );
};

export default AccountScreen;
