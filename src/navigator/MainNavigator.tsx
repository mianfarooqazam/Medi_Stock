import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomersScreen from "../screens/dashboard/CustomersScreen";
import Dashboard from "../screens/dashboard/Dashboard";
import AddCustomer from "../screens/dashboard/AddCustomer";

import SearchCustomers from "../screens/dashboard/SearchCustomers";

import ProductsScreen from "../screens/dashboard/ProductsScreen";
import SplashScreen from "../splash/SplashScreen";
import AddProduct from "../screens/dashboard/AddProduct";

import SearchProducts from "../screens/dashboard/SearchProducts";
import NewInvoice from "../screens/dashboard/NewInvoice";
import CalculateBill from "../screens/dashboard/CalculateBill";
import Inventory from "../screens/dashboard/Inventory";
import StockInOut from "../screens/dashboard/StockInOut";
import OnBoarding from "../screens/dashboard/onBoarding/OnBoarding";

import ViewInvoices from "../screens/dashboard/ViewInvoices";
import SettingScreen from "../screens/dashboard/SettingScreen";
import InvoicePreview from "../screens/dashboard/InvoicePreview";
import Sales from "../screens/dashboard/Sales";
import ComingSoon from "../screens/dashboard/ComingSoon";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import ForgotPassword from "../screens/auth/ForgotPassword";
import ResetPassword from "../screens/auth/ResetPassword";
import { getAuth, onAuthStateChanged } from "firebase/auth";

//
const MainNavigator = () => {
  const [authState, setAuthState] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("🚀 ~ onAuthStateChanged ~ user:", user)
        setAuthState(true)
      } else {
        console.log("🚀 ~ onAuthStateChanged ~ user:", user)

        setAuthState(false)
      }
    });
  },[auth])



  return <NavigationContainer>
    {
      authState ? <DashboardNavigation/> : <RootNavigation />
    }
  </NavigationContainer>;
};

export default MainNavigator;

const RootStack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerBackTitleVisible: false }}
    >
      <RootStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

const DashboardStack = createNativeStackNavigator();
const DashboardNavigation = () => {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="Dashboard" component={Dashboard} />

      <DashboardStack.Screen
        name="NewInvoice"
        component={NewInvoice}
        options={{ title: "Generate Invoice" }}
      />
      <DashboardStack.Screen
        name="ViewInvoices"
        component={ViewInvoices}
        options={{ title: "Your Invoices" }}
      />

      <DashboardStack.Screen
        name="CalculateBill"
        component={CalculateBill}
        options={{ title: "Bill Calculated" }}
      />

      <DashboardStack.Screen
        name="AddCustomer"
        component={AddCustomer}
        options={{ title: "Add New Customer" }}
      />
      <DashboardStack.Screen
        name="SearchCustomers"
        component={SearchCustomers}
        options={{ title: "Search Customer" }}
      />
      <DashboardStack.Screen
        name="CustomersScreen"
        component={CustomersScreen}
        options={{ title: "Customers" }}
      />

      <DashboardStack.Screen
        name="ProductsScreen"
        component={ProductsScreen}
        options={{ title: "Products" }}
      />
      <DashboardStack.Screen
        name="AddProduct"
        component={AddProduct}
        options={{ title: "Add New Product" }}
      />
      <DashboardStack.Screen
        name="Sales"
        component={Sales}
        options={{ title: "Sales Report" }}
      />
      <DashboardStack.Screen
        name="SearchProducts"
        component={SearchProducts}
        options={{ title: "Search Product" }}
      />
      <DashboardStack.Screen
        name="Inventory"
        component={Inventory}
        options={{ title: "Inventory" }}
      />
      <DashboardStack.Screen
        name="StockInOut"
        component={StockInOut}
        options={{ title: "In-Out Stock" }}
      />

      <DashboardStack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{ title: "Settings" }}
      />
      <DashboardStack.Screen
        name="InvoicePreview"
        component={InvoicePreview}
        options={{ title: "Preview" }}
      />

      <DashboardStack.Screen
        name="ComingSoon"
        component={ComingSoon}
        options={{ title: "Coming Soon" }}
      />
    </DashboardStack.Navigator>
  );
};
