import { View, Text,StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

//
const DeleteCustomers = () => {
  useEffect(() => {
  
  }, [])
  return (
    <View style={styles.container}>
      <Text>Delete Customers</Text>
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
export default DeleteCustomers