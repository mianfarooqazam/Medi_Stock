import { View, Text, Alert, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Chip, Searchbar, TouchableRipple } from 'react-native-paper'
import ReusableChip from '../../components/ReusableChip'
import Search from '../../components/Search/Search'
import { AntDesign, Entypo, Feather, Ionicons } from '@expo/vector-icons'
import DividerBar from '../../components/Divider/DividerBar'
import moment from 'moment'
import { InvoicesData } from '../../DummyData/Data'
const ViewInvoices = () => {
  const [selectedItem,setSelectedItem] =useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const filteredInvoices = InvoicesData.filter(invoice => {
    return selectedStatus === 'All' || invoice.status === selectedStatus;
  });
  const currentDate = moment().format("DD-MM-YY");
  return (
    <View style={styles.container}>

      <View>
        <Search placeholder={"Search By Inovice Number"} value={undefined} />
      </View>

      <View style={styles.rippleContainer}>

        <TouchableRipple
          style={[
            styles.ripple,
            { borderColor: selectedStatus === 'All' ? '#4683fb' : '#bebebe' },
            { backgroundColor: selectedStatus === 'All' ? '#4683fb' : 'transparent' },
          ]}
          onPress={() => setSelectedStatus('All')} 
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
            { borderColor: selectedStatus === 'Paid' ? '#9bcf53' : '#bebebe' },
            { backgroundColor: selectedStatus === 'Paid' ? '#9bcf53' : 'transparent' },
          ]}
          onPress={() => setSelectedStatus('Paid')} 
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
            { borderColor: selectedStatus === 'Unpaid' ? '#FF0000' : '#bebebe' },
            { backgroundColor: selectedStatus === 'Unpaid' ? '#FF0000' : 'transparent' },
          ]}
          onPress={() => setSelectedStatus('Unpaid')}
          
          rippleColor='#FF0000'
        >
          <View style={styles.rippleView}>
            <Ionicons name="documents-outline" size={30} color={selectedItem === 'Unpaid' ? '#fff' : '#bebebe'} />
            <Text style={{ fontSize: 20, color: selectedItem === 'Unpaid' ? '#fff' : '#bebebe' }}>Unpaid</Text>
            <Text style={{ fontSize: 20, color: selectedItem === 'Unpaid' ? '#fff' : '#bebebe' }}>0</Text>
          </View>
        </TouchableRipple>

      </View>


      <DividerBar />

      

      <ScrollView contentContainerStyle={{gap:15}}>
      {selectedStatus === '' ? (
        <View style={{alignItems:"center"}}>
          <Text style={{color:"#4683fb",fontSize:20}}>No data found 😔</Text>
        </View>
      ) : (
      filteredInvoices.map((invoice, index) => (
      <View style={{ padding: 5, backgroundColor: "#fff", borderRadius: 10, width: "90%", alignSelf: 'center', gap: 5 }} key={index}  >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: 'baseline', gap: 10 }}>
            <Text style={{ color: "#468EFB", fontSize: 20, fontWeight: "bold" }}>{invoice.customerName}</Text>
            <Text style={{ color: "#bebebe", fontWeight: "bold", fontSize: 12 }}>{invoice.invoiceNumber}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: 'center' }}>
            <Text style={{ fontSize: 12 }}>{currentDate}</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: 'baseline', gap: 10 }}>
            <Text style={{ }}>{invoice.Area}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: 'center' }}>
            <Text style={{ color: "#9bcf53",fontWeight:'bold' }}>{invoice.status}</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: 'center', gap: 10 }}>
            <Text style={{ }}>{invoice.balance}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: 'center',gap:10 }}>
          <Feather name="eye" size={24} color="#000" />
          <Feather name="edit-2" size={20} color="#000" onPress={() => { }} />
          <AntDesign name="delete" size={20} color="#FF0000" onPress={() => { }} />
          </View>
        </View>

      </View>
              ))
              )}
        
      </ScrollView>

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