import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';


const ProductsData = [
  { packing: 'Sach',productName: 'Cosflor', remainingQuantity: 180 },
  { packing: 'Syp', productName: 'Inicos', remainingQuantity: 40 },
  { packing: 'Cap', productName: 'Refix', remainingQuantity: 15 },
  { packing: 'Tab', productName: 'Mativ', remainingQuantity: 20 },
  { packing: 'Syp', productName: 'Costio', remainingQuantity: 19 },
  { packing: 'Cap', productName: 'Regix', remainingQuantity: 2 },
  { packing: 'Tab', productName: 'Ivy', remainingQuantity: 2 },
  { packing: 'Cap', productName: 'Sunrise', remainingQuantity: 89 },
];


const Inventory = () => {
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
