import React, { useState } from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SignUp from './src/screens/auth/SignUp';
import { TextInput } from 'react-native-paper';
import Login from './src/screens/auth/Login';

export default function App() {

  return (
    <SafeAreaProvider>
      <View style={styles.container}>

        <SignUp />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
