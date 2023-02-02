import React, { useState, useContext } from "react";
import BgComponent from "../components/bg.component";
import { Btn, Input, Wrapper } from "../components/loginStyles.component";
import { AuthContext } from "../../../services/authentication/auth.context";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, loading, error } = useContext(AuthContext);
  const loginHandler = () => {
    if (email.length && password.length) {
      onLogin(email, password);
    }
  };
  return (
    <BgComponent>
      <Wrapper>
        <Input
          label="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          secure={true}
          textContentType="password"
        />
        <Btn icon="lock-open-outline" loading={loading} onPress={loginHandler}>
          Login
        </Btn>
      </Wrapper>
    </BgComponent>
  );
};

export default LoginScreen;
