import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { Divider, Modal, Portal, Provider, Searchbar, TextInput } from 'react-native-paper'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
import { AntDesign, Feather } from '@expo/vector-icons'
import ReusableButton from '../../components/Button/ReusableButton'
import DividerBar from '../../components/Divider/DividerBar'


const CustomerData = [
  { customerName: "John Smith", Area: "New York", Address: "United States" },
  { customerName: "Emily Johnson", Area: "London", Address: "United Kingdom" },
  { customerName: "Ahmed Hassan", Area: "Cairo", Address: "Egypt" },
  { customerName: "Maria Garcia", Area: "Madrid", Address: "Spain" },
  { customerName: "Luis Rodriguez", Area: "Mexico City", Address: "Mexico" },
  { customerName: "Yuki Tanaka", Area: "Tokyo", Address: "Japan" },
  { customerName: "Sophie Dupont", Area: "Paris", Address: "France" },
  { customerName: "Anna Müller", Area: "Berlin", Address: "Germany" },
  { customerName: "Michael Brown", Area: "Sydney", Address: "Australia" },
  { customerName: "Jane Doe", Area: "Toronto", Address: "Canada" },
  { customerName: "Emma White", Area: "Dubai", Address: "United Arab Emirates" },
  { customerName: "Oliver Wilson", Area: "Singapore", Address: "Singapore" },
  { customerName: "Farooq", Area: "Charsadda", Address: "Peshawar" },
  { customerName: "Sophia Martinez", Area: "Moscow", Address: "Russia" },
  { customerName: "Liam Miller", Area: "Rome", Address: "Italy" },
  { customerName: "Isabella Garcia", Area: "Barcelona", Address: "Spain" },
  { customerName: "Mason Anderson", Area: "Amsterdam", Address: "Netherlands" },
  { customerName: "Mia Thompson", Area: "Vienna", Address: "Austria" },
  { customerName: "Ethan Jackson", Area: "Stockholm", Address: "Sweden" },
  { customerName: "Ava White", Area: "Helsinki", Address: "Finland" },
  { customerName: "Ethan Lee", Area: "Oslo", Address: "Norway" },
  { customerName: "Olivia Harris", Area: "Copenhagen", Address: "Denmark" },
  { customerName: "William Clark", Area: "Lisbon", Address: "Portugal" },
  { customerName: "Emily Taylor", Area: "Luxembourg City", Address: "Luxembourg" },
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

const SearchCustomers = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const filteredCustomers = CustomerData.filter(item => item.customerName.toLowerCase().includes(searchQuery.toLowerCase()))

  const [deleteVisible, setdeleteVisible] = useState(false);
  const showDeleteModal = () => setdeleteVisible(true);
  const hideDeleteModal = () => setdeleteVisible(false);


  const [editCustomerName, setEditCustomerName] = useState("");
  const [editArea, setEditArea] = useState("");
  const [editAddress, setEditAddress] = useState("");


  const [editVisible, seteditVisible] = useState(false);
  const showEditModal = (customer: Item) => {
 
    setEditCustomerName(customer.customerName);
    setEditArea(customer.Area);
    setEditAddress(customer.Address);
    seteditVisible(true);
  };
  const hideEditModal = () => seteditVisible(false);
  return (
    <Provider>
      <View style={styles.container}>
        <View >
          <Searchbar onChangeText={setSearchQuery}
            value={searchQuery} placeholder='Search Customers'
            style={{ width: "90%", alignSelf: "center", borderRadius: 10 }}

          />
        </View>
        <ScrollView contentContainerStyle={{ gap: 10 }}>
          {filteredCustomers.length === 0 ? (
            <View style={styles.noResultsView}>
              <Text style={styles.noResultsText}>Customer not found 😔</Text>
            </View>
          ) : (
            filteredCustomers.map((item, index) => (

              <View style={{ padding: 10, backgroundColor: "#fff", borderRadius: 10, width: "80%", alignSelf: 'center' }} key={index}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ flexDirection: "row", gap: 10, padding: 5 }}>
              {/* <Text style={{ fontSize: 25, }}>Name :</Text> */}
                    <Text style={{ color: "#468EFB", fontSize: 25, fontWeight: "bold" }}>{item.customerName}</Text>
                  </View>

                  <View style={{ flexDirection: "row", gap: 10 }}>
                    <Feather name="edit-2" size={20} color="black" onPress={() => showEditModal(item)} />
                    <AntDesign name="delete" size={20} color="red" onPress={() => showDeleteModal()} />
                  </View>
                </View>
                <View style={{ flexDirection: "row", gap: 10, justifyContent: "space-between", padding: 5 }}>
                  <Text>Area :</Text>
                  <Text>{item.Area}</Text>
                </View>
                <View style={{ flexDirection: "row", gap: 10, justifyContent: "space-between", padding: 5 }}>
                  <Text>Address :</Text>
                  <Text>{item.Address}</Text>
                </View>
                
              </View>

            )
            ))}
        </ScrollView>
        <Portal>
          <Modal
            visible={editVisible}
            onDismiss={hideEditModal}
            contentContainerStyle={containerStyle}
          >
            <View style={{ gap: 20 }}>
              <Text style={{ fontSize: 20 }}>Edit Customer</Text>
              <DividerBar />
              <TextInput placeholder={editCustomerName} label='Customer Name :' mode='outlined' style={styles.textinput} />
              <TextInput placeholder={editArea} mode="outlined" label="Area :" style={styles.textinput} />
              <TextInput placeholder={editAddress} label="Address :" mode='outlined' style={styles.textinput} />
              <ReusableButton
                label="Update Changes"
                onPress={() => console.log("🚀 Changes Saved!")}
                style={{ backgroundColor: "#468EFB" }}
                textColor={undefined}
              />
            </View>
          </Modal>
        </Portal>
        <Portal>
          <Modal
            visible={deleteVisible}
            onDismiss={hideDeleteModal}
            contentContainerStyle={containerStyle}
          >
            <View style={{ gap: 20 }}>
              <Text>Delete Customer ?</Text>
              <ReusableButton
                label="Delete"
                onPress={() => console.log("🚀 Customer deleted!")}
                style={{ backgroundColor: "red" }}
                textColor={undefined}
              />
            </View>
          </Modal>
        </Portal>
      </View>
    </Provider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"#bebebe",
    gap: 10
  },
  noResultsView: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,

  },
  noResultsText: {
    fontSize: 20,
  },
  textinput: {
    backgroundColor: "#fff",
  },
})
export default SearchCustomers