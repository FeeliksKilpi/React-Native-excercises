import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, FlatList } from 'react-native';
import * as firebase from 'firebase';

export default function FireBaseTest() {

const[list, setList] = useState(['testi']);
const[item, setItem] = useState('');
const[amount, setAmount] = useState('');
 
const firebaseConfig = {
    apiKey: "AIzaSyBYUVBaT-vKh4DWRoaopizMOUUP8F19iTk",
    authDomain: "react-native-excercises.firebaseapp.com",
    databaseURL: "https://react-native-excercises.firebaseio.com",
    projectId: "react-native-excercises",
    storageBucket: "react-native-excercises.appspot.com",
    messagingSenderId: "1023697963179",
    appId: "1:1023697963179:web:dda5aba793ee536ea38fee",
    measurementId: "G-2272HT9QD8"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }
        
  
    useEffect(() => {
        firebase.database().ref('items/').on('value', snapshot => {
            const data = snapshot.val();
            const prods = Object.values(data);
            console.log(data);
            setList(prods);
        }); }, []);
    

    const saveItem = () => {
        firebase.database().ref('items/').push(
            {'product': item,  'amount': amount}
            );
        }
    
  return(
    <View>
        <TextInput placeholder='Product' style={{borderColor: 'gray', borderWidth: 1}} onChangeText = {text => setItem(text)} name='item' value={item}/>
        <TextInput placeholder='Amount'style={{borderColor: 'gray', borderWidth: 1}} onChangeText = {text => setAmount(text)} name='amount' value={amount}/>
        <Button title="ADD" onPress={saveItem}></Button>
        <Button title="CLEAR"> </Button>
            <View>
                <Text>Supplies Database</Text>
            </View>
            
    </View>
    )

}