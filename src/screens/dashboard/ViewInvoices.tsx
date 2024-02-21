import { View, Text, Alert, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Chip, Searchbar, TouchableRipple } from 'react-native-paper'
import ReusableChip from '../../components/ReusableChip'
import Search from '../../components/Search/Search'
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons'
import DividerBar from '../../components/Divider/DividerBar'

const ViewInvoices = () => {
  return (
    <View style={styles.container}>

      <View>
        <Search placeholder={"Search By Inovice Number"} value={undefined} />
      </View>

      <View style={styles.rippleContainer}>

        <TouchableRipple style={[styles.ripple, { borderColor: "#4683fb" }]} onPress={() => console.log("All")}  rippleColor='#4683fb'>
          <View style={styles.rippleView}>
            <Ionicons name="documents-outline" size={30} color="#4683fb" />
            <Text style={{ fontSize: 20, color: '#4683fb' }}>All</Text>
            <Text style={{ fontSize: 20, color: '#4683fb' }}>0</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple style={[styles.ripple, { borderColor: '#9BCF53' }]} onPress={() => console.log("Paid")} rippleColor='#9BCF53'>
          <View style={styles.rippleView}>
            <Ionicons name="documents-outline" size={30} color="#9BCF53" />
            <Text style={{ fontSize: 20, color: "#9BCF53" }}>Paid</Text>
            <Text style={{ fontSize: 20, color: "#9BCF53" }}>0</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple style={[styles.ripple, { borderColor: "#FF004D" }]} onPress={() => console.log("Unpaid")}  rippleColor='#FF004D'>
          <View style={styles.rippleView}>
            <Ionicons name="documents-outline" size={30} color="#FF004D" />
            <Text style={{ fontSize: 20, color: "#FF004D" }}>Unpaid</Text>
            <Text style={{ fontSize: 20, color: "#FF004D" }}>0</Text>
          </View>
        </TouchableRipple>

      </View>


      <DividerBar />

<View style={{alignItems:'center'}}>
  <Text>No Data Returned</Text>
</View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    gap: 10
  },
  rippleContainer: {
    flexDirection: "row",
    gap: 10,
    alignSelf: 'center'
  },
  ripple: {
    borderWidth: 1,
    width: "25%",
    borderRadius: 20,
  },
  rippleView: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2
  }
})
export default ViewInvoices