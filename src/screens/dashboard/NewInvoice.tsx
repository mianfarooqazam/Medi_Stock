import { View, Text, ScrollView, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput, Button } from 'react-native-paper';
import { addDoc, collection, } from 'firebase/firestore';
import db from '../../../firebaseConfig';
import ReusableChip from '../../components/ReusableChip';
//
const NewInvoice = ({ navigation }) => {
   
    return (

        <View style={styles.container}>


            <View style={styles.view1}>
                <TextInput label="Product Name" style={styles.textinput} />
                <TextInput label="M.R.P" style={styles.textinput} />
                <TextInput label="T.P" style={styles.textinput}  />
                <TextInput label="Packing" style={styles.textinput} />
                <TextInput label="Batch number" style={styles.textinput} />


            </View>

            <View style={styles.view2}>
                <Button mode="contained" onPress={()=>Alert.alert("Product Added")} style={styles.button}  > Generate Invoice</Button>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
        // justifyContent:"center",
        // alignItems:'center'
    },
    view1: {
        flex: 1,
        // backgroundColor:"pink",
        // width:"90%",
        alignItems: 'center',
        justifyContent: "center"
    },
    textinput: {
        backgroundColor: "#fff",
        width: "90%",
        marginVertical: 10

    },

    view2: {
        flex: 0.5,
        // backgroundColor:"yellow",
        // width:"90%",
        // justifyContent:"center",
        alignItems: 'center'
    },
    button: {
        backgroundColor: "#4683fb",
        width: "90%",

    }
});



export default NewInvoice;
