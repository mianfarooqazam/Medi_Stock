import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { HelperText, Portal, Provider, Searchbar, TouchableRipple } from 'react-native-paper'
import Search from '../../components/Search/Search'
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons'
import DividerBar from '../../components/Divider/DividerBar'
import moment from 'moment'
import { InvoicesData } from '../../DummyData/Data'
import { Modal } from 'react-native'
import ReusableButton from '../../components/Button/ReusableButton'

const containerStyle = {
  backgroundColor: "white",
  padding: 20,
  width: "80%",
  alignSelf: "center",
  justifyContent: "center",
  borderRadius: 10,
};
const ViewInvoices = () => {
 
  const [selectedStatus, setSelectedStatus] = useState('');
  const [searchQuery, setSearchQuery] = useState("")
  const filteredSearchInvoices = InvoicesData.filter(item => item.customerName.toLowerCase().includes(searchQuery.toLowerCase()))
  const filteredInvoices = filteredSearchInvoices.filter(invoice => {
    return selectedStatus === 'All' || invoice.status === selectedStatus;
  });
  const [deleteVisible, setDeleteVisible] = useState(false);
  const showDeleteModal = () => setPreviewVisible(true);
  const hideDeleteModal = () => setPreviewVisible(false);
  const [editVisible, setEditVisible] = useState(false);
  const showEditModal = () => setEditVisible(true);
  const hideEditModal = () => setEditVisible(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const showPreviewModal = () => setPreviewVisible(true);
  const hidePreviewModal = () => setPreviewVisible(false);
  const currentDate = moment().format("DD-MM-YY");
  return (


    <Provider>
      <View style={styles.container}>

        <View>
          <Searchbar onChangeText={setSearchQuery}
            value={searchQuery} placeholder='Search Invoices'
            style={{ width: "90%", alignSelf: "center", borderRadius: 10 }}

          />
        </View>

        <View style={styles.rippleContainer}>

          <TouchableRipple
            style={[
              styles.ripple,
              { borderColor: selectedStatus === 'All' ? '#4683fb' : 'transparent' },
              { backgroundColor: selectedStatus === 'All' ? '#4683fb' : 'transparent' },
            ]}
            onPress={() => setSelectedStatus('All')}
            rippleColor='#4683fb'
          >
            <View style={styles.rippleView}>
              <Ionicons name="documents-outline" size={30} color={selectedStatus === 'All' ? '#fff' : '#000'} />
              <Text style={{ fontSize: 20, color: selectedStatus === 'All' ? '#fff' : '#000' }}>All</Text>
              <Text style={{ fontSize: 20, color: selectedStatus === 'All' ? '#fff' : '#000' }}>0</Text>
            </View>
          </TouchableRipple>

          <TouchableRipple
            style={[
              styles.ripple,
              { borderColor: selectedStatus === 'Paid' ? '#9bcf53' : 'transparent' },
              { backgroundColor: selectedStatus === 'Paid' ? '#9bcf53' : 'transparent' },
            ]}
            onPress={() => setSelectedStatus('Paid')}
            rippleColor='#9bcf53'
          >
            <View style={styles.rippleView}>
              <Ionicons name="documents-outline" size={30} color={selectedStatus === 'Paid' ? '#fff' : '#000'} />
              <Text style={{ fontSize: 20, color: selectedStatus === 'Paid' ? '#fff' : '#000' }}>Paid</Text>
              <Text style={{ fontSize: 20, color: selectedStatus === 'Paid' ? '#fff' : '#000' }}>0</Text>
            </View>
          </TouchableRipple>

          <TouchableRipple
            style={[
              styles.ripple,
              { borderColor: selectedStatus === 'Unpaid' ? '#FF0000' : 'transparent' },
              { backgroundColor: selectedStatus === 'Unpaid' ? '#FF0000' : 'transparent' },
            ]}
            onPress={() => setSelectedStatus('Unpaid')}

            rippleColor='#FF0000'
          >
            <View style={styles.rippleView}>
              <Ionicons name="documents-outline" size={30} color={selectedStatus === 'Unpaid' ? '#fff' : '#000'} />
              <Text style={{ fontSize: 20, color: selectedStatus === 'Unpaid' ? '#fff' : '#000' }}>Unpaid</Text>
              <Text style={{ fontSize: 20, color: selectedStatus === 'Unpaid' ? '#fff' : '#000' }}>0</Text>
            </View>
          </TouchableRipple>

        </View>


        <DividerBar />



        <ScrollView contentContainerStyle={{ gap: 15 }}>
          
          {filteredInvoices.length === 0 ? (
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: "#4683fb", fontSize: 20 }}>No data found 😔</Text>
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
                    <Text style={{}}>{invoice.Area}</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    <Text style={{ color: "#9bcf53", fontWeight: 'bold' }}>{invoice.status}</Text>
                  </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <View style={{ flexDirection: "row", alignItems: 'center', gap: 10 }}>
                    <Text style={{}}>{invoice.balance}</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: 'center', gap: 10 }}>
                    <Feather name="eye" size={24} color="#000" onPress={() => showPreviewModal()} />
                    <Feather name="edit-2" size={20} color="#000" onPress={() => showEditModal()}/>
                    <AntDesign name="delete" size={20} color="#FF0000"onPress={() => showDeleteModal()} />
                  </View>

                </View>

              </View>
            ))
          )}

        </ScrollView>
       

      </View>

    </Provider>
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