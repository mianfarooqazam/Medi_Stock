import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import React, { useState ,useEffect} from 'react'
import { Divider, Modal, Portal, Provider, Searchbar, TextInput } from 'react-native-paper'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
import { AntDesign, Feather } from '@expo/vector-icons'
import ReusableButton from '../../components/Button/ReusableButton'
import DividerBar from '../../components/Divider/DividerBar'
import { CustomersData } from '../../DummyData/Data';
import { getDocs, collection, query, where, orderBy } from 'firebase/firestore';
import firebase from '../../../firebaseConfig';

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
  const [customers, setCustomers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("")
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(firebase.db, "Customers"),
          where("CustomerName", ">=", searchQuery),
          where("CustomerName", "<=", searchQuery + "\uf8ff"),
          orderBy("CustomerName")
        );
        const querySnapshot = await getDocs(q);
        const fetchedCustomers = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCustomers(fetchedCustomers);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchData();
  }, [searchQuery]);
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
          {customers.length === 0 ? (
            <View style={styles.noResultsView}>
              <Text style={styles.noResultsText}>Customer not found 😔</Text>
            </View>
          ) : (
            customers.map((customer, index) => (

              <View style={{ padding: 5, backgroundColor: "#fff", borderRadius: 10, width: "80%", alignSelf: 'center' }} key={index}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ flexDirection: "row",padding: 5 }}>
                    <Text style={{ color: "#468EFB", fontSize: 25, fontWeight: "500" }}>{customer.CustomerName}</Text>
                  </View>

                  <View style={{ flexDirection: "row", gap: 10 }}>
                    <Feather name="edit-2" size={20} color="black" onPress={() => showEditModal(customer)} />
                    <AntDesign name="delete" size={20} color="red" onPress={() => showDeleteModal()} />
                  </View>
                </View>
                <View style={{ flexDirection: "row", gap:5,  padding: 5 }}>
                  <Text  style={{color:"#bebebe"}}>Area :</Text>
                  <Text style={{color:"#bebebe"}}>{customer.Area}</Text>
                </View>
                <View style={{ flexDirection: "row", gap: 5, padding: 5 }}>
                  <Text style={{color:"#bebebe"}}>Address :</Text>
                  <Text style={{color:"#bebebe"}}>{customer.Address}</Text>
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
              <Text>Are you sure you want to Delete customername ?</Text>
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
    color: "#468EFB",
  },
  textinput: {
    backgroundColor: "#fff",
  },
})
export default SearchCustomers