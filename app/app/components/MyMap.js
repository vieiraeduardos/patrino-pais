import React, {Component} from "react";

import MapView from 'react-native-maps';


import { Avatar, Badge, ThemeProvider} from "react-native-elements";
import Header from './Header';

import MapViewDirections from 'react-native-maps-directions';
import getDirections from 'react-native-google-maps-directions'
import { PermissionsAndroid,
 } from 'react-native';

 import {
  View,
  TouchableHighlight,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  StyleSheet
} from 'react-native';

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
]);

import Geolocation from 'react-native-geolocation-service';

import Geocoder from 'react-native-geocoding';

const GOOGLE_MAPS_APIKEY = 'AIzaSyD3Y7zmn4POYkXa7ncg9QZJ02LOaFfSnGA';

const backgroundColor = '#007256';

const { height, width } = Dimensions.get('window');

export default class MyMap extends Component {
  static navigationOptions = {
    header: null
  };

  state = {

      origin: { latitude: -2.543208, longitude: -44.297872 },
      destination: { latitude: -2.524080, longitude: -44.294188 },
      originText: '',
      destinationText: '',

    };

     async requestLocationPermission() {
       try {

           const granted = await PermissionsAndroid.request(
               PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
               {
                   'title': 'App Location Permission',
                   'message': 'Maps App needs access to your map ' +
                       'so you can be navigated.'
               }
           );

           if (granted === PermissionsAndroid.RESULTS.GRANTED) {
               console.log("You can use the location");
               return true;

           } else {
               console.log("location permission denied");
               return false;
           }

       } catch (err) {
           console.warn(err)
       }

     }

     getLocation = () => {
       Geolocation.getCurrentPosition(
           (position) => {
             let newOrigin = {
                 latitude: position.coords.latitude,
                 longitude: position.coords.longitude
             };

             console.log('new origin');
             console.log(newOrigin);

             this.setState({
                 origin: newOrigin
             });
           },
           (error) => {
               // See error code charts below.
               console.log(error.code, error.message);
           },
           { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
       );

     };

     async componentDidMount() {
       let isGranted = await this.requestLocationPermission();

       if (isGranted) {
           this.getLocation();
       }

       this.getLocation();

     }

     handleButton = () => {

       if(this.state.originText != '') {

           Geocoder.init(GOOGLE_MAPS_APIKEY); // use a valid API key

           Geocoder.from(this.state.originText)
               .then(json => {
                   var location = json.results[0].geometry.location;
                   console.log(location);
                   this.setState({ origin: { latitude: location.lat, longitude: location.lng } });

           })
           .catch(error => console.warn(error));

       }

       else {

           alert("Digite a origem ! ")

       }

       if(this.state.destinationText != '') {

           Geocoder.init(GOOGLE_MAPS_APIKEY); // use a valid API key

           Geocoder.from(this.state.destinationText)
           .then(json => {
               var location = json.results[0].geometry.location;
               console.log(location);
               this.setState({ destination: { latitude: location.lat, longitude: location.lng } });

           })
           .catch(error => console.warn(error));
       }

       else {

           alert("Digite o destino ! ")

       }

     }

     handleGetGoogleMapDirections = () => {

       const data = {

           source: this.state.origin,
           destination: this.state.destination,
           params: [
               {
                 key: "travelmode",
                 value: "driving"
               }
           ]

       };

       getDirections(data)

     };


  render() {
   return (
     <ThemeProvider>
       <Header/>
       <View style={styles.container}>

            <MapView

              ref={map => this.mapView = map}
              style={styles.map}

              region={{
                latitude: (this.state.origin.latitude + this.state.destination.latitude) / 2,
                longitude: (this.state.origin.longitude + this.state.destination.longitude) / 2,
                latitudeDelta: Math.abs(this.state.origin.latitude - this.state.destination.latitude) + Math.abs(this.state.origin.latitude - this.state.destination.latitude) * .1,
                longitudeDelta: Math.abs(this.state.origin.longitude - this.state.destination.longitude) + Math.abs(this.state.origin.longitude - this.state.destination.longitude) * .1,
              }}

              loadingEnabled={true}
              toolbarEnabled={true}
              zoomControlEnabled={true}

            >

            <MapView.Marker
              coordinate={this.state.destination}
            >
              <MapView.Callout onPress={this.handleGetGoogleMapDirections}>
                <Text>Pressione para obter direções.</Text>
              </MapView.Callout>
            </MapView.Marker>

            <MapView.Marker
              coordinate={this.state.origin}
            >
            <MapView.Callout>
                <Text>Aqui é onde você está.</Text>
            </MapView.Callout>
            </MapView.Marker>

            <MapViewDirections
              origin={this.state.origin}
              destination={this.state.destination}
              apikey={GOOGLE_MAPS_APIKEY}
            />

            </MapView>
          </View>
     </ThemeProvider>

    );
 }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: "flex-end",
   alignItems: "flex-end",
 },
 map: {
   position: 'absolute',
   top: 0,
   left: 0,
   right: 0,
   bottom: 0
  },
  button: {

        width: width - 100,
        height: 40,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 7,
        marginBottom: 15,
        marginHorizontal: 20,

      },

      buttonText: {

        color: '#000',
        fontWeight: 'bold',

      },

      inputContainer: {

        width: '100%',
        maxHeight: 200,

      },

      input: {

        width: width - 40,
        maxHeight: 200,
        backgroundColor: '#FFF',
        marginBottom: 15,
        marginHorizontal: 20,

      },
});
