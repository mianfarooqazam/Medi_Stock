import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    Alert,
    Text,
    ScrollView,
} from "react-native";
import {
    TextInput,
    Button,
    HelperText,
    Chip,
    TouchableRipple,
    Portal,
    Modal,
    Provider,
} from "react-native-paper";
import ReusableButton from "../../components/Button/ReusableButton";
import ResuableInput from "../../components/TextInput/ReusableInput";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import TextInputIcon from "react-native-paper/lib/typescript/components/TextInput/Adornment/TextInputIcon";
import DividerBar from "../../components/Divider/DividerBar";
import moment from "moment";

const NewInvoice = ({ navigation }) => {
    const data = [
        { label: "Jhon", value: "1" },
        { label: "Doe", value: "2" },
        { label: "Lorem", value: "3" },
        { label: "Ipsum", value: "4" },
        { label: "Admin", value: "5" },
        { label: "Neutral", value: "6" },
        { label: "Peter", value: "7" },
        { label: "Richard", value: "8" },
    ];
    const containerStyle = {
        backgroundColor: "white",
        padding: 20,
        width: "80%",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 10,
        // alignItems: 'center',
    };

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const currentDate = moment().format("DD-MM-YYYY");

    return (
        <Provider>
            <ScrollView style={styles.container}>
                {/* {renderLabel()} */}

                <View style={{ gap: 20 }}>
                    <TouchableRipple onPress={() => showModal()}>
                        <View
                            style={{
                                width: "90%",
                                alignSelf: "center",
                                borderWidth: 1,
                                borderRadius: 10,
                                backgroundColor: "#fff",
                                padding: 10,
                            }}
                        >
                            <View
                                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
                            >
                                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                                    Invoice Number:
                                </Text>
                                <Text
                                    style={{ fontWeight: "300", fontSize: 20, color: "#4683fb" }}
                                >
                                    0001
                                </Text>
                            </View>
                            <HelperText type="info">
                                Enable Auto Generate Invoice Number from Settings
                            </HelperText>
                        </View>
                    </TouchableRipple>
                    <Portal>
                        <Modal
                            visible={visible}
                            onDismiss={hideModal}
                            contentContainerStyle={containerStyle}
                        >
                            <View style={{ gap: 10 }}>
                                <Text>Enter Your Invoice Number Below</Text>
                            </View>
                        </Modal>
                    </Portal>

                    <View
                        style={{
                            width: "90%",
                            alignSelf: "center",
                            borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor: "#fff",
                            padding: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Dated:</Text>
                        <Text>{currentDate}</Text>
                    </View>

                    <View
                        style={{
                            width: "90%",
                            alignSelf: "center",
                            borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor: "#fff",
                            padding: 10,
                            gap: 10,
                        }}
                    >
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                            Customer :
                        </Text>
                        <DividerBar />
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
                            placeholder={
                                !isFocus ? "Select Customer" : "Loading Customers...."
                            }
                            searchPlaceholder="Search..."
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={(item) => {
                                setValue(item.value);
                                setIsFocus(false);
                            }}
                        />
                    </View>

                    <View
                        style={{
                            width: "90%",
                            alignSelf: "center",
                            borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor: "#fff",
                            padding: 10,
                            gap: 10,
                        }} >
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Products :</Text>
                        <DividerBar />
                        
                        <View
                        style={{
                            width: "90%",
                            alignSelf: "center",
                            borderWidth: 1,
                            borderColor: "#bebebe",
                            borderRadius: 10,
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#bebebe",
                            padding: 5,
                            gap: 10,
                        }}
                    >
                        <Text style={{ color: "black", fontSize: 16 }}>Add Products</Text>
                        <FontAwesome5 name="plus-circle" size={16} c />
                    </View>
                        <DividerBar />
                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                            <Text>Sub Total :</Text>
                            <Text>Rs 0.00</Text>

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                            <Text>Discount :</Text>
                            <Text>Rs 0.00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                            <Text>Total :</Text>
                            <Text>Rs 0.00</Text>
                        </View>
                        <DividerBar />

                        <View style={{
                            width: "100%",
                            alignSelf: "center",
                            borderColor: "#F9F07A",
                            borderRadius: 10,
                            backgroundColor: "#F9F07A",
                            padding: 10,
                            gap: 10,
                        }}>
                            <Text style={{ fontWeight: "bold", fontSize: 20 }}>  Balance Due :</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            width: "90%",
                            alignSelf: "center",
                            borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor: "#fff",
                            padding: 10,
                        }}
                    >
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Signature :</Text>
                    </View>

                    <View
                        style={{
                            width: "90%",
                            alignSelf: "center",
                            borderWidth: 1,
                            borderColor: "#9BCF53",
                            borderRadius: 10,
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#9BCF53",
                            padding: 10,
                            gap: 10,
                        }}
                    >
                        <Text style={{ color: "#fff", fontSize: 20 }}>Mark as paid</Text>
                        <FontAwesome5 name="check-circle" size={20} color="#fff" />
                    </View>

                    <View
                        style={{
                            width: "90%",
                            alignSelf: "center",
                            borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor: "#fff",
                            padding: 10,
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: 20,
                        }}
                    >
                        <ReusableButton
                            label="Preview"
                            onPress={() => console.log("🚀 Preview button pressed")}
                            style={{ width: "45%", backgroundColor: "#4683fb" }}
                        />
                        <ReusableButton
                            label="Save"
                            onPress={() => console.log("🚀 Save button pressed")}
                            style={{ width: "45%", backgroundColor: "#4683fb" }}
                        />
                    </View>
                </View>

                {/* <ReusableButton label="Calculate Bill" onPress={()=>navigation.navigate("CalculateBill")} style={styles.button} /> */}
                {/* <ReusableButton label={"View Invoices"} onPress={()=>navigation.navigate("ViewInvoices")} style={styles.button} /> */}
            </ScrollView>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {},
    // button: {
    // width: '100%',
    // backgroundColor: '#4683fb',
    // },
    dropdown: {
        height: 50,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        width: "100%",
        alignSelf: "center",
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: "absolute",

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
