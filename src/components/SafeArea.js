import styled from "styled-components/native";
import { SafeAreaView, Platform, StatusBar } from "react-native";
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
  background-color: white;
  /* margin-bottom: 16px; */
  /* border: solid red 1px; */
`;
