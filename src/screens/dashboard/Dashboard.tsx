import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper'
import { User } from 'firebase/auth'
import { SafeAreaView } from 'react-native-safe-area-context'
import Customers from './Customers'
import Navigator from '../../navigator/MainNavigator'

//
// const Dashboard = ({ currentUser }: { currentUser : User | null}) => {
  const Dashboard = ({navigation})=> {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Customers")}>
        <Text>Customers</Text>
      </TouchableOpacity>
      <View>
        <Text>Products</Text>
      </View>
      <View>
        <Text>Settings</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        {/* <Text>{currentUser?.displayName}</Text>
        <Text>{currentUser?.email}</Text>
        <Text>{currentUser?.uid}</Text> */}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  button: {
    borderWidth: 2
  }

});
export default Dashboard