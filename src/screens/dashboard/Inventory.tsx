import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';


const ProductsData = [
  { productName: 'Sach', packing: 'Cosflor', remainingQuantity: 180 },
  { productName: 'Syp', packing: 'Inicos', remainingQuantity: 40 },
  { productName: 'Cap', packing: 'Refix', remainingQuantity: 15 },
  { productName: 'Tab', packing: 'Mativ', remainingQuantity: 20 },
  { productName: 'Syp', packing: 'Costio', remainingQuantity: 19 },
  { productName: 'Cap', packing: 'Regix', remainingQuantity: 23 },
  { productName: 'Tab', packing: 'Ivy', remainingQuantity: 2 },
  { productName: 'Cap', packing: 'Sunrise', remainingQuantity: 89 },
];


const Inventory = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.table}>
          <Text style={styles.tableHeader}>S/N</Text>
          <Text style={styles.tableHeader}>Product Name</Text>
          <Text style={styles.tableHeader}>Packing</Text>
          <Text style={styles.tableHeader}>Remaining Quantity</Text>
        </View>

        <ScrollView>
        
          


              {ProductsData.map((item,index)=> (
                  <View style={styles.tableRow}>
                    <Text style={styles.tableData}>{index+1}</Text>
                    <Text style={styles.tableData}>{item.productName}</Text>
                    <Text style={styles.tableData}>{item.packing}</Text>
                    <Text style={[styles.tableData, item.remainingQuantity < 20 ? styles.redText: null]}>{item.remainingQuantity}</Text>
                  </View>

              ))}



        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
});


export default Inventory;
