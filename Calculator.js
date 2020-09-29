import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer} from'@react-navigation/native';
import { createStackNavigator} from'@react-navigation/stack';
import HistoryPage from './HistoryPage';

const Stack = createStackNavigator();

export default function Calculator({ navigation }) {
    const[numbers, setNumbers] = useState({
        num1: '',
        num2: ''
    });
    const[history, setHistory] = useState([]);
    const[answer, setAnswer] = useState(0);
    

    const sum = (i) => {
        setAnswer(parseInt(numbers.num1) + parseInt(numbers.num2));
        //console.log(answer);
        setHistory([...history, numbers.num1 + '+' + numbers.num2 + '=' + answer]);
    }
    const subst = (i) => {
        setAnswer(numbers.num1 - numbers.num2);
        setHistory([...history, numbers.num1 + '-' + numbers.num2 + '=' + answer]);
    }
    const times = (i) => {
        setAnswer(numbers.num1 * numbers.num2);
        setHistory([...history, numbers.num1 + '*' + numbers.num2 + '=' + answer]);
    }
    const divide = (i) => {
        setAnswer(numbers.num1 / numbers.num2);
        setHistory([...history, numbers.num1 + '/' + numbers.num2 + '=' + answer]);
    }

    const inputChanged = (event) => {
        setNumbers({...numbers, [event.target.name]: event.target.value});
    };
    const styles = StyleSheet.create({
        container: {
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        input: {
          borderColor: 'grey',
          borderWidth: 3,
          width: 100,
          height: 50,
        }
      });

    return(
        <SafeAreaView style={styles.container}>
            <Text>Calculator</Text>
            <Text>{answer}</Text>
            <TextInput style={styles.input} onChange = {inputChanged} name='num1' value={numbers.num1}/>
            <TextInput style={styles.input} onChange = {inputChanged} name='num2' value={numbers.num2}/>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Button title="+" onPress={(i) => sum(i)}></Button>
                <Button title="-" onPress={(i) => subst(i)}></Button>
                <Button title="*" onPress={(i) => times(i)}></Button>
                <Button title="/" onPress={(i) => divide(i)}></Button>
            </View>
            <Button title="history page" onPress={() => navigation.navigate('hist', {data: history})} />

            <View>
                <Button title="Shoppinglist" onPress={() => navigation.navigate('shoplist')}/>
                <Button title="map" onPress={() => navigation.navigate('map')} />
                <Button title="firebase" onPress={() => navigation.navigate('firebase')} />
                <Button title="Contacts" onPress={() => navigation.navigate('contacts')} />
                <Button title="textToSpeech" onPress={() => navigation.navigate('speech')} />
            </View>
            
        </SafeAreaView>
    )
}