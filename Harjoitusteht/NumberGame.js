import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

function NumberGame() {
    const[number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
    const[answer, setAnswer] = useState('');
    const[counter, setCounter] = useState(0);
    const[text, setText] = useState('');

    const inputChanged = (event) => {
        setAnswer(event.target.value);
    };

    const makeGuess = (i) => {
        setCounter(0);
        if (answer < number) {
            setText('Your guess is too low');
            setCounter(counter + 1);
        }
        else if (answer > number) {
            setText('Your guess is too high');
            setCounter(counter + 1);
        }
        else {
            alert('You guessed the number in ' + counter + ' guesses.');
            setNumber(Math.floor(Math.random() * 100) + 1);
            setText('New number randomized')
        }
    }

    return(
        <View>
            <Text>Guess a random number between 1-100</Text>
            <Text>{ text }</Text>
            <TextInput style={{ width:200, borderColor: 'gray', borderWidth: 1}} onChange = {inputChanged} value={answer}/>
            <Button onPress={ (i) => makeGuess(i) } title='Make a guess'></Button>
        </View>
    )
}

export default NumberGame;