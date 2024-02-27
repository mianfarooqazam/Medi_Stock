import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getDocs, collection, query, where, doc, updateDoc } from 'firebase/firestore';
import firebase from '../../../firebaseConfig';
import { Modal, Portal, Searchbar, } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import ReusableButton from '../../components/Button/ReusableButton';
import DividerBar from '../../components/Divider/DividerBar';
import { Controller, useForm } from 'react-hook-form';
import { Dropdown } from 'react-native-element-dropdown';
import ResuableInput from '../../components/TextInput/ReusableInput';

const containerStyle = {
  backgroundColor: "white",
  padding: 20,
  width: "80%",
  alignSelf: "center",
  justifyContent: "center",
  borderRadius: 10,
};

const StockInOut = () => {
  const [newStock, setNewStock] = useState(false);
  const showNewStockModal = () => setNewStock(true);
  const hideNewStockModal = () => setNewStock(false);
  const [stocks, setStocks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("")
  const { control, handleSubmit } = useForm();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(firebase.db, "StockInOut"),
          where("ProductName", ">=", searchQuery),
          where("ProductName", "<=", searchQuery + "\uf8ff"),
        );
        const querySnapshot = await getDocs(q);
        const fetchedStocks = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setStocks(fetchedStocks);
        console.log(fetchedStocks)
      } catch (error) {
        console.error("Error fetching stocks: ", error);
      }
    };

    fetchData();
  }, [searchQuery]);
  const addMessage = () => {
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Success',
      text2: 'Customer Added',
    });
  }

  return (
    <View style={styles.container}>
      <Searchbar onChangeText={setSearchQuery}
        value={searchQuery} placeholder='Search Products'
        style={{ width: "90%", alignSelf: "center", borderRadius: 10 }}

      />

      <View>
        <View style={styles.table}>
          <Text style={styles.tableHeader}>Product</Text>
          <Text style={styles.tableHeader}>Stock-In</Text>
          <Text style={styles.tableHeader}>Stock-Out</Text>
        </View>

        {/* t-row */}
        <ScrollView contentContainerStyle={{ gap: 10 }}>
          {stocks.length === 0 ? (
            <View style={styles.noResultsView}>
              <Text style={styles.noResultsText}>Stocks not found 😔</Text>
            </View>
          ) : (
            stocks.map((stocks, index) => (

              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableData}>{stocks.ProductName}</Text>
                <Text style={[styles.tableData, { color: "#008000" }]}>{stocks.StockIn} </Text>
                <Text style={[styles.tableData, { color: "#FF0000" }]}>{stocks.StockOut} </Text>
              </View>
            )
            ))}

        </ScrollView>

      </View>
      <View style={styles.iconContainer} >
        <Feather name="plus" size={40} color="#fff" onPress={() => showNewStockModal()} />
      </View>
      <Portal>
        <Modal
          visible={newStock}
          onDismiss={hideNewStockModal}
          contentContainerStyle={containerStyle}
        >
          <View style={{ gap: 10 }}>
            <Text style={{ fontWeight: "bold" }}>Add Stock</Text>
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
                  data={stocks.map(stock => ({ label: stock.ProductName, value: stock.ProductName }))}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Select Product"
                  searchPlaceholder="Search Product"
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange} />
              )}
              name="stock"
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <ResuableInput
                  mode='outlined'
                  label="Stock-In"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  style={styles.textInput}
                  activeOutlineColor='#4683FB'
                  outlineColor='#4683FB'
                  keyboardType='numeric'
                />
              )}
              name="stockin"
              rules={{ required: true }}
              defaultValue=""
            />


            <View style={{}}>
              <ReusableButton
                label="Update Stock"
                onPress={() => { }}
                style={styles.button}
                textColor="#fff"
              />
            </View>
          </View>
        </Modal>
      </Portal>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 10,
  }, heading: {
    fontSize: 20,
    // fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  table: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#4683fb',

    alignItems: 'center'

  },
  tableHeader: {
    flex: 1,
    padding: 10,
    color: '#ffff',
    //   fontWeight: 'bold',
    textAlign: 'center',
    //   overflow: "hidden",

  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    // padding:5,
    alignItems: 'center',
  },
  tableData: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
  subText: {
    fontSize: 10,
    color: "#bebebe",
  },
  noResultsView: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,

  },
  noResultsText: {
    fontSize: 20,
    color: "#468EFB"
  },
  iconContainer: {
    position: 'absolute',
    right: 50,
    bottom: 50,
    // borderWidth:1,
    backgroundColor: "#4683fb",
    borderRadius: 10,
    padding: 5
  },
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
  textInput: {
    backgroundColor: "#fff",
    width: "100%",
    alignSelf: 'center',
  },
  button: {
    backgroundColor: "#4683fb",
    width: "100%",
    alignSelf: "center",
  },
  datePicker: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
})

export default StockInOut
