import { View, Text, ScrollView, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput, Button } from 'react-native-paper';
import { addDoc, collection, } from 'firebase/firestore';
import db from '../../../firebaseConfig';
//
const AddProduct = ({ navigation }) => {
   
        const [product, setProduct] = useState('')
        const [mrp, setMrp] = useState('')
        const [tp, setTp] = useState('')
        const [packing, setPacking] = useState('')
        const [batchno, setBatchno] = useState('')
        const AddProducttoFirestore = async()=> {
            try{
                const productsRef = collection(db, 'Products');

                        await addDoc(productsRef, {
                            Product_Name: product,
                            MRP: mrp,
                            TP: tp,
                            Packing: packing,
                            Batch_No: batchno,
            
                        });
            }
            catch(error){
                Alert.alert("error","Error adding product")
            }
        }
    return (

        <View style={styles.container}>


            <View style={styles.view1}>
                <TextInput label="Product Name" style={styles.textinput} value={product} onChangeText={(text)=>setProduct(text)}/>
                <TextInput label="M.R.P" style={styles.textinput} value={mrp} onChangeText={(text)=>setMrp(text)}/>
                <TextInput label="T.P" style={styles.textinput}  value={tp} onChangeText={(text)=>setTp(text)}/>
                <TextInput label="Packing" style={styles.textinput} value={packing} onChangeText={(text)=>setPacking(text)}/>
                <TextInput label="Batch number" style={styles.textinput}  value={batchno} onChangeText={(text)=>setBatchno(text)}/>


            </View>

            <View style={styles.view2}>
                <Button mode="contained" onPress={()=>{AddProducttoFirestore();Alert.alert("Product Added");navigation.navigate("ProductsScreen")}} style={styles.button}  > Add Product</Button>

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



export default AddProduct;
