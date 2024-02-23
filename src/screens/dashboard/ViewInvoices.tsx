import { View, Text, Alert, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Chip, Searchbar, TouchableRipple } from 'react-native-paper'
import ReusableChip from '../../components/ReusableChip'
import Search from '../../components/Search/Search'
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons'
import DividerBar from '../../components/Divider/DividerBar'

const ViewInvoices = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const handlePress = (item) => {
    setSelectedItem(item);
    
  }
  return (
    <View style={styles.container}>

      <View>
        <Search placeholder={"Search By Inovice Number"} value={undefined} />
      </View>

      <View style={styles.rippleContainer}>

        <TouchableRipple
          style={[
            styles.ripple,
            { borderColor: selectedItem === 'All' ? '#4683fb' : '#bebebe' },
            { backgroundColor: selectedItem === 'All' ? '#4683fb' : 'transparent' },
          ]}
          onPress={() => handlePress('All')}
          rippleColor='#4683fb'
        >
          <View style={styles.rippleView}>
            <Ionicons name="documents-outline" size={30} color={selectedItem === 'All' ? '#fff' : '#bebebe'} />
            <Text style={{ fontSize: 20, color: selectedItem === 'All' ? '#fff' : '#bebebe' }}>All</Text>
            <Text style={{ fontSize: 20, color: selectedItem === 'All' ? '#fff' : '#bebebe' }}>0</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple
          style={[
            styles.ripple,
            { borderColor: selectedItem === 'Paid' ? '#9bcf53' : '#bebebe' },
            { backgroundColor: selectedItem === 'Paid' ? '#9bcf53' : 'transparent' },
          ]}
          onPress={() => handlePress('Paid')}
          rippleColor='#9bcf53'
        >
          <View style={styles.rippleView}>
            <Ionicons name="documents-outline" size={30} color={selectedItem === 'Paid' ? '#fff' : '#bebebe'} />
            <Text style={{ fontSize: 20, color: selectedItem === 'Paid' ? '#fff' : '#bebebe' }}>Paid</Text>
            <Text style={{ fontSize: 20, color: selectedItem === 'Paid' ? '#fff' : '#bebebe' }}>0</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple
          style={[
            styles.ripple,
            { borderColor: selectedItem === 'Unpaid' ? '#ff004d' : '#bebebe' },
            { backgroundColor: selectedItem === 'Unpaid' ? '#ff004d' : 'transparent' },
          ]}
          onPress={() => handlePress('Unpaid')}
          rippleColor='#ff004d'
        >
          <View style={styles.rippleView}>
            <Ionicons name="documents-outline" size={30} color={selectedItem === 'Unpaid' ? '#fff' : '#bebebe'} />
            <Text style={{ fontSize: 20, color: selectedItem === 'Unpaid' ? '#fff' : '#bebebe' }}>Unpaid</Text>
            <Text style={{ fontSize: 20, color: selectedItem === 'Unpaid' ? '#fff' : '#bebebe' }}>0</Text>
          </View>
        </TouchableRipple>

      </View>


      <DividerBar />

      <View style={{ alignItems: 'center' }}>
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