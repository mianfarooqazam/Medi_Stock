import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CustomersScreen from '../screens/dashboard/CustomersScreen';
import Dashboard from '../screens/dashboard/Dashboard';
import AddCustomer from '../screens/dashboard/AddCustomer';

import SearchCustomers from '../screens/dashboard/SearchCustomers';

import ChatScreen from '../screens/dashboard/ChatScreen';
import ProductsScreen from '../screens/dashboard/ProductsScreen';
import SplashScreen from '../splash/SplashScreen';
import AddProduct from '../screens/dashboard/AddProduct';

import SearchProducts from '../screens/dashboard/SearchProducts';
import NewInvoice from '../screens/dashboard/NewInvoice';
import CalculateBill from '../screens/dashboard/CalculateBill';
import Inventory from '../screens/dashboard/Inventory';
import StockInOut from '../screens/dashboard/StockInOut';
import OnBoarding from '../screens/dashboard/onBoarding/OnBoarding';
import YourProfile from '../screens/dashboard/YourProfile';
import ViewInvoices from '../screens/dashboard/ViewInvoices';
import SettingScreen from '../screens/dashboard/SettingScreen';
import InvoicePreview from '../screens/dashboard/InvoicePreview';
import Reports from '../screens/dashboard/Reports';



//
const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  return (
   <NavigationContainer> 
    <Stack.Navigator initialRouteName='Dashboard' screenOptions={{headerBackTitleVisible:false}}>
    <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Dashboard' component={Dashboard}/>
        <Stack.Screen name='OnBoarding' component={OnBoarding} options={{headerShown:false}}/>

        <Stack.Screen name='NewInvoice' component={NewInvoice} options={{title:'Generate Invoice'}}/>
        <Stack.Screen name='ViewInvoices' component={ViewInvoices} options={{title:'Your Invoices'}}/>

        <Stack.Screen name='CalculateBill' component={CalculateBill} options={{title:'Bill Calculated'}}/>
       
        <Stack.Screen  name='AddCustomer' component={AddCustomer} options={{title:"Add New Customer"}}/>
        <Stack.Screen  name='SearchCustomers' component={SearchCustomers} options={{title:"Search Customer"}}/>
        <Stack.Screen name='CustomersScreen' component={CustomersScreen} options={{title:'Customers'}}/>
        
        <Stack.Screen name='ProductsScreen' component={ProductsScreen} options={{title:'Products'}}/>
        <Stack.Screen name='AddProduct' component={AddProduct} options={{title:'Add New Product'}}/>
        
        <Stack.Screen name='SearchProducts' component={SearchProducts} options={{title:'Search Product'}}/>
       <Stack.Screen name='Inventory' component={Inventory} options={{title:'Inventory'}}/>
       <Stack.Screen name='StockInOut' component={StockInOut} options={{title:'In-Out Stock'}}/>
       <Stack.Screen name='YourProfile' component={YourProfile} options={{title:'Profile'}}/>
       <Stack.Screen name='SettingScreen' component={SettingScreen} options={{title:'Settings'}}/>
       <Stack.Screen name='InvoicePreview' component={InvoicePreview} options={{title:'Preview'}}/>
       <Stack.Screen name='Reports' component={Reports} options={{title:'Reports'}}/>
        <Stack.Screen  name='ChatScreen' component={ChatScreen} options={{title:"Start Chatting with your friends"}}/>

    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default MainNavigator