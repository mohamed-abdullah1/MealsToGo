import { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { Btn, Input, Wrapper } from "../components/loginStyles.component";
import { useState } from "react";
import BgComponent from "../components/bg.component";
import styled from "styled-components/native";
import { AuthContext } from "../../../services/authentication/auth.context";
import { ErrorText } from "../components/styles.component";

const RegisterWrapper = styled.View`
  margin-top: -180px;
  flex: 1;
  align-items: center;
`;

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const { onRegister, error, changeErrDisplay } = useContext(AuthContext);
  const registerHandler = () => {
    if (email.length && password.length && rePassword.length) {
      console.log("👉", { email, password, rePassword });
      onRegister(email, password, rePassword);
    }
  };
  useEffect(() => {
    changeErrDisplay(false);
  }, []);
  return (
    <BgComponent>
      <RegisterWrapper>
        <Input
          label="Email"
          textContent="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => {
            console.log("👉", text);
            setEmail(text);
          }}
        />
        <Input
          label="Password"
          textContent="password"
          keyboardType="password"
          autoCapitalize="none"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          label="Re-Password"
          textContent="password"
          keyboardType="password"
          autoCapitalize="none"
          value={rePassword}
          onChangeText={(text) => setRePassword(text)}
        />
        <ErrorText>{error ? error : null}</ErrorText>
        <Btn icon="email" loading={false} onPress={registerHandler}>
          Register
        </Btn>
      </RegisterWrapper>
    </BgComponent>
  );
};

export default RegisterScreen;
