import React, { useEffect, useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, Alert, Text, ScrollView } from 'react-native';
import { TextInput, Button, HelperText, Chip } from 'react-native-paper';
import ReusableButton from '../../components/Button/ReusableButton';
import ResuableInput from '../../components/TextInput/ReusableInput';
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import TextInputIcon from 'react-native-paper/lib/typescript/components/TextInput/Adornment/TextInputIcon';
import DividerBar from '../../components/Divider/DividerBar';

const NewInvoice = ({ navigation }) => {
    const data = [
        { label: 'Jhon', value: '1' },
        { label: 'Doe', value: '2' },
        { label: 'Lorem', value: '3' },
        { label: 'Ipsum', value: '4' },
        { label: 'Admin', value: '5' },
        { label: 'Neutral', value: '6' },
        { label: 'Peter', value: '7' },
        { label: 'Richard', value: '8' },
    ];
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    // const renderLabel = () => {
    //     if (value || isFocus) {
    //         return (
    //             <Text style={[styles.label, isFocus && { color: 'blue' }]}>
    //                 select Cusot
    //             </Text>
    //         );
    //     }
    //     return null;
    // };
    //    useEffect(() => {
    //     Alert.alert("Dont Worry!","Invoice number will be auto generated");
    //    }, [])   
    return (
        <ScrollView style={styles.container} >
            {/* {renderLabel()} */}

            <View style={{ gap: 20 }}>
                <View style={{ width: "90%", alignSelf: "center", borderWidth: 1, borderRadius: 10, backgroundColor: "#fff", padding: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Invoice Number:
                    </Text>
                    <HelperText type="info">Enable Auto Generate Invoice Number from Settings</HelperText>
                </View>

                <View style={{ width: "90%", alignSelf: "center", borderWidth: 1, borderRadius: 10, backgroundColor: "#fff", padding: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Date</Text>
                </View>

                <View style={{ width: "90%", alignSelf: "center", borderWidth: 1, borderRadius: 10, backgroundColor: "#fff", padding: 10,gap:10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}> Add Customer</Text>
                        <DividerBar/>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select Customer' : 'Loading Customers....'}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}
                        // renderLeftIcon={() => (
                        //     <AntDesign  style={styles.icon}name="select1"size={20}  />
                        // )}
                    />
                </View>

                <View style={{ width: "90%", alignSelf: "center", borderWidth: 1, borderRadius: 10, backgroundColor: "#fff", padding: 10,gap:10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Products :
                    </Text>
                    <DividerBar/>
                    <Chip icon={() => <Ionicons name="add" size={30} color="#fff" />} style={{ backgroundColor: '#4683fb', }}
                        onPress={() => { }}
                    >
                        Add Product
                    </Chip>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Balance Due</Text>
                    <FontAwesome5 name="check-circle" size={24} color="#9BCF53" />

                </View>
                <View style={{ width: "90%", alignSelf: "center", borderWidth: 1, borderRadius: 10, backgroundColor: "#fff", padding: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Signature</Text>
                </View>
                <View style={{ width: "90%", alignSelf: "center", borderWidth: 1, borderRadius: 10, flexDirection: "row", justifyContent: 'center', alignItems: "center" }}>
                    <FontAwesome5 name="check-circle" size={24} color="#9BCF53" />
                    <Text>Mark as Paid</Text>
                </View>
                
                <View style={{ width: "90%", alignSelf: "center", borderWidth: 1, borderRadius: 10, backgroundColor: "#fff", padding: 10 ,flexDirection:"row",}}>
                    <ReusableButton label="Preview" onPress={undefined} style={{width:"50%",backgroundColor:"#4683fb"}} />
                    <ReusableButton label="Save" onPress={undefined} style={{width:"50%",backgroundColor:"#4683fb"}}/>
                </View>


            </View>

           




            {/* <ReusableButton label="Calculate Bill" onPress={()=>navigation.navigate("CalculateBill")} style={styles.button} /> */}
            {/* <ReusableButton label={"View Invoices"} onPress={()=>navigation.navigate("ViewInvoices")} style={styles.button} /> */}

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    // button: {
    // width: '100%',
    // backgroundColor: '#4683fb',
    // },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        width: "100%",
        alignSelf: 'center',

    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
        
    },
    selectedTextStyle: {
        fontSize: 16,
        
    },
    iconStyle: {
        width: 20,
        height: 20,
        
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        
    },
});

export default NewInvoice;
