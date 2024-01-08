import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput, Button } from 'react-native-paper';
import { Firestore, doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
const AddCustomer = () => {
    // const [myData, setMyData] = useState(null);
    // useEffect(() => {
    //     getDatabase();
    // }, [])


    // const getDatabase = async () => {
    //     try {
    //         const data = await getDoc(doc(db, 'Customers', 'rhcWSTaho2ib6PKRb9Xt'));
    //         console.log(data.data());
    //         setMyData(data.data());
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }
    return (

        <View style={styles.container}>
            <View style={styles.view1}>
                <TextInput label="Customer Name" style={styles.textinput} />
                <TextInput label="Area of Operation" style={styles.textinput} />
                <TextInput label="Address" style={styles.textinput} />
                <TextInput label="Contact Number" style={styles.textinput} />
                {/* <Text>Name: {myData ? myData.Address : "loading"}</Text> */}
            </View>
            <View style={styles.view2}>
                <Button mode="contained" onPress={() => console.log('Pressed')} style={styles.button}  > Add Customer</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
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
        backgroundColor:'#fff',
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
        padding: 15,
    },
  
});



export default AddCustomer;
