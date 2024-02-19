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
    Switch
} from "react-native-paper";
import ReusableButton from "../../components/Button/ReusableButton";
import ResuableInput from "../../components/TextInput/ReusableInput";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import TextInputIcon from "react-native-paper/lib/typescript/components/TextInput/Adornment/TextInputIcon";
import DividerBar from "../../components/Divider/DividerBar";
import moment from "moment";

const NewInvoice = ({ navigation }) => {
    const CustomerData = [
        { label: "Jhon", value: "1" },
        { label: "Doe", value: "2" },
        { label: "Lorem", value: "3" },
        { label: "Ipsum", value: "4" },
        { label: "Admin", value: "5" },
        { label: "Neutral", value: "6" },
        { label: "Peter", value: "7" },
        { label: "Richard", value: "8" },
    ];
    const ProductData = [
        { label: "Cap A", value: "1" },
        { label: "Cap B", value: "2" },
        { label: "Cap C", value: "3" },
        { label: "Syp A", value: "4" },
        { label: "Syp B", value: "5" },
        { label: "Tab A", value: "6" },
        { label: "Tab B", value: "7" },
    ]
    const containerStyle = {
        backgroundColor: "white",
        padding: 20,
        width: "80%",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 10,
        // alignItems: 'center',
    };

    const [customervalue, setCustomerValue] = useState(null);
    const [customerFocus, setCustomerFocus] = useState(false);


    const [productsVisible, setProductsVisible] = useState(false);
    const [productvalue, setProductValue] = useState(null);
    const [productFocus, setProductFocus] = useState(false);
    const showProductsModal = () => setProductsVisible(true);
    const hideProductsModal = () => setProductsVisible(false);

    const [discount, setDiscount] = useState(false);
    const showDiscountModal = () => setDiscount(true);
    const hideDiscountModal = () => setDiscount(false);

    const [markpaidPressed, setMarkPaidPressed] = useState(true)

    const currentDate = moment().format("DD-MM-YYYY");
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <Provider>
            <ScrollView style={styles.container}>
                {/* {renderLabel()} */}

                <View style={{ gap: 20 }}>

                    <View
                        style={{
                            width: "90%",
                            alignSelf: "center",
                            // borderWidth: 1,
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
                                INV-0001
                            </Text>
                        </View>
                        <View style={{}}>
                            <HelperText type="info" >
                                Disable Auto-Generate Invoice number from settings and use your own inovice-numbers
                            </HelperText>
                        </View>
                    </View>



                    <View
                        style={{
                            width: "90%",
                            alignSelf: "center",
                            // borderWidth: 1,
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
                            // borderWidth: 1,
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
                            data={CustomerData}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={
                                !customerFocus ? "Select Customer" : "🚀 Loading Customers"
                            }
                            searchPlaceholder="Search..."
                            value={customervalue}
                            onFocus={() => setCustomerFocus(true)}
                            onBlur={() => setCustomerFocus(false)}
                            onChange={(item) => {
                                setCustomerValue(item.value)
                                setCustomerFocus(false);
                            }}
                        />
                    </View>

                    <View
                        style={{
                            width: "90%",
                            alignSelf: "center",
                            // borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor: "#fff",
                            padding: 10,
                            gap: 10,
                        }} >
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Products :</Text>
                        <DividerBar />
                        <TouchableRipple onPress={() => showProductsModal()} >
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
                                <FontAwesome5 name="plus-circle" size={16} />
                            </View>
                        </TouchableRipple>
                        <Portal>
                            <Modal
                                visible={productsVisible}
                                onDismiss={hideProductsModal}
                                contentContainerStyle={containerStyle}
                            >
                                <View style={{ gap: 10 }}>
                                    <Dropdown
                                        style={styles.dropdown}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={ProductData}
                                        search
                                        maxHeight={300}
                                        labelField="label"
                                        valueField="value"
                                        placeholder={
                                            !productFocus ? "Select Products" : "🚀 Loading Products"
                                        }
                                        searchPlaceholder="Search..."
                                        value={productvalue}
                                        onFocus={() => setProductFocus(true)}
                                        onBlur={() => setProductFocus(false)}
                                        onChange={(item) => {
                                            setProductValue(item.value);
                                            setProductFocus(false);
                                        }}
                                    />

                                    <View style={{ gap: 10 }}>

                                        <TextInput placeholder="1" mode="outlined" label="Quantity :" />
                                        <TextInput placeholder="1" mode="outlined" label="M.R.P :" />
                                        <View style={{ gap: 10 }}>


                                            <ReusableButton label="Add" onPress={() => console.log("🚀 Item Added!")} style={{ backgroundColor: "#468EFB" }} textColor={undefined} />
                                        </View>
                                    </View>
                                </View>

                            </Modal>
                        </Portal>
                        <DividerBar />
                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                            <Text>Sub Total :</Text>
                            <Text>Rs 0.00</Text>

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                            <Text onPress={() => showDiscountModal()}>Discount :</Text>
                            <Text>Rs 0.00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                            <Text>Total :</Text>
                            <Text>Rs 0.00</Text>
                        </View>
                        <DividerBar />

                        <Portal>
                            <Modal
                                visible={discount}
                                onDismiss={hideDiscountModal}
                                contentContainerStyle={containerStyle}
                            >
                                <View style={{ gap: 10 }}>
                                    <Text style={{ fontWeight: "bold" }}>Discount</Text>
                                    <DividerBar />
                                    <TextInput mode="outlined" label="Flat Amount :" placeholder="100" />
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            gap: 10,
                                            justifyContent: "center",
                                        }}
                                    >
                                        <ReusableButton
                                            label="Cancel"
                                            onPress={() => console.log("🚀 Cancel")}
                                            style={{ width: "40%", backgroundColor: "#bebebe" }}
                                            textColor="#000"
                                        />
                                        <ReusableButton
                                            label="Done"
                                            onPress={() => console.log("🚀 Done")}
                                            style={{ width: "40%", backgroundColor: "#468EFB" }}
                                            textColor="#fff"
                                        />
                                    </View>
                                </View>
                            </Modal>
                        </Portal>
                        <View style={{
                            width: "100%",
                            alignSelf: "center",
                            borderColor: "#F9F07A",
                            borderRadius: 10,
                            backgroundColor: "#F9F07A",
                            padding: 10,
                            gap: 10,
                            flexDirection: "row",
                            alignItems: 'center',
                            justifyContent: "space-between"
                        }}>
                            <Text style={{ fontWeight: "bold", fontSize: 20 }}>  Balance Due :</Text>
                            <Text style={{ fontWeight: "300", fontSize: 16 }}>  Rs. 00000.0</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            width: "90%",
                            alignSelf: "center",
                            // borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor: "#fff",
                            padding: 10,
                            flexDirection: 'row',
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Signature :</Text>
                        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color="#468EFB" />
                    </View>


                    <TouchableRipple onPress={() => setMarkPaidPressed(!markpaidPressed)}>
                        <View
                            style={{
                                width: "90%",
                                alignSelf: "center",
                                borderWidth: 1,
                                borderColor: markpaidPressed ? "#9BCF53" : "#bebebe",
                                borderRadius: 10,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: markpaidPressed ? "#9BCF53" : "#bebebe",
                                padding: 10,
                                gap: 10,
                            }}
                        >
                            <Text style={{ color: "#fff", fontSize: 20 }} >Mark as {markpaidPressed ? "Paid" : "Unpaid"}</Text>
                        </View>
                    </TouchableRipple>
                   

                </View>

                {/* <ReusableButton label="Calculate Bill" onPress={()=>navigation.navigate("CalculateBill")} style={styles.button} /> */}
                {/* <ReusableButton label={"View Invoices"} onPress={()=>navigation.navigate("ViewInvoices")} style={styles.button} /> */}
            </ScrollView>
            {/* <ReusableButton
                            label="Save"
                            onPress={() => console.log("🚀 Save button pressed")}
                            style={{ width: "45%", backgroundColor: "#4683fb" ,position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                           // Button background color
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 60, }} textColor={undefined} /> */}
                             <View
                        style={{
                            width: "90%",
                            alignSelf: "center",
                            // borderWidth: 1,
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
                            style={{ width: "45%", backgroundColor: "#4683fb" }} textColor={undefined} />
                        <ReusableButton
                            label="Save"
                            onPress={() => console.log("🚀 Save button pressed")}
                            style={{ width: "45%", backgroundColor: "#4683fb" }} textColor={undefined} />
                    </View>
            
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
