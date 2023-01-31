import React, { useContext, useEffect, useState } from "react";
import MapView, { Callout } from "react-native-maps";
import styled from "styled-components/native";
import Search from "../components/Search";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import MapCallout from "../components/MapCallout";

const Container = styled.View`
  flex: 1;
`;
const Map = styled(MapView)`
  flex: 1;
`;
const MapScreen = ({ navigation }) => {
  const { location, viewport } = useContext(LocationContext);
  const [latDelta, setLatDelta] = useState(20);
  const [latLoc, setLatLoc] = useState(46.58);
  const [lngLoc, setLngLoc] = useState(88.08);
  const { restaurants } = useContext(RestaurantsContext);
  useEffect(() => {
    if (viewport) {
      const { southwest, northeast } = viewport;
      const delta = northeast.lat - southwest.lat;
      const [latVal, lngVal] = location.split(",").map((ele) => +ele);
      setLatLoc(latVal);
      setLngLoc(lngVal);
      setLatDelta(delta);
    }
  }, [viewport, location]);

  return (
    <Container>
      <Search />
      <Map
        region={{
          latitude: latLoc && latLoc,
          longitude: lngLoc && lngLoc,
          latitudeDelta: latDelta && latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => (
          <MapView.Marker
            key={restaurant.name}
            title={restaurant.name}
            name={restaurant.name}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
          >
            <Callout
              onPress={() =>
                navigation.navigate("RestaurantDetails", { restaurant })
              }
            >
              <MapCallout restaurant={restaurant} />
            </Callout>
          </MapView.Marker>
        ))}
      </Map>
    </Container>
  );
};

export default MapScreen;
