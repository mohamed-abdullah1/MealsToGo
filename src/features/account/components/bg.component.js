import React from "react";
import { ImageBackground } from "react-native";
import styled from "styled-components/native";

const BgContainer = styled.View`
  flex: 1;
  background-color: white;
`;
const Image = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  top: 60%;
  left: -50%;
`;
const Wrapper = styled.View`
  position: absolute;
  top: 50%;
  color: white;
  width: 100%;
  justify-content: center;
`;

const BgComponent = ({ children }) => {
  return (
    <BgContainer>
      <Image
        // source={{
        //   uri: "https://images.unsplash.com/photo-1552611052-d59a0d9741bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        // }}
        source={require("../../../../assets/undraw_ice_cream_s2rh.png")}
        resizeMode="cover"
      />
      <Wrapper>{children}</Wrapper>
    </BgContainer>
  );
};

export default BgComponent;
