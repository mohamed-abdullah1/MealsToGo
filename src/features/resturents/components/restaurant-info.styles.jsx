import styled from "styled-components/native";
import { View } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
export const Wrapper = styled(View)``;

export const MealCard = styled(Card)`
  padding: ${(props) => props.theme.sizes[0]};
`;
export const MealCover = styled(Card.Cover)``;
export const MealTitle = styled(Title)`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.body};
`;
export const Address = styled(Paragraph)`
  fontsize: ${(props) => props.theme.fontSizes.caption};
  font-family: ${(props) => props.theme.fonts.note};
`;
export const StarsContainer = styled.View`
  flex-direction: row;
`;
export const SvgContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.sizes[0]} 0;
`;
export const OpenContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
