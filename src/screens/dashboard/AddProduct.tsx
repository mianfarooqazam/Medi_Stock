import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { addDoc, collection } from 'firebase/firestore';
import db from '../../../firebaseConfig';
import Toast from 'react-native-toast-message';

const AddProduct = ({ navigation }) => {
    const { control, handleSubmit, setValue } = useForm();

    const onSubmit = async (data) => {
        try {
            const productsRef = collection(db, 'Products');
            await addDoc(productsRef, {
                Product_Name: data.product,
                MRP: data.mrp,
                TP: data.tp,
                Packing: data.packing,
                Batch_No: data.batchno,
            });
            Toast.show({
                type: 'success',
                position:'bottom',
                text1: 'Success',
                text2: 'Product Added',
              });
            navigation.navigate("ProductsScreen");
        } catch (error) {
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'Error',
                text2: 'Error adding product',
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
                            label="Product Name"
                            onBlur={onBlur}
                            onChangeText={(text) => {
                                onChange(text);
                                setValue('product', text);
                            }}
                            value={value}
                            style={styles.textinput}
                        />
                    )}
                    name="product"
                    rules={{ required: true }}
                    defaultValue=""
                />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="M.R.P"
                            onBlur={onBlur}
                            onChangeText={(text) => {
                                onChange(text);
                                setValue('mrp', text);
                            }}
                            value={value}
                            style={styles.textinput}
                        />
                    )}
                    name="mrp"
                    rules={{ required: true }}
                    defaultValue=""
                />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="T.P"
                            onBlur={onBlur}
                            onChangeText={(text) => {
                                onChange(text);
                                setValue('tp', text);
                            }}
                            value={value}
                            style={styles.textinput}
                        />
                    )}
                    name="tp"
                    rules={{ required: true }}
                    defaultValue=""
                />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Packing"
                            onBlur={onBlur}
                            onChangeText={(text) => {
                                onChange(text);
                                setValue('packing', text);
                            }}
                            value={value}
                            style={styles.textinput}
                        />
                    )}
                    name="packing"
                    rules={{ required: true }}
                    defaultValue=""
                />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Batch number"
                            onBlur={onBlur}
                            onChangeText={(text) => {
                                onChange(text);
                                setValue('batchno', text);
                            }}
                            value={value}
                            style={styles.textinput}
                        />
                    )}
                    name="batchno"
                    rules={{ required: true }}
                    defaultValue=""
                />
            </View>

            <View style={styles.view2}>
                <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.button}>
                    Add Product
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    view1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
    view2: {
        flex: 0.5,
        alignItems: 'center'
    },
    textinput: {
        backgroundColor: "#fff",
        width: "90%",
        marginVertical: 10,
    },
    button: {
        backgroundColor: "#4683fb",
        width: "90%",
    },
});

export default AddProduct;