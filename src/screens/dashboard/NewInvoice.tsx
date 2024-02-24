import { FontAwesome5 } from "@expo/vector-icons";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import {
  HelperText,
  Modal,
  Portal,
  Provider,
  Switch,
  TextInput,
  TouchableRipple,
} from "react-native-paper";
import {
  useForm,
  Controller,
  SubmitHandler,
  SubmitErrorHandler,
  useFieldArray,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

//
import { CustomersData, ProductsData } from "../../DummyData/Data";
import ReusableButton from "../../components/Button/ReusableButton";
import DividerBar from "../../components/Divider/DividerBar";
import {
  InvoiceProductType,
  InvoiceSchema,
  InvoiceSchemaType,
} from "../../../lib/zod-validations/invoice";
import { SafeAreaView } from "react-native-safe-area-context";
import { generateInvoiceID } from "../../../lib/utils";

const containerStyle = {
  backgroundColor: "white",
  padding: 20,
  width: "80%",
  alignSelf: "center",
  justifyContent: "center",
  borderRadius: 10,
};

const NewInvoice = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = useForm<InvoiceSchemaType>({
    resolver: zodResolver(InvoiceSchema),
    defaultValues: {
      invoiceDate: new Date(),
    //   invoiceNumber: generateInvoiceID()
    },
  });

  const { fields: productsList, append: addProductToInvoice } = useFieldArray({
    control: control,
    name: "invoiceProducts",
  });

  const formDiscountType = watch("invoiceDiscountType");

  const [selectedProduct, setSelectedProduct] = useState<InvoiceProductType>();
  const [productQuantity, setProductQuantity] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const [discountValue, setDiscountValue] = useState(0);

  const [productsVisible, setProductsVisible] = useState(false);
  const showProductsModal = () => setProductsVisible(true);
  const hideProductsModal = () => {
    setSelectedProduct(undefined);
    setProductPrice(0);
    setProductQuantity(0);
    setProductsVisible(false);
  };

  const [discount, setDiscount] = useState(false);
  const showDiscountModal = () => setDiscount(true);
  const hideDiscountModal = () => setDiscount(false);

  const [markpaidPressed, setMarkPaidPressed] = useState(false);

  const currentDate = moment(getValues("invoiceDate")).format("DD-MM-YYYY");
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => {
    const newValue = !isSwitchOn;
    setIsSwitchOn(newValue);
  };

  useEffect(() => {
    const generatedInvoiceID = generateInvoiceID();
    setValue("invoiceNumber", generatedInvoiceID);
  }, []);

  const subTotal: number = productsList.reduce(
    (sum, item) => sum + item.productTotal,
    0
  );

  const calculateTotal = () => {
    const invoiceDiscount = getValues("invoiceDiscount") || 0;
    const total = (subTotal - invoiceDiscount).toFixed(2);
  
    return total
  };

  const handleAddDiscount = () => {
    if (formDiscountType === "percentage") {
      const discountPercentage = discountValue / 100;
      const discountAmount = subTotal * discountPercentage;
      setValue("invoiceDiscount", discountAmount);
    } else {
      setValue("invoiceDiscount", discountValue);
    }
    hideDiscountModal();
  };

  const handleAddProduct = () => {
    if (!selectedProduct) {
      alert("Please select a product.");

      return;
    }
    addProductToInvoice({
      productName: selectedProduct.productName,
      productPrice: productPrice,
      productQuantity: productQuantity,
      productType: selectedProduct.productType,
      productTotal: productPrice * productQuantity,
      batchNumber: selectedProduct.batchNumber,
      remainingQuantity: selectedProduct.remainingQuantity - productQuantity,
    });
    hideProductsModal();
  };

  const onSubmit: SubmitHandler<InvoiceSchemaType> = (data) => {
    console.log(JSON.stringify(data));
  };

  const onError: SubmitErrorHandler<InvoiceSchemaType> = (errors, e) => {
    console.log(JSON.stringify(errors));
  };

  return (
    <SafeAreaView edges={["bottom"]}>
      <ScrollView style={styles.container}>
        {/* {renderLabel()} */}

        <View style={{ gap: 16 }}>
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
              <Controller
                control={control}
                name="invoiceNumber"
                render={({ field: { value } }) => (
                  <TextInput
                    style={{
                      fontWeight: "300",
                      fontSize: 20,
                      color: "#4683fb",
                    }}
                    value={value}
                  />
                )}
                disabled
              />
            </View>
            <View style={{}}>
              <HelperText type="info">
                Disable Auto-Generate Invoice number from settings and use your
                own inovice-numbers
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
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Customer :</Text>
            <DividerBar />
            <Controller
              control={control}
              render={({ field: { onChange, value, onBlur } }) => (
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
                  placeholder="Select Customer"
                  searchPlaceholder="Search customer"
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                />
              )}
              name="invoiceCustomer"
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
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Products :</Text>
            <DividerBar />
            <TouchableRipple onPress={() => showProductsModal()}>
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
                  <Text style={{ color: "#fff", fontSize: 16 }}>
                    Add Products
                  </Text>
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
            {productsList.map((product, index) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableData}>{index + 1}</Text>
                <Text style={styles.tableData}>{product.productName}</Text>
                <Text style={styles.tableData}>{product.productQuantity}</Text>
                <Text style={styles.tableData}>{product.productPrice}</Text>
                <Text
                  style={[styles.tableData, { backgroundColor: "#F9F07A" }]}
                >
                  {product.productPrice * product.productQuantity}
                </Text>
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
                    placeholder="Select Products"
                    searchPlaceholder="Search product..."
                    value={selectedProduct}
                    onChange={(item) => setSelectedProduct(item)}
                  />

                  <View style={{ gap: 10 }}>
                    <TextInput
                      mode="outlined"
                      label="Quantity"
                      value={productQuantity.toString()}
                      onChangeText={(e) => setProductQuantity(parseInt(e))}
                      keyboardType="numeric"
                    />
                    <TextInput
                      mode="outlined"
                      label="Price"
                      value={productPrice.toString()}
                      onChangeText={(e) => setProductPrice(parseInt(e))}
                      keyboardType="numeric"
                    />
                    <ReusableButton
                      label="Add"
                      onPress={handleAddProduct}
                      style={{ backgroundColor: "#468EFB" }}
                      textColor={undefined}
                    />
                  </View>
                </View>
              </Modal>
            </Portal>

            <View style={{ gap: 10, backgroundColor: "#F6F5F5" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>Sub Total :</Text>
                <Text>Rs. {subTotal}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text onPress={() => showDiscountModal()}>Discount :</Text>
                <Text>
                  {formDiscountType === "percentage"
                    ? `${discountValue} %`
                    : `Rs. ${discountValue}`}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
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
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <Text>Use Percentage instead</Text>
                    <Controller
                      control={control}
                      name="invoiceDiscountType"
                      render={({ field: { onChange, value } }) => (
                        <Switch
                          value={value === "percentage"}
                          onValueChange={(value) =>
                            onChange(value ? "percentage" : "flat")
                          }
                          color="#468EFB"
                        />
                      )}
                    />
                  </View>
                  <TextInput
                    mode="outlined"
                    label={
                      formDiscountType === "percentage"
                        ? "Percentage"
                        : "Flat Amount"
                    }
                    placeholder="100"
                    value={discountValue.toString()}
                    onChangeText={(e) => setDiscountValue(parseInt(e))}
                  />

                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                      justifyContent: "center",
                    }}
                  >
                    <ReusableButton
                      label="Apply Discount"
                      onPress={handleAddDiscount}
                      style={{ width: "100%", backgroundColor: "#468EFB" }}
                      textColor={undefined}
                    />
                  </View>
                </View>
              </Modal>
            </Portal>
            <View
              style={{
                width: "100%",
                alignSelf: "center",
                borderColor: "#F9F07A",
                borderRadius: 10,
                backgroundColor: markpaidPressed ? "#9BCF53" : "#F9F07A",
                padding: 10,
                gap: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                Balance Due :
              </Text>
              <Text style={{ fontWeight: "500", fontSize: 16 }}>
                Rs. {calculateTotal()}
              </Text>
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
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Signature :
            </Text>
            <Switch
              value={isSwitchOn}
              onValueChange={onToggleSwitch}
              color="#468EFB"
            />
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
                backgroundColor: !markpaidPressed ? "#9BCF53" : "#bebebe",
                padding: 10,
                gap: 10,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 20 }}>
                Mark as {markpaidPressed ? "Unpaid" : "Paid"}
              </Text>
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
          style={{ width: "45%", backgroundColor: "#4683fb" }}
          textColor={undefined}
        />
        <ReusableButton
          label="Save"
          onPress={handleSubmit(onSubmit, onError)}
          style={{ width: "45%", backgroundColor: "#4683fb" }}
          textColor={undefined}
        />
      </View>
    </SafeAreaView>
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
    flexDirection: "row",
    backgroundColor: "#bebebe",
    padding: 5,
    // justifyContent:"space-around"
  },
  tableHeader: {
    flex: 1,
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    padding: 5,
  },
  tableData: {
    flex: 1,
    padding: 5,
    textAlign: "center",
  },
});

export default NewInvoice;
