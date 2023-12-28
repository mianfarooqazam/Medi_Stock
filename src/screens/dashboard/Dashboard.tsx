import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper'
import { User } from 'firebase/auth'

//
const Dashboard = ({ currentUser }: { currentUser : User | null}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text>Customers</Text>
      </TouchableOpacity>
      <View>
        <Text>Products</Text>
      </View>
      <View>
        <Text>Settings</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text>{currentUser?.displayName}</Text>
        <Text>{currentUser?.email}</Text>
        <Text>{currentUser?.uid}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 2
  }

});
export default Dashboard