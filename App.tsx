import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigator from './src/navigator/MainNavigator';


export default function App() {
  // const auth = getAuth()
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
      {/* {
        auth.currentUser ? <Dashboard currentUser={auth.currentUser}/> : <SignUp />
      } */}
        {/* <Dashboard currentUser={null}/> */}
        <MainNavigator />
        {/* <SplashScreen /> */}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
