import React from "react-native";
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
  ${(props) => positionVariants[props.p]}:${(props) => +props.size};
`;

export const Spacer = ({ position = "left", size = "8", children }) => {
  return (
    <SpacerView p={position} s={size}>
      {children}
    </SpacerView>
  );
};
