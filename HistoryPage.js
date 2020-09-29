import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { NavigationContainer} from'@react-navigation/native';
import { createStackNavigator} from'@react-navigation/stack';

export default function HistoryPage({ route, navigation}) {
    const { data } = route.params;
    console.log(data);
    return(
        <View>
            <Text>History</Text>
                    <FlatList data={ data } renderItem=
                    { ({item}) => <Text> {item} </Text > } />
        </View>
    )
}