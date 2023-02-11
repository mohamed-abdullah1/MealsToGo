import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import colors from "../../../infrastructure/theme/colors";
export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  margin-top: -128px;
`;
export const Input = styled(TextInput).attrs({
  mode: "outlined",
  theme: {
    colors: {
      primary: colors.brand.purple,
    },
  },
})`
  width: 80%;
  margin-top: 16px;
`;
export const Btn = styled(Button).attrs({
  mode: "contained",
})`
  padding: 8px;
  margin-top: 32px;
  background-color: ${(props) => props.theme.colors.brand.purple};
`;
