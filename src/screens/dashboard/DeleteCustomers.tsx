import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

const DeleteCustomers = () => {
  return (
    <View style={styles.container}>
      <Text>Your deleted customers will appear here</Text>
    </View>
  )
}
//
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"red",
        
    }
})
//
export default DeleteCustomers