import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  border-radius: ${(props) => props.theme.sizes[1]}
    ${(props) => props.theme.sizes[1]} 0 0;
`;
export const CardEle = styled(Card)`
  padding: ${(props) => props.theme.sizes[1]};
  /* border: solid blue 1px; */
`;
export const HorizontalCom = styled.View`
  flex-direction: row;
  align-items: center;
  height: 30px;
  justify-content: space-between;
`;
export const Rating = styled.View`
  flex-direction: row;
  flex: 5;
`;
export const Status = styled.View`
  flex-direction: row;
  flex: ${(props) => (props.isClosed ? "4" : "1")};
  justify-content: space-between;
  algin-items: center;
`;
export const OpenState = styled.View``;
export const IsClosedTemp = styled.Text`
  color: red;
  font-family: ${(props) => props.theme.fonts.body};
`;
export const IconContainer = styled.Image`
  width: 20px;
  height: 20px;
`;
