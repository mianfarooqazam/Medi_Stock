import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

//
const ProductsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
      <Button mode='contained' onPress={() => navigation.navigate("AddProduct")} icon="account" style={styles.button}>
          Add Products
        </Button>
        <Button mode='contained' onPress={() => navigation.navigate("SearchProducts")} icon="account-search" style={styles.button}>
          Search & Edit Products
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

export default ProductsScreen;
