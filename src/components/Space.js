import React from "react-native";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import styled from "styled-components/native";

const positionVariants = {
  top: "margin-top",
  left: "margin-left",
  bottom: "margin-bottom",
  right: "margin-right",
};
const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};
const SpacerView = styled.View`
  ${(props) => positionVariants[props.p]}:${(props) =>
    props.theme.sizes[sizeVariant[props.s]]};
`;

export const Spacer = ({ position = "left", size = "small", children }) => {
  console.log("👉", { position, size });
  return (
    <SpacerView p={position} s={size}>
      {children}
    </SpacerView>
  );
};
