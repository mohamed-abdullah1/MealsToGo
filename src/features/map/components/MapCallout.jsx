import React from "react";
import { Image, Text } from "react-native";
import { Svg, Image as ImageSvg } from "react-native-svg";
import WebView from "react-native-webview";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
`;
const Img = styled(ImageSvg)`
  height: 100px;
  width: 100px;
  border-radius: 8px;
  border: solid red 1px;
`;
const Name = styled.Text`
  max-width: 100px;
  text-align: center;
`;

const MapCallout = ({ restaurant }) => {
  return (
    <Container>
      <Svg width={100} height={100}>
        <Img
          width={"100%"}
          height={"100%"}
          preserveAspectRatio="xMidYMid slice"
          href={{ uri: restaurant.photos[0] }}
        />
      </Svg>
      <Name>{restaurant.name}</Name>
    </Container>
  );
};

export default MapCallout;
