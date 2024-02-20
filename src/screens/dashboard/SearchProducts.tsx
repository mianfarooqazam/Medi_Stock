import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
import { AntDesign, Feather } from '@expo/vector-icons'


const ProductsData = [
  { productName: 'Costio-D', packing: "Tab", Tp: 100, Mrp: 100, batchNumber: "BF123" },
  { productName: 'Mativ', packing: "Cap", Tp: 100, Mrp: 100, batchNumber: "BF123" },
  { productName: 'Cosflor', packing: "Tab", Tp: 100, Mrp: 100, batchNumber: "BF123" },
  { productName: 'Inicos', packing: "Syp", Tp: 100, Mrp: 100, batchNumber: "BF123" },
  { productName: 'Malgro', packing: "Cap", Tp: 100, Mrp: 100, batchNumber: "BF123" },
  { productName: 'Caycal', packing: "Tab", Tp: 100, Mrp: 100, batchNumber: "BF123" },
  { productName: 'Sunrise', packing: "Syp", Tp: 100, Mrp: 100, batchNumber: "BF123" },
  { productName: 'Refix', packing: "Tab", Tp: 100, Mrp: 100, batchNumber: "BF123" },
  { productName: 'Regix', packing: "Syp", Tp: 100, Mrp: 100, batchNumber: "BF123" },
]


const SearchProducts = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const filteredProducts = ProductsData.filter(item => item.productName.toLowerCase().includes(searchQuery.toLowerCase()))

  const showDeleteModal = () => {}
  const hideDeleteModal = () => {}
  
  const showEditModal = () => {}
  const hideEditModal = () => {}
  return (
    <View style={styles.container}>
      <View>
        <Searchbar onChangeText={setSearchQuery}
          value={searchQuery} placeholder='Search Products'
          style={{ width: "90%", alignSelf: "center", borderRadius: 10 }}
        />
      </View>

      {filteredProducts.length === 0 ? (
        <View style={styles.noResultsView}>
          <Text style={styles.noResultsText}>No such products 😔</Text>
        </View>
      ) : (
        filteredProducts.map((item, index) => (
          <View style={{ flexDirection: "row", backgroundColor: "lime", gap: 10 }} key={index}>
            <Text>{item.packing}</Text>
            <Text>{item.productName}</Text>
            <Text>{item.batchNumber}</Text>
            <Text>{item.Tp}</Text>
            <Text>{item.Mrp}</Text>
          </View>
        )
        ))}
      <ScrollView contentContainerStyle={{ gap: 10 }}>
        <View style={{ padding: 10, backgroundColor: "#fff", borderWidth: 1, borderRadius: 10, width: "80%", alignSelf: 'center' }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ flexDirection: "row", gap: 10, padding: 5 }}>
              <Text style={{ color: "#468EFB", fontSize: 25, fontWeight: "bold" }}>Syp</Text>
              <Text style={{ color: "#468EFB", fontSize: 25, fontWeight: "bold" }}>Refix</Text>
            </View>

            <View style={{ flexDirection: "row", gap: 10 }}>
              <Feather name="edit-2" size={20} color="black" />
              <AntDesign name="delete" size={20} color="red" />
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 10, justifyContent: "space-between", padding: 5 }}>
            <Text>T.P</Text>
            <Text>100</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, justifyContent: "space-between", padding: 5 }}>
            <Text>M.R.P</Text>
            <Text>100</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, justifyContent: "space-between", padding: 5 }}>
            <Text>Batch Number: </Text>
            <Text>BF123</Text>
          </View>
        </View>

        <View style={{ padding: 10, backgroundColor: "#fff", borderWidth: 1, borderRadius: 10, width: "80%", alignSelf: 'center' }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ flexDirection: "row", gap: 10, padding: 5 }}>
              <Text style={{ color: "#468EFB", fontSize: 25, fontWeight: "bold" }}>Cap</Text>
              <Text style={{ color: "#468EFB", fontSize: 25, fontWeight: "bold" }}>Caycal-D</Text>
            </View>

            <View style={{ flexDirection: "row", gap: 10 }}>
              <Feather name="edit-2" size={20} color="black" />
              <AntDesign name="delete" size={20} color="red" />
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 10, justifyContent: "space-between", padding: 5 }}>
            <Text>T.P</Text>
            <Text>100</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, justifyContent: "space-between", padding: 5 }}>
            <Text>M.R.P</Text>
            <Text>100</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, justifyContent: "space-between", padding: 5 }}>
            <Text>Batch Number: </Text>
            <Text>BF123</Text>
          </View>
        </View>

        <View style={{ padding: 10, backgroundColor: "#fff", borderWidth: 1, borderRadius: 10, width: "80%", alignSelf: 'center' }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ flexDirection: "row", gap: 10, padding: 5 }}>
              <Text style={{ color: "#468EFB", fontSize: 25, fontWeight: "bold" }}>Tab</Text>
              <Text style={{ color: "#468EFB", fontSize: 25, fontWeight: "bold" }}>Cosflor</Text>
            </View>

            <View style={{ flexDirection: "row", gap: 10 }}>
              <Feather name="edit-2" size={20} color="black" />
              <AntDesign name="delete" size={20} color="red" />
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 10, justifyContent: "space-between", padding: 5 }}>
            <Text>T.P</Text>
            <Text>100</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, justifyContent: "space-between", padding: 5 }}>
            <Text>M.R.P</Text>
            <Text>100</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, justifyContent: "space-between", padding: 5 }}>
            <Text>Batch Number: </Text>
            <Text>BF123</Text>
          </View>
        </View>
        <View style={{ padding: 10, backgroundColor: "#fff", borderWidth: 1, borderRadius: 10, width: "80%", alignSelf: 'center' }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ flexDirection: "row", gap: 10, padding: 5 }}>
              <Text style={{ color: "#468EFB", fontSize: 25, fontWeight: "bold" }}>Cap</Text>
              <Text style={{ color: "#468EFB", fontSize: 25, fontWeight: "bold" }}>Mativ</Text>
            </View>

            <View style={{ flexDirection: "row", gap: 10 }}>
              <Feather name="edit-2" size={20} color="black" />
              <AntDesign name="delete" size={20} color="red" />
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 10, justifyContent: "space-between", padding: 5 }}>
            <Text>T.P</Text>
            <Text>100</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, justifyContent: "space-between", padding: 5 }}>
            <Text>M.R.P</Text>
            <Text>100</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, justifyContent: "space-between", padding: 5 }}>
            <Text>Batch Number: </Text>
            <Text>BF123</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"#fff",
    gap: 10
  },
  noResultsView: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,

  },
  noResultsText: {
    fontSize: 20,
  }
})
export default SearchProducts