import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

const CustomersScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
      <Button mode='contained' onPress={() => navigation.navigate("AddCustomer")} icon="account" style={styles.button}>
          Add Customers
        </Button>
        <Button mode='contained' onPress={() => navigation.navigate("SearchCustomers")} icon="account-search" style={styles.button}>
          Search Customers
        </Button>
        <Button mode='contained' onPress={() => navigation.navigate("EditCustomers")} icon="delete" style={styles.button}>
          Edit Customers
        </Button>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"
  },
  view1: {
 flex:1,
 justifyContent:"center",
 alignItems:'center'
  },
  button: {
    width: '80%', 
    marginVertical: 10, 
    backgroundColor: '#4683fb',
    
  },
});

export default CustomersScreen;
