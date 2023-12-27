import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import firebase from './firebaseConfig';
import { useEffect } from 'react';
export default function App() {
  useEffect(() => {
    if (firebase) {
      
        Alert.alert('Connected');
    } else {
        Alert.alert('No');
    }
}, []);
  return (
    <View style={styles.container}>
      <Text>This file is changed</Text>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
