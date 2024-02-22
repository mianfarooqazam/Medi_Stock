import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { HelperText, Searchbar } from 'react-native-paper';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import Toast from 'react-native-toast-message';
import { ProductsData } from '../../DummyData/Data';

const Inventory = ({navigation}) => {
  useEffect(() => {
    const lowStockProducts = ProductsData.filter(item => item.remainingQuantity <  20);
    if (lowStockProducts.length >  0) {
      const alertMessage = lowStockProducts.map(item => `${item.productName}: ${item.remainingQuantity}`).join('\n');
      Alert.alert(
        'Low Stock Alert',
        alertMessage,
        [
          { text: 'OK'},
        ],
        { cancelable: false }
      );
    }
  }, []);
useEffect(() => {
  const showToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Time to Re-Stock!',
      text2: 'Some of your products have reached minimun limit 👋'
    });
  }
  showToast(); 
}, [])
  const [searchQuery, setSearchQuery] = useState('')
  const filteredProducts = ProductsData.filter(item => item.productName.toLowerCase().includes(searchQuery.toLowerCase()))

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
          You can set minimum Products threshold in <Text onPress={()=>navigation.navigate("SettingScreen")} style={{color:"#4683fb"}}>Settings</Text>
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

            {filteredProducts.length === 0 ? (
              <View style={styles.noResultsView}>
                <Text style={styles.noResultsText}>No such products 😔</Text>
              </View>
            ) : (
              filteredProducts.map((item, index) => (
                <View style={styles.tableRow} key={index}>
                  <Text style={styles.tableData}>{index + 1}</Text>
                  <Text style={styles.tableData}>{item.packing}</Text>
                  <Text style={styles.tableData}>{item.productName}</Text>
                  <Text style={[styles.tableData, item.remainingQuantity < 20 ? styles.redText : null]}>{item.remainingQuantity}</Text>
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
