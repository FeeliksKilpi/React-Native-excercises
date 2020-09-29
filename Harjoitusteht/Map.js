import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, SafeAreaView, Dimensions, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Map() {
  const [keyword, setKeyword] = useState('Helsinki');
  const [location, setValues] = useState({
    lat: '',
    long: '',
  })
  const [info, setInfo] = useState({});
  const searchForAddress = async () => {
    const url = 'http://www.mapquestapi.com/geocoding/v1/address?key=U7TohA3xAYrXXNh3vvqcGyN01R2xBn2Z&location=' + keyword;
    await fetch(url)
    .then((response) => response.json())
    .then((data) => {
        setInfo(data);
       /* setValues({
          lat: data.results[0].locations[0].latLng.lat,
          lon: dataresults[0].locations[0].latLng.lon
        })*/
    })
    .catch((error) => {
        Alert.alert('Error', error);
    });
}
console.log(info.results[0].locations[0].latLng.lat);
//console.log(location.lat)
//useEffect(() => {fetchLocations()}, []);

    return(
          <MapView style={ styles.map } initialRegion={{latitude: 60.200692,longitude:24.934302,latitudeDelta: 0.0322,longitudeDelta:0.0221,}}>
            <Marker coordinate={{latitude:60.201373, longitude: 24.934041}} title='Haaga-Helia'/>
            <View style={styles.container}>
              <Button title='Hae' onPress={searchForAddress}/>
              <TextInput style={styles.input}></TextInput>
            </View>
          </MapView> 
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      height: 100,
      alignItems: 'center',
    },
    header: {
      fontSize: 32
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        width: 300,
        padding: 20,
        borderRadius: 30
    },
    map: {
      flex: 1,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  });