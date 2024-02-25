import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ReusableButton from "../../components/Button/ReusableButton";
import { HelperText, Modal, Portal, Provider, TextInput } from "react-native-paper";
import DividerBar from "../../components/Divider/DividerBar";
import {getAuth,signOut} from "firebase/auth";
import { Switch } from 'react-native-paper';
import { useForm } from "react-hook-form";
import Toast from "react-native-toast-message";
const SettingScreen = ({navigation}) => {
  const auth = getAuth();
  const [invoiceVisible, setInvoiceVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [signatureVisible, setSignatureVisible] = useState(false);
  const [productVisible, setProductVisible] = useState(false);
  const showInvoiceModal = () => setInvoiceVisible(true);
  const hideInvoiceModal = () => setInvoiceVisible(false);
  const showDeleteModal = () => setDeleteVisible(true);
  const hideDeleteModal = () => setDeleteVisible(false);
  const showSignatureModal = () => setSignatureVisible(true);
  const hideSignatureModal = () => setSignatureVisible(false);
  const showProductModal = () => setProductVisible(true);
  const hideProductModal = () => setProductVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,
    // alignItems: 'center',
  };

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const { control, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    
    signOut(auth).then(() => {
      console.log("Logged out")
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Logout successfully',
        text2: 'Please Login again',
      });
    })
      .catch((error) => {
        const errorMessage = error.message;
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Error while logging you out',
          text2: errorMessage,
        });
      })
  };
  return (

    <Provider>
      <View style={{ gap: 10 }}>
        <View style={{ borderColor: "#fff", width: "80%", alignSelf: "center", marginTop: 20 }}>
          <ReusableButton 
            label="Logout"
            style={{
              backgroundColor: "#f39c12",
              width: "100%",
              alignSelf: "center",
            }}
            textColor={undefined} onPress={handleSubmit(onSubmit)} />
        </View>

        <View style={{ borderColor: "#fff", width: "80%", alignSelf: "center", gap: 10 }}>
          <View>
            <Text style={{ color: "#bebebe", fontWeight: "300", fontSize: 20 }}>GENERAL SETTINGS</Text>
          </View>
          <ReusableButton
            label="Invoice Settings"
            onPress={() => showInvoiceModal()}
            style={{
              backgroundColor: "#468EFB",
              width: "100%",
              alignSelf: "center",
            }}
            textColor={undefined}
          />
          <Portal>
            <Modal
              visible={invoiceVisible}
              onDismiss={hideInvoiceModal}
              contentContainerStyle={containerStyle}
            >
              <View style={{ gap: 10, justifyContent: "flex-start" }}>
                <View>
                  <Text style={{ fontWeight: "bold" }}>Invoice Settings</Text>
                </View>
                <HelperText type="info" >
                  It is recommended to use Auto-Generate Invoice Number
                </HelperText>
                <DividerBar />
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                  <Text style={{ fontWeight: "600", color: "#468EFB" }}>Auto-Generate Invoice Number</Text>
                  <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color="#468EFB" />
                </View>
                <View>
                  {!isSwitchOn && (
                    <>
                      <HelperText type="info" >
                        Or use your own invoice number
                      </HelperText>
                      <View style={{ gap: 10 }}>

                        <View style={{}}>
                          <HelperText type="error" >
                            Please Note that all your next invoices will now start from your preffered Prefix and Number
                          </HelperText>

                          <HelperText type="info" >
                            This will not effect your previous invoices
                          </HelperText>
                        </View>
                      </View>
                    </>
                  )}
                </View>
                <DividerBar />
                <View style={{ gap: 10 }}>
                  {!isSwitchOn && (
                    <>
                      <View>
                        <TextInput
                          label="Prefix"
                          style={{ width: "100%", backgroundColor: "#fff" }}
                          placeholder="INV"
                        />
                      </View>
                      <View>
                        <TextInput
                          label="Start From"
                          style={{ width: "100%", backgroundColor: "#fff" }}
                          placeholder="0001"
                        />
                      </View>
                    </>
                  )}
                </View>



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
                    onPress={() => Alert.alert("🚀 New Invoice Settings Saved !")}
                    style={{ width: "40%", backgroundColor: "#468EFB" }}
                    textColor="#fff"
                  />
                </View>
              </View>
            </Modal>
          </Portal>

          <ReusableButton
            label="Business Info"
            onPress={() => { }}
            style={{
              backgroundColor: "#468EFB",
              width: "100%",
              alignSelf: "center",
            }}
            textColor={undefined}
          />
          <ReusableButton
            label="Signature Settings"
            onPress={() => showSignatureModal()}
            style={{
              backgroundColor: "#468EFB",
              width: "100%",
              alignSelf: "center",
            }}
            textColor={undefined}
          />
          <Portal>
            <Modal
              visible={signatureVisible}
              onDismiss={hideSignatureModal}
              contentContainerStyle={containerStyle}
            >
              <View style={{ gap: 10, justifyContent: "flex-start" }}>
                <View>
                  <Text style={{ fontWeight: "bold" }}>Upload Signature</Text>
                </View>
                <DividerBar />
                <View style={{ gap: 15 }}>
                  <View style={{ borderWidth: 1, borderColor: "#000", height: 100, borderStyle: "dashed" }}>

                  </View>
                  <View>
                    <ReusableButton label="Upload Image" onPress={() => console.log("🚀 Image Uploaded")} style={undefined} textColor={undefined} />
                  </View>
                  <View style={{ alignSelf: "center" }} >
                    <Text style={{ color: "#468EFB" }} onPress={() => console.log("🚀 Signature cleared")}>Clear Signature</Text>
                  </View>
                </View>
                <DividerBar />
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

          <ReusableButton
            label="Products Settings "
            onPress={() => showProductModal()}
            style={{
              backgroundColor: "#468EFB",
              width: "100%",
              alignSelf: "center",
            }}
            textColor={"#FFF"}
          />
          <Portal>
            <Modal
              visible={productVisible}
              onDismiss={hideProductModal}
              contentContainerStyle={containerStyle}
            >
              <View style={{ gap: 10, justifyContent: "flex-start" }}>
                <View>
                  <Text style={{ fontWeight: "bold" }}>Product Settings</Text>
                  <HelperText type="info" >
                    You can add minimum limit for your products below
                  </HelperText>
                </View>

                <DividerBar />

                    

                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    justifyContent: "center",
                  }}
                >
                  <ReusableButton
                    label="Save"
                    onPress={() => console.log("🚀 Saved")}
                    style={{ width: "100%", backgroundColor: "#468EFB" }}
                    textColor="#fff"
                  />
                </View>
              </View>
            </Modal>
          </Portal>

        </View>
        <View style={{ borderColor: "#fff", width: "80%", alignSelf: "center", gap: 10 }}>
          <View>
            <Text style={{ color: "#bebebe", fontWeight: "300", fontSize: 20 }}>OTHER</Text>
          </View>
          <ReusableButton
            label="Delete Account"
            onPress={() => showDeleteModal()}
            style={{
              backgroundColor: "red",
              width: "100%",
              alignSelf: "center",
            }}
            textColor={undefined}
          />
        </View>
        <View style={{ borderColor: "#fff", width: "80%", alignSelf: "center", gap: 10 }}>
          <View>
            <Text style={{ color: "#bebebe", fontWeight: "300", fontSize: 20 }}>ABOUT APP</Text>
          </View>
          <ReusableButton
            label="Rate App"
            onPress={() => showDeleteModal()}
            style={{
              backgroundColor: "#468EFB",
              width: "100%",
              alignSelf: "center",
            }}
            textColor={undefined}
          />
          <ReusableButton
            label="Share App"
            onPress={() => showDeleteModal()}
            style={{
              backgroundColor: "#468EFB",
              width: "100%",
              alignSelf: "center",
            }}
            textColor={undefined}
          />
          <ReusableButton
            label="Terms & Privacy"
            onPress={() => showDeleteModal()}
            style={{
              backgroundColor: "#468EFB",
              width: "100%",
              alignSelf: "center",
            }}
            textColor={undefined}
          />
        </View>
        <Portal>
          <Modal
            visible={deleteVisible}
            onDismiss={hideDeleteModal}
            contentContainerStyle={containerStyle}
          >
            <View style={{ gap: 10 }}>
              <Text>Delete your account permanently ?</Text>
              <ReusableButton
                label="Delete"
                onPress={() => console.log("🚀 Account deleted!")}
                style={{ backgroundColor: "red" }}
                textColor={undefined}
              />
            </View>
          </Modal>
        </Portal>

      </View>
    </Provider>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
