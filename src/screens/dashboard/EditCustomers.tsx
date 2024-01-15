import { View, Text,StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

//
const EditCustomers = () => {
  useEffect(() => {
  
  }, [])
  return (
    <View style={styles.container}>
      <Text>EditCustomer </Text>
    </View>
  )
}
//
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  }
})
//
export default EditCustomers