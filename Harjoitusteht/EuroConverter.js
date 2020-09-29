import React, {useState, useEffect} from 'react';
import { Text, View, Button, TextInput, FlatList, SafeAreaView, Alert, Image, StyleSheet, Picker } from 'react-native';

export default function EuroConverter() {
    const [rates, setRates] = useState({});
    const [currency, setCurrency] = useState(4.351314); //first currency in list as default
    const [value, setValue] = useState(0);
    const [result, setResult] = useState(0);

    const fetchRates = async () => {
        const url = 'http://data.fixer.io/api/latest?access_key=dd2e4da7dd7ade7a221f4fe8c0e1efe4&format=1';
        await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setRates(data.rates);
        })
        .catch((error) => {
            Alert.alert('Error', error);
        });
    }

    useEffect(() => {fetchRates()}, []);

    const convert = () => {
        setResult((value / currency).toFixed(2));
    }
    return(
        <View>
            <Text>Euro Converter</Text>
            <Text style={{padding: 20}}>{'Amount in Euros: ' + result + ' €'}</Text>
            <Text>Amount:</Text>
            <TextInput onChange={amount => setValue(amount.target.value)} style={{width:200, borderColor: 'gray', borderWidth: 1}} value={value}/>
            <Button onPress={convert} title='convert' />
            <Text>From:</Text>
            <Picker selectedValue={currency.name} style={{ height: 50, width: 150 }} 
            onValueChange={(selCurr, itemIndex) => setCurrency(selCurr)}>
                {Object.keys(rates).map((curr) => <Picker.Item key={curr} label={curr} value={rates[curr]}></Picker.Item>)}
            </Picker>
        </View>
    )
}