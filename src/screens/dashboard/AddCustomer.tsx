import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { addDoc, collection } from 'firebase/firestore';
import db from '../../../firebaseConfig';
import Toast from 'react-native-toast-message';
//
const AddCustomer = ({navigation}) => {
  const {control,handleSubmit,setValue} = useForm();
  const onSubmit = async (data) => {
    try {
        const customersRef = collection(db, 'Customers');
        await addDoc(customersRef, {
            Customer_Name: data.customer,
            Area: data.area,
            Address: data.address,
        });
        Toast.show({
            type: 'success',
            position: 'bottom',
            text1: 'Success',
            text2: 'Customer Added',
          });
        navigation.navigate("CustomersScreen");
    } catch (error) {
        Toast.show({
            type: 'error',
            position: 'bottom',
            text1: 'Error',
            text2: 'Error adding customer',
          });
    }
};
    return (

        <View style={styles.container}>
            <View style={styles.view1}>
            <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Customer Name"
                            onBlur={onBlur}
                            onChangeText={(text) => {
                                onChange(text);
                                setValue('customer', text);
                            }}
                            value={value}
                            style={styles.textinput}
                        />
                    )}
                    name="customer"
                    rules={{ required: true }}
                    defaultValue=""
                />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Area of Operation"
                            onBlur={onBlur}
                            onChangeText={(text) => {
                                onChange(text);
                                setValue('area', text);
                            }}
                            value={value}
                            style={styles.textinput}
                        />
                    )}
                    name="area"
                    rules={{ required: true }}
                    defaultValue=""
                />
                 <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Customer Physical Address"
                            onBlur={onBlur}
                            onChangeText={(text) => {
                                onChange(text);
                                setValue('address', text);
                            }}
                            value={value}
                            style={styles.textinput}
                        />
                    )}
                    name="address"
                    rules={{ required: true }}
                    defaultValue=""
                />
            </View>
            <View style={styles.view2}>
            <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.button}>
                    Add Customer
                </Button>
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
