import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput, Button } from 'react-native-paper';
import { addDoc, collection, } from 'firebase/firestore';
import db from '../../../firebaseConfig';
//
const AddCustomer = () => {
    const [customerName, setCustomerName] = useState('');
    const [area, setArea] = useState('');
    const [address, setAddress] = useState('');
    const addCustomerToFirestore = async () => {
        try {
            const customersRef = collection(db, 'Customers');

            await addDoc(customersRef, {
                Customer_Name: customerName,
                Area: area,
                Address: address,
               
            });

            
        } catch (error) {
            Alert.alert('Error', 'Error adding customer to Firestore. Please try again later.');
        }
    };
    return (

        <View style={styles.container}>
            <View style={styles.view1}>
                <TextInput label="Customer Name" style={styles.textinput} value={customerName} onChangeText={(text) => setCustomerName(text)} />
                <TextInput label="Area of Operation" style={styles.textinput} value={area} onChangeText={(text) => setArea(text)} />
                <TextInput label="Customer Physical Address" style={styles.textinput} value={address} onChangeText={(text) => setAddress(text)} />
                
               
            </View>
            <View style={styles.view2}>
                <Button mode="contained" onPress={()=>{addCustomerToFirestore();Alert.alert("Customer added Successfully")}} style={styles.button}  > Add Customer</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#fff"

    },
    view1: {
        width: '90%',
        // backgroundColor: '#FFA500',
        flex: 1,
        justifyContent: 'center',
    },
    textinput: {
        marginVertical: 10,
        width: '100%',
        backgroundColor: '#fff',
    },
    view2: {
        width: '90%',
        // backgroundColor: '#FFA500',
        flex: 1,
        justifyContent: 'flex-start',
    },
    button: {
        width: '100%',
        backgroundColor: '#4683fb',
        // padding: 15,
    },

});



export default AddCustomer;
