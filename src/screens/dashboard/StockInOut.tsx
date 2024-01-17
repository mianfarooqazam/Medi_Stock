import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StockInOut = () => {
  return (
    <View style={styles.container}>
      
       <View>
      <View style={styles.table}>
        <Text style={styles.tableHeader}>S/N</Text>
        <Text style={styles.tableHeader}>Date</Text>
        <Text style={styles.tableHeader}>Packing</Text>
        <Text style={styles.tableHeader}>Product Name</Text>
        
        <Text style={styles.tableHeader}>⬆️</Text>
        <Text style={styles.tableHeader}>⬇️</Text>
      </View>

      {/* t-row */}
      <View style={styles.tableRow}>
        <Text style={styles.tableData}>1</Text>
        <Text style={styles.tableData}>1-1-2024</Text>
        <Text style={styles.tableData}>Sach</Text>
        <Text style={styles.tableData}>Cosflor</Text>
        
        <Text style={styles.tableData}>21</Text>
        <Text style={styles.tableData}>21</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.tableData}>2</Text>
        <Text style={styles.tableData}>1-1-2024</Text>
        <Text style={styles.tableData}>Syp</Text>
        <Text style={styles.tableData}>Inicos</Text>
        
        <Text style={styles.tableData}>20</Text>
        <Text style={styles.tableData}>21</Text>
      </View>

      <View style={styles.tableRow}>
        <Text style={styles.tableData}>3</Text>
        <Text style={styles.tableData}>1-1-2024</Text>
        <Text style={styles.tableData}>Cap</Text>
        <Text style={styles.tableData}>Refix</Text>
        
        <Text style={styles.tableData}>7</Text>
        <Text style={styles.tableData}>21</Text>
      </View>
     </View>
     
    </View>
  )
}
const styles = StyleSheet.create({
container: {
    flex:1,
    backgroundColor:"#fff",
    // marginVertical:10
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
    fontSize: 10,

},
tableRow: {
  flexDirection: 'row',
  borderBottomWidth: 1,
  borderBottomColor: '#ddd',
  padding:5
},
tableData: {
  flex: 1,
  padding: 10,
  textAlign: 'center',
},
})

export default StockInOut
