import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Calculator() {
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
            <Text>History</Text>
                    <FlatList data={ history } renderItem=
                    { ({item}) => <Text> {item} </Text > } />
        </SafeAreaView>
    )
}