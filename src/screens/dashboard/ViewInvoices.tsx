import { View, Text, Alert } from 'react-native'
import React from 'react'
import { Chip, Searchbar, TouchableRipple } from 'react-native-paper'
import ReusableChip from '../../components/ReusableChip'
import Search from '../../components/Search/Search'
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons'
import DividerBar from '../../components/Divider/DividerBar'

const ViewInvoices = () => {
  return (
    <View style={{ gap: 10, }}>
      <Search placeholder={"Search By Inovice Number"} value={undefined} />
      
      <View style={{}}>
      
       
        <View style={{ flexDirection:"row",gap:10,alignSelf:'center'}}>

          <TouchableRipple style={{ borderWidth: 1, width: "25%",borderRadius:20,borderColor:"#4683fb"}} onPress={()=>{}}  rippleColor='#4683fb'>
            <View style={{ flexDirection: 'column', alignItems: 'center' ,gap:2 }}>
              <Ionicons name="documents-outline" size={30} color="#4683fb" />
              <Text style={{ fontSize: 20,color:'#4683fb' }}>All</Text>
              <Text style={{ fontSize: 20 ,color:'#4683fb'}}>0</Text>
            </View>
          </TouchableRipple>

          <TouchableRipple style={{ borderWidth: 1, width: "25%",borderRadius:20,borderColor:"#9BCF53"}} onPress={()=>{}} rippleColor='#9BCF53'>
          <View style={{ flexDirection: 'column', alignItems: 'center' ,gap:2 }}>
            <Ionicons name="documents-outline" size={30} color="#9BCF53" />
              <Text style={{ fontSize: 20,color:"#9BCF53" }}>Paid</Text>
              <Text style={{ fontSize: 20 ,color:"#9BCF53"}}>0</Text>
            </View>
          </TouchableRipple>

          <TouchableRipple style={{ borderWidth: 1, width: "25%",borderRadius:20,borderColor:"#FF004D"}} onPress={()=>{}}  rippleColor='#FF004D'>
          <View style={{ flexDirection: 'column', alignItems: 'center' ,gap:2 }}>
              <Ionicons name="documents-outline" size={30} color="#FF004D" />
              <Text style={{ fontSize: 20,color:"#FF004D" }}>Unpaid</Text>
              <Text style={{ fontSize: 20 ,color:"#FF004D"}}>0</Text>
            </View>
          </TouchableRipple>

        </View>

      </View>
      <DividerBar />

    </View>
  )
}

export default ViewInvoices