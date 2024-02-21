import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { Divider, Modal, Portal, Provider, Searchbar, TextInput } from 'react-native-paper'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
import { AntDesign, Feather } from '@expo/vector-icons'
import ReusableButton from '../../components/Button/ReusableButton'
import DividerBar from '../../components/Divider/DividerBar'


const ProductsData = [
  { productName: 'Costio-D', packing: "Tab", Tp: 410, Mrp: 450, batchNumber: "BF123" },
  { productName: 'Mativ', packing: "Cap", Tp: 40, Mrp: 60, batchNumber: "AB423" },
  { productName: 'Cosflor', packing: "Tab", Tp: 530, Mrp: 600, batchNumber: "KL234" },
  { productName: 'Inicos', packing: "Syp", Tp: 120, Mrp: 150, batchNumber: "IO595" },
  { productName: 'Malgro', packing: "Cap", Tp: 20, Mrp: 60, batchNumber: "F12HN23" },
  { productName: 'Caycal', packing: "Tab", Tp: 193, Mrp: 250, batchNumber: "RU433" },
  { productName: 'Sunrise', packing: "Syp", Tp: 234, Mrp: 300, batchNumber: "90WER" },
  { productName: 'Refix', packing: "Tab", Tp: 43, Mrp: 70, batchNumber: "23FWE" },
  { productName: 'Regix', packing: "Syp", Tp: 50, Mrp: 100, batchNumber: "FS323" },
  { productName: 'Loratadine', packing: "Tab", Tp: 410, Mrp: 450, batchNumber: "BF123" },
  { productName: 'Ibuprofen', packing: "Cap", Tp: 40, Mrp: 60, batchNumber: "AB423" },
  { productName: 'Omeprazole', packing: "Tab", Tp: 530, Mrp: 600, batchNumber: "KL234" },
  { productName: 'Paracetamol', packing: "Syp", Tp: 120, Mrp: 150, batchNumber: "IO595" },
  { productName: 'Amoxicillin', packing: "Cap", Tp: 20, Mrp: 60, batchNumber: "F12HN23" },
  { productName: 'Aspirin', packing: "Tab", Tp: 193, Mrp: 250, batchNumber: "RU433" },
  { productName: 'Simvastatin', packing: "Syp", Tp: 234, Mrp: 300, batchNumber: "90WER" },
  { productName: 'Metformin', packing: "Tab", Tp: 43, Mrp: 70, batchNumber: "23FWE" },
  { productName: 'Hydrochlorothiazide', packing: "Syp", Tp: 50, Mrp: 100, batchNumber: "FS323" },
  { productName: 'Atorvastatin-D', packing: "Tab", Tp: 410, Mrp: 450, batchNumber: "BF123" },
  { productName: 'Gabapentin', packing: "Cap", Tp: 40, Mrp: 60, batchNumber: "AB423" },
  { productName: 'Warfarin', packing: "Tab", Tp: 530, Mrp: 600, batchNumber: "KL234" },
  { productName: 'Citalopram', packing: "Syp", Tp: 120, Mrp: 150, batchNumber: "IO595" },
  { productName: 'Metoprolol', packing: "Cap", Tp: 20, Mrp: 60, batchNumber: "F12HN23" },
  { productName: 'Amlodipine', packing: "Tab", Tp: 193, Mrp: 250, batchNumber: "RU433" },
  { productName: 'Diazepam', packing: "Syp", Tp: 234, Mrp: 300, batchNumber: "90WER" },
  { productName: 'Ranitidine', packing: "Tab", Tp: 43, Mrp: 70, batchNumber: "23FWE" },
  { productName: 'Clopidogrel', packing: "Syp", Tp: 50, Mrp: 100, batchNumber: "FS323" },
  { productName: 'Levothyroxine', packing: "Tab", Tp: 410, Mrp: 450, batchNumber: "BF123" },
  { productName: 'Montelukast', packing: "Cap", Tp: 40, Mrp: 60, batchNumber: "AB423" },
  { productName: 'Fluoxetine', packing: "Tab", Tp: 530, Mrp: 600, batchNumber: "KL234" },
  { productName: 'Sildenafil', packing: "Syp", Tp: 120, Mrp: 150, batchNumber: "IO595" },
  { productName: 'Pregabalin', packing: "Cap", Tp: 20, Mrp: 60, batchNumber: "F12HN23" },
  { productName: 'Tadalafil', packing: "Tab", Tp: 193, Mrp: 250, batchNumber: "RU433" },
  { productName: 'Methotrexate', packing: "Syp", Tp: 234, Mrp: 300, batchNumber: "90WER" },
  { productName: 'Refix', packing: "Cap", Tp: 43, Mrp: 70, batchNumber: "23FWE" },
  { productName: 'Regix', packing: "Tab", Tp: 50, Mrp: 100, batchNumber: "FS323" },
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

const SearchProducts = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const filteredProducts = ProductsData.filter(item => item.productName.toLowerCase().includes(searchQuery.toLowerCase()))

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
    setEditPacking(product.packing);
    setEditProductName(product.productName);
    setEditBatchNumber(product.batchNumber);
    setEditMrp(product.Mrp.toString());
    setEditTp(product.Tp.toString());
    seteditVisible(true);
  };
  const hideEditModal = () => seteditVisible(false);
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
      {filteredProducts.length === 0 ? (
        <View style={styles.noResultsView}>
          <Text style={styles.noResultsText}>No such products 😔</Text>
        </View>
      ) : (
        filteredProducts.map((item, index) => (
        
          <View style={{ padding: 10, backgroundColor: "#fff",  borderRadius: 10, width: "80%", alignSelf: 'center' }} key={index}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ flexDirection: "row", gap: 10, padding: 5 }}>
              <Text style={{ color: "#468EFB", fontSize: 25, fontWeight: "bold" }}>{item.packing}</Text>
              <Text style={{ color: "#468EFB", fontSize: 25, fontWeight: "bold" }}>{item.productName}</Text>
            </View>

            <View style={{ flexDirection: "row", gap: 10 }}>
            <Feather name="edit-2" size={20} color="black" onPress={() => showEditModal(item)} />
              <AntDesign name="delete" size={20} color="red" onPress={()=>showDeleteModal()} />
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 10, justifyContent: "space-between", padding: 5 }}>
            <Text>T.P</Text>
            <Text>{item.Tp}</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, justifyContent: "space-between", padding: 5 }}>
            <Text>M.R.P</Text>
            <Text>{item.Mrp}</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, justifyContent: "space-between", padding: 5 }}>
            <Text>Batch Number: </Text>
            <Text>{item.batchNumber}</Text>
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