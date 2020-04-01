import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Button, ButtonGroup, Icon } from 'react-native-elements';


export default class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      region: {
      latitude: 35.681236,
      longitude: 139.767125,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001
    },
    hasLocationPermissions: false,
    locationResult: null,
    };
  }
  componentDidMount() {
    this.getLocationAsync();
  }

  handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  async getLocationAsync () {
    // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    const { status, permissions } = await Permissions.askAsync(
      Permissions.LOCATION
    );
    if (status === 'granted') {
      this.setState({ hasLocationPermissions: true });
      //  let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ locationResult: JSON.stringify(location) });
      // Center the map on the location we just fetched.
      this.setState({
        mapRegion: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      });
    } else {
      alert('Location permission not granted');
    }
  };

  
  render() {
    const { region } = this.props;
    console.log(region);

    return (
      <View style ={styles.container}>
        <View style={styles.headerContainer}>
            <Icon color="white" name="rocket" type="font-awesome" size={62} />
            <Text style={styles.heading}>Buttons</Text>
          </View>
        <MapView
          style={styles.map}
          region={{
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude,
            latitudeDelta: 0.02, //小さくなるほどズーム
            longitudeDelta: 0.02,
          }}
          showsUserLocation={true}
          onMapReady={this.onMapReady}
          onRegionChangeComplete={this.onRegionChange}
        >
          <MapView.Marker
            draggable
            coordinate={{
              latitude: this.state.region.latitude,   
              longitude: this.state.region.longitude
            }}
            title={"東京駅"}
            description={"JRの駅です。"}
            onPress={()=>alert("click")}
          />
        </MapView>
        <View style={{alignItems: 'center'}}>
          <Text >hello</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  map: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#4F80E1',
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
});
