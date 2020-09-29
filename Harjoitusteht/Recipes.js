import React, {useState, useEffect} from 'react';
import { Text, View, Button, TextInput, FlatList, SafeAreaView, Alert, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Recipes() {
    const [titles, setTitles] = useState([]);
    const [search, setSearch] = useState('');

    const getRecipes = async () => {
        const url = 'http://www.recipepuppy.com/api/' + '?i=' + search;
        await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setTitles(data.results);
            
        })
        .catch((error) => {
            Alert.alert('Error', error);
        });
    }
    useEffect(() => {getRecipes()}, []);

    const validateSearch = () => {
        if (search.length <= 1) {
            Alert.alert('alert', 'please input a proper search word');
        } else {
            getRecipes();
        }
    }
    return(
        <SafeAreaView>
            <Text>Reseptit</Text>
            <TextInput onChangeText={text => setSearch(text)} style={{width:200, borderColor: 'gray', borderWidth: 1}} />
            <Button onPress={validateSearch} title='hae' />
            <FlatList keyExtractor={item => item.title}
            renderItem={({item}) => 
                            <View>
                                <Text>{item.title}</Text>
                                <Image style={styles.image} source={{ uri: item.thumbnail, }}  />
                            </View> }
            data={titles} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
      padding: 10,
      width: 50,
      height: 50
    },
  });
  