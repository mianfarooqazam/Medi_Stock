import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MainNavigator from "./src/navigator/MainNavigator";
import Toast from "react-native-toast-message";
import { Provider } from "react-native-paper";
import AuthenticatedUserProvider from "./src/contexts/AuthenticationContext";

export default function App() {
  // const auth = getAuth()
  return (
    <SafeAreaProvider>
      <Provider>
        <AuthenticatedUserProvider>
          <SafeAreaView style={styles.container}>
            <MainNavigator />
            <Toast />
          </SafeAreaView>
        </AuthenticatedUserProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
