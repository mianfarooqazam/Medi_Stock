import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';


const Dashboard = ({navigation}) => {
  const { height } = Dimensions.get('screen');
  const itemHeight = height * 0.2; 
  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.item, { height: itemHeight }]} onPress={()=>navigation.navigate("NewInvoice")}>
          <Text style={styles.screenText}>New Invoice</Text>
          <MaterialIcon name="add" size={40} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.item, { height: itemHeight }]}>
          <Text style={styles.screenText}>Bilty</Text>
          <MaterialIcon name="content-copy" size={40} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.item, { height: itemHeight }]} onPress={()=>navigation.navigate("CustomersScreen")}>
          <Text style={styles.screenText}>Customers</Text>
          <MaterialIcon name="people" size={40} color="#fff" />
        </TouchableOpacity>
      
        <TouchableOpacity style={[styles.item, { height: itemHeight }]} onPress={()=>navigation.navigate("ProductsScreen")}>
          <Text style={styles.screenText}>Products</Text>
          <MaterialCommunityIcon name="pill" size={40} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.item, { height: itemHeight }]} onPress={()=>navigation.navigate("Inventory")}>
          <Text style={styles.screenText}>Inventory</Text>
          <MaterialIcon name="inventory" size={40} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.item, { height: itemHeight }]}onPress={()=>navigation.navigate("StockInOut")}>
          <Text style={styles.screenText}>Stock In-Out</Text>
          <MaterialIcon name="text-snippet" size={40} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.item, { height: itemHeight }]} >
          <Text style={styles.screenText}>Sales</Text>
          <MaterialIcon name="attach-money" size={40} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.item, { height: itemHeight }]} onPress={()=>navigation.navigate("ChatScreen")}>
          <Text style={styles.screenText}>Chat</Text>
          <MaterialIcon name="chat-bubble" size={40} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
      <TouchableOpacity style={[styles.item, { height: itemHeight }]}>
          <Text style={styles.screenText}>Settings</Text>
          <MaterialIcon name="settings" size={40} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.item, { height: itemHeight }]}>
          <Text style={styles.screenText}>Comming Soon</Text>
          <MaterialIcon name="timeline" size={40} color="#fff" />
        </TouchableOpacity>
        
      </View>
      <View style={styles.row}>
      <TouchableOpacity style={[styles.item, { height: itemHeight }]} onPress={()=>navigation.navigate("YourProfile")}>
          <Text style={styles.screenText}>Your Profile</Text>
          <MaterialIcon name="person" size={40} color="#fff" />
        </TouchableOpacity>
        
        
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  item: {
    flex: 0.4, 
    // borderWidth: 0.1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:10,
    backgroundColor:'#468EFB',
    gap:10
  },
  screenText: {
    color:"#fff",
    fontSize:20
  }
});

export default Dashboard;
