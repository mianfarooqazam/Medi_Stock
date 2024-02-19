import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ReusableButton from "../../components/Button/ReusableButton";
import { Modal, Portal, Provider, TextInput } from "react-native-paper";
import DividerBar from "../../components/Divider/DividerBar";
import ResuableInput from "../../components/TextInput/ReusableInput";

const SettingScreen = () => {
  const [invoiceVisible, setInvoiceVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const showInvoiceModal = () => setInvoiceVisible(true);
  const hideInvoiceModal = () => setInvoiceVisible(false);
  const showDeleteModal = () => setDeleteVisible(true);
  const hideDeleteModal = () => setDeleteVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,
    // alignItems: 'center',
  };
  return (
    <Provider>
      <View style={{}}>
        <View style={{ gap: 10 }}>
          <ReusableButton
            label="Invoice Settings"
            onPress={() => showInvoiceModal()}
            style={{
              backgroundColor: "#468EFB",
              width: "80%",
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
                <DividerBar />
                <View style={{ gap: 10 }}>
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
                    onPress={() => console.log("🚀 Done")}
                    style={{ width: "40%", backgroundColor: "#468EFB" }}
                    textColor="#fff"
                  />
                </View>
              </View>
            </Modal>
          </Portal>

          <ReusableButton
            label="Invoice Settings"
            onPress={() => showInvoiceModal()}
            style={{
              backgroundColor: "#468EFB",
              width: "80%",
              alignSelf: "center",
            }}
            textColor={undefined}
          />

          <ReusableButton
            label="Delete Account"
            onPress={() => showDeleteModal()}
            style={{
              backgroundColor: "red",
              width: "80%",
              alignSelf: "center",
            }}
            textColor={undefined}
          />
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
      </View>
    </Provider>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
