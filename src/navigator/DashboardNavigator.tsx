import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import CustomersScreen from "../screens/dashboard/CustomersScreen";
import Dashboard from "../screens/dashboard/Dashboard";
import AddCustomer from "../screens/dashboard/AddCustomer";
import SearchCustomers from "../screens/dashboard/SearchCustomers";
import ProductsScreen from "../screens/dashboard/ProductsScreen";
import AddProduct from "../screens/dashboard/AddProduct";
import SearchProducts from "../screens/dashboard/SearchProducts";
import NewInvoice from "../screens/dashboard/NewInvoice";
import CalculateBill from "../screens/dashboard/CalculateBill";
import Inventory from "../screens/dashboard/Inventory";
import StockInOut from "../screens/dashboard/StockInOut";
import ViewInvoices from "../screens/dashboard/ViewInvoices";
import SettingScreen from "../screens/dashboard/SettingScreen";
import InvoicePreview from "../screens/dashboard/InvoicePreview";
import Sales from "../screens/dashboard/Sales";
import ComingSoon from "../screens/dashboard/ComingSoon";

// Dashboard
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

export default DashboardNavigation;