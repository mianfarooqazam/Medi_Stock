import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Divider, Modal, Portal, Provider, Searchbar, TextInput } from 'react-native-paper'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
import { AntDesign, Feather } from '@expo/vector-icons'
import ReusableButton from '../../components/Button/ReusableButton'
import DividerBar from '../../components/Divider/DividerBar'

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

const SearchProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("")
  
  // const filteredProducts = ProductsData.filter(item => item.productName.toLowerCase().includes(searchQuery.toLowerCase()))

  const [deleteVisible, setdeleteVisible] = useState(false);
  const showDeleteModal = () => setdeleteVisible(true);
  const hideDeleteModal = () => setdeleteVisible(false);

  const [editProduct, setEditProduct] = useState<Item | null>(null);
const [editPacking, setEditPacking] = useState("");
const [editProductName, setEditProductName] = useState("");
const [editBatchNumber, setEditBatchNumber] = useState("");
const [editMrp, setEditMrp] = useState("");
const [editTp, setEditTp] = useState("");

  const [editVisible, seteditVisible] = useState(false);
  const showEditModal = (product: Item) => {
    setEditProduct(product);
    setEditPacking(product.Packing);
    setEditProductName(product.ProductName);
    setEditBatchNumber(product.BatchNo);
    setEditMrp(product.MRP.toString());
    setEditTp(product.TP.toString());
    seteditVisible(true);
  };
  const hideEditModal = () => seteditVisible(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(firebase.db, "Products"),
          where("ProductName", ">=", searchQuery),
          where("ProductName", "<=", searchQuery + "\uf8ff"),
          orderBy("ProductName")
        );
        const querySnapshot = await getDocs(q);
        const fetchedProducts= querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(fetchedProducts);
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
          value={searchQuery} placeholder='Search Products'
          style={{ width: "90%", alignSelf: "center", borderRadius: 10}}
          
        />
      </View>
      <ScrollView contentContainerStyle={{ gap: 10 }}>
      {products.length === 0 ? (
            <View style={styles.noResultsView}>
              <Text style={styles.noResultsText}>Products not found 😔</Text>
            </View>
          ) : (
            products.map((product, index) => (
        
          <View style={{ padding: 5, backgroundColor: "#fff",  borderRadius: 10, width: "80%", alignSelf: 'center' }} key={index}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ flexDirection: "row", gap: 10, padding: 5 }}>
              <Text style={{ color: "#468EFB", fontSize: 25, fontWeight: "bold" }}>{product.Packing}</Text>
              <Text style={{ color: "#468EFB", fontSize: 25, fontWeight: "bold" }}>{product.ProductName}</Text>
            </View>

            <View style={{ flexDirection: "row", gap: 10 }}>
            <Feather name="edit-2" size={20} color="black" onPress={() => showEditModal(product)} />
                    <AntDesign name="delete" size={20} color="red" onPress={() => showDeleteModal()} />
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 5,  padding: 5 }}>
            <Text style={{color:"#bebebe"}}>T.P :</Text>
            <Text style={{color:"#bebebe"}}>{product.TP}</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 5,padding: 5 }}>
            <Text style={{color:"#bebebe"}}>M.R.P :</Text>
            <Text style={{color:"#bebebe"}}>{product.MRP}</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 5,  padding: 5 }}>
            <Text style={{color:"#bebebe"}}>Batch Number :</Text>
            <Text style={{color:"#bebebe"}}>{product.BatchNo}</Text>
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
                <Text style={{fontSize:20}}>Edit Product</Text>
                <DividerBar />
                <TextInput placeholder={`Previous Packing = ${editPacking}`} label='Packing :'  mode='outlined'  style={styles.textinput} />
                <TextInput placeholder={`Previous Name = ${editProductName}`} mode="outlined" label="Product Name :"  style={styles.textinput}/>
                <TextInput placeholder={`Previous B.No = ${editBatchNumber}`} label="Batch Number :" mode='outlined'  style={styles.textinput}/>
                <TextInput placeholder={`Previous M.R.P = ${editMrp}`} label='M.R.P :' mode='outlined' style={styles.textinput}/>
                <TextInput placeholder={`Previous T.P = ${editTp}`}  label='T.P :' mode='outlined'  style={styles.textinput} />
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
                <Text>Delete Product ?</Text>
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
export default SearchProducts