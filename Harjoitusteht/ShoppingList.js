import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, FlatList, ScrollView } from 'react-native';
import * as SQLite from 'expo-sqlite';

export default function ShoppingList() {
    const[list, setList] = useState([]);
    const[item, setItem] = useState('');
    const[amount, setAmount] = useState('');

    // Create or open a database to app directory
    const db = SQLite.openDatabase('shoppinglist.db');

    // Create table shopping if not already exists
    useEffect(() => {
        db.transaction(tx => {
          tx.executeSql('create table if not exists shopping (id integer primary key not null, product text, amount text);');
          tx.executeSql('insert into shopping (product, amount) values ("flour", "1kg");')
          tx.executeSql('insert into shopping (product, amount) values ("Potatoes", "2kg");')
          tx.executeSql('insert into shopping (product, amount) values ("Sausages", "500g");')
          tx.executeSql('insert into shopping (product, amount) values ("Orange Juice", "1,2 L");')
        });
        updateList();    
      }, []);

    // Save product
    const saveItem = () => {
        db.transaction(tx => {
            tx.executeSql('insert into shopping (product, amount) values (?, ?);', [item, amount]);    
        }, null, updateList
        )
    }

    // Update shoppinglist
    const updateList = () => {
        db.transaction(tx => {
        tx.executeSql('select * from shopping;', [], (_, { rows }) =>
            setList(rows._array)
        ); 
        });
    }

    // Delete product
    const deleteItem = (id) => {
        db.transaction(
        tx => {
            tx.executeSql(`delete from shopping where id = ?;`, [id]);
        }, null, updateList
        )    
    }

    // Clear all the rows from database
    const deleteAll = () => {
        db.transaction(
        tx => {
            tx.executeSql(`delete from shopping;`, [id]);
        }, null, updateList
        )    
    }

    return(
        <View style={{ margin: 20, flex: 1 }}>
            <TextInput placeholder='Product' style={{borderColor: 'gray', borderWidth: 1, height: 30, margin: 5}} onChangeText = {text => setItem(text)} name='item' value={item}/>
            <TextInput placeholder='Amount'style={{borderColor: 'gray', borderWidth: 1, height: 30, margin: 5}} onChangeText = {text => setAmount(text)} name='amount' value={amount}/>
            <Button title="ADD" onPress={saveItem}></Button>
            <Button title="CLEAR" onPress={deleteAll}></Button>
            <Text style={{fontSize: 24}}>Shopping List With SQL Database</Text>
                <ScrollView> 
                    { list.map((li) => <View key={li.id} style={{ alignItems: 'center', display: 'flex'}}>
                        <Text>{li.product}, {li.amount}</Text>
                        <Button onPress={() => deleteItem(li.id)} title='poista'></Button>
                    </View>) }
                </ScrollView>
               
        </View>
    )

}