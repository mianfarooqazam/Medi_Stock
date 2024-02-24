import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNavigator from "./src/navigator/MainNavigator";
import Toast from "react-native-toast-message";
import { Provider } from "react-native-paper";

export default function App() {
  // const auth = getAuth()
  return (
    <SafeAreaProvider>
      <Provider>
        <View style={styles.container}>
          {/* {
        auth.currentUser ? <Dashboard currentUser={auth.currentUser}/> : <SignUp />
      } */}
          {/* <Dashboard currentUser={null}/> */}
          <MainNavigator />
          {/* <SplashScreen /> */}
          <Toast />
        </View>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
