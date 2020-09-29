import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, FlatList, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';

export default function TextToSpeech() {
    const [text, setText] = useState('');
    // Function to speak typed text
    const speak = () => {
        Speech.speak(text);
    }

    return(
        <View>
            <TextInput onChangeText={ e => setText(e)} style={{ borderWidth: 2, margin: 5 }}></TextInput>
            <Button title="Press to hear some words" onPress={speak} />
        </View>
    )
}