import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, FlatList, ScrollView } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Contacts from 'expo-contacts';
//import * as SMS from'expo-sms';

export default function ContactsInfo() {
    const [contacts, setContacts] = useState([]);   
    
    const getContacts = async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.PhoneNumbers], 
            });

        if (data.length > 0) {
            console.log(data);
            setContacts(data);
            }
        }
    }

    return(
        <View style={{flex: 1, alignContent: 'center', alignItems: 'center'}}>
            <ScrollView>
                <Text style={{fontSize: 24}}>Contacts from your phonebook</Text>
                <Button title='Get Contacts' onPress={getContacts} />
                    { contacts.map((contact) => 
                        <View key={contact.id} style={{margin: 5}}>
                        <Text>{contact.firstName}</Text>
                        { contact.lastName ? (<Text>{contact.lastName}</Text>) : <Text>-</Text> }
                        <Text>{contact.phoneNumbers[0].number}</Text>
                        <Text>{}</Text>
                        </View>
                    )}
            </ScrollView>
        </View>
    );
}
