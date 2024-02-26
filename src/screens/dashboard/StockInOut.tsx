import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getDocs, collection, query, where, orderBy } from 'firebase/firestore';
import firebase from '../../../firebaseConfig';
import { Searchbar } from 'react-native-paper';

const StockInOut = () => {
  const [stocks, setStocks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(firebase.db, "StockInOut"),
          where("ProductName", ">=", searchQuery),
          where("ProductName", "<=", searchQuery + "\uf8ff"),
          // orderBy("ProductName")
        );
        const querySnapshot = await getDocs(q);
        const fetchedStocks = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setStocks(fetchedStocks);
      } catch (error) {
        console.error("Error fetching stocks: ", error);
      }
    };

    fetchData();
  }, [searchQuery]);
  return (
    <View style={styles.container}>
      <Searchbar onChangeText={setSearchQuery}
        value={searchQuery} placeholder='Search Products'
        style={{ width: "90%", alignSelf: "center", borderRadius: 10 }}

      />

      <View>
        <View style={styles.table}>
          <Text style={styles.tableHeader}>S/N</Text>
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
        <Text style={styles.tableData}>{index +1 }</Text>
        <Text style={styles.tableData}>{stocks.ProductName}</Text>   
        <Text style={[styles.tableData, {color:"#008000"}]}>{stocks.StockIn} </Text>
        <Text style={[styles.tableData, {color:"#FF0000"}]}>{stocks.StockOut} </Text>
      </View>

 
            )
            ))}

        </ScrollView>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginVertical:10,
    gap:10
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
    color:"#468EFB"
  },
})

export default StockInOut
