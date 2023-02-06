import styled from "styled-components/native";
import { Button } from "react-native-paper";

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;
export const WaterMillion = styled.View``;
export const Header = styled.Text`
  color: #3e3d57;
  font-size: 32px;
  font-weight: 300;
  margin-top: -90px;
`;
export const Box = styled.View`
  margin-top: -8px;
  padding: 32px;
  flex: 1;
  justify-content: space-between;
  width: 60%;
`;
export const BtnBox = styled(Button)`
  margin-bottom: 8px;
  background-color: ${(props) => props.theme.colors.brand.purple};
  padding: 8px;
  flex: 1;
`;
export const ErrorText = styled.Text`
  color: red;
  margin-top: 8px;
  font-weight: 800;
`;
