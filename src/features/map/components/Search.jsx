import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
const SearchContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  padding: ${(props) => props.theme.sizes[1]};
  margin: ${StatusBar.currentHeight}px 0 0 0;
`;
const SearchBarEle = styled(Searchbar)``;
const Search = () => {
  const { onSearch, keyword } = useContext(LocationContext);
  return (
    <SearchContainer>
      <SearchBarEle
        placeholder="Search"
        value={keyword}
        onChangeText={(query) => onSearch(query)}
        loading={true}
        icon="map"
      />
    </SearchContainer>
  );
};

export default Search;
