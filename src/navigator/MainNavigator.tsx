import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Customers from '../screens/dashboard/Customers';
import Dashboard from '../screens/dashboard/Dashboard';
import AddCustomer from '../screens/dashboard/AddCustomer';
import DeleteCustomers from '../screens/dashboard/DeleteCustomers';
import SearchCustomers from '../screens/dashboard/SearchCustomers';
import Chat from '../screens/dashboard/Chat';

//
const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  return (
   <NavigationContainer> 
    <Stack.Navigator initialRouteName='Dashboard' screenOptions={{headerBackTitleVisible:false}}>
        <Stack.Screen name='Dashboard' component={Dashboard}/>
        <Stack.Screen name='Customers' component={Customers} options={{title:'Customers'}}/>
        <Stack.Screen  name='AddCustomer' component={AddCustomer} options={{title:"Add New Customer"}}/>
        <Stack.Screen  name='DeleteCustomers' component={DeleteCustomers} options={{title:"Delete Customer"}}/>
        <Stack.Screen  name='SearchCustomers' component={SearchCustomers} options={{title:"Search Customer"}}/>
        <Stack.Screen  name='Chat' component={Chat} options={{title:"Start Chatting with your friends"}}/>

    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default MainNavigator