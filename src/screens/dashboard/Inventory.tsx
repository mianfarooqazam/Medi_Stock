import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { HelperText, Searchbar } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { getDocs, collection, query, where, orderBy } from 'firebase/firestore';
import firebase from '../../../firebaseConfig';

const Inventory = ({ navigation }) => {
   
  const [products, setProducts] = useState([]);
  const [stocks, setStocks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productquery = query(
          collection(firebase.db, "Products"),
          where("ProductName", ">=", searchQuery),
          where("ProductName", "<=", searchQuery + "\uf8ff"),
          orderBy("ProductName")
        );
        const querySnapshot = await getDocs(productquery);
        const fetchedProducts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };
    const fetchStocks = async () => {
      try {
        const stockquery = query(
          collection(firebase.db, "StockInOut"),
          orderBy("ProductName")
        );
        const querySnapshot = await getDocs(stockquery);
        const fetchedStocks = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setStocks(fetchedStocks);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchProducts();
    fetchStocks();
  }, [searchQuery]);

  useEffect(() => {
    const updatedProducts = products.map(product => {
      const stock = stocks.find(stock => stock.ProductName === product.ProductName);
      const remainingQuantity = stock ? stock.StockIn - stock.StockOut :  0;
      return { ...product, remainingQuantity };
    });

    setProducts(updatedProducts);


    const lowStockProducts = updatedProducts.filter(item => item.remainingQuantity <  20);
    if (lowStockProducts.length >  0) {
      const alertMessage = lowStockProducts.map(item => `${item.ProductName}: ${item.remainingQuantity}`).join('\n');
      Alert.alert(
        'Low Stock Alert',
        alertMessage,
        [
          { text: 'OK' },
        ],
        { cancelable: false }
      );
    }
    const showToast = () => {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Time to Re-Stock!',
        text2: 'Some of your products have reached minimun limit 👋'
      });
    }
    showToast(); 
  }, [stocks]);
  
  return (
    <View style={styles.container}>
      <View>
        <Searchbar
          style={{ width: "90%", alignSelf: "center", borderRadius: 10 }}
          placeholder="Search Product"
          onChangeText={setSearchQuery}
          value={searchQuery}

        />
      </View>
      <View style={{ alignItems: "center" }}>
        <HelperText type='info'  >
          You can set minimum Products threshold in <Text onPress={() => navigation.navigate("SettingScreen")} style={{ color: "#4683fb" }}>Settings</Text>
        </HelperText>
      </View>
      <View>

        <View>
          <View style={styles.table}>
            <Text style={styles.tableHeader}>S/N</Text>
            <Text style={styles.tableHeader}>Packing</Text>
            <Text style={styles.tableHeader}>Product Name</Text>
            <Text style={styles.tableHeader}>Remaining Quantity</Text>
          </View>

          <ScrollView>
            {products.length === 0 ? (
              <View style={styles.noResultsView}>
                <Text style={styles.noResultsText}>Products not found 😔</Text>
              </View>
            ) : (
              products.map((product, index) => (
                <View style={styles.tableRow} key={index}>
                  <Text style={styles.tableData}>{index + 1}</Text>
                  <Text style={styles.tableData}>{product.Packing}</Text>
                  <Text style={styles.tableData}>{product.ProductName}</Text>
                  {/* <Text style={[styles.tableData, product.remainingQuantity < 20 ? styles.redText : null]}>{item.remainingQuantity}</Text> */}
                  <Text style={[styles.tableData, product.remainingQuantity < 20 ? styles.redText : styles.blueText]}>{product.remainingQuantity}</Text>
                </View>
              )
              ))}



          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 10
  },
  table: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#4683fb',
    alignItems: 'center',
  },
  tableHeader: {
    flex: 1,
    padding: 10,
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 5,
  },
  tableData: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
  redText: {
    color: 'red',
  },
  blueText: {
    color: '#4683fb',
  },
  noResultsView: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,

  },
  noResultsText: {
    fontSize: 20,
  }
});


export default Inventory;
