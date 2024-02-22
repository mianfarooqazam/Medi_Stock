import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform } from 'react-native';
import {
    View,
    StyleSheet,
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
import { CustomersData, ProductsData } from "../../DummyData/Data";

const NewInvoice = ({ navigation }) => {

    const containerStyle = {
        backgroundColor: "white",
        padding: 20,
        width: "80%",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 10,

    };
    const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>([]);
    const [productQuantity, setProductQuantity] = useState('');
    const [productMRP, setProductMRP] = useState('');
    const [discountValue, setDiscountValue] = useState('');
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

    
    const calculateSubtotal = () => {
        return selectedProducts.reduce((total, product) => {
            return total + (product.mrp * product.quantity);
        }, 0);
    };
    const calculateTotal = () => {
        const subtotal = selectedProducts.reduce((total, product) => {
            return total + (product.mrp * product.quantity);
        },  0);
        const discount = parseFloat(discountValue) ||  0; 
        return subtotal - discount;
    };
    const calculateBalance = () => {
        const subtotal = selectedProducts.reduce((total, product) => {
            return total + (product.mrp * product.quantity);
        },  0);
        const discount = parseFloat(discountValue) ||  0; 
        return subtotal - discount;
    }
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
                            data={CustomersData}
                            search
                            maxHeight={300}
                            labelField="customerName"
                            valueField="customerName"
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
                            <View style={{ gap: 10 }}>
                                <View
                                    style={{
                                        width: "90%",
                                        alignSelf: "center",
                                        borderWidth: 1,
                                        borderColor: "#468EFB",
                                        borderRadius: 10,
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: "#468EFB",
                                        padding: 5,
                                        gap: 10,
                                    }}
                                >
                                    <Text style={{ color: "#fff", fontSize: 16 }}>Add Products</Text>
                                    <FontAwesome5 name="plus-circle" size={16} color="#fff" />
                                </View>

                                <View style={{}}>
                                    <View style={styles.table}>
                                        <Text style={styles.tableHeader}>S/N</Text>
                                        <Text style={styles.tableHeader}>Product</Text>
                                        <Text style={styles.tableHeader}>Quantity</Text>
                                        <Text style={styles.tableHeader}>MRP</Text>
                                        <Text style={styles.tableHeader}>Total</Text>
                                    </View>



                                </View>
                            </View>


                        </TouchableRipple>
                        {selectedProducts.map((product, index) => (

                            <View style={styles.tableRow} key={index}>
                                <Text style={styles.tableData}>{index + 1}</Text>
                                < Text style={styles.tableData}>Refix</Text>
                                <Text style={styles.tableData}>{product.quantity}</Text>
                                <Text style={styles.tableData}>{product.mrp}</Text>
                                <Text style={[styles.tableData, { backgroundColor: "#F9F07A" }]}>{product.mrp * product.quantity}</Text>
                            </View>

                        ))}

                        <Portal>
                            <Modal
                                visible={productsVisible}
                                onDismiss={hideProductsModal}
                                contentContainerStyle={[containerStyle, { maxHeight: 300 }]}
                            >
                                <View style={{ gap: 10 }}>
                                    <Dropdown
                                        style={styles.dropdown}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={ProductsData}
                                        search
                                        maxHeight={300}
                                        labelField="productName"
                                        valueField="productName"
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
                                        <TextInput
                                            mode="outlined"
                                            label="Quantity"
                                            value={productQuantity}
                                            onChangeText={setProductQuantity}
                                            keyboardType='numeric'
                                        />
                                        <TextInput
                                            mode="outlined"
                                            label="M.R.P"
                                            value={productMRP}
                                            onChangeText={setProductMRP}
                                            keyboardType='numeric'
                                        />
                                        <ReusableButton
                                            label="Add"
                                            onPress={() => {
                                                setSelectedProducts(prevProducts => [
                                                    ...prevProducts,
                                                    {
                                                        productName: productvalue,
                                                        quantity: productQuantity,
                                                        mrp: productMRP,
                                                    }
                                                ]);
                                                hideProductsModal();
                                            }}
                                            style={{ backgroundColor: "#468EFB" }}
                                            textColor={undefined}
                                        />
                                    </View>

                                </View>
                            </Modal>
                        </Portal>
                        <DividerBar />
                        <View style={{ gap: 10, backgroundColor: "#F6F5F5" }}>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                <Text>Sub Total :</Text>
                                <Text>Rs. {calculateSubtotal()}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                <Text onPress={() => showDiscountModal()}>Discount :</Text>
                                <Text>Rs. {discountValue}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                <Text>Total :</Text>
                                <Text>Rs. {calculateTotal()}</Text>
                            </View>
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
                                    <TextInput mode="outlined" label="Flat Amount :" placeholder="100" value={productMRP}
                                        onChangeText={setProductMRP} />
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            gap: 10,
                                            justifyContent: "center",
                                        }}
                                    >

                                        <ReusableButton
                                            label="Discount"
                                            onPress={() => {

                                                setDiscountValue(productMRP);
                                                hideDiscountModal();
                                            }}
                                            style={{ width: "100%", backgroundColor: "#468EFB" }}
                                            textColor={undefined}
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
                            <Text style={{ fontWeight: "500", fontSize: 16 }}>Rs. {calculateBalance().toFixed(2)} </Text>
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


            </ScrollView>

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
                    onPress={() => navigation.navigate("InvoicePreview")}
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
    table: {
        flexDirection: 'row',
        backgroundColor: '#bebebe',
        padding: 5,
        // justifyContent:"space-around"
    },
    tableHeader: {
        flex: 1,
        textAlign: "center",
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        padding: 5,
    },
    tableData: {
        flex: 1,
        padding: 5,
        textAlign: 'center',
    },
});

export default NewInvoice;
