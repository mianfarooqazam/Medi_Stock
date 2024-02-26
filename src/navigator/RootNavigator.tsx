import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import SplashScreen from "../splash/SplashScreen";
import OnBoarding from "../screens/dashboard/onBoarding/OnBoarding";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import ForgotPassword from "../screens/auth/ForgotPassword";
import ResetPassword from "../screens/auth/ResetPassword";

// Root
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

export default RootNavigation