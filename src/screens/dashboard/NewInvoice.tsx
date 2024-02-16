import React, { useEffect } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import ReusableButton from '../../components/Button/ReusableButton';
import ResuableInput from '../../components/TextInput/ReusableInput';

const NewInvoice = ({ navigation }) => {
    //    useEffect(() => {
    //     Alert.alert("Dont Worry!","Invoice number will be auto generated");
    //    }, [])   
    return (
        <View style={styles.container} >
            <View style={styles.view1}>

                <ResuableInput label="Product Name" style={undefined} />
                <ResuableInput label="Qunatity" style={undefined}/>
                <ResuableInput label="T.P" style={undefined}/>
               <ResuableInput label="M.R.P" style={undefined} />
            </View>
            <View style={styles.view2}>
            <ReusableButton
          label="Add Another Product"
          onPress={() => Alert.alert("Button Pressed")}
          style={styles.button}    />
                <ReusableButton label="Calculate Bill" onPress={()=>navigation.navigate("CalculateBill")} style={styles.button} />
                <ReusableButton label={"View Invoices"} onPress={()=>navigation.navigate("ViewInvoices")} style={styles.button} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    view1: {
        width: '90%',
        flex: 1,
        // backgroundColor:'red'
        // justifyContent: 'center',
    },
    textinput: {
        marginVertical: 10,
        width: '100%',
        backgroundColor: '#fff',
    },
    view2: {
        width: "90%",
        gap: 10,
        // backgroundColor:"pink",
        justifyContent: "center",
        flex: 1
    },
    button: {
        width: '100%',
        backgroundColor: '#4683fb',
    }
});

export default NewInvoice;
